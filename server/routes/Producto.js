const express = require('express');
const router = express.Router();
const { Producto } = require("../models");

router.get("/", async (req, res) => {
    try {
        const listOfProductos = await Producto.findAll();
        res.json(listOfProductos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const producto = req.body;
        const newProducto = await Producto.create(producto);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
