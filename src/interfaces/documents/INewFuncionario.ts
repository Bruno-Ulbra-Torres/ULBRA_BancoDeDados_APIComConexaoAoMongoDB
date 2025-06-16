import { ObjectId } from "mongodb";

export default interface INewFuncionario{

    _id: ObjectId;
    nome: string;
    cargo: "Gerente" | "Vendedor" | "Atendente" | "Mecânico";

}