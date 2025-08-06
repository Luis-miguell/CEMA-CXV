import '../landing_page/landing.css';
import { Link, Navigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../../../UserProvider.jsx";
import User from "../../../modelo/User.js";
/* import { useNavigate } from 'react-router-dom'; */

function Register() {

  /* const Navigate = useNavigate(); */

  const { usuario, setUsuario } = useContext(UserContext);
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const handleRegister = async (e) => {
    
   
    e.preventDefault();
    if (!usuario.name || !usuario.lastname || !usuario.email || !usuario.getPassword()) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Registro exitoso!");
    setUsuario(new User(usuario)); 
    Navigate("/login"); 
  }
  
  return (
  <div className="login-container">
    <div className="register-image" />
    
    <form onSubmit={handleRegister} className="register-form">
      <h1>Registrate</h1>

      <label htmlFor="name">Nombre</label>
      <input 
      type="text" 
      id="name" 
      placeholder="Tu nombre;)"
      onInput={e => {
        setUsuario(user => ({
          ...user,
          name: e.target.value
        }))
      }}
      value={usuario.name}
      required
      />
      
      <label htmlFor="apellido">Apellido</label>
      <input 
      type="text" 
      id="apellido" 
      placeholder="Tu apellido;)"
      onInput={e => {
        setUsuario(user => ({
          ...user,
          apellido: e.target.value
        }))
      }}
      value={usuario.apellido}
      required
      />
      <label htmlFor="email">Email</label>
      <input 
      type="email" 
      id="email" 
      placeholder="Tu email ;)"
      onInput={e => {
        setUsuario(user => ({
          ...user,
          email: e.target.value
        }))
      }}
      value={usuario.email}
      required
      />
      <label htmlFor="password">Contraseña</label>
      <input 
      type="password" 
      id="password" 
      placeholder="Crea una contraseña. Segura y fácil de recordar;)"
      onInput={e => {
        setUsuario(user => user.setPassword(e.target.value))
      }}
      value={usuario.getPassword()}
      required
      />
      <div className="register-actions">
        <button type='submit'>Registrarse</button>
        <div className="links">
          <Link to="/login">
            <a href="#">Ya tengo una cuenta</a>
          </Link>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Register;
