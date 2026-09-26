import { Routes } from '@angular/router';
import { authenticatedGuard } from './core/guards/authenticated/authenticated.guard';
import { profileCompleteGuard } from './core/guards/profileComplete/profile-complete.guard';
import { tabRoutes } from './layouts/tab/tab.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/tab/tab.component').then((m) => m.TabComponent),
    canMatch: [authenticatedGuard],
    canActivateChild: [profileCompleteGuard],
    children: tabRoutes
  },
  {
    path: '',
    loadChildren: () =>
      import('@/features/login/login.routes').then((m) => m.loginRoutes),
  },
  {
    path: '**',
    redirectTo: 'sign-in',
  },
];
