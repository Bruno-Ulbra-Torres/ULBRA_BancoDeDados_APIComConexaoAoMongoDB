import { Express, Request, Response } from 'express';
import atendimentoRoutes from './atendimentoRoutes.ts';
import databaseService from '../services/databaseService.ts';


const routes = (app: Express)=>{

  app.get('/', async (req: Request, res: Response) => {

    res.status(200)
    .send('API funcionando com TypeScript!');

  });

  app.get('/mongo', ()=>{
    databaseService.connectDB();
  });
  app.get('/mongo2', async (req: Request, res: Response)=>{
    try{      
      await databaseService.connection.connect();
      res.status(200)
      .send("API Conectada ao mongo!");
    }
    catch(error){
      res.status(404)
      .send(`\nErro as se conectar ao mongo:\n  ${error}`);
    }

  });
  app.get('/closeMongo', () =>{
    databaseService.closeDB();
  });


  atendimentoRoutes(app);
    
}

export default routes;