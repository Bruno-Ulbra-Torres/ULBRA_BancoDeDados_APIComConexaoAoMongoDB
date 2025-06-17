import { MongoClient, Collection } from 'mongodb';

class DatabaseService {

    static async textConnection (): Promise<void> {
        const client = new MongoClient(`${process.env.DB_URI}`);  
        try{      
            client.connect();
        }
        catch(error){
            console.error(error);
        }
    };

    static async getCollection(database: string, collection: string): Promise<Collection> {
        const client = new MongoClient(`${process.env.DB_URI}`);
       return client.db(database).collection(collection);
    };

};
export default DatabaseService;