
import { useState } from "react";
import FormLogin from "./components/Login";
import Landing from "./landing_page/landing";

function App() {
    const [usuario, setUsuario] = useState({nombre: "Admin", email: "admin@example.com", contrasenia: "12345"});

    return (
    <FormLogin usuario={usuario} />
    <div className="App">
    <Landing />
  );
}
export default App;

