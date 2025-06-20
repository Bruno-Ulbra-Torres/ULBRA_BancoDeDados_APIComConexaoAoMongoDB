import IAtendimento from "../interfaces/documents/IAtendimento.ts";
import CollectionModel from "./collectionsModel.ts";
import FuncionariosController from "../controllers/funcionariosController.ts";
import VeiculosController from "../controllers/veiculosController.ts";
import ClientesController from "../controllers/clientesController.ts";
import IFuncionario from "../interfaces/documents/IFuncionario.ts";
import IVeiculo from "../interfaces/documents/IVeiculo.ts";
import ICliente from "../interfaces/documents/ICliente.ts";


class AtendimentosModel extends CollectionModel{

  private funcionario: FuncionariosController;
  private veiculo: VeiculosController;
  private cliente: ClientesController;

  constructor(){
    super();
    this.collection = "atendimentos"
    this.funcionario = new FuncionariosController();
    this.veiculo = new VeiculosController();
    this.cliente = new ClientesController();
  }

  async convertObjectIntoIAtendimento(nonFormatedObject: any): Promise<IAtendimento>{

    let atendimento: IAtendimento = {
      _id: nonFormatedObject._id? nonFormatedObject._id : "",
      funcionario: nonFormatedObject.funcionario? await this.funcionario.findRecordById(nonFormatedObject.funcionario): {} as IFuncionario,
      veiculo: nonFormatedObject.veiculo? await this.veiculo.findRecordById(nonFormatedObject.veiculo): {} as IVeiculo,
      tipo_atendimento: nonFormatedObject.tipo_atendimento? nonFormatedObject.tipo_atendimento: "",
      cliente: nonFormatedObject.cliente? await this.cliente.findRecordById(nonFormatedObject.cliente): {} as ICliente
    }

    return atendimento;
  }


};
export default AtendimentosModel;