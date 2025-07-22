import { inject, Injectable } from "@angular/core";
import { FirebaseAuthService } from "../firebase/firebase-auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseService = inject(FirebaseAuthService);

  async loginWithGoogle() {
    return await this.firebaseService.signInWithGoogle();
  }
}