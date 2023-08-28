import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../sevices/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private _products: ProductsService, private router: Router) {}
  get() {
    this._products.getallProducts().subscribe((res: any) => {
      console.log(res);
      this.data = res.data;
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.get();
  }
}
