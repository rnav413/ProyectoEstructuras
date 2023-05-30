import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import googleico from "../assets/google.ico"
import logo from "../assets/SVG/Recurso 2.svg"
import logo_nav from "../assets/SVG/Recurso 3.svg"
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';




function LoginPage() {
  // agregrar login google

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
 // const history = useHistory();

  const handleLogin = async (e) => {

  e.preventDefault();
  setError('');

  try {
    const response = await axios.post('https://apiestructuras-production.up.railway.app/api/auth/login', { email, password });
    console.log(response.data);
    setUserData({token: response.data.token, email: email, name: response.data.name});
    navigate('/main')
  
  } catch (error) {
    console.error(error)
    if(email == '' || password == ''){
      setError('Rellene todos los campos')
    }

    else{
    setError(error.response.data.msg)
    }
   }
  };
   //<form onSubmit={handleLogin}>
  return (
    <div className="login-page">
     <nav><img src= {logo_nav} id='logo-nav'/></nav>
      <div className='logo-container'>
        <img src={logo}/>
        </div>

      
      <form onSubmit={handleLogin}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="email" placeholder='Correo' onChange={(e) => setUsername(e.target.value)}/>
          <br />
          <input type="password" name="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)}/>

        </div>
        {error && <p>{error}</p>}
        <p />
        <button className='boton-inicio' type="submit">Sign in</button>
        <Link to = "/register"><button className='boton-inicio' >Register</button> </Link>
      </form>


      <a href="[link_de_autenticación_con_Google]">
        <img src={googleico} alt="Google Icon" />
      </a>
  
    </div>
  );
}

export default LoginPage;
