import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDivMenuModule } from 'src/app/components/home-div-menu/home-div-menu.module';
import { HomeAComponent } from './home-layout/home-a/home-a.component';
import { HomeBComponent } from './home-layout/home-b/home-b.component';
import { HomeCComponent } from './home-layout/home-c/home-c.component';
import { HomeDComponent } from './home-layout/home-d/home-d.component';
import { HomeEComponent } from './home-layout/home-e/home-e.component';
import { HomeFComponent } from './home-layout/home-f/home-f.component';
import { HomeGComponent } from './home-layout/home-g/home-g.component';
import { HomeHComponent } from './home-layout/home-h/home-h.component';
import { HomeIComponent } from './home-layout/home-i/home-i.component';
import { HomeJComponent } from './home-layout/home-j/home-j.component';
import { HomeKComponent } from './home-layout/home-k/home-k.component';
import { HomeLComponent } from './home-layout/home-l/home-l.component';
import { HomeMComponent } from './home-layout/home-m/home-m.component';
import { HomeNComponent } from './home-layout/home-n/home-n.component';
import { HomeOComponent } from './home-layout/home-o/home-o.component';
import { HomePComponent } from './home-layout/home-p/home-p.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { MyProgressbarModule } from 'src/app/components/my-progressbar/my-progressbar.module';
import { HomeSettingComponent } from './home-setting/home-setting.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSettingComponent,
    HomeAComponent,
    HomeBComponent,
    HomeCComponent,
    HomeDComponent,
    HomeEComponent,
    HomeFComponent,
    HomeGComponent,
    HomeHComponent,
    HomeIComponent,
    HomeJComponent,
    HomeKComponent,
    HomeLComponent,
    HomeMComponent,
    HomeNComponent,
    HomeOComponent,
    HomePComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeDivMenuModule,
    NgxEchartsModule,
    NgZorroAntdModule,
    TableModule,
    ProgressBarModule,
    MyProgressbarModule,
    DialogModule
  ]
})
export class HomeModule {}
