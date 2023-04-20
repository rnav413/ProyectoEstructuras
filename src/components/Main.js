import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";
import {NuevoComentario,MainScroll,Post} from "./mainAPP";
import logo_nav from "../assets/SVG/Recurso 3.svg";
import logo_perfil from "../assets/SVG/Recurso 1.svg";
import  {UserFetchcharacter} from "../hooks"


function MainPage() {
  return (
    <div className="main-page">
      <nav className='nav_rick_and_morty'>
          <Link to="/main"><img src= {logo_nav} id='logo-nav'/></Link>
          <Link to="/perfil" id='logo-perfil'><img src= {logo_perfil} id='logo-nav' className='filter-green'/></Link>
      </nav>
      <div className='content'>
        <MainScroll/>  
    </div>
    
     
    </div>
  );
}

export default MainPage;
