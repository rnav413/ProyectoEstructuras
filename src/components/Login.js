import React from 'react';
import { Link} from 'react-router-dom';
import "./Login.css"
import googleico from "../assets/google.ico"
import logo from "../assets/SVG/Recurso 2.svg"
import logo_nav from "../assets/SVG/Recurso 3.svg"
import { useState } from 'react';

//, useHistory 

function LoginPage() {
  // agregrar login google

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 // const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    // logica del login
    
   // history.push('/mainpage');
  };
   //<form onSubmit={handleLogin}>
  return (
    <div className="login-page">
     <nav><img src= {logo_nav} id='logo-nav'/></nav>
      <div className='logo-container'>
        <img src={logo}/>
        </div>

      
      <form>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="username" placeholder='Usuario' />
          <br />
          <input type="password" name="password" placeholder='Contraseña' />

        </div>
        <p />
        <Link to = "/main"><button className='boton-inicio' type="submit">Sign in</button></Link>
        <Link to = "/register"><button className='boton-inicio' >Register</button> </Link>
      </form>


      <a href="[link_de_autenticación_con_Google]">
        <img src={googleico} alt="Google Icon" />
      </a>
  
    </div>
  );
}

export default LoginPage;
