import { FormArray, FormControl } from "@angular/forms";
import { DivisionGroup } from "@Features/training/pages/create-training/@types/exercises";

export interface WorkoutData {
  name: FormControl<string | null>;
  duration: FormControl<string | null>;
  divisions: FormArray<DivisionGroup>;
}