import { ObjectId } from "mongodb";

export default interface ICliente{

    _id: ObjectId;
    nome: string;
    telefone: string;

}