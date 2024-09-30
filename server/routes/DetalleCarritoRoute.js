const express = require('express');
const detalleCarritoController = require('../controllers/DetalleCarritoControler.js');

const router = express.Router();

router.post('/addDetalle', detalleCarritoController.addDetalleCarrito);
router.get('/allDetalles', detalleCarritoController.getAllDetalles);
router.get('/one/:id_detalle_carrito', detalleCarritoController.getOneDetalle);
router.put('/update/:id_detalle_carrito', detalleCarritoController.updateDetalle);
router.delete('/delete/:id_detalle_carrito', detalleCarritoController.deleteDetalle);

module.exports = router;
