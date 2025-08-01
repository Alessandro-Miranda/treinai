import {
  inject,
  Injectable
} from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from '@angular/fire/auth';
import { FirebaseContext } from './firebase-context.helper';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private firebaseContext = inject(FirebaseContext);

  async signInWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();

    return this.firebaseContext.runInContext<User>(async () => {
      return signInWithPopup(this.auth, provider).then(({ user }) => user);
    });
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
