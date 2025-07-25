import { Component } from '@angular/core';
import {
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonRow,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.scss'],
  imports: [IonText, IonGrid, IonRow, IonCol, IonInput, IonIcon],
})
export class AddDivisionComponent {
  constructor() {
    addIcons({ addCircleOutline });
  }
}
