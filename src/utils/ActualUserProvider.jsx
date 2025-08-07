import { createContext, useEffect, useState } from "react";
import User from "../modelo/User";

/* Este contexo es solo para el usuario actual */
/* Puede extenderse a contener todos los usuarios */

const UserContext = createContext();

function UserProvider({ children }) {
    const [usuario, setUsuarioContext] = useState(() => {
        const user = JSON.parse(localStorage.getItem("actualUser"))
        return user 
            ? new User(user)
            : ""
    });

    return (
        <UserContext.Provider value={{ usuario, setUsuarioContext }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };