import './config/config.js'
import http from 'http';
import express from 'express';
import path from 'path';
import {pgQuery} from './db/postgres.js'
import {publicRouter} from './routers/publicRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', publicRouter);

//const __dirname = path.resolve();

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = global.Config.port;
const httpServer = http.Server(app);

httpServer.listen(port, () => {
  console.log(`Running on port:${port}`);
});

