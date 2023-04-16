import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {NuevoComentario} from './nuevoComentario';
import {Container}from './recommended'
import {Post} from './post';
import { UserFetchcharacter,useRickParse } from "../../hooks";

export const MainScroll = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [newCommentText, setNewCommentText] = useState('');
  const {characters,isLoading} = UserFetchcharacter();
  const {convertCharacterToArray} = useRickParse()
  


  const addComment = (newComment) => {
    setItems((prevItems) => [newComment, ...prevItems]);

    
  };


  const fetchMoreData = () => {
    // Aquí puedes hacer otra petición a tu API para obtener más elementos
    // y añadirlos al estado con setItems
    // Si no hay más elementos, debes llamar a setHasMore(false)
  };

  


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
          next={fetchMoreData}
          hasMore={hasMore}

        >
          <NuevoComentario addComment={addComment}/>

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