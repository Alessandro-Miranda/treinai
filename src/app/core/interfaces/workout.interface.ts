import { FormArray, FormControl } from "@angular/forms";
import { DivisionGroup, Exercises } from "@Features/training/pages/create-training/@types/exercises";

type Divisions = {
  title: string;
  exercises: Exercises[];
}

export interface Workout {
  id: string;
  name: string;
  duration: string;
  divisions: Divisions[];
  userId: string;
}

export interface WorkoutData {
  name: FormControl<string | null>;
  duration: FormControl<string | null>;
  divisions: FormArray<DivisionGroup>;
}