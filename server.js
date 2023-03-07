import http from 'http';
import express from 'express';
import path from 'path';

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

const port = process.env.PORT || 5000;

const httpServer = http.Server(app);

httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

