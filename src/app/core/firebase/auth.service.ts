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
import { FirebaseContext } from './decorators/firebase-context';
import { RunMethodInContext } from './decorators/run-in-context';

@Injectable({ providedIn: 'root' })
export class AuthService extends FirebaseContext {
  private auth = inject(Auth);

  @RunMethodInContext
  async signInWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(this.auth, provider).then(({ user }) => user);
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}