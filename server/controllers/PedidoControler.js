const db = require('../models')

// create main model
const Pedido = db.pedido

const datosNecesarios = { attributes: [
    'id_pedido',
    'id_usuario',
    'fecha_pedido',
    'estado',
    'total'
]}

// main work

// 1. create Pedido
const addPedido = async (req, res) => {
    try {
        let info = {
            id_usuario: req.body.id_usuario,
            fecha_pedido: req.body.fecha_pedido,
            estado: req.body.estado,
            total: req.body.total
        }

        const pedido = await Pedido.create(info)
        res.status(200).send(pedido)
        console.log(pedido)
    } catch (error) {
        console.error("Error creando pedido:", error)
        res.status(500).send({ error: "Error creando pedido" })
    }
}

// 2. get all pedidos
const getAllPedidos = async (req, res) => {
    try {
        let pedidos = await Pedido.findAll({...datosNecesarios})
        res.status(200).send(pedidos)
    } catch (error) {
        console.error("Error obteniendo pedidos:", error)
        res.status(500).send({ error: "Error obteniendo pedidos" })
    }
}

// 3. get single pedido
const getOnePedido = async (req, res) => {
    try {
        let id_pedido = req.params.id_pedido
        let pedido = await Pedido.findOne({ where: { id_pedido: id_pedido },...datosNecesarios})
        if (pedido) {
            res.status(200).send(pedido)
        } else {
            res.status(404).send({ error: "Pedido seleccionado no encontrado" })
        }
    } catch (error) {
        console.error("Error obteniendo pedido:", error)
        res.status(500).send({ error: "Error obteniendo pedido" })
    }
}

// 4. update pedido
const updatePedido = async (req, res) => {
    try {
        let id_pedido = req.params.id_pedido
        const pedido = await Pedido.update(req.body, { where: { id_pedido: id_pedido }})
        if (pedido[0] === 1) {
            res.status(200).send({ message: "Pedido actualizado correctamente" })
        } else {
            res.status(404).send({ error: "Pedido para actualizar no encontrado" })
        }
    } catch (error) {
        console.error("Error actualizando pedido:", error)
        res.status(500).send({ error: "Error actualizando pedido" })
    }
}

// 5. delete pedido
const deletePedido = async (req, res) => {
    try {
        let id_pedido = req.params.id_pedido
        const rowsDeleted = await Pedido.destroy({ where: { id_pedido: id_pedido }})
        if (rowsDeleted === 1) {
            res.status(200).send({ message: "Pedido eliminado correctamente" })
        } else {
            res.status(404).send({ error: "Pedido a eliminar no encontrado" })
        }
    } catch (error) {
        console.error("Error eliminando pedido:", error)
        res.status(500).send({ error: "Error eliminando pedido" })
    }
}

// 6. pedidos por usuario
const pedidosPorUsuario = async (req, res) => {
    const { id_usuario } = req.params; 

    try {
        const pedidos = await Pedido.findAll({
            where: { id_usuario: id_usuario }, 
        });
        if (pedidos.length === 0) {
            return res.status(404).send({ message: "No se encontraron pedidos para este usuario." });
        }
        res.status(200).send(pedidos);
    } catch (error) {
        console.error("Error obteniendo pedidos indicados: ", error);
        res.status(500).send({ error: "Error obteniendo pedidos activos" });
    }
};

module.exports = {
    addPedido,
    getAllPedidos,
    getOnePedido,
    updatePedido,
    deletePedido,
    pedidosPorUsuario,
}
