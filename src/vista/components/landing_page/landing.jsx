import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';

function Landing() {
  const { usuario, setUsuarioContext, load } = useContext(UserContext);

  if (load) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Cargando datos...</p>
      </div>
    );
  }

/* 
  const handleActiveLogin = () => {
    const iniciado = usuario.getState();
    if (iniciado){
      // Ocultar botones y mostrar usuario y sus acciones
    } 
  }; */
  
  const handleLogout = () => {
    setUsuarioContext("");
    localStorage.removeItem("ActualUser");
  };

  

  return (
    <>
      <header className="navbar">
        {usuario ? (
          <div><h5>CEMA</h5></div>
        ) : (
          <nav>
            <ul className="nav-links">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
        )}

        <div className="account-buttons">
          {usuario ? (
            <>
              <span>Hola, {usuario.name}</span>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/login"><button>Iniciar sesión</button></Link>
              <Link to="/register"><button>Crear cuenta</button></Link>
            </>
          )}
        </div>
      </header>
      <main className="hero">
          <h1>CEMA</h1>
          <p>TU ALIADO ECOLÓGICO</p>
      </main>

      
    </>
  );
}

export default Landing;
