import { Routes } from '@angular/router';
import { authGuard } from './core/auth-guard';
import { tabRoutes } from './layouts/tab/tab.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/tab/tab.component').then((m) => m.TabComponent),
    canMatch: [authGuard],
    children: tabRoutes
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
  }
];
