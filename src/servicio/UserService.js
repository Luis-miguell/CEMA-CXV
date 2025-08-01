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