import { Double, ObjectId } from "mongodb";

export default interface IVeiculo{

    _id: ObjectId;
    modelo: string;
    valor: Double;

}