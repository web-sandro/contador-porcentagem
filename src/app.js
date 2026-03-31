const express = require('express');
const path = require('path');
const contadorRoutes = require('./routes/contadorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

// Rotas
app.use('/', contadorRoutes);

// 🚀 Subir servidor direto aqui
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});