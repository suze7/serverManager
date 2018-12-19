import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { IndexLayoutComponent } from './layouts/index-layout/index-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
      }
    ]
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
