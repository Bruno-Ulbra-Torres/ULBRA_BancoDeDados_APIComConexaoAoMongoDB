import ClientesModel from "../models/clientesModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import ICliente from "../interfaces/documents/ICliente.ts";

const model = new ClientesModel;

class ClientesController implements ICollectionController{

    collectionModel: ClientesModel;

    constructor(){
        this.collectionModel = new ClientesModel();
    }

    async findAllRecords(): Promise<Array<ICliente>> {
        const clientes: Array<any> = await model.findRecords();
        let clientesFormatados: Array<ICliente> = [];
        
        clientes.forEach(item => clientesFormatados.push(model.convertObjectIntoICliente(item)));

        return clientesFormatados;
    };

    async findRecordById(id: string): Promise<ICliente> {
        return model.convertObjectIntoICliente(await model.findRecordById(id));
    };
};

export default ClientesController;
