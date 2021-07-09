import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AporteFormComponent } from './component/aporte-form/aporte-form.component';



import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';

export const Approutes: Routes = [
  {path: 'login',
  component: LoginComponent},
  
  {
    
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path:'aporte-form',
        component:AporteFormComponent
      }
      
      
      
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
  

  
];
