import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent, IonIcon, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { logoGoogle } from "ionicons/icons";
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastComponent } from "src/app/shared/toast/toast.component";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [IonContent, IonButton, IonText, IonIcon, ToastComponent],
})
export class AuthComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginToastState = {
    isOpen: false,
    message: '',
    title: ''
  };

  constructor() {
    addIcons({ logoGoogle });
  }

  async handleGoogleLogin() {
    try {
      const { user, credential, token } = await this.authService.loginWithGoogle();
      this.router.navigate(['/home']);
    } catch (err: any) {
      this.loginToastState.isOpen = true;
      this.loginToastState.message = err.message;
      this.loginToastState.title = 'Erro ao fazer login'
    }
  }
}
