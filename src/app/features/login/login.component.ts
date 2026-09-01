import { Component } from '@angular/core';
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
export class LoginComponent {}
