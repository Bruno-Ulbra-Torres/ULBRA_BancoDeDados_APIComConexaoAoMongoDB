import { Express } from 'express';
import atendimentoRoutes from './atendimentosRoutes.ts';
import testRoutes from './testRoutes.ts';
import clientesRoutes from './clientesRoutes.ts';
import funcionarioRoutes from './funcionariosRoutes.ts';
import veiculoRoutes from './veiculosRoutes.ts';
import vendaRoutes from './vendaRoutes.ts';

const routes = (app: Express)=>{

  testRoutes(app);
  atendimentoRoutes(app);
  clientesRoutes(app);
  funcionarioRoutes(app);
  veiculoRoutes(app);
  vendaRoutes(app);
    
}

export default routes;