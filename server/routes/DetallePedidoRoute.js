const detallePedidoController = require('../controllers/DetallePedidoControler.js')

const router = require('express').Router()

router.post('/addDetallePedido', detallePedidoController.addDetallePedido)
router.get('/AllDetallesPedido', detallePedidoController.getAllDetallesPedido)

router.get('/one/:id_detalle', detallePedidoController.getOneDetallePedido)
router.put('/upd/:id_detalle', detallePedidoController.updateDetallePedido)
router.delete('/del/:id_detalle', detallePedidoController.deleteDetallePedido)

module.exports = router;
