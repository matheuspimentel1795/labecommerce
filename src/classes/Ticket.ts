import { Product } from "./Product"


export class Ticket extends Product{
    id?:number
    origin: string
    destiny:string
    constructor(name:string,description:string,price:number,origin:string,destiny:string,id?:number){
        super(name,description,price)
        this.origin=origin
        this.destiny=destiny  
   
    }
}