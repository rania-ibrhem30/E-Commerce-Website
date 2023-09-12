import { Component, DoCheck } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {
 
  cartproducts: any []=[];
 
ngDoCheck(): void {
  if("cart" in localStorage){
    this.cartproducts =JSON.parse(localStorage.getItem("cart")!)
    console.log(this.cartproducts)

  }
}
  constructor( private cart:CartService){}
  Cartpro(){
    if("cart" in localStorage){
      this.cartproducts =JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cartproducts)

    }

  }

  ngOnInit() {
    this.Cartpro()
  }

}
