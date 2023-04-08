import React from 'react';
import { Link} from 'react-router-dom';
import "./Login.css"
import googleico from "../assets/google.ico"
import logo from "../assets/aguacate.png"
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
      <image src= {logo} />
      <h1>Login</h1>
      
      <form>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="username" placeholder='Usuario' />
          <br />
          <input type="password" name="password" placeholder='Contraseña' />

        </div>
        <p />
        <Link to = "/main"><button type="submit">Sign in</button></Link>
        <Link to = "/register"><button >Register</button> </Link>
      </form>


      <a href="[link_de_autenticación_con_Google]">
        <img src={googleico} alt="Google Icon" />
      </a>
      <p>
        
        ¿No tienes cuenta? <Link to="/register">Registrate</Link>
      </p>
    </div>
  );
}

export default LoginPage;
