import { NgModule } from '@angular/core';

import { AppMenuComponent } from './app-menu.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppMenuComponent],
  imports: [FormsModule, CommonModule],
  exports: [AppMenuComponent]
})
export class AppMenuModule {}
