
import { MongoClient } from 'mongodb';

class MongoConnection {

    protected client: MongoClient = new MongoClient('mongodb+srv://admin:admin@cluster0.b7qghol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
   
    constructor(){};

    async connectDB(): Promise<void> {
        try{      
            await this.client.connect(); 
        }
        catch(error){
            console.error("\nErro as se conectar ao mongo:\n ", error);
        }
    };

    

};


export default MongoConnection;