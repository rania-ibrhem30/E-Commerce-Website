import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  formData4 = {
    email: '',
    newpassword: '',
  };
  constructor(private auth: AuthService, private router: Router) {}
  resetpass(form: any) {
    if (form.valid) {
      this.auth.restpassword(this.formData4).subscribe((res: any) => {
        console.log(res);
      });
    }
  }
}
