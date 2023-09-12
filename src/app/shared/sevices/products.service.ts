import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}
  getallProducts():Observable<any>  {
    return this._http.get(`${environment.apiurl}api/v1/products`);
  }
  GetspecificProduct(id:any):Observable<any> {
  return this._http.get(`${environment.apiurl}products/`+id);
  }
  getCategories():Observable<any> {
    return this._http.get(`${environment.apiurl}api/v1/categories`)
  }
  
  getSubCategories(categoryId:string):Observable<any> {
    return this._http.get(`${environment.apiurl}api/v1/categories/${categoryId}/subcategories`,{observe:'response'})
  }
  getbrands():Observable<any>{
    return this._http.get(`${environment.apiurl}api/v1/brands`)
  }

 
}
