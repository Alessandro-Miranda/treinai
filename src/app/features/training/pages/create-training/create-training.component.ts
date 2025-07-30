import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
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
import { DivisionGroup, ExerciseControl, Exercises, ExercisesGroup } from './@types/exercises';
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
    ReactiveFormsModule,
  ],
})
export class CreateTrainingComponent {
  training = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    duration: new FormControl('', [Validators.required, Validators.min(1)]),
    divisions: new FormArray<DivisionGroup>([]),
  });

  isExerciseModalOpen = false;

  private currentDivisionIndex = 0;

  get divisions(): FormArray<DivisionGroup> {
    return this.training.get('divisions') as FormArray<DivisionGroup>;
  }

  get currentExercises(): FormArray<ExercisesGroup> {
    return this.divisions
      .at(this.currentDivisionIndex)
      .get('exercises') as FormArray<ExercisesGroup>;
  }

  onSubmit() {
    if (this.training.invalid) {
      this.training.markAllAsTouched();
      return;
    }

    // Implementar lógica para salvar no firebase
  }

  onAddDivision(divisionTitle: string | null) {
    const newDivisionData = new FormGroup({
      title: new FormControl(divisionTitle, Validators.required),
      exercises: new FormArray<ExercisesGroup>([]),
    });

    this.divisions.push(newDivisionData);

    const divisionIndex = this.divisions.length - 1;

    this.onAddExerciseToDivision(divisionIndex);
  }

  onAddExerciseToDivision(divisionIndex: number) {
    this.isExerciseModalOpen = true;
    this.currentDivisionIndex = divisionIndex;
  }

  onAddExercise(exercise: Exercises) {
    this.currentExercises.push(
      new FormGroup<ExerciseControl<Exercises>>({
        name: new FormControl(exercise.name),
        reps: new FormControl(exercise.reps),
        rest: new FormControl(exercise.rest),
        sets: new FormControl(exercise.sets),
        observation: new FormControl(exercise.observation),
        weight: new FormControl(exercise.weight),
      })
    );
  }
}
