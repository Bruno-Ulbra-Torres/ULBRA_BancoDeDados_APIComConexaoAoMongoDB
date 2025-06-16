import { MongoClient, Db, Collection } from 'mongodb';
import { Request, Response } from "express";
import IDatabaseService from '../interfaces/services/IDatabaseService';

const databaseService: IDatabaseService = {

    textConnection: async function (req: Request, res: Response): Promise<void> {
        const client = new MongoClient(`${process.env.DB_URI}`);  
        try{      
            client.connect();
            res.status(200)
            .send("API Conectada ao mongo!");
            console.log("API Conectada ao mongo!");
        }
        catch(error){
            res.status(404)
            .send(`\nErro as se conectar ao mongo:\n  ${error}`);
            console.error(error);
        }
    },

    getCollection:async function (database: string, collection: string): Promise<Collection> {
        const client = new MongoClient(`${process.env.DB_URI}`);
       return client.db(database).collection(collection);
    }

};
export default databaseService;