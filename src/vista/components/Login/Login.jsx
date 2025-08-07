import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { useContext } from "react";
import { UserContext } from '../../../utils/ActualUserProvider';
import { usersContext } from '../../../utils/UsersPovider.jsx';

function FormLogin() {

  const Navigate = useNavigate()

    const {usuario, setUsuarioContext} = useContext(UserContext);
    const {usuarios, setUsuarios} = useContext(usersContext)

    const [usuarioL, SetUsuarioL] = useState({
        email: "",
        contrasenia: ""
    })

    const handleLogin = (event) => {
        event.preventDefault();

        const existe = usuarios.find(u => u.getEmail() === usuarioL.email)

        if(existe){
          if(existe.getPassword() === usuarioL.contrasenia){
            setUsuarioContext(existe)
            localStorage.setItem("ActualUser", JSON.stringify(existe))
            alert("Inicio exitoso")
            Navigate("/")
          } else {
            alert("Contraseña incorrecta")
          }
        } else {
          alert("Cuenta no encontrada")
          return
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