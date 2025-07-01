import AtendimentosService from "../services/atendimentosService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IAtendimento from "../interfaces/documents/IAtendimento.ts";

const service = new AtendimentosService;

class AtendimentosController implements ICollectionController{

    private service: AtendimentosService;

    constructor(){
        this.service = new AtendimentosService();
    }

    async findAllRecords(): Promise<Array<any>> {
        return await this.service.findRecords();
    };
    async findRecordById(id: string): Promise<any> {
        return await this.service.findRecordById(id); 
    };
};

export default AtendimentosController;
