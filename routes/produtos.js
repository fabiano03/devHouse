const express = require ('express');
const { reset } = require('nodemon');

const routes = express.Router();

routes.get("/produtos/lista", (req, res) => {
    res.send("Página de Produtos");
});

module.exports = routes;

