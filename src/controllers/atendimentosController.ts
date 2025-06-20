import AtendimentosModel from "../models/atendimentosModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IAtendimento from "../interfaces/documents/IAtendimento.ts";

const model = new AtendimentosModel;

class AtendimentosController implements ICollectionController{

    collectionModel: AtendimentosModel;

    constructor(){
        this.collectionModel = new AtendimentosModel();
    }

    async findAllRecords(): Promise<Array<IAtendimento>> {
        let atendimentos: Array<any> = await model.findRecords();
        let atendimentosFormatados: Array<IAtendimento> = [];

        atendimentos.forEach(async (item) => atendimentosFormatados.push(await model.convertObjectIntoIAtendimento(item)));

        return atendimentosFormatados;
    };

    async findRecordById(id: string): Promise<IAtendimento> {
      return await model.convertObjectIntoIAtendimento(await model.findRecordById(id)); 
    };
};

export default AtendimentosController;
