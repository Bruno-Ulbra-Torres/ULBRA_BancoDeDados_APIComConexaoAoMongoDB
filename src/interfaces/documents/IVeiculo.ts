import { Double } from "mongodb";

export default interface IVeiculo{

    _id: string;
    modelo: string;
    valor: Double;

}