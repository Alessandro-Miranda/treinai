import { FormControl } from "@angular/forms";

type ExerciseControl<T> = {
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

export type ExercisesGroup = ExerciseControl<Exercises>