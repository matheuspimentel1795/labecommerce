import { Ticket } from "../classes/Ticket";
import { DataBase } from "./DataBase";


export class ticketDataBase extends DataBase{
    protected TABLE_NAME="ticket"
    async create(trip:Ticket){
        await DataBase.connection(this.TABLE_NAME)
        .insert(trip)
    }
    async getAll(){
        return await DataBase.connection(this.TABLE_NAME).select()
    }
}