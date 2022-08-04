import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../Services/product-service.service';
import { DiscountOffers, ICategory, IProduct } from '../Shared Classes/Types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productservice:ProductServiceService,private activeroute:ActivatedRoute,private router:Router) { }
  Discount:DiscountOffers=DiscountOffers.nodisaccount;
  Storename:string="Souq";
  StoreLogo:string="1.jpg";
  ProductList:IProduct[]=[];
  CategoryList:ICategory[]=[
    {"ID":1,"Name":"Handmade"},
    {"ID":2,"Name":"Ayhaga"}
  ];

  ClientName:string="";
  IsPurshased:boolean=true;


  ngOnInit(): void {
    //this.ProductList=this.productservice.GetAllProducts();
    //this.ProductList=this.productservice.GetProductById();
  }
 hide()
 {
  this.IsPurshased=false;
 }
 renderValues()
 {
  this.ProductList=this.productservice.GetAllProducts();
 }
 withdis()
 {
  this.router.navigate(['productswithdiscount'],{relativeTo:this.activeroute});
 }
 withoutdis()
 {
  this.router.navigate(['productswithoutdiscount'],{relativeTo:this.activeroute});
 }
}
