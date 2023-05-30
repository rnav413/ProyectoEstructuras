import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";
import {NuevoComentario,MainScroll,Post} from "./mainAPP";
import  {UserFetchcharacter} from "../hooks"
import Nav from './Nav'
import { checkAuth } from '../check';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';


function MainPage() {
  const navigate = useNavigate();
  const {userData} = useContext(UserContext)

  console.log('datos del usuario: ', userData)

  useEffect(() => {
    checkAuth(userData, navigate)
  }, [])

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
