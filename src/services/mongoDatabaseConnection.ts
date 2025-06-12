
import { Collection, Db, MongoClient } from 'mongodb';

class MongoDatabaseConnection {

    private client: MongoClient;
    private database: Db;
    collection: Collection;

    constructor(collection: string){
        this.client = new MongoClient('mongodb+srv://admin:admin@cluster0.b7qghol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        this.database = this.client.db("API-AS-Database");
        this.collection = this.database.collection(collection);
    };

};


export default MongoDatabaseConnection;