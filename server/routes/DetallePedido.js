const express = require('express');
const router = express.Router();
const { DetallePedido } = require("../models");

router.get("/", async (req, res) => {
    try {
        const listOfDetallesPedido = await DetallePedido.findAll();
        res.json(listOfDetallesPedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const detallePedido = req.body;
        const newDetallePedido = await DetallePedido.create(detallePedido);
        res.status(201).json(newDetallePedido);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
