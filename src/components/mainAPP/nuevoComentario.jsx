import React from 'react';
import './main.css';

export const NuevoComentario = () => {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post-header">
                <img className="post-profile-image" src="https://via.placeholder.com/50" alt="Profile" />
                <span className="post-username">Nombre de usuario</span>
                </div>

                <div className="post-textarea-container">
                <div className="post-textarea">
                    <textarea placeholder="¿Qué estás pensando?"></textarea>
                </div>
                </div>
                
                <div className="post-button-container">
                <button className="post-button">Publicar</button>
                </div>
            </div>
        </div>
      );
}
