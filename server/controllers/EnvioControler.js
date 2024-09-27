const db = require('../models')

// create main model
const Envio = db.envio

const datosNecesarios = {
    attributes: [
        'id_envio',
        'id_pedido',
        'direccion_envio',
        'fecha_envio',
        'estado_envio'
    ]
}

// main work

// 1. create Envio
const addEnvio = async (req, res) => {
    try {
        let info = {
            id_pedido: req.body.id_pedido,
            direccion_envio: req.body.direccion_envio,
            fecha_envio: req.body.fecha_envio,
            estado_envio: req.body.estado_envio,
        }

        const envio = await Envio.create(info)
        res.status(200).send(envio)
        console.log(envio)
    } catch (error) {
        console.error("Error creando envío:", error)
        res.status(500).send({ error: "Error creando envío" })
    }
}

// 2. get all envios
const getAllEnvios = async (req, res) => {
    try {
        let envios = await Envio.findAll({ ...datosNecesarios })
        res.status(200).send(envios)
    } catch (error) {
        console.error("Error obteniendo envíos:", error)
        res.status(500).send({ error: "Error obteniendo envíos" })
    }
}

// 3. get single envio
const getOneEnvio = async (req, res) => {
    try {
        let id_envio = req.params.id_envio
        let envio = await Envio.findOne({ where: { id_envio: id_envio }, ...datosNecesarios })
        if (envio) {
            res.status(200).send(envio)
        } else {
            res.status(404).send({ error: "Envío seleccionado no encontrado" })
        }
    } catch (error) {
        console.error("Error obteniendo envío:", error)
        res.status(500).send({ error: "Error obteniendo envío" })
    }
}

// 4. update envio
const updateEnvio = async (req, res) => {
    try {
        let id_envio = req.params.id_envio
        const envio = await Envio.update(req.body, { where: { id_envio: id_envio } })
        if (envio[0] === 1) {
            res.status(200).send({ message: "Envío actualizado correctamente" })
        } else {
            res.status(404).send({ error: "Envío para actualizar no encontrado" })
        }
    } catch (error) {
        console.error("Error actualizando envío:", error)
        res.status(500).send({ error: "Error actualizando envío" })
    }
}

// 5. delete envio
const deleteEnvio = async (req, res) => {
    try {
        let id_envio = req.params.id_envio
        const rowsDeleted = await Envio.destroy({ where: { id_envio: id_envio } })
        if (rowsDeleted === 1) {
            res.status(200).send({ message: "Envío eliminado correctamente" })
        } else {
            res.status(404).send({ error: "Envío a eliminar no encontrado" })
        }
    } catch (error) {
        console.error("Error eliminando envío:", error)
        res.status(500).send({ error: "Error eliminando envío" })
    }
}

module.exports = {
    addEnvio,
    getAllEnvios,
    getOneEnvio,
    updateEnvio,
    deleteEnvio,
}
