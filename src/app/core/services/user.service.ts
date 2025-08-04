import { inject, Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { serverTimestamp } from '@angular/fire/firestore';
import { FirestoreService } from '../firebase/firestore.service';
import { UserData } from '../interfaces/user.inteface';

@Injectable({ providedIn: 'root' })
export class UserService {
  private firestoreService = inject(FirestoreService);

  async createIfNotExists(user: User): Promise<void> {
    const collectionpath = this.getCollectionPath(user);
<<<<<<< HEAD
    const userSnapshot = await firstValueFrom(
      this.firestoreService.findDoc<DocumentSnapshot>({
        path: collectionpath,
      })
    );
=======
    const userSnapshot = await this.firestoreService.findDoc({
      path: collectionpath,
    });
>>>>>>> f940025f9c41c27def47a4e1364af005251951d0

    if (userSnapshot.exists()) return;

    return await this.firestoreService.create<UserData>({
      path: collectionpath,
      data: {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        createdAt: serverTimestamp(),
      },
    });
  }

  private getCollectionPath(user: User) {
    return `users/${user.uid}`;
  }
}
