import express, { Express } from 'express';
import routes from './routes/routes.ts';

const app: Express = express();
const port: number = 3000

routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

