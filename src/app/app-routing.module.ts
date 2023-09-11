import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"shared",
   loadChildren:()=> import('./shared/shared.module').then((m)=>m.SharedModule)},
  {
    path: "cart",
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
