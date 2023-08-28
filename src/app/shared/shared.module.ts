import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, FooterComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HomeComponent, FooterComponent, NavbarComponent],
})
export class SharedModule {}
