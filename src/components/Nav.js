import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo_nav from "../assets/SVG/Recurso 3.svg";
import "./Main.css";
import { UserContext } from '../UserContext';

function Nav() {
  const { logout } = useContext(UserContext);

    return (
      <nav className='nav_rick_and_morty'>
        <Link to="/main"><img src={logo_nav} id='logo-nav' /></Link>
        <button className='logout-button' onClick={logout}>logout</button>
      </nav>
    );
}


export default Nav

  