import VendasService from "../services/vendasService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IVenda from "../interfaces/documents/IVenda.ts";

const service = new VendasService;

class VendasController implements ICollectionController{

    collectionService: VendasService;

    constructor(){
        this.collectionService = new VendasService();
    }

    async findAllRecords(): Promise<Array<IVenda>> {
        let vendas: Array<any> = await service.findRecords();
        let vendasFormatadas: Array<IVenda> = [];

        vendas.forEach(async (item) => vendasFormatadas.push(await service.convertObjectIntoIVenda(item)));

        return vendasFormatadas;
    };

    async findRecordById(id: string): Promise<IVenda> {
        return await service.convertObjectIntoIVenda(await service.findRecordById(id)); 
    };
};

export default VendasController;
