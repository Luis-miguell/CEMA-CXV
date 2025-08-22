import React from 'react';
import "../landing_page/landing.css";

function PasswordRecovery() {
  const handleRecovery = (event) => {
    event.preventDefault();
    alert("Enlace de recuperación enviado al correo electrónico.");
  };

  return (
    <div className="password-recovery-container">
      <form className="password-recovery" onSubmit={handleRecovery}>
        <h2>Recuperación de contraseña</h2>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Enviar enlace de recuperación</button>
        <br />
          <a href="/login">Iniciar sesión</a>
          <span> o </span>
          <a href="/">Regresar al inicio</a>
      </form>
      <p className="info-text">
        Revisa tu correo para instrucciones sobre cómo recuperar tu contraseña.
      </p>

    </div>
  );
}

export default PasswordRecovery;
