import CollectionModel from "./collectionsModel.ts";
import IVeiculo from "../interfaces/documents/IVeiculo.ts";

class VeiculosModel extends CollectionModel{

  constructor(){
    super();
    this.collection = "veiculos"
  }

  convertObjectIntoIVeiculo(nonFormatedObject: any): IVeiculo {

    let veiculo: IVeiculo = {
      _id: nonFormatedObject._id ? nonFormatedObject._id: "",
      modelo: nonFormatedObject.modelo? nonFormatedObject.modelo : "",
      valor: nonFormatedObject.valor ? nonFormatedObject.valor : ""
    }
  
    return veiculo;
  }
  

};
export default VeiculosModel;