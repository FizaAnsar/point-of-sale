export interface SignUp{
    name:string,
    phone:number,
    email:string,
    password:string
}

export interface SignIn{
    email:string,
    password:string
}

export class User {
    constructor(
       public  email:string,
       public  password:string
    ){}
}