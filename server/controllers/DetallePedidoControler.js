const db = require('../models')

// create main model
const DetallePedido = db.detallePedido

const datosNecesarios = {
    attributes: [
        'id_detalle',
        'id_pedido',
        'id_producto',
        'cantidad',
        'precio_unitario'
    ]
}

// main work

// 1. create DetallePedido
const addDetallePedido = async (req, res) => {
    try {
        let info = {
            id_pedido: req.body.id_pedido,
            id_producto: req.body.id_producto,
            cantidad: req.body.cantidad,
            precio_unitario: req.body.precio_unitario,
        }

        const detallePedido = await DetallePedido.create(info)
        res.status(200).send(detallePedido)
        console.log(detallePedido)
    } catch (error) {
        console.error("Error creando detalle de pedido:", error)
        res.status(500).send({ error: "Error creando detalle de pedido" })
    }
}

// 2. get all detallesPedido
const getAllDetallesPedido = async (req, res) => {
    try {
        let detallesPedido = await DetallePedido.findAll({ ...datosNecesarios })
        res.status(200).send(detallesPedido)
    } catch (error) {
        console.error("Error obteniendo detalles de pedido:", error)
        res.status(500).send({ error: "Error obteniendo detalles de pedido" })
    }
}

// 3. get single detallePedido
const getOneDetallePedido = async (req, res) => {
    try {
        let id_detalle = req.params.id_detalle
        let detallePedido = await DetallePedido.findOne({ where: { id_detalle: id_detalle }, ...datosNecesarios })
        if (detallePedido) {
            res.status(200).send(detallePedido)
        } else {
            res.status(404).send({ error: "Detalle de pedido seleccionado no encontrado" })
        }
    } catch (error) {
        console.error("Error obteniendo detalle de pedido:", error)
        res.status(500).send({ error: "Error obteniendo detalle de pedido" })
    }
}

// 4. update detallePedido
const updateDetallePedido = async (req, res) => {
    try {
        let id_detalle = req.params.id_detalle
        const detallePedido = await DetallePedido.update(req.body, { where: { id_detalle: id_detalle } })
        if (detallePedido[0] === 1) {
            res.status(200).send({ message: "Detalle de pedido actualizado correctamente" })
        } else {
            res.status(404).send({ error: "Detalle de pedido para actualizar no encontrado" })
        }
    } catch (error) {
        console.error("Error actualizando detalle de pedido:", error)
        res.status(500).send({ error: "Error actualizando detalle de pedido" })
    }
}

// 5. delete detallePedido
const deleteDetallePedido = async (req, res) => {
    try {
        let id_detalle = req.params.id_detalle
        const rowsDeleted = await DetallePedido.destroy({ where: { id_detalle: id_detalle } })
        if (rowsDeleted === 1) {
            res.status(200).send({ message: "Detalle de pedido eliminado correctamente" })
        } else {
            res.status(404).send({ error: "Detalle de pedido a eliminar no encontrado" })
        }
    } catch (error) {
        console.error("Error eliminando detalle de pedido:", error)
        res.status(500).send({ error: "Error eliminando detalle de pedido" })
    }
}

module.exports = {
    addDetallePedido,
    getAllDetallesPedido,
    getOneDetallePedido,
    updateDetallePedido,
    deleteDetallePedido,
}
