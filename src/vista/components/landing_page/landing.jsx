import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';
import logoCema from "../../../imgs/logoCema.png";

function Landing() {
  const { usuario, setUsuarioContext, load } = useContext(UserContext);
  const [historial, setHistorial] = useState([
    { id: 1, puntos: 50, fecha: "2025-08-01" },
    { id: 2, puntos: 30, fecha: "2025-08-10" },
    { id: 3, puntos: 57, fecha: "2025-08-15" },
  ]); // Ejemplo de historial. En el futuro se puede guardarlo en el user.

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

      <main className="dashboard">
        {usuario ? (
          <div className="dashboard-container">
            {/* Menu lateral */}
            <aside className="sidebar">
              <ul>
                <li>• Realizar actividades</li>
                <li>• Ver mis puntos</li>
                <li>• Retirar mis puntos</li>
              </ul>
            </aside>

            {/* Centro: logo + puntos */}
            <section className="main-section">
              <div className="logo-cema">
                <img className='logoCema' src={logoCema} alt="Logo CEMA" />
              </div>
              <div className="puntos-box">
                <p>Mis puntos:</p>
                <h2>{usuario.getPuntos()}</h2>
              </div>
            </section>

            {/* Panel derecho: historial */}
            <aside className="historial">
              <h3>Historial de puntos</h3>
              <ul>
                {historial.map(item => (
                  <li key={item.id}>
                    +{item.puntos} pts — {item.fecha}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        ) : (
          <div className="hero">
            <h1>CEMA</h1>
            <p>TU ALIADO ECOLÓGICO</p>
          </div>
        )}
      </main>
    </>
  );
}

export default Landing;
