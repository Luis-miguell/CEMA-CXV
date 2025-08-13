import { createContext, useEffect, useState } from "react";
import User from "../modelo/User";

/* Este contexo es solo para el usuario actual */
/* Puede extenderse a contener todos los usuarios */

const UserContext = createContext();

function UserProvider({ children }) {
    const [usuario, setUsuarioContext] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("ActualUser"))
        setUsuarioContext(() => {
            return data 
                ? new User(data)
                : ""
        })
        setLoad(false);
    }, [])

    return (
        <UserContext.Provider value={{ usuario, setUsuarioContext, load }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };