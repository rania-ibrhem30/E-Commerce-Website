import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductsService } from '../../sevices/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcateg',
  templateUrl: './subcateg.component.html',
  styleUrls: ['./subcateg.component.scss']
})
export class SubcategComponent implements OnInit,DoCheck {
  getSubCategories: any []=[];
  id:any
  empty:boolean= false
  constructor( private __products:ProductsService , private route:ActivatedRoute){
    this.id=route.snapshot.paramMap.get("id")


  }
  gateById(id:any){
    this.__products.getSubCategories(id).subscribe((res:any)=>{
      console.log(res)
      this.getSubCategories=res.data
      console.log(this.getSubCategories)
      
   
  });

    
  }
  ngOnInit():void {
    this.gateById(this.id)
  }

  ngDoCheck(){

  }
}
