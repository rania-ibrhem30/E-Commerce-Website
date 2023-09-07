import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient ,private cookieService: CookieService) { }
  GetspecificProduct(id:any){
    return this._http.get(`${environment.apiurl}api/v1/products/`+id);
    }

    handleRequest() {
      const token = this.cookieService.get('token');
      const productId = '6428ebc6dc1175abc65ca0b9';
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
      });
  
      const body = {
        productId: productId
      };
  
      return this._http.post(`${environment.apiurl}api/v1/cart`, body, { headers });
    }
  
    checkOut(formData:any){
      const token = this.cookieService.get('token');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
      });
      let shippingAddress ={
        "   ": formData.details,
        "phone": formData.phone,
        "city": formData.City
        }
       return this._http.post(`${environment.apiurl}api/v1/orders/checkout-session/642e5663fc6ec80008fc40bf?url=http://localhost:4200`,shippingAddress ,{ headers })

    }
}
