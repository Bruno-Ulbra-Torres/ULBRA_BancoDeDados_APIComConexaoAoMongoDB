import VendasModel from "../models/vendasModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IVenda from "../interfaces/documents/IVenda.ts";

const model = new VendasModel;

class VendasController implements ICollectionController{

    collectionModel: VendasModel;

    constructor(){
        this.collectionModel = new VendasModel();
    }

    async findAllRecords(): Promise<Array<IVenda>> {
        let vendas: Array<any> = await model.findRecords();
        let vendasFormatadas: Array<IVenda> = [];

        vendas.forEach(async (item) => vendasFormatadas.push(await model.convertObjectIntoIVenda(item)));

        return vendasFormatadas;
    };

    async findRecordById(id: string): Promise<IVenda> {
        return await model.convertObjectIntoIVenda(await model.findRecordById(id)); 
    };
};

export default VendasController;
