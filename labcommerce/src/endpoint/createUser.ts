import { Request,Response } from "express";
import { User } from "../classes/User";
import { UserDataBase } from "../dataBase/UserDataBase";
import { CustomError } from "../error/CustomError";


export const createUser = async(req:Request,res:Response):Promise<void>=>{
    try{
        const {name,email,age}=req.body
        const user=new User(name,email,age)
        if(!name || !email || !age){
            throw new CustomError(406,"Dados incompletos")
        }
        const userDataBase = new UserDataBase()
        const getAll = await userDataBase.getAll()
        const result = getAll.filter((x)=>{
            return x.email===email
        })
        if(result.length>0){
            throw new CustomError(409, "email já cadastrado!")
        }
        await userDataBase.create(user)
        res.status(200).send("Usuário cadastrado!")
    }
    catch(error:any){
        res.status(error.statusCode || 400)
        .send( error.message || "erro inesperado!")
    }
}
