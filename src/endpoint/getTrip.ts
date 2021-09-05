import { Request, Response } from "express";
import { Ticket } from "../classes/Ticket";
import { tripArray } from "../classes/types";
import { ticketDataBase } from "../dataBase/TicketDataBase";
import { CustomError } from "../error/CustomError";

export const getTrip = async(req:Request,res:Response):Promise<void>=>{
    try{
        const trip = new ticketDataBase()
        const tripArray:tripArray[] =await trip.getAll() 
         const tripMap = tripArray.map((x)=>{
            return new Ticket(x.name,x.description,x.price,x.origin,x.destiny,x.id)
         })
         if(tripMap.length===0){
             throw new CustomError(404,"Nenhum produto encontrado")
         }
        res.status(200).send(tripArray)
    }
    catch(error){
        res.status(error.statusCode || 400)
        .send(error.message || "error inesperado")
    }
}

