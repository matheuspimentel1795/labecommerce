import { Request, Response } from "express";
import { Purchase } from "../classes/Purchase";
import { purchaseArray } from "../classes/types";
import { PurchaseDataBase } from "../dataBase/PurchaseDataBase";
import { CustomError } from "../error/CustomError";


export const purchaseUser = async(req:Request,res:Response):Promise<void>=>{
    try{
        const IDuser=Number(req.params.IDuser)
        if(!IDuser){
            throw new CustomError(406,"Id do usuário não digitado")
        }
        const purchaseDataBase = new PurchaseDataBase()
        const purchaseList=await purchaseDataBase.getAll()
        const purchaseByUserId = purchaseList.filter((x)=>{
            return x.id_user===IDuser
        }).map((x)=>{
            return x
        })
        res.status(200).send(purchaseByUserId)
    }
    catch(error){
        res.status(error.statusCode || 400)
        .send(error.message || "error inesperado")
    }
}