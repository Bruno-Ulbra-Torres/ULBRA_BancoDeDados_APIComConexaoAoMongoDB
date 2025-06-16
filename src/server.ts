import express, { Express } from 'express';
import routes from './routes/routes.ts';
import * as dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const port: number = process.env.PORT !== undefined ?
  parseInt(process.env.PORT)
  : 5000;
// const port: number = 3000;

routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

