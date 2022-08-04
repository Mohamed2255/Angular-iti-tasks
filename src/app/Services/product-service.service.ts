import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes/Types';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  ProductList=[
    {"ID":1,"Name":"Product1","Quantity":5,"Price":1000,"Img":"1.jpg"},
    {"ID":2,"Name":"Product2","Quantity":2,"Price":4000,"Img":"1.jpg"},
    {"ID":3,"Name":"Product3","Quantity":7,"Price":3000,"Img":"1.jpg"}
  ]
  CarList=[
    {"ID":1,"Name":"car1"},
    {"ID":2,"Name":"car2"},
    {"ID":3,"Name":"car3"},
  ]
 
  GetAllProducts()
  {
    return this.ProductList;
  }
  Get(carname:string)
  {
    
  }
  GetProductById(prdId:number) 
  {
    if (prdId==null||typeof prdId!=='number') {
      return null;
    }
    return this.ProductList.filter(c=>c.ID==prdId)
  }
}
