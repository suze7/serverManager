import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDivMenuComponent } from './home-div-menu.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [HomeDivMenuComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [HomeDivMenuComponent]
})
export class HomeDivMenuModule { }
