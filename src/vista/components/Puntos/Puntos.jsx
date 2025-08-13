import React, { useContext } from 'react';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';
import './Puntos.css';



function Puntos() {

    const { usuario } = useContext(UserContext);

    const calcularDinero = (puntos) => {
    if (!puntos || isNaN(puntos)) return 0;
    return (puntos / 100) * 500;
  };

  return (
    <main className="hero">
        {usuario ? (
          <div className="user-stats">
            <h2>Historial de Reciclaje</h2>
            <p><strong>Puntos acumulados:</strong> {usuario.points || 0}</p>
            <p><strong>Dinero equivalente:</strong> {calcularDinero(usuario.points || 0).toLocaleString()} COP</p>
            
            <div className="extra-stats">
              <p>♻️ Reciclajes realizados: {usuario.reciclajes || 0}</p>
            </div>
          </div>
        ) : (
          <>
            <h1>CEMA</h1>
            <p>TU ALIADO ECOLÓGICO</p>
          </>
        )}
      </main>
  );
}