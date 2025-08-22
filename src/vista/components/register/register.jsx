import '../landing_page/landing.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { usersContext } from '../../../utils/UsersPovider.jsx';
import User from "../../../modelo/User.js";
import { useNavigate } from 'react-router-dom';

function Register() {

  const Navigate = useNavigate();
  const {usuarios, setUsuarios} = useContext(usersContext);

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    points: 0
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!user.name || !user.lastName || !user.email || !user.password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const exist = usuarios.some(u => u.getEmail() === user.email)

    if(exist){
      alert("Ya existe una cuenta vinculada con este correo.")
      return 
    }

    const modif = [...usuarios, new User(user)]
    setUsuarios(modif);
    localStorage.setItem("usuarios", JSON.stringify(modif))
    alert("Registro exitoso!");
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
        setUser(user => ({
          ...user,
          name: e.target.value
        }))
      }}
      required
      />
      
      <label htmlFor="apellido">Apellido</label>
      <input 
      type="text" 
      id="apellido" 
      placeholder="Tu apellido;)"
      onInput={e => {
        setUser(user => ({
          ...user,
          lastName: e.target.value
        }))
      }}
      required
      />
      <label htmlFor="email">Email</label>
      <input 
      type="email" 
      id="email" 
      placeholder="Tu email ;)"
      onInput={e => {
        setUser(user => ({
          ...user,
          email: e.target.value
        }))
      }}
      required
      />
      <label htmlFor="password">Contraseña</label>
      <input 
      type="password" 
      id="password" 
      placeholder="Crea una contraseña. Segura y fácil de recordar;)"
      onInput={e => {
        setUser(user => ({
          ...user,
          password: e.target.value

        }))
      }}
      required
      />
      <div className="register-actions">
        <button type='submit'>Registrarse</button>
        <div className="links">
          <Link to="/login">
            Ya tengo una cuenta
          </Link>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Register;
