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

module.exports = {
  adicionarPonto,
  getEstado,
  resetar
};
