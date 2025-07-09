const express = require('express');
const router = express.Router();
const contadorController = require('../controllers/contadorController');

router.get('/', contadorController.renderIndex);
router.post('/somar', contadorController.somarPonto);
router.post('/resetar', contadorController.resetarPontoManual);

module.exports = router;
