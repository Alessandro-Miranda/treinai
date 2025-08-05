import { Component, Input } from '@angular/core';
import { Exercises } from '@Features/training/pages/create-training/@types/exercises';
import {
  IonButton,
  IonContent,
  IonGrid,
  IonIcon,
  IonPopover,
  IonRow,
} from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/shared/card/card.component';
import { CardContentComponent } from 'src/app/shared/card/components/card-content/card-content.component';
import { CardHeaderComponent } from 'src/app/shared/card/components/card-header/card-header.component';
import { ExerciseCardDetailComponent } from "./exercise-card-detail.component";

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
    IonGrid,
    IonRow,
    IonButton,
    IonIcon,
    ExerciseCardDetailComponent,
    IonPopover,
    IonContent
],
})
export class ExercisesCardComponent {
  @Input({ required: true }) exercise!: Exercises;
  @Input({ required: true }) id!: string | number;
}
