import dotenv from 'dotenv';
dotenv.config();

import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import GqlServer from './graphql/setup';
import cors from 'cors';
import bodyParser from 'body-parser';

class App {
  private app: express.Application;
  private PORT = process.env.PORT;

  constructor() {
    if (!this.PORT) {
      console.error('no port');
    }

    this.app = express();

    this.routes();
    this.startGqlServer();
  }

  public async routes() {
    this.app.get('/', (req, res) => {
      res.status(200).send('you got me');
    });
  }

  public async startGqlServer() {
    await GqlServer.start();

    this.app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      bodyParser.json(),
      expressMiddleware(GqlServer)
    );
  }

  public start() {
    this.app.listen(this.PORT, () =>
      console.log(`App running on port ${this.PORT}`)
    );
  }
}

const server = new App();

server.start();
