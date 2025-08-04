import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonTitle,
    RouterLink,
  ],
})
export class HeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() backTo?: string;

  constructor() {
    addIcons({ chevronBackOutline });
  }
}
