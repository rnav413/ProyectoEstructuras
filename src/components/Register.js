import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"
import logo from "../assets/SVG/Recurso 2.svg"
import logo_nav from "../assets/SVG/Recurso 3.svg"
import axios from 'axios'
import { useState } from 'react';

function RegisterPage() {
  // agregar codigo registro
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('');
  const [errorMessage, setErrorMessage] = useState([]);

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      password
    }
  
    axios.post('https://apiestructuras-production.up.railway.app/api/auth/registrar', formData).then((res) => {
      console.log(res.data)
      setUsername('');
      setEmail('');
      setPassword('');
      setEstado('Usuario creado exitosamente');
    }).catch((error) => {
      if (error.response && error.response.data && error.response.data.errors) {
        const { errors } = error.response.data;
        const errorMessages = Object.values(errors).map((fieldError) => fieldError.msg);
        setErrorMessage(errorMessages);
        console.log(error)
      } else {
        console.error(error);
        setErrorMessage([error.response.data.msg]);
      }
    })
 
  }

  return (
    <div className="register-page">
    <nav><img src= {logo_nav} id='logo-nav'/></nav>
      <div className='logo-container'>
          <img src={logo}/>
      </div>
      <form onSubmit={handleRegister}>
      <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="name" placeholder='Usuario' value={name} onChange={(e) => setUsername(e.target.value)}/>
          <br />
          <input type="text" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <br />
          <input type="password" name="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {estado && <p>{estado}</p>}
        {errorMessage.map((message, index) => (
          <p key={index}>{message}</p>))}
        <p />
        <button className='boton-inicio' type="submit">Registrarse</button>
        <Link to = "/"><button className='boton-inicio' >Atras</button> </Link>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
