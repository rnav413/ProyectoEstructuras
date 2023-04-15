import React from "react";
import "./main.css";
import NoLikeImage from "../../assets/png/DontLike.png";
import LikeImage from "../../assets/png/plumbus_lg.png";

export const Post = () => {
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

        <div className="post-textarea-container">
          <div className="post-textarea">
            <textarea placeholder="¿Qué estás pensando?">
              Esto es una prueba
            </textarea>
          </div>
        </div>

        <div className="post-button-container">
          <button className="post-button post-like">
            <img src={LikeImage} alt="Like" />
          </button>
          <button className="post-button post-dislike">
            <img src={NoLikeImage} alt="Dislike" />
          </button>
          <button className="post-button post-submit">Publicar</button>
        </div>
      </div>
    </div>
  );
}
