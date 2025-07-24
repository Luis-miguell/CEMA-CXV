
import { useState } from "react";
import FormLogin from "./components/Login";
import Landing from "./landing_page/landing";




function App() {
    //const [usuario] = useState({nombre: "Admin", email: "admin@example.com", contrasenia: "12345"});

    return (
      <>
        <FormLogin/>
        <div className="App">
          <Landing />
        </div>
      </>
  );
}
export default App;

