import FuncionariosService from "../services/funcionariosService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IFuncionario from "../interfaces/documents/IFuncionario.ts";

const service = new FuncionariosService;

class FuncionariosController implements ICollectionController{

     private service: FuncionariosService;

    constructor(){
        this.service = new FuncionariosService();
    }

    async findAllRecords(): Promise<Array<any>> {
        return await this.service.findRecords();
    };
    async findRecordById(id: string): Promise<any> {
        return await this.service.findRecordById(id); 
    };
};

export default FuncionariosController;
