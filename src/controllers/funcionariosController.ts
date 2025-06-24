import FuncionariosService from "../services/funcionariosService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IFuncionario from "../interfaces/documents/IFuncionario.ts";

const service = new FuncionariosService;

class FuncionariosController implements ICollectionController{

    collectionservice: FuncionariosService;

    constructor(){
        this.collectionservice = new FuncionariosService();
    }

    async findAllRecords(): Promise<Array<IFuncionario>> {
        let funcionarios: Array<any> = await service.findRecords();
        let funcionariosFormatados: Array<IFuncionario> = [];
        
        funcionarios.forEach(item => funcionariosFormatados.push(service.convertObjectIntoIFuncionario(item)));
      
        return funcionariosFormatados;
    };

    async findRecordById(id: string): Promise<IFuncionario> {
        return service.convertObjectIntoIFuncionario(await service.findRecordById(id));
    };
};

export default FuncionariosController;
