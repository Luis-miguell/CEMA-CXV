import React from 'react';
import './passwordRecovery.css';
function PasswordRecovery() {

    const handleRecovery = (event) => {
        event.preventDefault();
        alert("Enlace de recuperación enviado al correo electrónico.");
    }
  return (
    <div className="password-recovery-container">
      <h2>Recuperación de contraseña</h2>
      <form className="password-recovery" onSubmit={handleRecovery}>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Enviar enlace de recuperación</button>
      </form>
      <p>Revisa tu correo para instrucciones sobre cómo recuperar tu contraseña.</p>
    </div>
  );
}

export default PasswordRecovery;