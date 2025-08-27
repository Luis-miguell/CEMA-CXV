import { createContext, useEffect, useState } from "react";
import User from "../modelo/User";

/* Este contexo es solo para el usuario actual */
/* Puede extenderse a contener todos los usuarios */

const UserContext = createContext();

function UserProvider({ children }) {
    const [usuario, setUsuarioContext] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
    try {
        const raw = localStorage.getItem("ActualUser");
        const data = JSON.parse(raw);
        setUsuarioContext(data ? new User(data) : null);
    } catch (error) {
        console.error("Error al parsear ActualUser desde localStorage", error);
        setUsuarioContext(null);
    }
    setLoad(false);
}, []);


    return (
        <UserContext.Provider value={{ usuario, setUsuarioContext, load }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };