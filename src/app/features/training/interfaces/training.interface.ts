import { FormArray, FormControl } from "@angular/forms";
import { DivisionGroup, Exercises } from "@Features/training/pages/create-training/@types/exercises";

export type Divisions = {
  title: string;
  exercises: Exercises[];
}

export interface Training {
  id: string;
  name: string;
  duration: string;
  divisions: Divisions[];
  userId: string;
  createdAt: number
}

export type TrainingPreviewData = Pick<Training, 'id' | 'name' | 'createdAt' | 'duration'>;

export interface TrainingData {
  name: FormControl<string | null>;
  duration: FormControl<string | null>;
  divisions: FormArray<DivisionGroup>;
}