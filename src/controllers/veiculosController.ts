import VeiculosService from "../services/veiculosService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";

const service = new VeiculosService;

class VeiculosController implements ICollectionController{

    private service: VeiculosService;

    constructor(){
        this.service = new VeiculosService();
    }

       async findAllRecords(): Promise<Array<any>> {
        let consulta = await this.service.findRecords();
        let consultaFormatada: Array<any> = [];
        consulta.forEach(  item =>{
            consultaFormatada.push(  this.service.convertObjectIntoIVeiculo(item));
        });

        if(consulta){
            return consultaFormatada;
        }

        return [] 
    };
    async findRecordById(id: string): Promise<any> {
        let consulta = await this.service.findRecordById(id); 
        return  this.service.convertObjectIntoIVeiculo(consulta);
    };
};

export default VeiculosController;
