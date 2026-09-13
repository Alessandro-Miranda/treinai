import { Routes } from '@angular/router';

export const workoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/workout-list/workout-list.component').then(
        (m) => m.WorkoutsComponent,
      ),
  },
];
