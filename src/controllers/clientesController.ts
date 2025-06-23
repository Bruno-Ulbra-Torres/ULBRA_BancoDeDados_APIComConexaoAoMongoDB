import ClientesService from "../services/clientesService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import ICliente from "../interfaces/documents/ICliente.ts";

const service = new ClientesService;

class ClientesController implements ICollectionController{

    collectionService: ClientesService;

    constructor(){
        this.collectionService = new ClientesService();
    }

    async findAllRecords(): Promise<Array<ICliente>> {
        const clientes: Array<any> = await service.findRecords();
        let clientesFormatados: Array<ICliente> = [];
        
        clientes.forEach(item => clientesFormatados.push(service.convertObjectIntoICliente(item)));

        return clientesFormatados;
    };

    async findRecordById(id: string): Promise<ICliente> {
        return service.convertObjectIntoICliente(await service.findRecordById(id));
    };
};

export default ClientesController;
