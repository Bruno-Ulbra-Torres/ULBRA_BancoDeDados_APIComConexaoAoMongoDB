import { ObjectId } from "mongodb";

export default interface INewCliente{

    _id: ObjectId;
    nome: string;
    telefone: string;

}