import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AddDivisionComponent } from './components/add-division/add-division.component';
import { DivisionListComponent } from './components/division-list/division-list.component';
import { ExerciseModalComponent } from './components/exercise-modal/exercise-modal.component';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.scss'],
  imports: [
    IonToolbar,
    IonTitle,
    IonHeader,
    IonContent,
    IonButton,
    IonInput,
    IonGrid,
    IonRow,
    IonText,
    AddDivisionComponent,
    DivisionListComponent,
    ExerciseModalComponent,
  ],
})
export class CreateTrainingComponent {
  isAddingExercise = true;
}
