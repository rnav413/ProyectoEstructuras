import React from "react";
import "./main.css";
import {Reacciones} from "./reacciones"

export const Post = (props) => {
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-header">
          <img
            className="post-profile-image"
            src={props.image}
            alt="Profile"
          />
          <span className="post-username">{props.name}</span>
        </div>

        <div className="post-textarea-container">
          <div className="post-space">
            <label className="post_text">{props.comentario}</label>
          </div>
        </div>

        <div className="post-button-container">
          <div className="reacciones">
          <Reacciones/>
          </div>
        </div>
      </div>
    </div>
  );
}
