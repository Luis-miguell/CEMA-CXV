import React, { useContext } from 'react';
import { UserContext } from '../../../utils/ActualUserProvider.jsx';
import { Link } from 'react-router-dom';
import './ProfileActions.css'
function ProfileActions({className}) {
  const { setUsuarioActual } = useContext(UserContext);


  return (
    <div className={`profile-options ${className}`}>
      <Link className='Links' to="/update">Editar perfil</Link>
      <Link className='Links' to="/history">Ver historial de reciclaje</Link>
      <Link className='Links' to="/points">Ver puntos</Link>
      <Link className='Links' to="/rewards">Retirar recompensas</Link>
      <Link className='Links' to="/logout" onClick={() => {
        localStorage.removeItem("ActualUser");
        setUsuarioActual("");
      }}>Cerrar sesión</Link>
    </div>
  );
}

export default ProfileActions;
