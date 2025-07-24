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
        path: 'training',
        loadComponent: () =>
          import('@Features/training/training.component').then((m) => m.TrainingComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('@Features/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: '',
        redirectTo: 'training',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'training',
  },
];
