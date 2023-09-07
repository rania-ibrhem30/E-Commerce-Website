import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  formData = {
    Details: '',
    phone: '',
    City:'',
    FullName:''
  };
  constructor( private cart:CartService){

  }
  shippingAddress(form:any){
  if(form.valid){
    this.cart.checkOut(this.formData).subscribe((res)=>{
      console.log(res)
    })
  }
  }
}
