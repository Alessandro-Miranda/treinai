import { Component } from '@angular/core';
import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonRow
} from '@ionic/angular';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonFab,
    IonFabButton,
    IonIcon,
    EmptyStateComponent,
  ],
})
export class WorkoutsComponent {}
