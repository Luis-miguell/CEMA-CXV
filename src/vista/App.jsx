import { createContext, useContext } from "react";
import FormLogin from "./components/Login/Login.jsx";
import Landing from "./components/landing_page/landing.jsx";
import Register from "./components/register/register.jsx";
import PasswordRecovery from "./components/passwordRecovery/passwordRecovery.jsx";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from "../modelo/User.js";

const Contexto = createContext(new User);

function App() {

  const [usuario, setUsuario] = useContext(Contexto);
    return (
        <BrowserRouter basename="/CEMA-CXV">
        
            <Routes>

                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<FormLogin usuario={usuario}/>}/>
                <Route path="/register" element={<Register setUsuario={setUsuario}/>}/>
                <Route path="/password-recovery" element={<PasswordRecovery/>}/>

            </Routes>
        
        </BrowserRouter>
  );
}

export default App;            