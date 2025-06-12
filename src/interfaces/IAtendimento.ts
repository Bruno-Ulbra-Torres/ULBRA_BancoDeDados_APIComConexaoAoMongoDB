import { ObjectId } from "mongodb";
import IFuncionario from "./IFuncionario";
import IVeiculo from "./IVeiculo";
import ICliente from "./ICliente";

export default interface IAtendimento{

    _id: ObjectId;
    funcionario: IFuncionario;
    veiculo: IVeiculo;
    tipo_atendimento: "Captação de cliente" | "Atendimento de venda" | "Revisão pós-venda" | "Revisão periódica" | "Troca de óleo" | "Consulta técnica";
    cliente: ICliente;

}