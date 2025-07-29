import { FormArray, FormGroup } from "@angular/forms";
import { ExercisesGroup } from "./exercises-group";

export type AddExercise = {
  open: boolean;
  divisionIndex: number;
  exercises: FormArray<FormGroup<ExercisesGroup>>;
};