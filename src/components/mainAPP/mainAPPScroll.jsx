import React, { useState, useEffect, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {NuevoComentario} from './nuevoComentario';
import {Container}from './recommended'
import {Post} from './post';
import { UserFetchcharacter,useRickParse } from "../../hooks";
import axios from 'axios';
import { UserContext } from '../../UserContext';

export const MainScroll = () => {
  const [items, setItems] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');
  const {convertCharacterToArray} = useRickParse()
  const { userData } = useContext(UserContext)
  const [friends, setFriends] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    axios.post('https://apiestructuras-production.up.railway.app/api/social/getPublicacionesPorId', null ,{headers: {'x-token': userData.token}})
      .then(response => {
        console.log('publicaciones',response.data.publicaciones);
        setItems(response.data.publicaciones.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)));
      })
      .catch(error => {
        console.error('error en cargar publicaciones',error);
      });
  }, []);

  useEffect(() => {
   
    axios.post('https://apiestructuras-production.up.railway.app/api/social/getFriends',null, {headers: { 'x-token': userData.token }})
      .then(response => {
        const amigos_id = response.data.friends.map(({ friend }) => friend._id);
        console.log('amigos_name', response.data.friends)
        setFriends(amigos_id);
        const amigos = response.data.friends
        setUsuarios(amigos.map(({ friend }) => ({ id: friend._id, usuario: friend.name })))
        setIsLoading(false);
        console.log('amigos_id',amigos_id)
      }).catch(error => {
        console.error('Error al obtener los personajes:', error);
        console.error('Request', error.config)
      });
  }, []);

  

  useEffect(() => {
  console.log('inicial', items)
  console.log('amiggggos', friends)
  
  friends.forEach(dato => {
    console.log('datozzz', dato)
    console.log('aprobado', !(dato.length === 0))
    if(!(dato.length === 0)){
      console.log('jeje')
    axios.post('https://apiestructuras-production.up.railway.app/api/social/getPublicacionesPorId', {id:dato}, { headers: { 'x-token': userData.token } })
      .then(response => {
        const nuevosItems = response.data.publicaciones;
        console.log('nuevos items', nuevosItems)

        // Filter out the new items that already exist in the current items state
        const filteredNewItems = nuevosItems.filter(item => !items.some(existingItem => existingItem.id === item.id));
        console.log('filtro', filteredNewItems)

        // Add the filtered new items to the uniqueNewItems array
        
        setItems(prevItems => [...prevItems, ...filteredNewItems]);

        // Sort the uniqueNewItems array based on the fecha property
        setItems(prevItems => prevItems.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)));

        // Update the items state by merging the current items with the uniqueNewItems array
        console.log('mumumu',items)
      })
      .catch(error => {
        // Handle request errors
        console.error('Error en la solicitud:', error);
      });}
  });
}, [friends]);


  
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  function eliminarDuplicadosPorId(arr) {
    const ids = new Set(); // Set para almacenar los IDs únicos
    const result = []; // Array para almacenar los elementos únicos
  
    for (const obj of arr) {
      if (!ids.has(obj.id)) {
        // Si el ID no está en el Set, agrega el objeto al resultado y añade el ID al Set
        result.push(obj);
        ids.add(obj.id);
      }
    }
    result.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    return result;
  }


  return (
    <div className="main-page">
    <div className="columns-container">
      <div className="left-column"></div>
      <div className="center-column">
        <InfiniteScroll
          dataLength={items.length}
        >
          <NuevoComentario />
          
          <Container/>

          {eliminarDuplicadosPorId(items).map((item) => {
            //console.log('todos los items', items);
            //console.log('usuario item',item.usuario)
            const usuario = usuarios.find(user => user.id === item.usuario._id);
            const nombreUsuario = usuario ? usuario.usuario : userData.name;

            return (
              <Post
                key={item.id}
                comentario={item.description}
                name={nombreUsuario}
                likes={item.likes}
                dislikes={item.dislikes}
              />
            );
          })}


          
        </InfiniteScroll>
      </div>
      <div className="right-column"></div>
    </div>
  </div>
);
  
}