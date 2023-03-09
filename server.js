import './config/config.js'
import http from 'http';
import express from 'express';
import path from 'path';
import {pgQuery} from './db/postgres.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();

app.get('*', (req, res) =>
//   res.send('finally got there! yeahaey!!')
     res.redirect('https://instagram.com/shravya__sharanya?igshid=YmMyMTA2M2Y=')
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = global.Config.port;
const httpServer = http.Server(app);

httpServer.listen(port, () => {
  console.log(`Running on port:${port}`);
});

pgQuery('SELECT * FROM users;')
.then(result => console.log("PG-result",result))
.catch(error => console.log("PG-error",error))
