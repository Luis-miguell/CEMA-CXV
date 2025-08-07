import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { useContext } from "react";
import { UserContext } from "../../../UserProvider.jsx";

function FormLogin() {

  const Navigate = useNavigate()

    const {usuario, setUsuarioContext} = useContext(UserContext);

    const [usuarioL, SetUsuarioL] = useState({
        email: "",
        contrasenia: ""
    })

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(usuario)

        if (usuarioL.email === usuario.email && usuarioL.contrasenia === usuario.getPassword()) {
            Navigate("/"); 
            alert("Login successful!");
            setUsuarioContext(user => ({
              ...user, 
              state: true
            })
          )
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
              Olvidé la contraseña
            </Link>
            <span> o </span>
            <Link to="/register">
              Crear una cuenta
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;