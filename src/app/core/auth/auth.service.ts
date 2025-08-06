import { inject, Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { AuthStrategyInterface } from './interfaces/auth-strategy.interface';
import { UserData } from './interfaces/user-data.interace';
import { NativeAuthStrategy } from './strategies/native-auth.strategy';
import { WebAuthStrategy } from './strategies/web-auth.strategy';

@Injectable({ providedIn: 'root' })
export class AuthService implements AuthStrategyInterface {
  private authenticator: NativeAuthStrategy | WebAuthStrategy;
  private nativeAuthenticator = inject(NativeAuthStrategy);
  private webAuthenticator = inject(WebAuthStrategy);

  constructor() {
    this.authenticator = Capacitor.isNativePlatform()
      ? this.nativeAuthenticator
      : this.webAuthenticator;
  }

  async signInWithGoogle(): Promise<UserData> {
    return this.authenticator.signInWithGoogle();
  }

  getCurrentUser(): Promise<UserData> {
    return this.authenticator.getCurrentUser();
  }

  logout(): Promise<void> {
    return this.authenticator.logout();
  }
}
