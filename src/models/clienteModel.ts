import { Collection } from "mongodb";
import IClientesModel from "../interfaces/models/IClientesModel.ts";
import databaseService from "../services/databaseService.ts";

let collection: string = "clientes";

const clientesModel: IClientesModel = {
    
    findClientes: async function (): Promise<Array<any>> {
        let clientes: Collection = await databaseService.getCollection(`${process.env.DB_NAME}`, collection);
        return await clientes.find().toArray();
    },

};
export default clientesModel;