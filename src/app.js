const express = require('express');
const path = require('path');
const contadorRoutes = require('./routes/contadorRoutes');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

app.use('/', contadorRoutes);

module.exports = app;
