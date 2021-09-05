import { Request, Response } from "express";
import { Ticket } from "../classes/Ticket";
import { ticketDataBase } from "../dataBase/TicketDataBase";
import { CustomError } from "../error/CustomError";

export const createTrip = async(req:Request,res:Response):Promise<void>=>{
    try{
        const {name, description, price, origin , destination}=req.body
        if(!name || !description || !price || !origin || !destination){
            throw new CustomError(406,"Parâmetros faltando!") 
        }

        const trip = new Ticket(name, description, price, origin , destination)
        const tripDataBase=new ticketDataBase()
        await tripDataBase.create(trip)
        res.status(200).send("Viagem Cadastrada com sucesso!")
    }
    catch(error){
        res.status(error.statusCode || 400)
        .send( error.message || "erro inesperado!")
    }
}