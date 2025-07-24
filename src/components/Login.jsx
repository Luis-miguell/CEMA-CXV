import React from 'react';
import { useState } from "react";
import '../styles/login.css'; 

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
  );
}
export default FormLogin;