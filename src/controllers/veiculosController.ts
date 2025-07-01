import VeiculosService from "../services/veiculosService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";

const service = new VeiculosService;

class VeiculosController implements ICollectionController{

    private service: VeiculosService;

    constructor(){
        this.service = new VeiculosService();
    }

    async findAllRecords(): Promise<Array<any>> {
        return await this.service.findRecords();
    };
    async findRecordById(id: string): Promise<any> {
        return await this.service.findRecordById(id); 
    };
};

export default VeiculosController;
