import express, { Express, Request, Response } from 'express';
import connectDB from './services/mongoConnect.ts';

const app: Express = express();
const port: number = 3000

// Teste
app.get('/', (req: Request, res: Response) => {
  
  res.status(200)
  .send('API funcionando com TypeScript!');


});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

connectDB();