import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../sevices/products.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  cartproducts:any []=[];
  Categories:any[]=[];
  getSubCategories:any[]=[]
  addbutton:Boolean =false
  amount=0
  constructor(private _products: ProductsService, private router: Router , private _messageService:MessageService ) {}
  get() {
    this._products.getallProducts().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
      console.log(this.data);
    });
  }
 
  ngOnInit() {
    this.get();
    this.getGate();
    
  }
  addToCart(item:any ,quantity: string){
    console.log()
    const amount = 0; // Set the desired amount here

    item.amount = amount;
    item.quantity = +quantity;
        if("cart" in localStorage){
      this.cartproducts =JSON.parse(localStorage.getItem("cart")!)
      this.showSuccess();

      this.cartproducts.push(item)
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))

    }
    else{
      this.cartproducts.push(item)
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
      this.showSuccess();

    }
  }
 
  showSuccess() {
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'the product is added in cart ',
    });
  }

  showError() {
    this._messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: ``,
    });
  }
  checkQuantity(quantityInput: HTMLInputElement) {
    const parsedQuantity = parseInt(quantityInput.value, 10);
  
    if (parsedQuantity === 0 || parsedQuantity < 1) {
      quantityInput.value = '1';
    }
  }
  getGate(){
    this._products.getCategories().subscribe((res:any)=>{
    this.Categories =res.data 

    })
  }

}
