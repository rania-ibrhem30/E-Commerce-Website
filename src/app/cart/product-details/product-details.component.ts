import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
id:any
data:any
constructor( private route:ActivatedRoute ,private _service:CartService){
  this.id=route.snapshot.paramMap.get("id")
}
getid(){
  this._service.GetspecificProduct(this.id).subscribe((res:any)=>{
    console.log(res)
    
    this.data=res
  })
}
ngOnInit():void{
this.getid();
}
}
