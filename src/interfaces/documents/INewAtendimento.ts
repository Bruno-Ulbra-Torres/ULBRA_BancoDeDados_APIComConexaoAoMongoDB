import { ObjectId } from "mongodb";
import IFuncionario from "./INewFuncionario";
import IVeiculo from "./INewVeiculo";
import ICliente from "./INewCliente";

export default interface INewAtendimento{

    _id: ObjectId;
    funcionario: IFuncionario;
    veiculo: IVeiculo;
    tipo_atendimento: "Captação de cliente" | "Atendimento de venda" | "Revisão pós-venda" | "Revisão periódica" | "Troca de óleo" | "Consulta técnica";
    cliente: ICliente;

}