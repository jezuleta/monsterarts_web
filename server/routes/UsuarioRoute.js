const usuarioController = require('../controllers/UsuarioController.js')

const router = require('express').Router()

router.post('/addUsuario', usuarioController.addUsuario)
router.get('/AllUsuarios', usuarioController.getAllUsuarios)

router.get('/one/:id_usuario', usuarioController.getOneUsuario)
router.put('/upd/:id_usuario', usuarioController.updateUsuario)
router.delete('/del/:id_usuario', usuarioController.deleteUsuario)

router.get('/activado', usuarioController.activadoUsuarios)

module.exports = router;