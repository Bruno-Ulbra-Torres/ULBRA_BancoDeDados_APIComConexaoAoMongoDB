import { Express, Request, Response } from 'express';
import IAtendimento from '../interfaces/documents/IAtendimento.ts';
import AtendimentosController from '../controllers/atendimentosController.ts';

const atendimentosController = new AtendimentosController();

const atendimentosRoutes = (app: Express)=>{

    app.get('/api/atendimentos', async (req: Request, res: Response) =>{
          try{
            const listAtendimentos: Array<IAtendimento> = await atendimentosController.findAllRecords();
            res.status(200).send(listAtendimentos);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });
    
    app.get('/api/atendimentos/:id', async (req: Request, res: Response) =>{

        let id =  req.params.id;

        if(id == null || id == undefined){
            res.status(404).send(`\nHouve um erro na requisição, com o ID`);
        }

        try{
            const atendimento: IAtendimento = await atendimentosController.findRecordById(id);
            res.status(200).send(atendimento);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });
    
}

export default atendimentosRoutes;