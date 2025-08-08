import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon, IonSpinner, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { logoGoogle } from "ionicons/icons";
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ToastComponent } from "src/app/shared/toast/toast.component";
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [IonContent, IonButton, IonText, IonIcon, ToastComponent, IonSpinner],
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private userService = inject(UserService);
  private toastService = inject(ToastService);

  isAuthenticating = false;

  constructor() {
    addIcons({ logoGoogle });
  }

  async handleGoogleLogin() {
    try {
      this.isAuthenticating = true;
      const user = await this.authService.signInWithGoogle();

      await this.userService.createIfNotExists(user);
      this.router.navigate(['/training'], { replaceUrl: true });
    } catch (err: any) {
      this.toastService.show(err.message);
    }

    this.isAuthenticating = false;
  }
}
