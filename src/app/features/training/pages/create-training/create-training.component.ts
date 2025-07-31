import { Component, inject } from '@angular/core';
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
import { WorkoutService } from 'src/app/core/services/workout.service';
import { ToastService } from 'src/app/shared/toast/toast.service';
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
  private toastService = inject(ToastService);
  private workoutService = inject(WorkoutService);
  private currentDivisionIndex = 0;

  training = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    duration: new FormControl('', [Validators.required, Validators.min(1)]),
    divisions: new FormArray<DivisionGroup>([], Validators.required),
  });

  isExerciseModalOpen = false;

  get divisions(): FormArray<DivisionGroup> {
    return this.training.get('divisions') as FormArray<DivisionGroup>;
  }

  get currentExercises(): FormArray<ExercisesGroup> {
    return this.divisions
      .at(this.currentDivisionIndex)
      .get('exercises') as FormArray<ExercisesGroup>;
  }

  async onSubmit() {
    if (this.training.invalid) {
      this.training.markAllAsTouched();
      this.toastService.show('Preencha todos os campos obrigatórios: Nome, duração, divisão e exercícios!');
      return;
    }

    await this.workoutService.save(this.training)
  }

  onAddDivision(divisionTitle: string | null) {
    const newDivisionData = new FormGroup({
      title: new FormControl(divisionTitle, Validators.required),
      exercises: new FormArray<ExercisesGroup>([], Validators.required),
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
        name: new FormControl(exercise.name, Validators.required),
        reps: new FormControl(exercise.reps, Validators.required),
        rest: new FormControl(exercise.rest, Validators.required),
        sets: new FormControl(exercise.sets, Validators.required),
        observation: new FormControl(exercise.observation),
        weight: new FormControl(exercise.weight),
      })
    );
  }
}
