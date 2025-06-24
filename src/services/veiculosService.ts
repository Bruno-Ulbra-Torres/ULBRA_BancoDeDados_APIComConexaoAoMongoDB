
import IVeiculo from "../interfaces/documents/IVeiculo.ts";
import DatabaseService from "./databaseService.ts";

class VeiculosService extends DatabaseService{

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
export default VeiculosService;