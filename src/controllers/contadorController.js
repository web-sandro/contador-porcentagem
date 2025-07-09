const contadorModel = require('../models/contadorModel');

function renderIndex(req, res) {
  contadorModel.resetar();
  const estado = contadorModel.getEstado();
  res.render('index', estado);
}

function somarPonto(req, res) {
  const estado = contadorModel.adicionarPonto();
  res.json(estado);
}

function resetarPontoManual(req, res) {
  contadorModel.resetar();
  const estado = contadorModel.getEstado();
  res.json(estado);
}

module.exports = {
  renderIndex,
  somarPonto,
  resetarPontoManual
};
