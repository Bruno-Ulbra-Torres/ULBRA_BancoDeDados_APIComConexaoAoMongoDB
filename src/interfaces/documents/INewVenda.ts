import { ObjectId } from "mongodb";
import { Date } from "mongoose";
import IVeiculo from "./INewVeiculo";
import IFuncionario from "./INewFuncionario";
import ICliente from "./INewCliente";

export default interface INewVenda{

    _id: ObjectId;
    data: Date;
    veiculo: IVeiculo;
    vendedor: IFuncionario;
    cliente: ICliente;

}