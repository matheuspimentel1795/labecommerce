
export class Product{
    id?:number
    name:string
    description:string
    price:number
    constructor(name:string,description:string,price:number,id?:number){
        this.name=name,
        this.description=description,
        this.price=price
        this.id=id
    }
}