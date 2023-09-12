import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SubcategComponent } from './component/subcateg/subcateg.component';
import { ToastModule } from 'primeng/toast';


console.warn("shared loaded");

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'subgate/:id', component: SubcategComponent },

]

@NgModule({
  declarations: [HomeComponent, FooterComponent, NavbarComponent, SubcategComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule,ToastModule],
  exports: [HomeComponent, FooterComponent, NavbarComponent],
})
export class SharedModule {}
