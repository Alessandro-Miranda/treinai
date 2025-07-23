import { EnvironmentInjector, inject, Injectable, runInInjectionContext } from "@angular/core";
import { Auth, GoogleAuthProvider, signInWithPopup, User } from "@angular/fire/auth";

@Injectable({ providedIn: 'root' })
export class FirebaseAuthService {
  private auth = inject(Auth);
  private injector = inject(EnvironmentInjector);

  async signInWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();

    return new Promise((resolve, reject) => {
      runInInjectionContext(this.injector, async () =>{
        signInWithPopup(this.auth, provider)
          .then(({ user }) => {
            resolve(user);
          }).catch(err => reject(err));
      });
    });
  }
}