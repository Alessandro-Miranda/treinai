type WorkoutStatus = 'not_started' | 'in_progress' | 'finished';

export interface ITrainingPlan {
  id: string;
  name: string;
  currentWorkoutId: string;
  workouts: IWorkout[];
}

export interface IWorkout {
  id: string;
  name: string;
  muscleGroup: string[];
  duration: number;
  exercies: IExercise[];
  status: WorkoutStatus;
  position: number;
}

export interface IExercise {
  name: string;
  series: number;
  repetitions: number;
  weight?: number;
  restPeriod: number;
}