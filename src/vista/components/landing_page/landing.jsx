import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';
import ProfileActions from '../Profile/ProfileActions.jsx';

function Landing() {
  const { usuario, setUsuarioContext, load } = useContext(UserContext);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [historial, setHistorial] = useState(() => {
    const data = localStorage.getItem("historial");
    return data ? JSON.parse(data) : [];
  });

  const [actividad, setActividad] = useState("");
  const [peso, setPeso] = useState("");

  // 🔹 Guardar historial en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("historial", JSON.stringify(historial));
  }, [historial]);

  if (load) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Cargando datos...</p>
      </div>
    );
  }

  const toggleOpciones = () => {
    setMostrarOpciones(prev => !prev);
  };

  const handleLogout = () => {
    setUsuarioContext(null);
    localStorage.removeItem("ActualUser");
  };

  const handleSubmitActividad = (e) => {
    e.preventDefault();
    if (!actividad || !peso) return;

    const puntos = parseInt(peso) * 10;
    const nuevaActividad = {
      id: historial.length + 1,
      actividad,
      peso,
      puntos,
      fecha: new Date().toISOString().split("T")[0]
    };

    // 1. Guardar en historial
    setHistorial([nuevaActividad, ...historial]);

    // 2. Actualizar usuario en context y en localStorage
    if (usuario) {
      const usuarioActualizado = {
        ...usuario,
        puntos: (usuario.puntos || 0) + puntos
      };
      
      setUsuarioContext(usuarioActualizado);
      localStorage.setItem("ActualUser", JSON.stringify(usuarioActualizado));
    }

    // Limpiar inputs y cerrar formulario
    setActividad("");
    setPeso("");
    setMostrarFormulario(false);
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
              <img className="user-avatar" src={usuario.avatar} alt={usuario.name} />
              <span>Hola, {usuario.name}</span>
              <button onClick={toggleOpciones}>
                <i className={`bi ${mostrarOpciones ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
              </button>
              <ProfileActions className={mostrarOpciones ? "show" : ""} />
              <button onClick={handleLogout} className="btn red">Cerrar sesión</button>
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
              <button className="btn green" onClick={() => setMostrarFormulario(prev => !prev)}>
                ✔ Realizar actividad
              </button>

              {mostrarFormulario && (
                <form className="form-actividad" onSubmit={handleSubmitActividad}>
                  <input
                    type="text"
                    placeholder="¿Qué reciclaste?"
                    value={actividad}
                    onChange={(e) => setActividad(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Peso en kg"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                  />
                  <button type="submit">Registrar actividad</button>
                </form>
              )}

              <button className="btn light-green">⭐ Ver mis puntos</button>
              <button className="btn orange">💳 Retirar puntos</button>
            </section>

            {/* Mis puntos */}
            <section className="card puntos">
              <h3>Mis puntos</h3>
              <div className="circle">
                <span>
                  {usuario?.puntos ?? JSON.parse(localStorage.getItem("ActualUser"))?.puntos ?? 0}
                </span>
              </div>
              <h1>CEMA</h1>
            </section>

            {/* Historial */}
            <section className="card historial">
              <h3>Historial</h3>
              <ul>
                {historial.map(item => (
                  <li key={item.id}>
                    <span className="icon">🌱</span> {item.actividad} - {item.peso}kg → +{item.puntos} pts
                    <span className="fecha"> {item.fecha}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        ) : (
          <>
            {/* Hero principal */}
            <div className="hero-landing">
              <div className="hero-text">
                <h1>CEMA - Cuida el medio ambiente</h1>
                <p>
                  En CEMA creemos que el futuro del planeta depende de nuestras acciones presentes. 
                  Por eso, cuidamos el medio ambiente promoviendo hábitos responsables, como el uso 
                  eficiente del agua y la energía, la siembra de árboles, el reciclaje y la reducción de plásticos.
                </p>
                <div className="hero-buttons">
                  <Link to="/register"><button className="btn primary">Empieza con CEMA</button></Link>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=352&auto=format&fit=crop" 
                  alt="Hero ilustración" 
                />
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Landing;
