import React from "react";
import "./main.css";
import {Reacciones} from "./reacciones"
import RandomCharacterComponent from '../../helpers/getRandomCharacter';

export const Post = (props) => {
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-header">
          <div
            className="post-profile-image"
            
            alt="Profile"
          > 
          <RandomCharacterComponent />
          </div>
          <span className="post-username">{props.name}</span>
        </div>

        <div className="post-textarea-container">
          <div className="post-space">
            <label className="post_text">{props.comentario}</label>
          </div>
        </div>

        <div className="post-button-container">
          <div className="reacciones">
          <Reacciones likes={props.likes} dislikes={props.dislikes} />
          </div>
        </div>
      </div>
    </div>
  );
}
