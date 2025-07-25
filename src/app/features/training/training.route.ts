import { Routes } from "@angular/router";
import { TrainingComponent } from "./pages/home/training.component";

export const trainingRoute: Routes = [
  {
    path: '',
    component: TrainingComponent
  },
  {
    path: 'add',
    loadComponent: () => import('./pages/add-training/add-training.component').then(m => m.AddTrainingComponent)
  }
]