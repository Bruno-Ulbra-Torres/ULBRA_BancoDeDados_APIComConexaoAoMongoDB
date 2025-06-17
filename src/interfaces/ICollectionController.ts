import CollectionModel from "../../models/collectionModel";

export default interface ICollectionController{

    findAllRecords(): Promise<Array<any>>;

    findRecordById(id: string): Promise<any> ;

}
