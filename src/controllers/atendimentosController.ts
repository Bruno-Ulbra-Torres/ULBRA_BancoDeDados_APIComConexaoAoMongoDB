import AtendimentosModel from "../models/atendimentosModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";

const model = new AtendimentosModel;

class AtendimentosController implements ICollectionController{

    collectionModel: AtendimentosModel;

    constructor(){
        this.collectionModel = new AtendimentosModel();
    }

    async findAllRecords(): Promise<Array<any>> {
        let atendimentosFormatados: Array<any> = await model.findRecords();

        //TODO: formatar retorno

        return atendimentosFormatados;
    };

    async findRecordById(id: string): Promise<any> {
        let atendimentoFormatado = model.findRecordById(id);

        //TODO: formatar retorno

        return atendimentoFormatado;
    };
};

export default AtendimentosController;
