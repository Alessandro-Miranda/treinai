import { Injectable } from "@angular/core";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { UserData } from "../interfaces/user-data.interace";
import { AuthStrategy } from './auth-strategy';

@Injectable({ providedIn: 'root' })
export class NativeAuthStrategy extends AuthStrategy {
  override async signInWithGoogle(): Promise<UserData> {
    const { user } = await FirebaseAuthentication.signInWithGoogle();

    if (!user) return Promise.reject('Loggin Failed');

    return this.formatUserData(user);
  }

  override async getCurrentUser(): Promise<UserData> {
    const { user } = await FirebaseAuthentication.getCurrentUser();
    return this.formatUserData(user);
  }

  override async logout(): Promise<void> {
    await FirebaseAuthentication.signOut();
  }
}