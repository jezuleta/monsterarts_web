const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hola: te encuentras en Usuario");
});

module.exports = router;