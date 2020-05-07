import { Router } from 'express';

import TaskController from './controllers/TaskController';
import './models/task';

const routes = Router();

routes.post('/task', TaskController.store);
routes.get('/task', TaskController.show);
routes.get('/task/:id', TaskController.index);
routes.put('/task/:id', TaskController.update);
routes.delete('/task/:id', TaskController.delete);

export default routes;
