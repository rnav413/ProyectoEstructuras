import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"

function RegisterPage() {
  // agregar codigo registro

  return (
    <div className="register-page">
      <h1>Register</h1>
      <form>
      <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="email" placeholder='Email' />
          <br />
          <input type="password" name="password" placeholder='Contraseña' />
        </div>
        <p />
        <Link to = "/"><button type="submit">Registrarse</button></Link>
        <Link to = "/"><button >Atras</button> </Link>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
