import { Service } from '@angular/core';
import {
  AuthCredential,
  FirebaseAuthentication,
} from '@capacitor-firebase/authentication';
import {
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
} from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebase-auth';

@Service()
export class AuthService {
  async signIn() {
    const { user, credential } =
      await FirebaseAuthentication.signInWithGoogle();

    if (!user || !credential)
      throw new Error('An unexcpected error has ocurred');

    const { user: userWebCredentialData } =
      await this._signInOnWebLayer(credential);

    if (!userWebCredentialData) {
      await this.signOut();
      throw new Error('An unexpected error has ocurred');
    }

    return user;
  }

  async signOut() {
    await FirebaseAuthentication.signOut();

    await signOut(firebaseAuth);
  }

  private async _signInOnWebLayer(credential: AuthCredential) {
    const authCredential = GoogleAuthProvider.credential(credential.idToken);

    return signInWithCredential(firebaseAuth, authCredential);
  }
}
