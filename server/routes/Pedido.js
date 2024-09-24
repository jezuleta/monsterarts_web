const express = require('express');
const router = express.Router();
const { Pedido } = require("../models");

router.get("/", async (req, res) => {
    try {
        const listOfPedidos = await Pedido.findAll();
        res.json(listOfPedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const pedido = req.body;
        const newPedido = await Pedido.create(pedido);
        res.status(201).json(newPedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
