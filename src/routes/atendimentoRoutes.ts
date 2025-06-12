import { Express } from 'express';
import { getAllAtedimentos } from '../controllers/atendimentoController.ts';

const atendimentoRoutes = (app: Express)=>{

    app.get('/api/atendimentos', getAllAtedimentos);
    
}

export default atendimentoRoutes;