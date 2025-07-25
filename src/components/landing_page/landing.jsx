import React, { useEffect } from 'react';
import './landing.css';

function Landing() {

  return (
    <>
      <div className="container">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <div className="account-buttons">
          <button>Iniciar sesión</button>
          <button>Crear cuenta</button>
        </div>
      </header>

      <main className="hero">
        <h1>CEMA</h1>
        <p>TU ALIADO ECOLÓGICO</p>
      </main>
    </div>
    </>
  );
}

export default Landing;
