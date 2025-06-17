import { Double, ObjectId } from "mongodb";

export default interface INewVeiculo{

    _id: ObjectId;
    modelo: string;
    valor: Double;

}