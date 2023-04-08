import React from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css"

function ProfilePage() {
  return (
    <div className="profile-page">
      <nav>
            <Link to="/main">Logo</Link>
            <Link to="/perfil" id='logo-perfil'>Logo Perfil</Link>
      </nav>
      <h1>Profile Page</h1>
    </div>
  );
}

export default ProfilePage;
