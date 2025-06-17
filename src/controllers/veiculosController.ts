import VeiculosModel from "../models/veiculosModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";

const model = new VeiculosModel;

class VeiculosController implements ICollectionController{

    collectionModel: VeiculosModel;

    constructor(){
        this.collectionModel = new VeiculosModel();
    }

    async findAllRecords(): Promise<Array<any>> {
        let veiculosFormatados: Array<any> = await model.findRecords();

        //TODO: formatar retorno

        return veiculosFormatados;
    };

    async findRecordById(id: string): Promise<any> {
        let veiculoFormatado = model.findRecordById(id);

        //TODO: formatar retorno

        return veiculoFormatado;
    };
};

export default VeiculosController;
