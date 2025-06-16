import { Collection } from "mongodb";
import IAtendimentoModel from "../interfaces/models/IAtendimentoModel.ts";
import databaseService from "../services/databaseService.ts";

let collection: string = "atendimentos";

const atendimentoModel: IAtendimentoModel = {
    
    findAtendimentos: async function (): Promise<Array<any>> {
        let atendimentos: Collection = await databaseService.getCollection(`${process.env.DB_NAME}`, collection);
        return await atendimentos.find().toArray();
    },

};
export default atendimentoModel;