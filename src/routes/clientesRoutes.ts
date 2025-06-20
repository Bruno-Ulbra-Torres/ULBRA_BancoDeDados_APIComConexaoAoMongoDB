import { Express, Request, Response } from 'express';
import ICliente from '../interfaces/documents/ICliente.ts';
import ClientesController from '../controllers/clientesController.ts';

const clientesController = new ClientesController();

const clientesRoutes = (app: Express)=>{

    app.get('/api/clientes', async (req: Request, res: Response) =>{
        
        try{
            const listClientes: Array<ICliente> = await clientesController.findAllRecords();
            res.status(200).send(listClientes);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });

    app.get('/api/clientes/:id', async (req: Request, res: Response) =>{
        
        let id =  req.params.id;

        if(id == null || id == undefined){
            res.status(404).send(`\nHouve um erro na requisição, com o ID`);
        }

        try{
            const cliente: ICliente = await clientesController.findRecordById(id);
            res.status(200).send(cliente);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });
    
}

export default clientesRoutes;