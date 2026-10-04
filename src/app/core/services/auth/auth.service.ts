import { Service } from '@angular/core';
import {
  FirebaseAuthentication
} from '@capacitor-firebase/authentication';

type SignInWithEmailAndPassword = {
  email: string;
  password: string;
};

@Service()
export class AuthService {
  async signIn(data: SignInWithEmailAndPassword) {
    const { user } = await FirebaseAuthentication.signInWithEmailAndPassword({
      email: data.email,
      password: data.password,
    });

    if (!user) throw new Error('An unexcpected error has ocurred');

    return user;
  }

  async socialSignIn() {
    const { user } =
      await FirebaseAuthentication.signInWithGoogle();

    if (!user) throw new Error('An unexcpected error has ocurred');

    return user;
  }

  async signOut() {
    await FirebaseAuthentication.signOut();
  }
}
