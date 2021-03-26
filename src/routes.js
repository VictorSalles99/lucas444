import { Router } from 'express';



import UserController from './app/controllers/UserController';
import AnimalController from './app/controllers/AnimalController';
import RelatorioController from './app/controllers/RelatorioController';



const routes = new Router();



routes.get('/animais', AnimalController.index);
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);
routes.delete('/animais/:id', AnimalController.delete);
routes.put('/animais/:id', AnimalController.update);
routes.put('/users/:id', UserController.update);
routes.get('/relatorios', RelatorioController.store);



export default routes;