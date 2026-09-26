import { AuthService } from '@/core/services/auth.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonRow,
} from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonInput,
    IonIcon,
    IonInputPasswordToggle,
    IonCol,
    IonButton,
  ],
})
export class SignInComponent {
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  private readonly _alert = inject(AlertController);

  async signInWithGoogle() {
    try {
      await this._authService.signIn();
      
      void this._router.navigate(['/workouts'], {
        queryParams: { from: 'sign-in' },
      });
    } catch (err: unknown) {
      const errorMessage = err as string;
      const canceledByUser = new RegExp(/[16]/);

      if (canceledByUser.exec(errorMessage)) {
        return;
      }

      const error = await this._alert.create({
        header: 'Ops...',
        message:
          'Ocorreu um erro inesperado. Por favor, tente novamente em instantes.',
        buttons: ['Ok']
      });

      await error.present();
    }
  }
}
