import { Product } from "./Product"
import { User } from "./User"

export class Purchase  {
    id_product:number
    id_user: number
    quantity:number
    total:number
    constructor(productID:number,
        userID: number,
        quantity:number,
        total:number){
            this.id_product=productID
            this.id_user=userID
            this.quantity=quantity
            this.total=total
        }
        
}