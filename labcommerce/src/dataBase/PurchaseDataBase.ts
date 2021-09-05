import { Purchase } from "../classes/Purchase";
import { DataBase } from "./DataBase";


export class PurchaseDataBase extends DataBase{
    TABLE_NAME="purchase"

    async create(purchase:Purchase){
        await DataBase.connection(this.TABLE_NAME)
        .insert(purchase)
    }
    async getAll(){
       return await DataBase.connection(this.TABLE_NAME).select()
    }
}