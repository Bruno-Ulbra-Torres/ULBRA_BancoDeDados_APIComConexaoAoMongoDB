import { MongoClient, ObjectId } from "mongodb";
import ClientesController from "../controllers/clientesController.ts";
import FuncionariosController from "../controllers/funcionariosController.ts";
import VeiculosController from "../controllers/veiculosController.ts";
import ICliente from "../interfaces/documents/ICliente.ts";
import IFuncionario from "../interfaces/documents/IFuncionario.ts";
import IVeiculo from "../interfaces/documents/IVeiculo.ts";
import IVenda from "../interfaces/documents/IVenda.ts";
import DatabaseService from "./databaseService.ts";


class VendasService extends DatabaseService{

  private funcionario: FuncionariosController;
  private veiculo: VeiculosController;
  private cliente: ClientesController;

  constructor(){
    super("vendas");
    this.funcionario = new FuncionariosController();
    this.veiculo = new VeiculosController();
    this.cliente = new ClientesController();
  }

  async convertObjectIntoIVenda(nonFormatedObject: any): Promise<IVenda>{
    let venda: IVenda = {
      _id: nonFormatedObject._id ? nonFormatedObject._id : "",
      data: nonFormatedObject.data ?new Date(nonFormatedObject.data) : new Date("00/00/00"),
      veiculo: nonFormatedObject.veiculo ? await this.veiculo.findRecordById(nonFormatedObject.veiculo): {} as IVeiculo,
      vendedor: nonFormatedObject.vendedor ? await this.funcionario.findRecordById(nonFormatedObject.vendedor): {} as IFuncionario,
      cliente: nonFormatedObject.cliente ? await this.cliente.findRecordById(nonFormatedObject.cliente): {} as ICliente
    }

    return venda;
  }

  async vendasByVendedor(id: string): Promise<any>{
    const vendas = this.getCollection();
    return vendas.find({ "vendedor": ObjectId(id) });
  }

};
export default VendasService;