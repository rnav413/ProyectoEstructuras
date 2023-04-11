import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"
import logo from "../assets/SVG/Recurso 2.svg"
import logo_nav from "../assets/SVG/Recurso 3.svg"

function RegisterPage() {
  // agregar codigo registro

  return (
    <div className="register-page">
    <nav><img src= {logo_nav} id='logo-nav'/></nav>
      <div className='logo-container'>
          <img src={logo}/>
      </div>
      <form>
      <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="email" placeholder='Email' />
          <br />
          <input type="password" name="password" placeholder='Contraseña' />
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
