import { Request, Response } from "express";
import { User } from "../classes/User";
import { UserDataBase } from "../dataBase/UserDataBase";
import { CustomError } from "../error/CustomError";


export const getUser = async(req:Request,res:Response):Promise<void>=>{
    try{
        const user=new UserDataBase()
        const userList = await user.getAll()
        if(userList.length===0){
            throw new CustomError(404,"Nenhum usuário Cadastrado!")
        }
        res.status(200).send(userList)
    }
    catch(error){
        res.status(error.statusCode || 400)
        .send(error.message || "error inesperado")
    }
}
