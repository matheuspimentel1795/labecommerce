import { User } from "../classes/User";
import { DataBase } from "./DataBase";

type userdb ={
    id:number,
    name:string,
    email:string,
    age:number
}

export class UserDataBase extends DataBase{
    private TABLE_NAME="user"
    async create(user:User){
        await DataBase.connection(this.TABLE_NAME)
        .insert(user)
    }
    async getAll(){
        const usersDB:userdb[] = await DataBase.connection(this.TABLE_NAME).select() 
        return usersDB.map((user)=>{
            return new User(user.name,user.email,user.age,user.id)
        })
    }
}