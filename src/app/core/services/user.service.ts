import { inject, Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { UserData } from '../auth/interfaces/user-data.interace';
import { FirestoreService } from '../firebase/firestore.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private firestoreService = inject(FirestoreService);

  async createIfNotExists(user: UserData): Promise<void> {
    const collectionpath = this.getCollectionPath(user);
    const userSnapshot = await this.firestoreService.findDoc<DocumentData>({ path: collectionpath });

    if (userSnapshot) return;

    return await this.firestoreService.create<UserData>({
      path: collectionpath,
      data: user
    });
  }

  private getCollectionPath(user: UserData) {
    return `users/${user.uid}`;
  }
}
