import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { DivisionGroup } from "@Features/training/pages/create-training/@types/exercises";

type SaveWorkoutData = {
  name: FormControl<string | null>;
  duration: FormControl<string | null>,
  divisions: FormArray<DivisionGroup>
}

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  async save(workoutForm: FormGroup<SaveWorkoutData>) {
    const workout = workoutForm.getRawValue();
    // Fazer o save no firebase
  }
}