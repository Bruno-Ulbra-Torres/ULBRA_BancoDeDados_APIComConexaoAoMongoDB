import { ObjectId } from "mongodb";

export default interface IFuncionario{

    _id: ObjectId;
    nome: string;
    cargo: "Gerente" | "Vendedor" | "Atendente" | "Mecânico";

}