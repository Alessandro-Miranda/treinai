import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonContent,
    IonInput,
    IonInputPasswordToggle,
    IonIcon,
    IonGrid,
    IonRow,
    IonButton,
    IonCol,
  ],
})
export class LoginComponent {
  private readonly _router = inject(Router);

  navigateToHome(): void {
    void this._router.navigate(['/workouts']);
  }
}
