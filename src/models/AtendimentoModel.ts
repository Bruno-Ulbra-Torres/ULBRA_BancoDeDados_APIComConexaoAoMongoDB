import { Collection, Db } from "mongodb";
import databaseService from "../services/databaseService.ts";
import IAtendimentoModel from "../interfaces/models/IAtendimentoModel.ts";

const db:Db = databaseService.connection.db(`${process.env.DB_NAME}`);
const collection: Collection = db.collection("atendimentos");

const atendimentoModel: IAtendimentoModel = {
    
    findAtendimentos: async function (): Promise<Array<any>> {
        return collection.find().toArray();
    },

};
export default atendimentoModel;