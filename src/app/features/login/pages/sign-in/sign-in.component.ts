import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import {
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

  async authenticate() {
    try {
      await FirebaseAuthentication.signInWithGoogle();
    } catch (err) {
      
    }
  }

  navigateToHome(): void {
    void this._router.navigate(['/workouts']);
  }
}
