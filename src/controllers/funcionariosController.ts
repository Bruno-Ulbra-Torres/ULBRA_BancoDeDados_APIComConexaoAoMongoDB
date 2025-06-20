import FuncionariosModel from "../models/funcionariosModel.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IFuncionario from "../interfaces/documents/IFuncionario.ts";

const model = new FuncionariosModel;

class FuncionariosController implements ICollectionController{

    collectionModel: FuncionariosModel;

    constructor(){
        this.collectionModel = new FuncionariosModel();
    }

    async findAllRecords(): Promise<Array<IFuncionario>> {
        let funcionarios: Array<any> = await model.findRecords();
        let funcionariosFormatados: Array<IFuncionario> = [];
        
        funcionarios.forEach(item => funcionariosFormatados.push(model.convertObjectIntoIFuncionario(item)));
      
        return funcionariosFormatados;
    };

    async findRecordById(id: string): Promise<IFuncionario> {
        return model.convertObjectIntoIFuncionario(await model.findRecordById(id));
    };
};

export default FuncionariosController;
