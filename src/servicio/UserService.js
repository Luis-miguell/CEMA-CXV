import User from "../models/User.js";
class UserService {
    constructor(base = "users"){
        this.base = base;
        this.usuarios = JSON.parse(localStorage.getItem(base)) || [];
    }

    getAllUsers(){
        return this.usuarios.map(user => new User(user));
    }
    
    getUser(id){
        let user = this.usuarios.find(user => user.id === id);
        if(!user){
            alert("Usuario no encontrado")
            return null
        }
        return new User(user);
    }

    userExist(email){
        return this.usuarios.some(user => user.email === email);
    }

    addUser(info){
        if(this.userExist(info.email)){
            alert("El correo electronico ya está asociado a un cuenta existente.");
        } else {
            this.usuarios.push(new User(info));
            this.saveUsers();
        }
    }

    deleteUser(id){
        this.usuarios = this.usuarios.filter(user => user.id !== id);
        this.saveUsers();
    }

    saveUsers(){
        localStorage.setItem(this.base, JSON.stringify(this.usuarios));
    }

    deleteUsers(){
        let confirmacion = confirm("¿Seguro que quieres borrar todos los usuarios? \nEsta acción no puede revertirse");
        if(confirmacion){
            this.usuarios = [];
            this.saveUsers();
        }
    }

    editUser(id, newDates){
        let idx = this.usuarios.findIndex(user => user.id === id);
        if(idx === -1 ) alert("Usuario no encontrado");
        this.usuarios[idx] = {
            ...this.usuarios[idx],
            ...newDates,
            id: this.usuarios[idx].id
        };
        this.saveUsers();
        return new User(this.usuarios[idx])
    }
}

export default UserService;