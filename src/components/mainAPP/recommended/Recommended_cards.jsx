import React from 'react';
import "./cart.css";
import RandomCharacterComponent from '../../../helpers/getRandomCharacter';

export const Card = (props) => {
  return (
    <div className="card_container">
      <div className="profile-image">
      <RandomCharacterComponent />
      </div>
      <div className="username">{props.username}</div>
      <div className="origin">{props.origin}</div>
      <div className="button-container">
        <button className="add-button " onClick={props.onAccept}>Aceptar</button>
        <button className="reject-button" onClick={props.onReject}>Rechazar</button>
      </div>
    </div>
  );
}

