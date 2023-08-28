import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-restnewpassword',
  templateUrl: './restnewpassword.component.html',
  styleUrls: ['./restnewpassword.component.scss'],
})
export class RestnewpasswordComponent {
  formData3 = {
    currentPassword: '',
    password: '',
    rePassword: '',
  };
  passwordHasError: boolean = false;

  constructor(private auth: AuthService) {}
  changepassword(form: any) {
    this.auth.changepass(this.formData3).subscribe((res) => {});
  }

  validatePaaword(confirmPassVal: any, passVal: any) {
    passVal !== confirmPassVal
      ? (this.passwordHasError = true)
      : (this.passwordHasError = false);
  }
}
