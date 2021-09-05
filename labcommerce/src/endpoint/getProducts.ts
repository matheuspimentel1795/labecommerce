import { Request, Response } from "express";
import { Product } from "../classes/Product";
import { productsArray } from "../classes/types";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { CustomError } from "../error/CustomError";


export const getProducts = async(req:Request,res:Response):Promise<void>=>{
    try{
        const product = new ProductDataBase()
        const productsArray:productsArray[] = await product.getAll()
        const productList = productsArray.map((x)=>{
            return new Product(x.name,x.description,x.price,x.id)
        })
        if(productList.length===0){
            throw new CustomError(404,"Nenhum produto encontrado")
        }
        res.status(200).send(productList)
    }
    catch(error){
        res.status(error.statusCode || 400)
        .send(error.message || "error inesperado")
    }
}