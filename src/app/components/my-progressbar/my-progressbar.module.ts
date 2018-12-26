import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProgressbarComponent } from './my-progressbar.component';

@NgModule({
  declarations: [MyProgressbarComponent],
  imports: [
    CommonModule
  ],
  exports: [MyProgressbarComponent]
})
export class MyProgressbarModule { }
