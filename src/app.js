const express = require('express');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    // Iniciando a variável this.server quando
    // uma nova instancia da classe App for criada

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); //permite que o express envie e receba requisições json
  }

  routes() {
    this.server.use(routes); // permite que express utilize as rotas criadas na routes.js
  }
}

module.exports = new App().server; // exportando uam nova instancia da App passando apenas o Server
