class User {
    #password;
    #state;
    #puntos;
    /* Mejor que reciba un objeto */
    constructor(name,lastname, email, password, state, puntos) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.#password = password;
        this.#state = state;
        this.#puntos = puntos;
    }
    getName() {
        return this.name;
    }
    
    getLastname(){
        return this.lastname;
    }
    getEmail() {
        return this.email;
    }

    getPuntos() {
        return this.#puntos;
    }

    getPassword() {
        return this.#password;
    }

    getState() {
        return this.#state;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
    this.email = email;
    }
    setPassword(password) {
        this.#password = password;
    }
    setState(state) {
        this.#state = state;
    }
    setPuntos(puntos) {
        this.#puntos = puntos;
    }
}
export default User;