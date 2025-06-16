import { Express, Request, Response } from 'express';
import { MongoClient } from 'mongodb';

const testRoutes = (app: Express)=>{

  app.get('/', async (req: Request, res: Response) => {
    res.status(200).send('API funcionando com TypeScript!');
  });
  
  app.get('/mongo', async (req: Request, res: Response) => {
    try{   
      const client = new MongoClient(`${process.env.DB_URI}`);   
      await client.connect();
      res.status(200).send("API Conectada ao mongo!");
    }
    catch(error){
      res.status(404).send(`\nErro as se conectar ao mongo:\n  ${error}`);
    }
  });

    
};

export default testRoutes;
