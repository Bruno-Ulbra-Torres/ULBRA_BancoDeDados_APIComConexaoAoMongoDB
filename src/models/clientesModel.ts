import CollectionModel from "./collectionsModel.ts";
import ICliente from "../interfaces/documents/ICliente.ts";


class ClientesModel extends CollectionModel{

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
export default ClientesModel;