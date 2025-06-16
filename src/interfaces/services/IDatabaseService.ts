import { MongoClient } from "mongodb";

export default interface IDatabaseService{
    
    connection: MongoClient,
    
    connectDB: Function,
    closeDB: Function,

}