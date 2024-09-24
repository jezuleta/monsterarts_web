const express = require('express');
const router = express.Router();
const { Envio } = require("../models");

router.get("/", async (req, res) => {
    try {
        const listOfEnvios = await Envio.findAll();
        res.json(listOfEnvios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const envio = req.body;
        const newEnvio = await Envio.create(envio);
        res.status(201).json(newEnvio);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
