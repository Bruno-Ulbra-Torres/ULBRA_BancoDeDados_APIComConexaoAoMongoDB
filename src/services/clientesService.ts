import ICliente from "../interfaces/documents/ICliente.ts";
import DatabaseService from "./databaseService.ts";


class ClienteService extends DatabaseService{

  constructor(){
    super();
    this.collection = "clientes"
  }

  convertObjectIntoICliente(nonFormatedObject: any): ICliente {

    let cliente: ICliente = {
      _id: nonFormatedObject._id? nonFormatedObject._id : "",
      nome: nonFormatedObject.nome? nonFormatedObject.nome : "",
      telefone: nonFormatedObject.telefone? nonFormatedObject.telefone : ""
    }

    return cliente;
  }


};
export default ClienteService;