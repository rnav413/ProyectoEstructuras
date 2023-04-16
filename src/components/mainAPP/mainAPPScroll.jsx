import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {NuevoComentario} from './nuevoComentario';
import {Container}from './recommended'
import {Post} from './post';

export const MainScroll = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [newCommentText, setNewCommentText] = useState('');

  const addComment = () => {
    const newComment = {
      id: items.length + 1,
      texto: newCommentText,
    };
    setItems((prevItems) => [newComment, ...prevItems]);
    setNewCommentText(''); }

  const fetchMoreData = () => {
    // Aquí puedes hacer otra petición a tu API para obtener más elementos
    // y añadirlos al estado con setItems
    // Si no hay más elementos, debes llamar a setHasMore(false)
  };

  const comentarios = [
    { id: 1, texto: 'Comentario 1' },
    { id: 2, texto: 'Comentario 2' },
    { id: 3, texto: 'Comentario 3' },
    { id: 4, texto: 'Comentario 4' },
    { id: 5, texto: 'Comentario 5' },
    { id: 6, texto: 'Comentario 6' },
    { id: 7, texto: 'Comentario 7' },
    { id: 8, texto: 'Comentario 8' },
    { id: 9, texto: 'Comentario 9' },
    { id: 10, texto: 'Comentario 10' },
    { id: 11, texto: 'Comentario 11' },
    { id: 12, texto: 'Comentario 12' },
    // Agregar más comentarios aquí...
  ];
  
  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value);
  };

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
          <div className="post-container">
            <div className="post">
              <div className="post-header">
                <img
                  className="post-profile-image"
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                />
                <span className="post-username">Nombre de usuario</span>
              </div>

              <div className="post-textarea-container">
                <div className="post-textarea">
                  <textarea
                    placeholder="¿Qué estás pensando?"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                  ></textarea>
                </div>
              </div>

              <div className="post-button-container">
                <button className="post-button" onClick={addComment}>
                  Publicar
                </button>
              </div>
            </div>
          </div>

          <Container/>

          {items.map((item) => (
            <Post key={item.id} comentario={item.texto} />
          ))}

          {comentarios.map((comentario) => (
              <Post key={comentario.id} comentario={comentario.texto} />
            ))}
        </InfiniteScroll>
      </div>
      <div className="right-column"></div>
    </div>
  </div>
);
  
}