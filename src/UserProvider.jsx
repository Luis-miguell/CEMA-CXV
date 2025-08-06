import { createContext, useState } from "react";
import User from "./modelo/User";

const UserContext = createContext();

function UserProvider({ children }) {
    const [usuario, setUsuario] = useState( new User());

    return (
        <UserContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };