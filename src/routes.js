import { Router } from 'express';

import TaskController from './controllers/TaskController';
import './models/task';

const routes = Router();

routes.post('/task', TaskController.store);
routes.get('/task', TaskController.show);
routes.get('/task/:id',checkIdExist, TaskController.index);
routes.put('/task/:id',checkIdExist, TaskController.update);
routes.delete('/task/:id',checkIdExist, TaskController.delete);

export default routes;
