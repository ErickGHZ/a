const express = require("express");
const router = express.Router();
const ArticuloControlador = require('../controladores/articulo');

// Rutas de prueba

router.get('/ruta-de-prueba', ArticuloControlador.prueba);

router.post('/crear', ArticuloControlador.articulo);

module.exports = router;
