import { inject, Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { serverTimestamp } from '@angular/fire/firestore';
import { FirebaseUserService } from '../firebase/firebase-user.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private firebaseUserService = inject(FirebaseUserService);

  async createIfNotExists(user: User): Promise<void> {
    return this.firebaseUserService.createUser({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      createdAt: serverTimestamp(),
    });
  }
}
