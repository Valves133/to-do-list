import express from 'express';

import routes from './routes';
import './database/mongo';

class App {
  constructor(){
    this.app = express();

    this.Middleware();
    this.Routes();
  }
  Middleware(){
    this.app.use(express.json());

  }

  Routes(){
    this.app.use(routes);
  }
}

export default new App().app;
