class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async crearUsuario(req, res) {
        try {
            const usuario = await this.userService.crearUsuario(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    async obtenerUsuario(req, res) {
        try {
            const usuario = await this.userService.obtenerUsuario(req.params.id);
            if (!usuario) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    async actualizarUsuario(req, res) {
        try {
            const usuarioActualizado = await this.userService.actualizarUsuario(req.params.id, req.body);
            if (!usuarioActualizado) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
            res.status(200).json(usuarioActualizado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    async eliminarUsuario(req, res) {
        try {
            const eliminado = await this.userService.eliminarUsuario(req.params.id);
            if (!eliminado) {
                return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}