import { inject, Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { serverTimestamp } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';
import { FirestoreService } from '../firebase/firestore.service';
import { UserData } from '../interfaces/user.inteface';

@Injectable({ providedIn: 'root' })
export class UserService {
  private firestoreService = inject(FirestoreService);

  async createIfNotExists(user: User): Promise<void> {
    const collectionpath = this.getCollectionPath(user);
    const userSnapshot = await firstValueFrom(
      this.firestoreService.findDoc<DocumentSnapshot>({
        path: collectionpath,
      })
    );

    if (userSnapshot.exists()) return;

    return await this.firestoreService.create<UserData>(collectionpath, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      createdAt: serverTimestamp()
    });
  }

  private getCollectionPath(user: User) {
    return `users/${user.uid}`;
  }
}
