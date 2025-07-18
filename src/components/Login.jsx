import React from 'react';
<<<<<<< HEAD
import { useState } from "react";
import '../styles/Login.css'; 

function FormLogin() {
    
  return (
    <div className="login-container">
      <div className="login-image" />
      
      <div className="login-form">
        <h1>Iniciar sesión</h1>
        
        <label htmlFor="email">Usuario o email</label>
        <input type="text" id="email" placeholder="JohnDoe12" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" placeholder="Contraseña" />

        <div className="login-actions">
          <button>Iniciar sesión</button>
          <div className="links">
            <a href="#">Olvidé la contraseña</a>
            <span> o </span>
            <a href="#">No tengo cuenta</a>
          </div>
        </div>
      </div>
    </div>
=======
function FormLogin({ usuario }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();

        if (email === usuario.email && password === usuario.contrasenia) {
            alert("Login successful!");
        } else {
            alert("Login failed.");
        }
    }
  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
>>>>>>> d2e343e (FormLogin)
  );
}
export default FormLogin;