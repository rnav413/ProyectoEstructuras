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
        setFriends(amigos_id);
        setIsLoading(false);
        console.log('akkk', amigos_id)
      }).catch(error => {
        console.error('Error al obtener los personajes:', error);
        console.error('Request', error.config)
      });
  }, []);

  

  useEffect(() => {
    friends.forEach(dato => {
      axios.post('https://apiestructuras-production.up.railway.app/api/social/getPublicacionesPorId', dato, { headers: { 'x-token': userData.token } })
        .then(response => {

          const nuevosItems = response.data.publicaciones;

          // Agregar los nuevos datos a items
          setItems(prevItems => [...prevItems, ...nuevosItems]);

          // Ordenar items después de agregar los nuevos datos
          setItems(prevItems => prevItems.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)));
        })
        .catch(error => {
          // Manejar errores de las solicitudes
          console.error('Error en la solicitud:', error);
        });
    });
  }, [friends]);

  
  

  if (isLoading) {
    return <div>Loading...</div>;
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

          {items.map((item) => (
            <Post key={item.id} comentario={item.description} name={userData.name} likes={item.likes} dislikes={item.dislikes}/>
          ))}

          
        </InfiniteScroll>
      </div>
      <div className="right-column"></div>
    </div>
  </div>
);
  
}