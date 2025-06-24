import { MongoClient, Collection, ObjectId } from 'mongodb';

class DatabaseService {

    protected collection: string = "";

    async findRecords(): Promise<Array<any>> { 
        let records: Collection = await DatabaseService.getCollection(`${process.env.DB_NAME}`, this.collection);
        return await records.find().toArray();
    };

    async findRecordById(id: string): Promise<any> {
        let records: Collection = await DatabaseService.getCollection(`${process.env.DB_NAME}`, this.collection);
        let list: Array<any> = await records.find({ _id: new ObjectId(id) }).toArray();
        return list[0];
    };

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