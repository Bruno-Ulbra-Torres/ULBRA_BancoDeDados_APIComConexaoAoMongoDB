import { Collection, ObjectId } from "mongodb";
import DatabaseService from "../services/databaseService.ts";


abstract class CollectionModel{

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

}

export default CollectionModel;