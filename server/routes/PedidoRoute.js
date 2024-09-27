const pedidoController = require('../controllers/PedidoControler.js')

const router = require('express').Router()

router.post('/addPedido', pedidoController.addPedido)
router.get('/AllPedidos', pedidoController.getAllPedidos)

router.get('/one/:id_pedido', pedidoController.getOnePedido)
router.put('/upd/:id_pedido', pedidoController.updatePedido)
router.delete('/del/:id_pedido', pedidoController.deletePedido)

module.exports = router;
