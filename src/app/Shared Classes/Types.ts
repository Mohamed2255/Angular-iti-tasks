export interface IProduct
{
    	ID:number
        Name:string
        Quantity:number
        Price:number
    	Img:string


}
export interface ICategory
{
    ID:number
    Name:string
}
export interface IUser
{
    	
        name:string
        username:string
       email:string
}
export interface IPosts
{
    	
        id:number
        title:string
        body:string
}
export class Register
{
    constructor(
    public name:string,
    public password:string,
    public confirmpassword:string,
    public social:string){
    }
}
export class Login
{
    constructor(
    public email:string,
    public password:string,
  ){
    }
}


export enum DiscountOffers 
{
   nodisaccount="No Discount",
   disaccount="15%",
    
}