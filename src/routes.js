const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
})

module.exports = routes; // exportar as rotas para serem usadas na aplicação