import { Request, Response } from "express";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { CustomError } from "../error/CustomError";


export const ordenarProduct =async(req:Request,res:Response):Promise<void>=>{
    try{
        const type = req.params.type.toUpperCase() as string
        if(type!=="ASC" && type!=="DESC"){
            throw new CustomError(406,"O parâmetro só pode ser asc ou desc")
        }
        const productDataBase=new ProductDataBase()
        const orderList = await productDataBase.ordernar(type)
        res.status(200).send(orderList[0])
    }
    catch(error){
        res.status(error.statusCode || 400)
        .send(error.message || "error inesperado")
    }
}