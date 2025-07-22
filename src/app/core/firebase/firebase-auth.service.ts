import { inject, Injectable } from "@angular/core";
import { Auth, GoogleAuthProvider, signInWithPopup } from "@angular/fire/auth";

@Injectable({ providedIn: 'root' })
export class FirebaseAuthService {
  private auth = inject(Auth);

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    
    const result = await signInWithPopup(this.auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    return {
      token: credential?.accessToken,
      credential,
      user: result.user,
    };
  }
}