import { User } from '@angular/fire/auth';
import { SignInResult } from '@capacitor-firebase/authentication';
import { AuthStrategyInterface } from '../interfaces/auth-strategy.interface';
import { UserData } from '../interfaces/user-data.interace';

export abstract class AuthStrategy implements AuthStrategyInterface {
  abstract signInWithGoogle(): Promise<UserData>;
  abstract getCurrentUser(): Promise<UserData | null>;
  abstract logout(): Promise<void>;

  protected formatUserData(user: User | SignInResult['user']): UserData | null {
    if (!user) return null;

    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      createdAt: new Date(user.metadata.creationTime!).getTime(),
    };
  }
}