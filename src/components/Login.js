import React from 'react';
import { Link} from 'react-router-dom';
import "./Login.css"
import googleico from "../assets/google.ico"
import logo from "../assets/SVG/Recurso 2.svg"
import logo_nav from "../assets/SVG/Recurso 3.svg"
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';



function LoginPage() {
  // agregrar login google

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 // const history = useHistory();

  const handleLogin = async (e) => {

  e.preventDefault();
  setError('');

  try {
    const response = await axios.get('https://apiestructuras-production.up.railway.app/api/new', { username, password });
    console.log(response.data);
    navigate('/main')
  
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      setError(error.response.data.error);
    } else {
      setError('Error en el servidor');
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
          <input type="text" name="username" placeholder='Usuario' onChange={(e) => setUsername(e.target.value)}/>
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
