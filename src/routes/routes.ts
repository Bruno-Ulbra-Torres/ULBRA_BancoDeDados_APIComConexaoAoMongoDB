import { Express } from 'express';
import atendimentoRoutes from './atendimentoRoutes.ts';
import testRoutes from './testRoutes.ts';

const routes = (app: Express)=>{

  testRoutes(app);
  atendimentoRoutes(app);
    
}

export default routes;