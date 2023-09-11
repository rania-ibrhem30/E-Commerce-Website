import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegsiterComponent } from './components/regsiter/regsiter.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { VerifyComponent } from './components/verify/verify.component';
import { RestnewpasswordComponent } from './components/restnewpassword/restnewpassword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegsiterComponent },
  { path: 'forget', component: ForgetpasswordComponent },
  { path: 'Verify', component: VerifyComponent },
  { path: 'restpassword', component: RestnewpasswordComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'reset', component: ResetPasswordComponent },
  {path:'profile',component:ProfileComponent},

]


@NgModule({
  declarations: [
    LoginComponent,
    RegsiterComponent,
    ForgetpasswordComponent,
    VerifyComponent,
    RestnewpasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    RegsiterComponent,
    ForgetpasswordComponent,
    VerifyComponent,
    ProfileComponent
  ],
  providers: [CookieService],
})
export class AuthModule {}
