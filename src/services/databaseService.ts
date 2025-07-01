import { MongoClient, Collection, ObjectId } from 'mongodb';

class DatabaseService {

    protected collection: string;

    constructor(collection?: string){
        this.collection = collection ? collection : "";
    }

    async findRecords(): Promise<Array<any>> { 
        let records: Collection = this.getCollection();
        return await records.find().toArray();
    };

    async findRecordById(id: string): Promise<any> {
        let records: Collection = this.getCollection();
        let list: Array<any> = await records.find({ _id: new ObjectId(id) }).toArray();
        return list[0];
    };

    async textConnection (): Promise<void> {
        const client = new MongoClient(`${process.env.DB_URI}`);  
        try{      
            client.connect();
        }
        catch(error){
            console.error(error);
        }
    };

    getCollection(): Collection {
        return new MongoClient(`${process.env.DB_URI}`).db(`${process.env.DB_NAME}`).collection(this.collection);
    };

};
export default DatabaseService;