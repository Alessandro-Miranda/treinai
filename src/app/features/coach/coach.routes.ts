import { Routes } from '@angular/router';

export const coachRoutes: Routes = [
  {
    path: '',
    // AQUI DEVE TER UM GUARD PARA REDIRECIONAR PARA LOGIN
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@/features/auth/pages/coach-sign-in/coach-sign-in').then((m) => m.CoachSignIn),
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('@/features/auth/pages/coach-sign-up/coach-sign-up').then((m) => m.CoachSignUp),
  },
];
