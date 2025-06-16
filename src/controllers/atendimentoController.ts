import { Request, Response } from "express";
import atendimentoModel from "../models/atendimentoModel.ts";
import IAtendiementoController from "../interfaces/controllers/IAtendimentosController.ts";

const atendimentoController: IAtendiementoController = {

    async findAllAtendimentos(req: Request, res: Response): Promise<void> {
        try{
            const listAtendimentos = await atendimentoModel.findAtendimentos();
            res.status(200).send(listAtendimentos);
        }
        catch(error: any){
            res.status(404).send(`\nHouve um erro na requisição:\n ${error}`);
        }
    },
};

export default atendimentoController;


