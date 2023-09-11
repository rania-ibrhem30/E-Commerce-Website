import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegsiterComponent } from './auth/components/regsiter/regsiter.component';
import { HomeComponent } from './shared/component/home/home.component';
import { ForgetpasswordComponent } from './auth/components/forgetpassword/forgetpassword.component';
import { VerifyComponent } from './auth/components/verify/verify.component';
import { RestnewpasswordComponent } from './auth/components/restnewpassword/restnewpassword.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { ProductDetailsComponent } from './cart/product-details/product-details.component';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { SubcategComponent } from './shared/component/subcateg/subcateg.component';
import { ProfileComponent } from './auth/components/profile/profile.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegsiterComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'forget', component: ForgetpasswordComponent },
  // { path: 'Verify', component: VerifyComponent },
  // { path: 'restpassword', component: RestnewpasswordComponent },
  // { path: 'reset', component: ResetPasswordComponent },
  // { path: 'reset', component: ResetPasswordComponent },
   {path:'subgate/:id',component:SubcategComponent},
   {path:'profile',component:ProfileComponent},
   {
    path: 'cart', 
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
   },
   {
    path: 'login', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
