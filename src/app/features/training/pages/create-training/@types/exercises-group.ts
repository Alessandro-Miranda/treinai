import { FormControl } from "@angular/forms";

type ExerciseControl<T> = FormControl<T | null>;

export type ExercisesGroup = {
  title: ExerciseControl<string>;
  sets: ExerciseControl<number>;
  reps: ExerciseControl<number>;
  rest: ExerciseControl<number>;
  weight: ExerciseControl<number>;
  observation: ExerciseControl<string>;
};