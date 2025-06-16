import IFuncionario from "./INewFuncionario";
import IVeiculo from "./INewVeiculo";
import ICliente from "./INewCliente";

export default interface IAtendimento{

    _id: string;
    funcionario: IFuncionario;
    veiculo: IVeiculo;
    tipo_atendimento: string;
    cliente: ICliente;

}