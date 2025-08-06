import { inject, Injectable } from "@angular/core";
import { Auth, signInWithPopup } from "@angular/fire/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { RunMethodInContext } from "../../firebase/decorators/run-in-context";
import { UserData } from "../interfaces/user-data.interace";
import { AuthStrategy } from "./auth-strategy";

@Injectable({ providedIn: 'root' })
export class WebAuthStrategy extends AuthStrategy {
  private auth = inject(Auth);

  @RunMethodInContext
  override async signInWithGoogle(): Promise<UserData> {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(this.auth, provider);

    return this.formatUserData(user);
  }

  override async getCurrentUser(): Promise<UserData> {
    return this.formatUserData(this.auth.currentUser);
  }

  override async logout(): Promise<void> {
    await this.auth.signOut();
  }
}