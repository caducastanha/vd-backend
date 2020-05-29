import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
})

export default routes; // exportar as rotas para serem usadas na aplicação