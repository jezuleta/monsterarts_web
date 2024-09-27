const envioController = require('../routes/EnvioRoute.js')

const router = require('express').Router()

router.post('/addEnvio', envioController.addEnvio)
router.get('/AllEnvios', envioController.getAllEnvios)

router.get('/one/:id_envio', envioController.getOneEnvio)
router.put('/upd/:id_envio', envioController.updateEnvio)
router.delete('/del/:id_envio', envioController.deleteEnvio)

module.exports = router;
