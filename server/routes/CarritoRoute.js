const carritoController = require('../controllers/CarritoControler.js');
const router = require('express').Router();

router.post('/addCarrito', carritoController.addCarrito);
router.get('/AllCarritos', carritoController.getAllCarritos);
router.get('/one/:id_carrito', carritoController.getOneCarrito);
router.put('/upd/:id_carrito', carritoController.updateCarrito);
router.delete('/del/:id_carrito', carritoController.deleteCarrito);

module.exports = router;
