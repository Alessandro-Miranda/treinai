import { inject, Injectable } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { CanActivate, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class CanActivateSession implements CanActivate {
  private auth = inject(Auth);
  private router = inject(Router);

  async canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/auth']);
          resolve(false);
        }
      });
    });
  }
}