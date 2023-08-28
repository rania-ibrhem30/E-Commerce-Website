import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent {
  otpValue: string | any;

  constructor(private auth: AuthService, private router: Router) {}

  sendOtp() {
    this.auth.sendOtp(this.otpValue).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/restpassword']);
    });
  }
}
