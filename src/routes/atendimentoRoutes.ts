import { Express } from 'express';
import atendimentoController from '../controllers/atendimentoController.ts';


const atendimentoRoutes = (app: Express)=>{

    app.get('/api/atendimentos', ()=>{
        atendimentoController.findAllAtendimentos()
    });
    
}

export default atendimentoRoutes;