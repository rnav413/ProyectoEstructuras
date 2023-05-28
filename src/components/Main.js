import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";
import {NuevoComentario,MainScroll,Post} from "./mainAPP";
import  {UserFetchcharacter} from "../hooks"
import Nav from './Nav'


function MainPage() {
  return (
    <div className="main-page">
    <Nav />
    <div className='content'>
      <MainScroll/>  
    </div>
  </div>
  );
}

export default MainPage;
