
import { MongoClient } from 'mongodb';

const connectDB: Function  = async (): Promise<void> => {

    const STRING_CONNECTION: string = `mongodb+srv://admin:admin@cluster0.b7qghol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    // const STRING_CONNECTION: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.b7qghol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try{
        const client = new MongoClient(STRING_CONNECTION);
        await client.connect();
        console.log("Conectado ao mongo");
    }
    catch(error){
        console.error("\nErro as se conectar ao mongo:\n ", error);
        process.exit(1);

    }
}

export default connectDB;