import { Router } from 'express';

const routes = Router();

routes.get('/todo', (req,res) => res.json({message:"TodoList"}));

export default routes;
