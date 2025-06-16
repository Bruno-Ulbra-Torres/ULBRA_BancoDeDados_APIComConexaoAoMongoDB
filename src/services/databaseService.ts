import { MongoClient, Db } from 'mongodb';
import { Request, Response } from "express";
import IDatabaseService from '../interfaces/services/IDatabaseService';

const service: MongoClient = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b7qghol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

const databaseService: IDatabaseService = {

    connection: service,
 
    connectDB: async function (req: Request, res: Response): Promise<void> {
        try{      
            await service.connect();
            res.status(200)
            .send("API Conectada ao mongo!");
        }
        catch(error){
            res.status(404)
            .send(`\nErro as se conectar ao mongo:\n  ${error}`);
        }
    },

    closeDB: async function (req: Request, res: Response): Promise<void> {
        try{      
            await service.connect();
            res.status(200)
            .send("API desconectada da base de dados no mongo!");
        }
        catch(error){
            res.status(404)
            .send(`\nErro as se fechar o banco de dados ao mongo:\n  ${error}`);
        }
    },

};
export default databaseService;