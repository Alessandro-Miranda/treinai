import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/tabs-layout/tabs-layout.routes').then((m) => m.routes),
  },
];
