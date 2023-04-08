import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css"

function MainPage() {
  return (
    <div className="main-page">
      <nav>
            <Link to="/main">Logo</Link>
            <Link to="/perfil" id='logo-perfil'>Logo Perfil</Link>
         
      </nav>

      <h1>Main Page</h1>
    </div>
  );
}

export default MainPage;
