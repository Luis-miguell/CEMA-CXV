import React, { useContext } from 'react';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';
import { Link } from 'react-router-dom';
function ProfileActions() {
  const { setUsuarioActual } = useContext(UserContext);


  return (
    <div>
      <Link to="/update">Editar perfil</Link>
      <Link to="/history">Ver historial de reciclaje</Link>
      <Link to="/points">Ver puntos</Link>
      <Link to="/rewards">Retirar recompensas</Link>
      <Link to="/logout" onClick={() => {
        localStorage.removeItem("ActualUser");
        setUsuarioActual("");
      }}>Cerrar sesión</Link>
    </div>
  );
}

export default ProfileActions;
