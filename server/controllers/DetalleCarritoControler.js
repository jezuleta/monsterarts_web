const db = require('../models');

const DetalleCarrito = db.detalleCarrito;

const addDetalleCarrito = async (req, res) => {
    try {
        let info = {
            id_carrito: req.body.id_carrito,
            id_producto: req.body.id_producto,
            cantidad: req.body.cantidad,
        };

        const nuevoDetalle = await DetalleCarrito.create(info);
        res.status(200).send(nuevoDetalle);
    } catch (error) {
        console.error("Error creando detalle del carrito:", error);
        res.status(500).send({ error: "Error creando detalle del carrito" });
    }
};

const getAllDetalles = async (req, res) => {
    try {
        const detalles = await DetalleCarrito.findAll();
        res.status(200).send(detalles);
    } catch (error) {
        console.error("Error obteniendo detalles del carrito:", error);
        res.status(500).send({ error: "Error obteniendo detalles del carrito" });
    }
};

const getOneDetalle = async (req, res) => {
    try {
        const id_detalle_carrito = req.params.id_detalle_carrito;
        const detalle = await DetalleCarrito.findOne({ where: { id_detalle_carrito } });

        if (detalle) {
            res.status(200).send(detalle);
        } else {
            res.status(404).send({ error: "Detalle del carrito no encontrado" });
        }
    } catch (error) {
        console.error("Error obteniendo detalle del carrito:", error);
        res.status(500).send({ error: "Error obteniendo detalle del carrito" });
    }
};

const updateDetalle = async (req, res) => {
    try {
        const id_detalle_carrito = req.params.id_detalle_carrito;
        const updated = await DetalleCarrito.update(req.body, { where: { id_detalle_carrito } });

        if (updated[0] === 1) {
            res.status(200).send({ message: "Detalle del carrito actualizado correctamente" });
        } else {
            res.status(404).send({ error: "Detalle del carrito no encontrado" });
        }
    } catch (error) {
        console.error("Error actualizando detalle del carrito:", error);
        res.status(500).send({ error: "Error actualizando detalle del carrito" });
    }
};

const deleteDetalle = async (req, res) => {
    try {
        const id_detalle_carrito = req.params.id_detalle_carrito;
        const rowsDeleted = await DetalleCarrito.destroy({ where: { id_detalle_carrito } });

        if (rowsDeleted === 1) {
            res.status(200).send({ message: "Detalle del carrito eliminado correctamente" });
        } else {
            res.status(404).send({ error: "Detalle del carrito no encontrado" });
        }
    } catch (error) {
        console.error("Error eliminando detalle del carrito:", error);
        res.status(500).send({ error: "Error eliminando detalle del carrito" });
    }
};

module.exports = {
    addDetalleCarrito,
    getAllDetalles,
    getOneDetalle,
    updateDetalle,
    deleteDetalle,
};
