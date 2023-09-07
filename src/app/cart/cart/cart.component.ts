import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  [x: string]: any;
  cartproducts: any []=[];
  total:any = 0
  emptyarray:boolean=false

  constructor( private _messageService:MessageService , private cart:CartService , private router:Router){}
  Cartpro(){
    if("cart" in localStorage){
      this.cartproducts =JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cartproducts)

      this.getTotalcart();
    }

  }
  
  getTotalcart(){
    this.total=0
    for(let r in this.cartproducts){
      this.total += this.cartproducts[r].price * this.cartproducts[r].quantity
      console.log(this.total)
    }
    return this.total
  }
  puls(index:number){
 this.cartproducts[index].quantity++
   this.getTotalcart()
 localStorage.setItem("cart",JSON.stringify(this.cartproducts))

  }
  mins(index:number){
    this.cartproducts[index].quantity--
    this.getTotalcart()

    localStorage.setItem("cart",JSON.stringify(this.cartproducts))


  }
 
  ngOnInit() {
    this.Cartpro();
  }
  deleteItem(index: number) {
    this.cartproducts.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartproducts));
  }
  clearcart(){
    this.cartproducts =[]
    this.getTotalcart()
  }
 
 
 
  getResponseFromService() {
    this.cart.handleRequest().subscribe(
      response => {
       this.router.navigate(['/checkout'])
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

  
}
