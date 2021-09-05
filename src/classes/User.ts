
export class User{
    id?:number
    name:string
    email:string
    age:number
    constructor(name:string,email:string,age:number,id?:number){
        this.name=name,
        this.email=email,
        this.age=age
        this.id=id
    }
}