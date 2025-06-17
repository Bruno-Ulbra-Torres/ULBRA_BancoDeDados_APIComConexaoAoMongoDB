import ClientesModel from "../models/clientesModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";

const model = new ClientesModel;

class ClientesController implements ICollectionController{

    collectionModel: ClientesModel;

    constructor(){
        this.collectionModel = new ClientesModel();
    }

    async findAllRecords(): Promise<Array<any>> {
        let clientesFormatados: Array<any> = await model.findRecords();

        //TODO: formatar retorno

        return clientesFormatados;
    };

    async findRecordById(id: string): Promise<any> {
        let clienteFormatado = model.findRecordById(id);

        //TODO: formatar retorno

        return clienteFormatado;
    };
};

export default ClientesController;
