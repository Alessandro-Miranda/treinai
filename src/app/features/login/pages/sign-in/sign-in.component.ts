import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import {
  AlertController,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonRow
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
  private readonly _router = inject(Router);
  private readonly _alert = inject(AlertController);

  async signInWithGoogle() {
    try {
      const { user } = await FirebaseAuthentication.signInWithGoogle();

      if (!user) throw new Error('An unexpected error has ocurred');

      void this._router.navigate(['/workouts'], { replaceUrl: true });
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
      });

      await error.present();
    }
  }
}
