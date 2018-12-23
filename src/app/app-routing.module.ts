import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';
import { MonitorScreenComponent } from './pages/monitor-screen/monitor-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monitorScreen',
    pathMatch: 'full'
  },
  {
    path: 'monitorScreen',
    component: MonitorScreenComponent
  },
  { path: '**', component: IndexLayoutComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
