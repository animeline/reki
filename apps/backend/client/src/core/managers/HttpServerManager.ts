import http, { Server } from 'http';

import { Logger } from '@reki/logger';
import cors from 'cors';
import express, { Application } from 'express';

const { PORT, NODE_ENV } = process.env;

export class HttpServerManager implements Manager {
  public app: Application;

  public server: Server;

  public logger: Logger;

  constructor() {
    this.app = express().use(express.json());
    this.server = http.createServer(this.app);

    this.logger = new Logger({ scope: 'HTTPServer' });
  }

  connect(): void {
    this.logger.debug('Starting server...');

    this.app.use(cors());

    this.app.get('/', (_request, response) => {
      return response.json({ message: 'SODA GOSTOSA LIMONADA GELADINHA' });
    });

    this.server.listen(PORT, () => {
      this.logger.info(
        NODE_ENV !== 'production'
          ? `Server is running on "http://localhost:${PORT}/"`
          : 'Server up and running.',
      );
    });
  }
}
