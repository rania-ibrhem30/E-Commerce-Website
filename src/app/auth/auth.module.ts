import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegsiterComponent } from './components/regsiter/regsiter.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { VerifyComponent } from './components/verify/verify.component';
import { RestnewpasswordComponent } from './components/restnewpassword/restnewpassword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegsiterComponent,
    ForgetpasswordComponent,
    VerifyComponent,
    RestnewpasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    RegsiterComponent,
    ForgetpasswordComponent,
    VerifyComponent,
  ],
  providers: [CookieService],
})
export class AuthModule {}
