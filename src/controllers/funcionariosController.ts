import FuncionariosModel from "../models/funcionariosModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";

const model = new FuncionariosModel;

class FuncionariosController implements ICollectionController{

    collectionModel: FuncionariosModel;

    constructor(){
        this.collectionModel = new FuncionariosModel();
    }

    async findAllRecords(): Promise<Array<any>> {
        let funcionariosFormatados: Array<any> = await model.findRecords();

        //TODO: formatar retorno

        return funcionariosFormatados;
    };

    async findRecordById(id: string): Promise<any> {
        let funcionarioFormatado = model.findRecordById(id);

        //TODO: formatar retorno

        return funcionarioFormatado;
    };
};

export default FuncionariosController;
