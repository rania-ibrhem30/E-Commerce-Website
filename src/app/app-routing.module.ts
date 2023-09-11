import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { SubcategComponent } from './shared/component/subcateg/subcateg.component';
import { ProfileComponent } from './auth/components/profile/profile.component';

const routes: Routes = [
  {path:'home',
   loadChildren:()=> import('./shared/shared.module').then((m)=>m.SharedModule)},
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
