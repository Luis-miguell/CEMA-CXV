import React from 'react';
import "../landing_page/landing.css";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { usersContext } from '../../../utils/UsersPovider.jsx';
import enviarCorreo from './emailjs.js';
import './passwordRecovery.css';

function PasswordRecovery() {
  const handleRecovery = (event) => {
    event.preventDefault();
    alert("Enlace de recuperación enviado al correo electrónico.");
  };

  const [emailToSend, setEmailToSend] = useState("");



  const [attemptsSendCode, setAttempsSendCode] = useState({
    attempts: 3,
    lastDate: ""
  });

  useEffect(() => {
    if(attemptsSendCode.attempts == 0 && !attemptsSendCode.lastDate){
        setAttempsSendCode(ant => ({
          ...ant, 
          lastDate: new Date()
        }));
      }
  }, [attemptsSendCode.attempts]);

  useEffect(() => {

    if(!attemptsSendCode.lastDate) return

    let id = setInterval(() => {
      const currentTime = new Date();

      if(!verififyTime(attemptsSendCode.lastDate, currentTime, 15)){
        setAttempsSendCode(ant => ({
          ...ant,
          attempts: 3,
          lastDate: ""
        }))
      }
    }, 1000);

    return () => clearInterval(id);

  }, [attemptsSendCode.lastDate])




  const [phase, setPhase] = useState(0);



  const [code, setCode] = useState();



  const [userCode, setUserCode] = useState({
    code: "      ",
    date: ""
  });



  const formRef = useRef();



  const inputCodeRef = useRef();



  const {usuarios} = useContext(usersContext);





  const aprobar = (e) => {
    e.preventDefault();
    
    if(attemptsSendCode.attempts > 0){

      let existe = phase == 0 ? usuarios.find(user => user.getEmail() == formRef.current.email.value) : emailToSend;

      setEmailToSend(existe);

      if(existe){
        let newCode = `${Math.floor(Math.random() * 899) + 100}${Math.floor(Math.random() * 899) + 100}`;
        setCode(datos => ({
          ...datos, 
          code: newCode,
          date: new Date()
        }));
        enviarCorreo(existe.getName(), existe.getEmail(), newCode);
        setPhase(1);
        setAttempsSendCode(act => ({
          ...act, 
          attempts: act.attempts - 1
        }))
      } else {
        alert("No hay una cuenta asociada a este correo elctrónico.")
      }

    } else {
      alert("Haz realizado demasiados intentos. \nIntenta nuevamente mas tarde")
    }

  }





  const activarInput = () => {
    inputCodeRef.current.focus();
  }

  



  const addCode = (valor) => {
    const newCode = valor.toString().padEnd(6, " ");
    console.log(newCode);
    setUserCode(newCode);
  }





  const verififyTime = (generate, current, mins) => {
    const rest = current - generate;
    const minuts = mins * 60 * 1000;
    const conversion = rest < minuts;
    return conversion;
  }





  const verificar = () => {
    const currentTime = new Date();
    if(verififyTime(code.date, currentTime, 5)){
      if(code.code == userCode){
        alert("El código es correcto. \nProcede a cambiar la contraseña.")
        setPhase(2);
      } else {
        alert("El código es incorrecto.")
      }
    } else {
      alert("El código ha expirado. intentalo de nuevo más tarde.")
    }
  }





  if(phase == 0){
    return(
      <div className="password-recovery-container">
        <h2>Recuperación de contraseña</h2>
        <form ref={formRef} className="password-recovery" onSubmit={aprobar}>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Enviar enlace de recuperación</button>
        </form>
        <p>Revisa tu correo para instrucciones sobre cómo recuperar tu contraseña.</p>
      </div>
    )
  }
  
  if(phase == 1){
    return(
      <div className="password-recovery-container caja2">
        <input 
        style={{opacity: 0, position: 'fixed'}} 
        ref={inputCodeRef} 
        type="text"
        maxLength={6}
        onChange={(e) => addCode(e.target.value)}
        />

        <h2>Ingresa el código que te enviamos</h2>
        <div 
        className="code-divs">
          {Array(6)
          .fill("")
          .map((_, i) => (
            <div
            key={i}
            className='code-div'
            onClick={activarInput}
            >{userCode[i]}</div>
          ))
          }
        </div>
        <button onClick={verificar}>Verificar Código</button>
        <button onClick={aprobar}>Reenviar código</button>
      </div>
    )
  }

  if(phase == 2){
    return(
      <div>Hola mundo</div>
    )
  }
  
}

export default PasswordRecovery;
