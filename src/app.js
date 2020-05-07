import express from 'express';

import routes from './routes';
import './database/mongo';
import cors from 'cors';

class App {
  constructor(){
    this.app = express();

    this.Middleware();
    this.Routes();
  }
  Middleware(){
    this.app.use(express.json());
    this.app.use(cors());

  }

  Routes(){
    this.app.use(routes);
  }
}

export default new App().app;
