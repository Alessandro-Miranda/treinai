import { Component } from '@angular/core';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.scss'],
  imports: [
    IonToolbar,
    IonTitle,
    IonHeader,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonInput,
    IonItemGroup,
    IonItemDivider,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class CreateTrainingComponent {
  constructor() {}
}
