import React from 'react';
import './main.css';

export const NuevoComentario = () => {
    return (
        <div class="post-container">
            <div class="post">
                <div class="post-header">
                <img class="post-profile-image" src="https://via.placeholder.com/50" alt="Profile" />
                <span class="post-username">Nombre de usuario</span>
                </div>

                <div class="post-textarea-container">
                <div class="post-textarea">
                    <textarea placeholder="¿Qué estás pensando?"></textarea>
                </div>
                </div>
                
                <div class="post-button-container">
                <button class="post-button">Publicar</button>
                </div>
            </div>
        </div>
      );
}
