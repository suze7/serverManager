import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDivMenuModule } from 'src/app/components/home-div-menu/home-div-menu.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeDivMenuModule
  ]
})
export class HomeModule { }
