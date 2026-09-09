import { Routes } from '@angular/router';

export const tabRoutes: Routes = [
  {
    path: '',
    redirectTo: 'workouts',
    pathMatch: 'full',
  },
  {
    path: 'workouts',
    loadComponent: () =>
      import('@/features/workouts/workouts.component').then(
        (m) => m.WorkoutsComponent,
      ),
  },
];
