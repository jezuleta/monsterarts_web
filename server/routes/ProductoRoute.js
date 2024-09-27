const productoController = require('../controllers/ProductoController.js')

const router = require('express').Router()

router.post('/addProducto', productoController.addProducto)
router.get('/AllProductos', productoController.getAllProductos)

router.get('/one/:id_producto', productoController.getOneProducto)
router.put('/upd/:id_producto', productoController.updateProducto)
router.delete('/del/:id_producto', productoController.deleteProducto)

module.exports = router;
