import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';

function Landing() {
  const { usuario, setUsuarioContext, load } = useContext(UserContext);
  const [historial, setHistorial] = useState([
    { id: 1, puntos: 50, fecha: "2025-08-01" },
    { id: 2, puntos: 30, fecha: "2025-08-10" },
    { id: 3, puntos: 57, fecha: "2025-08-15" },
  ]);

  if (load) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Cargando datos...</p>
      </div>
    );
  }

  const handleLogout = () => {
    setUsuarioContext("");
    localStorage.removeItem("ActualUser");
  };

  return (
    <>
      <header className="navbar">
        <div className="logo-cema">
          <h1>CEMA</h1>
        </div>

        <div className="account-buttons">
          {usuario ? (
            <>
              <span>Hola, {usuario.name}</span>
              <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/login"><button>Iniciar sesión</button></Link>
              <Link to="/register"><button>Crear cuenta</button></Link>
            </>
          )}
        </div>
      </header>

      <main className="dashboard">
        {usuario ? (
          <div className="dashboard-grid">
            
            {/* Acciones rápidas */}
            <section className="card acciones">
              <h3>Acciones rápidas</h3>
              <button className="btn green">✔ Realizar actividad</button>
              <button className="btn light-green">⭐ Ver mis puntos</button>
              <button className="btn orange">💳 Retirar puntos</button>
            </section>

            {/* Mis puntos */}
            <section className="card puntos">
              <h3>Mis puntos</h3>
              <div className="circle">
                <span>{usuario.getPuntos()}</span>
              </div>
              <h1>CEMA</h1>
            </section>

            {/* Historial */}
            <section className="card historial">
              <h3>Historial</h3>
              <ul>
                {historial.map(item => (
                  <li key={item.id}>
                    <span className="icon">🌱</span> +{item.puntos} pts
                    <span className="fecha"> {item.fecha}</span>
                  </li>
                ))}
              </ul>
              <button className="btn green">Añadir actividad</button>
            </section>

          </div>
        ) : (
          <>
            {/* Hero principal */}
            <div className="hero-landing">
              <div className="hero-text">
                <h1>CEMA - Cuida el medio ambiente</h1>
                <p>
                  En CEMA creemos que el futuro del planeta depende de nuestras acciones presentes. Por eso, cuidamos el medio ambiente promoviendo hábitos responsables, como el uso eficiente del agua y la energía, la siembra de árboles, el reciclaje y la reducción de plásticos.
                </p>
                <div className="hero-buttons">
                  <Link to="/register"><button className="btn primary">Empieza con CEMA</button></Link>
                </div>
              </div>
              <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero ilustración" />
              </div>
            </div>

            {/* Sección "about" */}
            <div className="about">
              
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Landing;
