import { Collection } from "mongodb";
import MongoDatabaseConnection from "../services/mongoDatabaseConnection.ts";


const collection: Collection = new MongoDatabaseConnection("atendimentos").collection;

export async function getAtedimentos(): Promise<Array<any>> {
    return collection.find().toArray();
};