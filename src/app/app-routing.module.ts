import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegsiterComponent } from './auth/components/regsiter/regsiter.component';
import { HomeComponent } from './shared/component/home/home.component';
import { ForgetpasswordComponent } from './auth/components/forgetpassword/forgetpassword.component';
import { VerifyComponent } from './auth/components/verify/verify.component';
import { RestnewpasswordComponent } from './auth/components/restnewpassword/restnewpassword.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegsiterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forget', component: ForgetpasswordComponent },
  { path: 'Verify', component: VerifyComponent },
  { path: 'restpassword', component: RestnewpasswordComponent },
  { path: 'reset', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
