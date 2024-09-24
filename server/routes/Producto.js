const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hola: te encuentras en Producto");
});

module.exports = router;