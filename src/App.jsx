import { useState } from "react";
import FormLogin from "./components/Login";

function App() {
    const [usuario, setUsuario] = useState({nombre: "Admin", email: "admin@example.com", contrasenia: "12345"});

    return (
    <FormLogin usuario={usuario} />
  );
}