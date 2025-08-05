import { localStorage } from 'node-localstorage';
import User from '../model/User.js';
class UserService {
    constructor(database) {
        this.database = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : database;
    }

    async crearUsuario(datosUsuario) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    // Verifica si ya existe un usuario con el mismo email
    const existe = usuarios.some(u => u.email === datosUsuario.email);
    if (existe) {
        throw new Error('El usuario ya existe');
    }
    usuarios.push(datosUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return datosUsuario;
}

    async obtenerUsuario(idUsuario) {
        // Lógica para obtener un usuario de la base de datos
        return this.database.findUserById(idUsuario);
    }
    async obtenerTodosUsuarios() {
        // Lógica para obtener todos los usuarios de la base de datos
        return this.database.findAllUsers();
    }
    async eliminarTodosUsuarios() {
        // Lógica para eliminar todos los usuarios de la base de datos
        return this.database.removeAllUsers();
    }
    async iniciarSesion(email, contrasenia) {
        // Lógica para iniciar sesión de un usuario
        const usuario = await this.database.findUserByEmail(email);
        if (usuario && usuario.password === contrasenia) {
            return usuario;
            usuario.state = 'activo'; 
        }
        throw new Error('Credenciales inválidas');
    }
    async actualizarUsuario(idUsuario, datosUsuario) {
        // Lógica para actualizar un usuario en la base de datos
        return this.database.updateUserById(idUsuario, datosUsuario);
    }

    async eliminarUsuario(idUsuario) {
        // Lógica para eliminar un usuario de la base de datos
        return this.database.removeUserById(idUsuario);
    }
}

export default UserService;



/* import User from "../modelo/User.js";
class GestionUser{
    constructor(base = "users"){
        this.base = base;
        this.usuarios = JSON.parse(localStorage.getItem(base)) || [];
    }

    getAllUsers(){
        return this.usuarios.map(user => new User(user));
    }
    
    getUserById(id){
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
        let idx = timport User from "../modelo/User.js";
class GestionUser{
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

} */