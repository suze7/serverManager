import { NgModule } from '@angular/core';

import { AppMenuComponent } from './app-menu.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppMenuComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [AppMenuComponent]
})
export class AppMenuModule {}
