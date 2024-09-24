const express = require('express');
const router = express.Router();
const { Carrito } = require("../models");

router.get("/", async (req, res) => {
    try {
        const listOfCarritos = await Carrito.findAll();
        res.json(listOfCarritos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const carrito = req.body;
        const newCarrito = await Carrito.create(carrito);
        res.status(201).json(newCarrito);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
