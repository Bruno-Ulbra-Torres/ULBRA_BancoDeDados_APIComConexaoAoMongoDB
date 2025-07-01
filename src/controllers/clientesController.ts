import ClientesService from "../services/clientesService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import ICliente from "../interfaces/documents/ICliente.ts";

const service = new ClientesService;

class ClientesController implements ICollectionController{

     private service: ClientesService;

    constructor(){
        this.service = new ClientesService();
    }

    async findAllRecords(): Promise<Array<any>> {
        return await this.service.findRecords();
    };
    async findRecordById(id: string): Promise<any> {
        return await this.service.findRecordById(id); 
    };
};

export default ClientesController;
