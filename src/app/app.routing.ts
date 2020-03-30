import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
      // canActivate: [AuthGuard]
  }]},
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
]
