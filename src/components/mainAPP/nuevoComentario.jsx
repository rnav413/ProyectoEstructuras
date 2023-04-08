import React from 'react';
import './main.css';

export const NuevoComentario = () => {
    return (
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
    <textarea className="post-textarea" placeholder="¿Qué estás pensando?" />
    <button className="post-comment-button">Comentar</button>
  </div>
</div>
      );
}
