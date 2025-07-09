const contadorModel = require('../models/contadorModel');

function renderIndex(req, res) {
  // Reseta o contador sempre que a página for acessada
  contadorModel.resetar();

  const estado = contadorModel.getEstado();
  res.render('index', estado);
}

function somarPonto(req, res) {
  const estado = contadorModel.adicionarPonto();
  res.json(estado);
}

let pontoAtual = 0;
const pontoFinal = 60;

function adicionarPonto() {
  if (pontoAtual < pontoFinal) {
    pontoAtual++;
  }
  return getEstado();
}

function getEstado() {
  return {
    pontoAtual,
    pontoFinal,
    porcentagem: ((pontoAtual / pontoFinal) * 100).toFixed(1)
  };
}

function resetar() {
  pontoAtual = 0;
}

module.exports = { adicionarPonto, getEstado, resetar };

