

export default interface IFuncionario{

    _id: string;
    nome: string;
    cargo: "Gerente" | "Vendedor" | "Atendente" | "Mecânico";

}