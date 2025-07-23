import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { logoGoogle } from "ionicons/icons";
import { FirebaseAuthService } from 'src/app/core/firebase/firebase-auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { ToastComponent } from "src/app/shared/toast/toast.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [IonContent, IonButton, IonText, IonIcon, ToastComponent],
})
export class AuthComponent {
  private firebaseService = inject(FirebaseAuthService);
  private router = inject(Router);
  private userService = inject(UserService);

  loginToastState = {
    isOpen: false,
    message: '',
  };

  constructor() {
    addIcons({ logoGoogle });
  }

  async handleGoogleLogin() {
    try {
      const user = await this.firebaseService.signInWithGoogle();

      await this.userService.createIfNotExists(user);
      this.router.navigate(['/home'], { replaceUrl: true });
    } catch (err: any) {
      this.loginToastState.isOpen = true;
      this.loginToastState.message = err.message;
    }
  }
}
