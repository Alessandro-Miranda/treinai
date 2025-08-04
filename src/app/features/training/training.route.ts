import { Routes } from '@angular/router';
import { TrainingComponent } from './pages/home/training.component';

export const trainingRoute: Routes = [
  {
    path: '',
    component: TrainingComponent,
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./pages/create-training/create-training.component').then(
        (m) => m.CreateTrainingComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/training-details/training-details.component').then(
        (m) => m.TrainingDetailsComponent
      ),
  },
];
