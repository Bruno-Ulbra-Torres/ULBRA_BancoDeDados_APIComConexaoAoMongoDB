import { ObjectId } from "mongodb";
import { Date } from "mongoose";
import IVeiculo from "./IVeiculo";
import IFuncionario from "./IFuncionario";
import ICliente from "./ICliente";

export default interface IVenda{

    _id: ObjectId;
    data: Date;
    veiculo: IVeiculo;
    vendedor: IFuncionario;
    cliente: ICliente;

}