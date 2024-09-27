const pagoController = require('../controllers/PagoControler.js')

const router = require('express').Router()

router.post('/addPago', pagoController.addPago)
router.get('/AllPagos', pagoController.getAllPagos)

router.get('/one/:id_pago', pagoController.getOnePago)
router.put('/upd/:id_pago', pagoController.updatePago)
router.delete('/del/:id_pago', pagoController.deletePago)

module.exports = router;
