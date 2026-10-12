import { Routes } from '@angular/router';

export const coachRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@/features/coach/coach-login/coach-login').then((m) => m.CoachLogin),
  },
];
