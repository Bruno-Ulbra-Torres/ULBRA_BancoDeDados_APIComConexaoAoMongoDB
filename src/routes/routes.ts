import { Express, Request, Response } from 'express';
import MongoConnection from '../services/mongoConnect.ts';
import atendimentoRoutes from './atendimentoRoutes.ts';


const connection: MongoConnection = new MongoConnection()

const routes = (app: Express)=>{

    app.get('/', async (req: Request, res: Response) => {
  
      res.status(200)
      .send('API funcionando com TypeScript!');

    });

    app.get('/mongo', async (req: Request, res: Response) => {
      try{
        await connection.connectDB();
        res.status(200)
        .send('API Conectada ao MongoDB!');
      }
      catch(error){
        res.status(404)
        .send(`Erro de conexão com o Mongo: ${error}`)
      }
    });

    atendimentoRoutes(app);
    
}

export default routes;