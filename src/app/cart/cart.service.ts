import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }
  GetspecificProduct(id:any){
    return this._http.get(`${environment.apiurl}api/v1/products/`+id);
    }
}
