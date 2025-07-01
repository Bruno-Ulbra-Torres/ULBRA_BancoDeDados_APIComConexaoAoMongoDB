import { Express, Request, Response } from 'express';
import IFuncionario from '../interfaces/documents/IFuncionario.ts';
import FuncionariosController from '../controllers/funcionariosController.ts';

const funcionariosController = new FuncionariosController();

const funcionarioRoutes = (app: Express)=>{

    app.get('/api/funcionarios', async (req: Request, res: Response) =>{
          try{
            const listFuncionarios: Array<IFuncionario> = await funcionariosController.findAllRecords();
            res.status(200).send(listFuncionarios);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });
    
    app.get('/api/funcionarios/:id', async (req: Request, res: Response) =>{

        let id =  req.params.id;

        if(id == null || id == undefined){
            res.status(404).send(`\nHouve um erro na requisição, com o ID`);
        }

        try{
            const funcionario: IFuncionario = await funcionariosController.findRecordById(id);
            res.status(200).send(funcionario);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });

    
}

export default funcionarioRoutes;