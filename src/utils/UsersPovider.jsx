import { createContext, useEffect, useState } from "react";
import User from "../modelo/User.js";
const usersContext = createContext();

function UsersProvider({children}){

    const [usuarios, setUsuarios] = useState(() => {
        const data = JSON.parse(localStorage.getItem("usuarios"))
        return data
            ? data.map(user => new User(user))
            : []
    })

    return(
        <usersContext.Provider value={{usuarios, setUsuarios}}>
            {children}
        </usersContext.Provider>
    )

}

export {usersContext};
export default UsersProvider;