import { Express, Request, Response } from 'express';
import atendimentoController from '../controllers/atendimentoController.ts';
import atendimentoModel from '../models/atendimentoModel.ts';
import IAtendimento from '../interfaces/documents/INewAtendimento.ts';


const atendimentoRoutes = (app: Express)=>{

    app.get('/api/atendimentos', async (req: Request, res: Response) =>{
          try{
            const listAtendimentos: Array<IAtendimento> = await atendimentoController.findAllAtendimentos();
            res.status(200).send(listAtendimentos);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });
    
}

export default atendimentoRoutes;