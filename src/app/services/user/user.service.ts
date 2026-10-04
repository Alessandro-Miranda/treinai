import { FirestoreService } from '@/core/services/firestore/firestore.service';
import { inject, Service } from '@angular/core';
import { FirebaseAuthentication, SignInResult } from '@capacitor-firebase/authentication';
import { FieldValue } from '@capacitor-firebase/firestore';
import { CreateOrUpdateUserProfile, CreateUser, IUser } from './IUser';

@Service()
export class UserService {
  private readonly _firestoreService = inject(FirestoreService);

  async createUser(userData: CreateUser) {
    const { user } = await this._createWithEmailAndPassword(
      userData.email,
      userData.password,
    );

    if (!user) throw new Error('An error has occured creating user');

    await this._updateDisplayName(userData.username);

    await this.updateProfile(user.uid, {
      username: userData.username,
      email: userData.email,
      createdAt: FieldValue.serverTimestamp(),
      isProfileComplete: true,
      role: userData.role,
    });

    return user;
  }

  updateProfile(
    userId: string,
    userData: CreateOrUpdateUserProfile,
  ): Promise<void> {
    return this._firestoreService.update<IUser>(`users/${userId}`, {
      uid: userId,
      ...userData
    });
  }

  private _createWithEmailAndPassword(email: string, password: string): Promise<SignInResult> {
    return FirebaseAuthentication.createUserWithEmailAndPassword({
      email,
      password,
    });
  }

  private _updateDisplayName(username: string) {
    return FirebaseAuthentication.updateProfile({
      displayName: username,
    });
  }
}
