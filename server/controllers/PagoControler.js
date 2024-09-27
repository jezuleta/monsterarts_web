const db = require('../models')

// create main model
const Pago = db.pago

const datosNecesarios = { attributes: [
    'id_pago',
    'id_pedido',
    'fecha_pago',
    'monto',
    'metodo_pago'
]}

// main work

// 1. create Pago
const addPago = async (req, res) => {
    try {
        let info = {
            id_pedido: req.body.id_pedido,
            fecha_pago: req.body.fecha_pago,
            monto: req.body.monto,
            metodo_pago: req.body.metodo_pago
        }

        const pago = await Pago.create(info)
        res.status(200).send(pago)
        console.log(pago)
    } catch (error) {
        console.error("Error creando pago:", error)
        res.status(500).send({ error: "Error creando pago" })
    }
}

// 2. get all pagos
const getAllPagos = async (req, res) => {
    try {
        let pagos = await Pago.findAll({...datosNecesarios})
        res.status(200).send(pagos)
    } catch (error) {
        console.error("Error obteniendo pagos:", error)
        res.status(500).send({ error: "Error obteniendo pagos" })
    }
}

// 3. get single pago
const getOnePago = async (req, res) => {
    try {
        let id_pago = req.params.id_pago
        let pago = await Pago.findOne({ where: { id_pago: id_pago },...datosNecesarios})
        if (pago) {
            res.status(200).send(pago)
        } else {
            res.status(404).send({ error: "Pago seleccionado no encontrado" })
        }
    } catch (error) {
        console.error("Error obteniendo pago:", error)
        res.status(500).send({ error: "Error obteniendo pago" })
    }
}

// 4. update pago
const updatePago = async (req, res) => {
    try {
        let id_pago = req.params.id_pago
        const pago = await Pago.update(req.body, { where: { id_pago: id_pago }})
        if (pago[0] === 1) {
            res.status(200).send({ message: "Pago actualizado correctamente" })
        } else {
            res.status(404).send({ error: "Pago para actualizar no encontrado" })
        }
    } catch (error) {
        console.error("Error actualizando pago:", error)
        res.status(500).send({ error: "Error actualizando pago" })
    }
}

// 5. delete pago
const deletePago = async (req, res) => {
    try {
        let id_pago = req.params.id_pago
        const rowsDeleted = await Pago.destroy({ where: { id_pago: id_pago }})
        if (rowsDeleted === 1) {
            res.status(200).send({ message: "Pago eliminado correctamente" })
        } else {
            res.status(404).send({ error: "Pago a eliminar no encontrado" })
        }
    } catch (error) {
        console.error("Error eliminando pago:", error)
        res.status(500).send({ error: "Error eliminando pago" })
    }
}

module.exports = {
    addPago,
    getAllPagos,
    getOnePago,
    updatePago,
    deletePago,
}
