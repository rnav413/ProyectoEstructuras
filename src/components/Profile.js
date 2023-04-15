import React from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css"
import logo_nav from "../assets/SVG/Recurso 3.svg"
import logo_perfil from "../assets/SVG/Recurso 1.svg"

function ProfilePage() {
  return (
    <div className="profile-page">
      <nav>
            <Link to="/main"><img src= {logo_nav} id='logo-nav'/></Link>
            <Link to="/perfil" id='logo-perfil'><img src= {logo_perfil} id='logo-nav'/></Link>
      </nav>
    </div>
  );
}

export default ProfilePage;
