import ClientesService from "../services/clientesService.ts";
import ICollectionController from "../interfaces/ICollectionController.ts";
import ICliente from "../interfaces/documents/ICliente.ts";

const service = new ClientesService;

class ClientesController implements ICollectionController{

     private service: ClientesService;

    constructor(){
        this.service = new ClientesService();
    }

        async findAllRecords(): Promise<Array<any>> {
        let consulta = await this.service.findRecords();
        let consultaFormatada: Array<any> = [];
        consulta.forEach( item =>{
            consultaFormatada.push( this.service.convertObjectIntoICliente(item));
        });

        if(consulta){
            return consultaFormatada;
        }

        return [] 
    };
    async findRecordById(id: string): Promise<any> {
        let consulta = await this.service.findRecordById(id); 
        return this.service.convertObjectIntoICliente(consulta);
    };
};

export default ClientesController;
