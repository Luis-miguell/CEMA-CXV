class User {
    #password;
    #state;
    #points;
    /* Mejor que reciba un objeto */
    constructor(info) {
        this.name = info.name;
        this.lastname = info.lastName;
        this.email = info.email;
        this.#password = info.password;
        this.#state = info.state;
        this.#points = info.points;
    }

    toJSON() {
        let data = {
            name: this.name,
            lastName: this.lastname,
            email: this.email,
            password: this.#password,
            state: this.#state,
            points: this.#points
        };

        return data;
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
        return this.#points;
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
    setPuntos(points) {
        this.#points = points;
    }
}
export default User;