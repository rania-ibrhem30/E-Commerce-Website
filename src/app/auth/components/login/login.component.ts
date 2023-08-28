import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formData2 = {
    email: '',
    password: '',
  };
  user: any;
  loggedIn: any;
  authService: any;
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _cookies: CookieService
  ) {}

  loginuser(form: any) {
    if (form.valid) {
      this._auth.login(this.formData2).subscribe((res: any) => {
        console.log(res);
        if (res.token) {
          this._cookies.set('token', res.token);
          this._router.navigate(['/home']);
        }
      });
    }
  }

  ngOnInit() {
    this.authService.authState.subscribe((user: any) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }
}
