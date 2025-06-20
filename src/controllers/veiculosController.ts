import VeiculosModel from "../models/veiculosModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IVeiculo from "../interfaces/documents/IVeiculo.ts";

const model = new VeiculosModel;

class VeiculosController implements ICollectionController{

    collectionModel: VeiculosModel;

    constructor(){
        this.collectionModel = new VeiculosModel();
    }

    async findAllRecords(): Promise<Array<IVeiculo>> {
        let veiculos: Array<any> = await model.findRecords();
        let veiculosFormatados: Array<IVeiculo> = [];

        veiculos.forEach(async (item) => veiculosFormatados.push(model.convertObjectIntoIVeiculo(item)));

        return veiculosFormatados;
    };

    async findRecordById(id: string): Promise<IVeiculo> {
       return model.convertObjectIntoIVeiculo(await model.findRecordById(id)); 
    };
};

export default VeiculosController;
