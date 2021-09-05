import { Request, Response } from "express";
import { Product } from "../classes/Product";
import { ProductDataBase } from "../dataBase/ProductDataBase";
import { CustomError } from "../error/CustomError";


export const createProduct=async(req:Request,res:Response):Promise<void>=>{
    try{
        const {name,description,price}=req.body
        if(!name || !description || !price){
            throw new CustomError(406,"Dados incompletos")
        }
        const product = new Product(name,description,price)
        const productDataBase= new ProductDataBase()
        const productList = productDataBase.getAll()
        const findProduct = (await productList).filter((x)=>{
            return x.name===name
        })
        if(findProduct.length>0){
            throw new CustomError(409,"Produto já cadastrado anteriormente!")
        }
        await productDataBase.create(product)
        res.status(200).send("Produto cadastrado com sucesso!")
    }
    catch(error:any){
        res.status(error.statusCode || 400)
        .send( error.message || "erro inesperado!")
    }
}