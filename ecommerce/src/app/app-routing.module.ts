import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import("./modules/auth-profile/auth-profile.module").then(m => m.AuthProfileModule),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  }
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
  })
export class AppRoutingModule { }
