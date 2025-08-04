import { inject, Injectable } from '@angular/core';
import { serverTimestamp } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../firebase/auth.service';
import { FirestoreService } from '../firebase/firestore.service';
import { Training, TrainingData } from '../interfaces/training.interface';

@Injectable({ providedIn: 'root' })
export class TrainingService {
  private authService = inject(AuthService);
  public firestoreService = inject(FirestoreService);

  async createTraining(workoutForm: FormGroup<TrainingData>) {
    const workout = workoutForm.getRawValue() as Omit<
      Training,
      'id' | 'userId' | 'createdAt'
    >;
    const workoutId = crypto.randomUUID();

    return this.firestoreService.create<Training>({
      path: `workouts/${workoutId}`,
      data: {
        id: workoutId,
        userId: this.authService.getCurrentUser()!.uid,
        ...workout,
        createdAt: serverTimestamp(),
      },
    });
  }

  listTrainings(): Observable<Training[]> {
    return this.firestoreService.findMany<Training>({
      path: 'workouts',
      where: {
        fieldPath: 'userId',
        operation: '==',
        value: this.authService.getCurrentUser()!.uid
      }
    });
  }

  
}
