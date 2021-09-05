import { Product } from "../classes/Product";
import { productsArray } from "../classes/types";
import { DataBase } from "./DataBase";



export class ProductDataBase extends DataBase{
    private TABLE_NAME="product"
    async create(product:Product){
        await DataBase.connection(this.TABLE_NAME)
        .insert(product)
    }
    async getAll(){
        return DataBase.connection(this.TABLE_NAME).select()
       
    }
    async ordernar(type:string){
       const result = DataBase.connection.raw(`
        SELECT * FROM ${this.TABLE_NAME}
        ORDER BY price ${type}
        `)
      
        return result
    }
    
}
