import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:CartComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  { path: 'Details/:id', component:ProductDetailsComponent },

]


@NgModule({
  declarations: [
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ProductDetailsComponent,
    ToastModule,
    CheckoutComponent,
  ],
  providers:[MessageService]
})
export class CartModule { }
