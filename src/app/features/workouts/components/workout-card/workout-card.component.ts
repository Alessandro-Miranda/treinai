import { Component, input } from '@angular/core';
import { IonButton, IonChip, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/angular';
import { IWorkout } from '../../models/IWorkout';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
  imports: [IonGrid, IonRow, IonCol, IonChip, IonIcon, IonButton],
})
export class WorkoutCardComponent {
  readonly workout = input.required<IWorkout>();
  readonly isCurrentWorkout = input<boolean>(false);
}
