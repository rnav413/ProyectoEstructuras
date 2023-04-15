import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css"
import {NuevoComentario,MainScroll,Post} from "./mainAPP";

function MainPage() {
  return (
    <div className="main-page">
      <nav>
            <Link to="/main">Logo</Link>
            <Link to="/perfil" id='logo-perfil'>Logo Perfil</Link>
      </nav>
    <NuevoComentario/>
    <Post/>
    </div>
  );
}

export default MainPage;
