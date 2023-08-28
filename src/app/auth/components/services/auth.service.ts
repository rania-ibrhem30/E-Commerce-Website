import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    private cookiesService: CookieService
  ) {}

  resgiter(formData: any) {
    return this._http.post(`${environment.apiurl}api/v1/auth/signup`, formData);
  }
  login(formData2: any) {
    return this._http.post(
      `${environment.apiurl}api/v1/auth/signin`,
      formData2
    );
  }
  forgetpass(data: any) {
    return this._http.post(
      `${environment.apiurl}api/v1/auth/forgotPasswords`,
      data
    );
  }
  sendOtp(otpValue: any) {
    let body = {
      resetCode: otpValue,
    };
    return this._http.post(
      `${environment.apiurl}api/v1/auth/verifyResetCode`,
      body
    );
  }
  changepass(formData3: any) {
    let body = {
      token: this.cookiesService.get('token'),
    };
    return this._http.put(
      `${environment.apiurl}api/v1/users/changeMyPassword`,
      body,
      formData3
    );
  }
  restpassword(formData4: any) {
    return this._http.put(
      `${environment.apiurl}api/v1/auth/resetPassword`,
      formData4
    );
  }
}
