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
];
