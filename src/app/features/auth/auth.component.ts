import { Component } from '@angular/core';
import { IonButton, IonContent, IonIcon, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { logoGoogle } from "ionicons/icons";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [IonContent, IonButton, IonText, IonIcon],
})
export class AuthComponent {

  constructor() {
    addIcons({ logoGoogle });
  }

}
