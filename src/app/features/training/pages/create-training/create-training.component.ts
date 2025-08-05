import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
  IonText
} from '@ionic/angular/standalone';
import { TrainingData } from 'src/app/core/interfaces/training.interface';
import { TrainingService } from 'src/app/core/services/training.service';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { ToastService } from 'src/app/shared/toast/toast.service';
import {
  DivisionGroup,
  ExerciseControl,
  Exercises,
  ExercisesGroup,
} from './@types/exercises';
import { AddDivisionComponent } from './components/add-division/add-division.component';
import { DivisionListComponent } from './components/division-list/division-list.component';
import { ExerciseFormModalComponent } from './components/exercise-form-modal/exercise-form-modal.component';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.scss'],
  imports: [
    IonContent,
    IonButton,
    IonInput,
    IonGrid,
    IonRow,
    IonText,
    AddDivisionComponent,
    DivisionListComponent,
    ExerciseFormModalComponent,
    ReactiveFormsModule,
    HeaderComponent
],
})
export class CreateTrainingComponent {
  private toastService = inject(ToastService);
  private trainingService = inject(TrainingService);
  private location = inject(Location);
  private currentDivisionIndex = 0;

  training = new FormGroup<TrainingData>({
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

  backToHome() {
    this.location.back();
  }

  onSubmit() {
    if (this.training.invalid) {
      this.training.markAllAsTouched();
      this.toastService.show(
        'Preencha todos os campos obrigatórios: Nome, duração, divisão e exercícios!'
      );
      return;
    }

    this.trainingService
      .createTraining(this.training)
      .then(() => {
        this.toastService.show('Treino Criado com sucesso!');
        this.training.reset();
        this.divisions.clear();
      })
      .catch((err) => {
        this.toastService.show(err.message);
      });
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
