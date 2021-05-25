import express, { Request, Response, NextFunction } from 'express';
import { createConnection } from 'typeorm';
import routers from './routers';

createConnection()
  .then((connection) => {
    const app = express();
    const port = process.env.PORT || 8080;

    app.use(routers);

    app.listen(port, () => {
      console.log(`App started in port ${port}`);
    });
  })
  .catch((error) => console.log(error));
