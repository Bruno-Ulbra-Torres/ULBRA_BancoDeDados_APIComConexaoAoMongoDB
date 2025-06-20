import { Express, Request, Response } from 'express';
import IVeiculo from '../interfaces/documents/IVeiculo.ts';
import VeiculosController from '../controllers/veiculosController.ts';

const veiculosController = new VeiculosController();

const veiculoRoutes = (app: Express)=>{

    app.get('/api/veiculos', async (req: Request, res: Response) =>{
          try{
            const listVeiculos: Array<IVeiculo> = await veiculosController.findAllRecords();
            res.status(200).send(listVeiculos);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });

    app.get('/api/veiculos/:id', async (req: Request, res: Response) =>{

        let id =  req.params.id;

        if(id == null || id == undefined){
            res.status(404).send(`\nHouve um erro na requisição, com o ID`);
        }

        try{
            const veiculo: IVeiculo = await veiculosController.findRecordById(id);
            res.status(200).send(veiculo);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });
    
}

export default veiculoRoutes;