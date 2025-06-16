import { Request, Response } from "express";
import atendimentoModel from "../models/atendimentoModel.ts";
import IAtendiementoController from "../interfaces/controllers/IAtendimentosController.ts";
import IAtendimento from "../interfaces/documents/INewAtendimento.ts";
import { ObjectId } from "mongodb";

const atendimentoController: IAtendiementoController = {

    async findAllAtendimentos(req: Request, res: Response): Promise<Array<IAtendimento>> {

        const atendimentos: Array<any> = await atendimentoModel.findAtendimentos();
        let atendimentosFormatados: Array<IAtendimento> = [];
           
        atendimentos.forEach((item: Object) => {
            let atendimento: IAtendimento = {
                _id: ObjectId();
                funcionario: "",
                veiculo: "",
                tipo_atendimento: "",
                cliente: ""
            };

            atendimento._id = item._id;


        });


        return atendimentosFormatados;
    },
};

export default atendimentoController;


