import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type ExerciseControl<T> = {
  [Property in keyof T]: FormControl<T[Property] | null>;
};

export type Exercises = {
  name: string;
  sets: number;
  reps: number;
  rest: number;
  weight?: number;
  observation?: string;
};

export type ExercisesGroup = FormGroup<ExerciseControl<Exercises>>;

export type DivisionGroup = FormGroup<{
  title: FormControl;
  exercises: FormArray<ExercisesGroup>;
}>;
