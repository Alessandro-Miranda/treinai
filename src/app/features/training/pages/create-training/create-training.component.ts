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
import { AddExercise } from './@types/add-exercise';
import { ExercisesGroup } from './@types/exercises-group';
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
    divisions: new FormArray([]),
  });

  addExercise: AddExercise = {
    open: true,
    divisionIndex: 0,
    exercises: new FormArray<FormGroup<ExercisesGroup>>([]),
  };

  get divisions() {
    return this.training.get('divisions') as FormArray;
  }

  /**
   * @todo Improve the method to get exercises from divisions getter using the divisionIndex
   */
  private addExerciseToDivision(
    divisionIndex: number,
    exercises: FormArray<FormGroup<ExercisesGroup>>
  ) {
    this.addExercise = { open: true, divisionIndex, exercises };
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
      exercises: new FormArray<FormGroup<ExercisesGroup>>([]),
    });

    this.divisions.push(newDivisionData);

    const currentDivisionIndex = this.divisions.length - 1;

    this.addExerciseToDivision(currentDivisionIndex, newDivisionData.get('exercises') as FormArray);
  }
}
