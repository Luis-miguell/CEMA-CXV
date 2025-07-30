import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Login.css";

function FormLogin({usuario}) {

    const [usuarioL, SetUsuarioL] = useState({
        email: "",
        contrasenia: ""
    })

    const handleLogin = (event) => {
        event.preventDefault();

        if (usuarioL.email === usuario.email && usuarioL.contrasenia === usuario.contrasenia) {
            alert("Login successful!");
        } else {
            alert("Login failed.");
        }
    }
    
  return (
    <div className="login-container">
      <div className="login-image" />
      
      <form onSubmit={handleLogin} className="login-form">
        <h1>Iniciar sesión</h1>
        
        <label htmlFor="email">Usuario o email</label>
        <input 
        type="email" 
        id="email" 
        placeholder="Persona recicladora :)"
        onInput={e => {
          SetUsuarioL(user => ({
            ...user,
            email: e.target.value
          }))
        }}
        value={usuarioL.email}
        />

        <label htmlFor="password">Contraseña</label>
        <input 
        type="password" 
        id="password" 
        placeholder="Contraseña de una persona recicladora :)"
        onInput={e => {
          SetUsuarioL(user => ({
            ...user,
            contrasenia: e.target.value
          }))
        }}
        value={usuarioL.contrasenia}
        />

        <div className="login-actions">
          <button type='submit'>Iniciar sesión</button>
          <div className="links">
            <Link to="/password-recovery">
              <a href="#">Olvidé la contraseña</a>
            </Link>
            <span> o </span>
            <Link to="/register">
              <a href="#">Crear una cuenta</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;