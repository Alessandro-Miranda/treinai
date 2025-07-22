import { Routes } from '@angular/router';
import { CanActivateSession } from '../core/guards/session.guard';
import { TabsLayoutComponent } from '../layouts/tabs/tabs.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('@Features/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: '',
    component: TabsLayoutComponent,
    canActivate: [CanActivateSession],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@Features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
