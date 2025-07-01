
import IVeiculo from "./IVeiculo";
import IFuncionario from "./IFuncionario";
import ICliente from "./ICliente";

export default interface IVenda{

    _id: string;
    data: Date;
    veiculo: IVeiculo;
    vendedor: IFuncionario;
    cliente: ICliente;

}