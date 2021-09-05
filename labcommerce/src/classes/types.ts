
export type productsArray={
    name:string,
    description:string,
    price:number
    id:number
}

export type tripArray={
    id:number,
    name:string,
    description: string,
    price: number,
    origin: string,
    destiny: string
}

export type purchaseArray = {
    id_product:number
    id_user: number
    quantity:number
    total:number
}