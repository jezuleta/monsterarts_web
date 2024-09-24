const express = require('express');
const router = express.Router();
const { DetalleCarrito } = require("../models");

router.get("/", async (req, res) => {
    try {
        const listOfDetallesCarrito = await DetalleCarrito.findAll();
        res.json(listOfDetallesCarrito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const detalleCarrito = req.body;
        const newDetalleCarrito = await DetalleCarrito.create(detalleCarrito);
        res.status(201).json(newDetalleCarrito);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
