import React, { useContext } from 'react';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';
import { Link } from 'react-router-dom';
function ProfileActions() {
  const { setUsuarioActual } = useContext(UserContext);


  return (
    <div>
      <Link to="/profile/update">Editar perfil</Link>
      <Link to="/profile/history">Ver historial de reciclaje</Link>
      <Link to="/profile/points">Ver puntos</Link>
      <Link to="/profile/rewards">Retirar recompensas</Link>
      <Link to="/profile/logout" onClick={() => {
        localStorage.removeItem("ActualUser");
        setUsuarioActual("");
      }}>Cerrar sesión</Link>
    </div>
  );
}

export default ProfileActions;
