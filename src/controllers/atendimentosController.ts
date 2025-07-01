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
        let consulta = await this.service.findRecords();
        let consultaFormatada: Array<any> = [];
        consulta.forEach( async item =>{
            consultaFormatada.push( await this.service.convertObjectIntoIAtendimento(item));
        });

        if(consulta){
            return consultaFormatada;
        }

        return [] 
    };
    async findRecordById(id: string): Promise<any> {
        let consulta = await this.service.findRecordById(id); 
        return await this.service.convertObjectIntoIAtendimento(consulta);
    };
};

export default AtendimentosController;
