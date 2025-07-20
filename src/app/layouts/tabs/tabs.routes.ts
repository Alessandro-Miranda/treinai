import { Routes } from '@angular/router';
import { authRoutes } from '@Routes/auth.routes';
import { TabsLayoutComponent } from './tabs.component';

export const routes: Routes = [
  {
    path: 'routes',
    component: TabsLayoutComponent,
    children: [
      ...authRoutes,
      {
        path: 'tab2',
        loadComponent: () =>
          import('../../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/routes/login',
    pathMatch: 'full',
  },
];
