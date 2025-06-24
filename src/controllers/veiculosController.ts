import VeiculosService from "../services/veiculosService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IVeiculo from "../interfaces/documents/IVeiculo.ts";

const service = new VeiculosService;

class VeiculosController implements ICollectionController{

    collectionservice: VeiculosService;

    constructor(){
        this.collectionservice = new VeiculosService();
    }

    async findAllRecords(): Promise<Array<IVeiculo>> {
        let veiculos: Array<any> = await service.findRecords();
        let veiculosFormatados: Array<IVeiculo> = [];

        veiculos.forEach(async (item) => veiculosFormatados.push(service.convertObjectIntoIVeiculo(item)));

        return veiculosFormatados;
    };

    async findRecordById(id: string): Promise<IVeiculo> {
       return service.convertObjectIntoIVeiculo(await service.findRecordById(id)); 
    };
};

export default VeiculosController;
