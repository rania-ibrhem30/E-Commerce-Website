import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent {
  data = {
    email: '',
  };

  constructor(private _auth: AuthService, private router: Router) {}

  forget(form: any) {
    this._auth.forgetpass(this.data).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/Verify']);
    });
  }
}
