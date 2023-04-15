import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css"
import logo_nav from "../assets/SVG/Recurso 3.svg"
import logo_perfil from "../assets/SVG/Recurso 1.svg"

function MainPage() {
  return (
    <div className="main-page">
      <nav>
            <Link to="/main"><img src= {logo_nav} id='logo-nav'/></Link>
            <Link to="/perfil" id='logo-perfil'><img src= {logo_perfil} id='logo-nav'/></Link>
         
      </nav>

     
    </div>
  );
}

export default MainPage;
