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
  const [hasMore, setHasMore] = useState(true);
  const [newCommentText, setNewCommentText] = useState('');
  const {characters,isLoading} = UserFetchcharacter();
  const {convertCharacterToArray} = useRickParse()
  const { userData } = useContext(UserContext)


  useEffect(() => {
    axios.post('https://apiestructuras-production.up.railway.app/api/social/getPublicacionesPorId', null ,{headers: {'x-token': userData.token}})
      .then(response => {
        console.log('publicaciones',response.data);
      })
      .catch(error => {
        console.error('error en cargar publicaciones',error);
      });
  }, []);


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
            <Post key={item.id} comentario={item.texto} />
          ))}

          {convertCharacterToArray(characters).map((character) => (
            <Post key={character.id} name={character.name}  image= {character.image} comentario={character.name} />
          ))}
          
        </InfiniteScroll>
      </div>
      <div className="right-column"></div>
    </div>
  </div>
);
  
}