
import ICollectionController from "../interfaces/ICollectionController.ts";
import VendasService from "../services/vendasService.ts";


class VendasController implements ICollectionController{

    private service: VendasService;

    constructor(){
        this.service = new VendasService();
    }

        async findAllRecords(): Promise<Array<any>> {
        let consulta = await this.service.findRecords();
        let consultaFormatada: Array<any> = [];
        consulta.forEach( async item =>{
            consultaFormatada.push( await this.service.convertObjectIntoIVenda(item));
        });

        if(consulta){
            return consultaFormatada;
        }

        return [] 
    };
    async findRecordById(id: string): Promise<any> {
        let consulta = await this.service.findRecordById(id); 
        return await this.service.convertObjectIntoIVenda(consulta);
    };
};

export default VendasController;
