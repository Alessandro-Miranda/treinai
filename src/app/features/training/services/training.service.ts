import { inject, Injectable } from '@angular/core';
import { serverTimestamp } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FirestoreService } from 'src/app/core/firebase/firestore.service';
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
    const { uid: userId } = await this.authService.getCurrentUser();

    return this.firestoreService.create<Training>({
      path: `workouts/${workoutId}`,
      data: {
        id: workoutId,
        userId,
        ...workout,
        createdAt: serverTimestamp(),
      },
    });
  }

  async listTrainings(): Promise<Observable<Training[]>> {
    const { uid: userId } = await this.authService.getCurrentUser();
    return this.firestoreService.findMany<Training>({
      path: 'workouts',
      where: {
        fieldPath: 'userId',
        operation: '==',
        value: userId,
      },
    });
  }

  findTrainingById(id: Training['id']): Promise<Training> {
    return this.firestoreService.findDoc<Training>({
      path: `workouts/${id}`,
    })
  }
}
