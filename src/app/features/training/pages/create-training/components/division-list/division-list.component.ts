import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { ToastComponent } from "src/app/shared/toast/toast.component";
import { DivisionGroup, ExercisesGroup } from '../../@types/exercises';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.scss'],
  imports: [
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonText,
    IonButton,
    IonIcon,
    ToastComponent,
  ],
})
export class DivisionListComponent {
  @Input() divisions: FormArray<DivisionGroup> | null = null;
  @Output() addExercise = new EventEmitter<number>();
  showExerciseDeletedToast = false;

  constructor() {
    addIcons({ trashOutline });
  }

  exercisesFrom(division: DivisionGroup): FormArray<ExercisesGroup> {
    return division.get('exercises') as FormArray<ExercisesGroup>;
  }

  onAddExercise(divisionIndex: number) {
    this.addExercise.emit(divisionIndex);
  }

  onRemoveExercise(division: DivisionGroup, exerciseIndex: number) {
    this.exercisesFrom(division).removeAt(exerciseIndex);
    this.showExerciseDeletedToast = true;
  }
}
