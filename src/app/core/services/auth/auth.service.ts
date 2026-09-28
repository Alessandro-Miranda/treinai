import { Service } from '@angular/core';
import {
  FirebaseAuthentication
} from '@capacitor-firebase/authentication';

@Service()
export class AuthService {
  async signIn() {
    const { user, credential } =
      await FirebaseAuthentication.signInWithGoogle();

    if (!user || !credential)
      throw new Error('An unexcpected error has ocurred');

    return user;
  }

  async signOut() {
    await FirebaseAuthentication.signOut();
  }
}
