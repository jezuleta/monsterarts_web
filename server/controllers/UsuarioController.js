const db = require('../models')

// create main model
const Carrito = db.carrito
const DetalleCarrito = db.detalleCarrito
const DetallePedido = db.detallePedido
const Envio = db.envio
const Pago = db.pago
const Pedido = db.pedido
const Producto = db.producto
const Usuario = db.usuario

const datosNecesarios = {attributes: [
    'identificacion',
    'nombre',
    'apellidos',
    'email',
    'direccion',
    'telefono',
    'fecha_creacion',
    'ultima_sesion'
]}

// main work

// 1. create Usuario
const addUsuario = async (req, res) => {
    try {
        let info = {
            identificacion: req.body.identificacion,
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            email: req.body.email,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            rol: req.body.rol,
            estado: req.body.estado,
            fecha_creacion: req.body.fecha_creacion,
            ultima_sesion: req.body.ultima_sesion,
            contrasena: req.body.contrasena,
        }

        const usuario = await Usuario.create(info)
        res.status(200).send(usuario)
        console.log(usuario)
    } catch (error) {
        console.error("Error creando usuario:", error)
        res.status(500).send({ error: "Error creando usuario" })
    }
}

// 2. get all usuarios
const getAllUsuarios = async (req, res) => {
    try {
        let usuarios = await Usuario.findAll({...datosNecesarios})
        res.status(200).send(usuarios)
    } catch (error) {
        console.error("Error obteniendo usuarios:", error)
        res.status(500).send({ error: "Error obteniendo usuarios" })
    }
}

// 3. get single usuario
const getOneUsuario = async (req, res) => {
    try {
        let id_usuario = req.params.id_usuario
        let usuario = await Usuario.findOne({ where: { id_usuario: id_usuario },...datosNecesarios})
        if (usuario) {
            res.status(200).send(usuario)
        } else {
            res.status(404).send({ error: "Usuario seleccionado no encontrado" })
        }
    } catch (error) {
        console.error("Error obteniendo usuario:", error)
        res.status(500).send({ error: "Error obteniendo usuario" })
    }
}

// 4. update usuario
const updateUsuario = async (req, res) => {
    try {
        let id_usuario = req.params.id_usuario
        const usuario = await Usuario.update(req.body, { where: { id_usuario: id_usuario }})
        if (usuario[0] === 1) {
            res.status(200).send({ message: "Usuario actualizado correctamente" })
        } else {
            res.status(404).send({ error: "Usuario para actualizar no encontrado" })
        }
    } catch (error) {
        console.error("Error actualizando usuario:", error)
        res.status(500).send({ error: "Error actualizando usuario" })
    }
}

// 5. delete usuario
const deleteUsuario = async (req, res) => {
    try {
        let id_usuario = req.params.id_usuario
        const rowsDeleted = await Usuario.destroy({ where: { id_usuario: id_usuario }})
        if (rowsDeleted === 1) {
            res.status(200).send({ message: "Usuario eliminado correctamente" })
        } else {
            res.status(404).send({ error: "Usuario a eliminar no encontrado" })
        }
    } catch (error) {
        console.error("Error eliminando usuario:", error)
        res.status(500).send({ error: "Error eliminando usuario" })
    }
}

// 6. activos usuarios
const activadoUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({ where: { estado: "activo" }, ...datosNecesarios})
        res.status(200).send(usuarios)
    } catch (error) {
        console.error("Error obteniendo usuarios activos:", error)
        res.status(500).send({ error: "Error obteniendo usuarios activos" })
    }
}

module.exports = {
    addUsuario,
    getAllUsuarios,
    getOneUsuario,
    updateUsuario,
    deleteUsuario,
    activadoUsuarios,
}
