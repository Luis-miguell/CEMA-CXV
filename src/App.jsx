import { useState } from "react";
import FormLogin from "./components/Login/Login.jsx";
import Landing from "./components/landing_page/landing.jsx";
import Register from "./components/register/register.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [usuario, setUsuario] = useState({nombre: "Admin", email: "admin@example.com", contrasenia: "12345"});

    return (
        <BrowserRouter basename="/CEMA-CXV">
        
            <Routes>

                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<FormLogin usuario={usuario}/>}/>
                <Route path="/register" element={<Register setUsuario={setUsuario}/>}/>

            </Routes>
        
        </BrowserRouter>
  );
}

export default App;            