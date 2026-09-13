import { Routes } from '@angular/router';

export const tabRoutes: Routes = [
  {
    path: '',
    redirectTo: 'workouts',
    pathMatch: 'full',
  },
  {
    path: 'workouts',
    loadChildren: () => import('@/features/workouts/workouts.routes').then(m => m.workoutRoutes)
  },
];
