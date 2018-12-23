import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppMenuModule } from './layouts/app-menu/app-menu.module';
import { AppRoutingModule } from './app-routing.module';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { MonitorScreenComponent } from './pages/monitor-screen/monitor-screen.component';
import { NgxEchartsModule } from 'ngx-echarts';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    IndexLayoutComponent,
    MonitorScreenComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    AppMenuModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
