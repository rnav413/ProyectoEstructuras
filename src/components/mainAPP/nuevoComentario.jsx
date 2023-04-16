import React, { useState } from 'react';
import './main.css';

export const NuevoComentario = ({addComment}) => {
    const [newCommentText, setNewCommentText] = useState('');

    const handleNewCommentChange = (event) => {
      setNewCommentText(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newComment = {
        id: Date.now(),
        texto: newCommentText,
      };
      addComment(newComment);
      setNewCommentText('');
    };
    return (
        <div className="post-container">
            <div className="post">
                <div className="post-header">
                <img className="post-profile-image" src="https://via.placeholder.com/50" alt="Profile" />
                <span className="post-username">Nombre de usuario</span>
                </div>
                <form onSubmit={handleSubmit} className='form_agregar_comentario'>
                    <div className="post-textarea-container">
                        <div className="post-textarea">
                            <textarea placeholder="¿Qué estás pensando?"
                            value={newCommentText}
                            onChange={handleNewCommentChange}></textarea>
                        </div>
                    </div>
                    
                    <div className="post-button-container">
                        <button className="post-button" type='submit'>Publicar</button>
                    </div>
                </form>
            </div>
        </div>
      );
}
