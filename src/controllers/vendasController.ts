
import ICollectionController from "../interfaces/ICollectionController.ts";
import IVenda from "../interfaces/documents/IVenda.ts";
import VendasService from "../services/vendasService.ts";

const service = new VendasService;

class VendasController implements ICollectionController{

    collectionservice: VendasService;

    constructor(){
        this.collectionservice = new VendasService();
    }

    async findAllRecords(): Promise<Array<IVenda>> {
        let vendas: Array<any> = await service.findRecords();
        let vendasFormatadas: Array<IVenda> = [];

        vendas.forEach(async (item) => {

            vendasFormatadas.push(await service.convertObjectIntoIVenda(item))
            console.log(item);
            
        });
        return vendasFormatadas;
    };

    async findRecordById(id: string): Promise<IVenda> {
        return await service.convertObjectIntoIVenda(await service.findRecordById(id)); 
    };
};

export default VendasController;
