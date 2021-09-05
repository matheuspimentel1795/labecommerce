import { Request, Response } from "express";
import { Purchase } from "../classes/Purchase";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { PurchaseDataBase } from "../dataBase/PurchaseDataBase";
import { CustomError } from "../error/CustomError";

export const createPurchase = async(req:Request,res:Response):Promise<void>=>{
    try{
        const {productID, userID,quantity}=req.body
        const product = new ProductDataBase()
        const productList = await product.getAll()
        const productPrice = productList.find((x)=>{
            return x.id===productID
        })

        if(!productPrice){
            throw new CustomError(406, "O id de produto inserido não existe")
        }
        const total = productPrice.price*quantity
        const purchase=new Purchase(productID, userID,quantity,total)
        const purchaseDataBase = new PurchaseDataBase()
        await purchaseDataBase.create(purchase)
        res.status(200).send("Compra cadastrada!")
    }
    catch(error){
        res.status(error.statusCode || 400)
        .send( error.message || "erro inesperado!")
    }
}