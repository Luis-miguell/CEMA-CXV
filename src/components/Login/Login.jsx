import React from 'react';
import { useState } from "react";
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
        onInput={SetUsuarioL( user => ({
            ...user, 
            email: this.target.value
        }))}
        value={usuarioL.email}
        />

        <label htmlFor="password">Contraseña</label>
        <input 
        type="password" 
        id="password" 
        placeholder="Contraseña de una persona recicladora :)"
        onInput={SetUsuarioL( user => ({
            ...user, 
            contrasenia: this.target.value
        }))}
        value={usuarioL.contrasenia}
        />

        <div className="login-actions">
          <button type='submit'>Iniciar sesión</button>
          <div className="links">
            <a href="#">Olvidé la contraseña</a>
            <span> o </span>
            <a href="#">No tengo cuenta</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;