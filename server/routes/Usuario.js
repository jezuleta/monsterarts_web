const express = require('express');
const router = express.Router();
const { Usuario } = require("../models");

router.get("/", async (req, res) => {
    try {
        const listOfUsuarios = await Usuario.findAll();
        res.json(listOfUsuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const usuario = req.body;
        const newUsuario = await Usuario.create(usuario);
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
