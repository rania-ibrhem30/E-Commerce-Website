import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    FormsModule
  ],
  exports:[
    ProductDetailsComponent,
    ToastModule,
    CheckoutComponent
  ],
  providers:[MessageService]
})
export class CartModule { }
