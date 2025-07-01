
import ICollectionController from "../interfaces/ICollectionController.ts";
import VendasService from "../services/vendasService.ts";


class VendasController implements ICollectionController{

    private service: VendasService;

    constructor(){
        this.service = new VendasService();
    }

    async findAllRecords(): Promise<Array<any>> {
        return await this.service.findRecords();
    };
    async findRecordById(id: string): Promise<any> {
        return await this.service.findRecordById(id); 
    };
    async findVendaByVendedor(id: string): Promise<Array<any>>{
        return await this.service.vendasByVendedor(id);
    }
};

export default VendasController;
