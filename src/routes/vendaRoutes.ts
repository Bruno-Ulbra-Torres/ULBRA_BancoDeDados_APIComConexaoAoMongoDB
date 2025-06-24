import { Express, Request, Response } from 'express';
import IVenda from '../interfaces/documents/IVenda.ts';
import VendasController from '../controllers/vendasController.ts';

const vendasController = new VendasController();

const vendaRoutes = (app: Express)=>{

    app.get('/api/vendas', async (req: Request, res: Response) =>{
        try{

            let listVendas: Array<IVenda> = [];
            listVendas = await vendasController.findAllRecords();
            res.status(200).send(listVendas);

        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });

    app.get('/api/vendas/:id', async (req: Request, res: Response) =>{

        let id =  req.params.id;

        if(id == null){
            res.status(404).send(`\nHouve um erro na requisição, com o ID`);
        }

        try{
            const venda: IVenda = await vendasController.findRecordById(id);
            res.status(200).send(venda);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    });
    
}

export default vendaRoutes;