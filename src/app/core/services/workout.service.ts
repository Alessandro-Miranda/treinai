import { inject, Injectable } from "@angular/core";
import { serverTimestamp } from "@angular/fire/firestore";
import { FormGroup } from "@angular/forms";
import { AuthService } from "../firebase/auth.service";
import { FirestoreService } from "../firebase/firestore.service";
import { Workout, WorkoutData } from "../interfaces/workout.interface";

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  private authService = inject(AuthService);
  private firestoreService = inject(FirestoreService);

  async createWorkout(workoutForm: FormGroup<WorkoutData>) {
    const workout = workoutForm.getRawValue() as Omit<Workout, "id" | "userId" | "createdAt">;
    const workoutId = crypto.randomUUID();

    return this.firestoreService.create<Workout>(`workouts/${workoutId}`, {
      id: workoutId,
      userId: this.authService.getCurrentUser()!.uid,
      ...workout,
      createdAt: serverTimestamp()
    });
  }
}