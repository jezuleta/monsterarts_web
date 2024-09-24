const express = require('express');
const router = express.Router();
const { Pago } = require("../models");

router.get("/", async (req, res) => {
    try {
        const listOfPagos = await Pago.findAll();
        res.json(listOfPagos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const pago = req.body;
        const newPago = await Pago.create(pago);
        res.status(201).json(newPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
