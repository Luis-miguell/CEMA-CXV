class User {
    #password;
    #points;
    constructor(info) {
        this.name = info.name;
        this.lastname = info.lastName;
        this.email = info.email;
        this.#password = info.password;
        this.#points = info.points;
        this.avatar = info.avatar || 'src/imgs/Unknown user.jpeg';
    }

    toJSON() {
        let data = {
            name: this.name,
            lastName: this.lastname,
            email: this.email,
            password: this.#password,
            points: this.#points,
            avatar: this.avatar
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

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
    this.email = email;
    }
    setPassword(password) {
        this.#password = password;
    }
    setPuntos(points) {
        this.#points = points;
    }
}
export default User;