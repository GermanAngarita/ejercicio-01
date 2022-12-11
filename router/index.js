const express = require('express');
const routes = express.Router();

const frutaController = require('../controllers/frutas.controller');

routes.use('/frutas', frutaController )

module.exports = routes;