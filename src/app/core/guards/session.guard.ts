import { inject, Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class CanActivateSession implements CanActivate {
  private auth = inject(AuthService);
  private router = inject(Router);

  async canActivate(): Promise<boolean> {
    const user = await this.auth.getCurrentUser();

    if (user) return true;

    this.router.navigate(['/auth']);
    return false;
  }
}