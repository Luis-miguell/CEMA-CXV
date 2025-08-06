import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

function Landing() {

  return (
    <>

      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <div className="account-buttons">
          <Link to="/login">
            <button>Iniciar sesión</button>
          </Link>
          <Link to="/register">
            <button>Crear cuenta</button>
          </Link>
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
