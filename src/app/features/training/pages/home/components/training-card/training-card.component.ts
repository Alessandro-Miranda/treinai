import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, chevronForwardOutline, timeOutline } from 'ionicons/icons';
import { Training } from 'src/app/core/interfaces/training.interface';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonText,
    DatePipe,
    RouterLink
],
})
export class TrainingCardComponent {
  @Input() training!: Training;

  constructor() {
    addIcons({ calendarOutline, timeOutline, chevronForwardOutline })
  }
}
