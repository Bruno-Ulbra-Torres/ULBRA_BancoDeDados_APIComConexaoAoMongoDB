import CollectionModel from "./collectionsModel.ts";
import IFuncionario from "../interfaces/documents/IFuncionario.ts";

class FuncionariosModel extends CollectionModel{

  constructor(){
    super();
    this.collection = "funcionarios"
  }

  convertObjectIntoIFuncionario(nonFormatedObject: any): IFuncionario {

    let funcionario: IFuncionario = {
      _id: nonFormatedObject._id? nonFormatedObject._id : "",
      nome: nonFormatedObject.nome? nonFormatedObject.nome : "",
      cargo: nonFormatedObject.cargo? nonFormatedObject.cargo : ""
    }

    return funcionario;
  }


};
export default FuncionariosModel;