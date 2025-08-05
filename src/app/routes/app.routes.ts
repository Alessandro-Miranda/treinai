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
        loadChildren: () =>
          import('@Features/training/training.route').then(
            (m) => m.trainingRoute
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('@Features/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('@Features/progress/progress.component').then(
            (m) => m.ProgressComponent
          ),
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
