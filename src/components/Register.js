import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"
import logo from "../assets/SVG/Recurso 2.svg"
import logo_nav from "../assets/SVG/Recurso 3.svg"
import axios from 'axios'
import { useState } from 'react';

function RegisterPage() {
  // agregar codigo registro
  const [formData, setFormData] = useState({usuario:'', email: '', password: '' })

  const handleRegister = (event) => {
    event.preventDefault();
    axios.post('https://apiestructuras-production.up.railway.app/api/new', formData).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.error(err)
    })
  }

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="register-page">
    <nav><img src= {logo_nav} id='logo-nav'/></nav>
      <div className='logo-container'>
          <img src={logo}/>
      </div>
      <form onSubmit={handleRegister}>
      <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="name" placeholder='Usuario' value={formData.usuario} onChange={handleInputChange}/>
          <br />
          <input type="text" name="email" placeholder='Email' value={formData.email} onChange={handleInputChange}/>
          <br />
          <input type="password" name="password" placeholder='Contraseña' value={formData.password} onChange={handleInputChange}/>
        </div>
        <p />
        <Link to = "/"><button className='boton-inicio' type="submit">Registrarse</button></Link>
        <Link to = "/"><button className='boton-inicio' >Atras</button> </Link>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
