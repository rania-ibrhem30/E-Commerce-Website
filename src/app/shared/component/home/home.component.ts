import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../sevices/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit,DoCheck {
  data: any[] = [];
  men:any[]=[];
  cartproducts:any []=[];
  Categories:any[]=[];
  getSubCategories:any[]=[]
  brands:any[]=[]
  addbutton:Boolean =false
  amount=0;
  rania:[]=[];
  Electronics:any[]=[];
  Women:any[]=[];
  cartItemCount: number = 0; // Initialize the count to 0
  quantityInput:any
  Subscriptions:Subscription[] = []
  id: string | null;
  constructor(private _products: ProductsService, private router: Router , private _messageService:MessageService ,private route:ActivatedRoute ) {
    this.id=route.snapshot.paramMap.get("id")

  }
  ngDoCheck(): void {
    console.log(this.Subscriptions)
  }
  get() {
      let subgetall= this._products.getallProducts().subscribe((res: any) => {
      console.log(res.data);
      const data  = res.data
      console.log(data);
        this.Women= data.filter((product:  any)=> product.category.name ==="Women's Fashion")
        console.log(this.Women)
        this.men= data.filter((product:  any)=> product.category.name ==="Men's Fashion")
        console.log(this.men)
        this.Electronics= data.filter((product:  any)=> product.category.name ==="Electronics")
        console.log(this.Electronics)
    });
    this.Subscriptions.push(subgetall)
  }

 
  ngOnInit() {
    this.get();
    this.getGate();
    this.getimgbrands();

  }
  addToCart(item: any, quantity: string) {
    const amount = 0; 
    item.amount = amount;
    item.quantity = +quantity;
  
    if (!quantity || +quantity == 0) {
      return; 
    }
  
    if ("cart" in localStorage) {
      this.cartproducts = JSON.parse(localStorage.getItem("cart")!);
      const exist = this.cartproducts.find((cartItem: any) => cartItem.id === item.id);
      if (exist) {
        alert("Product is already in your cart")
        this.showError();
        return; 
      }
  
      this.showSuccess();
      this.addbutton = false;
  
      this.cartproducts.push(item);
      localStorage.setItem("cart", JSON.stringify(this.cartproducts));
  
      // Send the request here using the updated cart data
      // ...
    } else {
      this.cartproducts.push(item);
      localStorage.setItem("cart", JSON.stringify(this.cartproducts));
      this.showSuccess();
  
      
    }
  }
  
  
 
  showSuccess() {
    this._messageService.add({
      severity: 'Success',
      summary: 'Success',
      detail: 'Your product is added in cart ',
    });
  }

  showError() {
    this._messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: `Product is already in your cart`,
    });
  }
  checkQuantity(quantityInput: HTMLInputElement) {
    const parsedQuantity = parseInt(quantityInput.value, 10);
  
    if (parsedQuantity === 0 || parsedQuantity < 1) {
      quantityInput.value = '1';
    }
  }
  getGate(){
     let subdateg = this._products.getCategories().subscribe((res:any)=>{
    this.Categories =res.data 

    })
    this.Subscriptions.push(subdateg)
  }
  getimgbrands(){
      let getbrands= this._products.getbrands().subscribe((res:any)=>{
       this.brands=res.data
    })
    this.Subscriptions.push(getbrands)

  }

 






  ngOnDestroy() {
    for(let Subscription of this.Subscriptions){
      Subscription.unsubscribe()
    }
  }


  
  
    







}

  

