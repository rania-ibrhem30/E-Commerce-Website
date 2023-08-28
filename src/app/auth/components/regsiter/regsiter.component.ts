import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.scss'],
})
export class RegsiterComponent {
  formData = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',
  };
  constructor(private _auth: AuthService, private _router: Router) {}
  register(form: any) {
    if (form.valid) {
      this._auth.resgiter(this.formData).subscribe((res: any) => {
        if (res.message === 'success') {
          this._router.navigate(['/login']);
        }
        console.log(res.message);
      });
    } else {
      console.log('Invalid form');
    }
  }
}
