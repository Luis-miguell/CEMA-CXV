import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';

function Landing() {
  const { usuario, setUsuarioContext } = useContext(UserContext);

  const handleLogout = () => {
    setUsuarioContext("");
    localStorage.removeItem("actualUser");
  };

  const calcularDinero = (puntos) => {
    if (!puntos || isNaN(puntos)) return 0;
    return (puntos / 100) * 500;
  };

  return (
    <>
      <header className="navbar">
        {usuario ? (
            <>
              <div></div>
            </>
          ) : (
            <>
              <nav>
                <ul className="nav-links">
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Acerca</a></li>
                  <li><a href="#">Contacto</a></li>
                </ul>
              </nav>
            </>
          )}

        <div className="account-buttons">
          {usuario ? (
            <>
              <span>Hola, {usuario.name}</span>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Iniciar sesión</button>
              </Link>
              <Link to="/register">
                <button>Crear cuenta</button>
              </Link>
            </>
          )}
        </div>
      </header>

      <main className="hero">
        {usuario ? (
          <div className="user-stats">
            <h2>Historial de Reciclaje</h2>
            <p><strong>Puntos acumulados:</strong> {usuario.points || 0}</p>
            <p><strong>Dinero equivalente:</strong> {calcularDinero(usuario.points || 0)} COP</p>
          </div>
        ) : (
          <>
            <h1>CEMA</h1>
            <p>TU ALIADO ECOLÓGICO</p>
          </>
        )}
      </main>
    </>
  );
}

export default Landing;
