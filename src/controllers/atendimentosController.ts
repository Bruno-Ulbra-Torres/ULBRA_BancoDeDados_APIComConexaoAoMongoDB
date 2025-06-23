import AtendimentosService from "../services/atendimentosService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import IAtendimento from "../interfaces/documents/IAtendimento.ts";

const service = new AtendimentosService;

class AtendimentosController implements ICollectionController{

    collectionService: AtendimentosService;

    constructor(){
        this.collectionService = new AtendimentosService();
    }

    async findAllRecords(): Promise<Array<IAtendimento>> {
        let atendimentos: Array<any> = await service.findRecords();
        let atendimentosFormatados: Array<IAtendimento> = [];

        atendimentos.forEach(async (item) => atendimentosFormatados.push(await service.convertObjectIntoIAtendimento(item)));

        return atendimentosFormatados;
    };

    async findRecordById(id: string): Promise<IAtendimento> {
      return await service.convertObjectIntoIAtendimento(await service.findRecordById(id)); 
    };
};

export default AtendimentosController;
