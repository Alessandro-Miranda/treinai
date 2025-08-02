import {
  EnvironmentInjector,
  inject,
  Injectable,
  runInInjectionContext
} from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private injector = inject(EnvironmentInjector);

  async signInWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();

    return runInInjectionContext(this.injector, async () => {
      return signInWithPopup(this.auth, provider).then(({ user }) => user);
    })
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}