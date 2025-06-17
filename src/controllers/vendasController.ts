import VendasModel from "../models/vendasModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";

const model = new VendasModel;

class VendasController implements ICollectionController{

    collectionModel: VendasModel;

    constructor(){
        this.collectionModel = new VendasModel();
    }

    async findAllRecords(): Promise<Array<any>> {
        let vendasFormatados: Array<any> = await model.findRecords();

        //TODO: formatar retorno

        return vendasFormatados;
    };

    async findRecordById(id: string): Promise<any> {
        let vendaFormatado = model.findRecordById(id);

        //TODO: formatar retorno

        return vendaFormatado;
    };
};

export default VendasController;
