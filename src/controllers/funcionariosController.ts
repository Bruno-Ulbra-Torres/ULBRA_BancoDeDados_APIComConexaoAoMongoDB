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
        let consulta = await this.service.findRecords();
        let consultaFormatada: Array<any> = [];
        consulta.forEach( item =>{
            consultaFormatada.push( this.service.convertObjectIntoIFuncionario(item));
        });

        if(consulta){
            return consultaFormatada;
        }

        return [] 
    };
    async findRecordById(id: string): Promise<any> {
        let consulta = await this.service.findRecordById(id); 
        return this.service.convertObjectIntoIFuncionario(consulta);
    };
};

export default FuncionariosController;
