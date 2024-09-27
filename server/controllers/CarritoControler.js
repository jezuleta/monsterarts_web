const db = require('../models');
const Carrito = db.carrito;

// 1. create Carrito
const addCarrito = async (req, res) => {
    try {
        let info = {
            id_cliente: req.body.id_cliente,
        };
        const carrito = await Carrito.create(info);
        res.status(200).send(carrito);
    } catch (error) {
        console.error("Error creando carrito:", error);
        res.status(500).send({ error: "Error creando carrito" });
    }
};

// 2. get all Carritos
const getAllCarritos = async (req, res) => {
    try {
        let carritos = await Carrito.findAll();
        res.status(200).send(carritos);
    } catch (error) {
        console.error("Error obteniendo carritos:", error);
        res.status(500).send({ error: "Error obteniendo carritos" });
    }
};

// 3. get single Carrito
const getOneCarrito = async (req, res) => {
    try {
        let id_carrito = req.params.id_carrito;
        let carrito = await Carrito.findOne({ where: { id_carrito: id_carrito }});
        if (carrito) {
            res.status(200).send(carrito);
        } else {
            res.status(404).send({ error: "Carrito no encontrado" });
        }
    } catch (error) {
        console.error("Error obteniendo carrito:", error);
        res.status(500).send({ error: "Error obteniendo carrito" });
    }
};

// 4. update Carrito
const updateCarrito = async (req, res) => {
    try {
        let id_carrito = req.params.id_carrito;
        const carrito = await Carrito.update(req.body, { where: { id_carrito: id_carrito }});
        if (carrito[0] === 1) {
            res.status(200).send({ message: "Carrito actualizado correctamente" });
        } else {
            res.status(404).send({ error: "Carrito no encontrado para actualizar" });
        }
    } catch (error) {
        console.error("Error actualizando carrito:", error);
        res.status(500).send({ error: "Error actualizando carrito" });
    }
};

// 5. delete Carrito
const deleteCarrito = async (req, res) => {
    try {
        let id_carrito = req.params.id_carrito;
        const rowsDeleted = await Carrito.destroy({ where: { id_carrito: id_carrito }});
        if (rowsDeleted === 1) {
            res.status(200).send({ message: "Carrito eliminado correctamente" });
        } else {
            res.status(404).send({ error: "Carrito no encontrado para eliminar" });
        }
    } catch (error) {
        console.error("Error eliminando carrito:", error);
        res.status(500).send({ error: "Error eliminando carrito" });
    }
};

module.exports = {
    addCarrito,
    getAllCarritos,
    getOneCarrito,
    updateCarrito,
    deleteCarrito,
};

