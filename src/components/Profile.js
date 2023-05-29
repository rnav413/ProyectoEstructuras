import React from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css"
import logo_nav from "../assets/SVG/Recurso 3.svg"
import logo_perfil from "../assets/SVG/Recurso 1.svg"
import Nav from './Nav'

function ProfilePage() {
  return (
    <div className="profile-page">
      <Nav />
      <div className='perfil-body'>
        
        <div className='perfil-carta'>
        <img src= {logo_perfil} id='logo-carta' className='filter-green'/>
        <h1>Nombre</h1>
        <p>Especie</p>
        <h2>Genero Tipo  Origen </h2>
        </div>
        <div className='perfil-container'>
        <div className='perfil-amigos'></div>
        <div className='perfil-publicaciones'></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
