import '../landing_page/landing.css';
import { Link } from 'react-router-dom';

function Register() {

  const handleRegister = async (e) => {
   
    e.preventDefault();

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
      
      />
      
      <label htmlFor="apellido">Apellido</label>
      <input 
      type="text" 
      id="apellido" 
      placeholder="Tu apellido;)"
      />
      <label htmlFor="email">Email</label>
      <input 
      type="email" 
      id="email" 
      placeholder="Tu email ;)"
      
      />
      <label htmlFor="password">Contraseña</label>
      <input 
      type="password" 
      id="password" 
      placeholder="Crea una contraseña. Segura y fácil de recordar;)"
      
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
