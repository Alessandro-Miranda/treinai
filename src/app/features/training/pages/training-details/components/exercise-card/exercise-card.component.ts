import { Component, inject, Input } from '@angular/core';
import { Exercises } from '@Features/training/pages/create-training/@types/exercises';
import {
  IonButton,
  IonGrid,
  IonIcon,
  IonRow,
  PopoverController
} from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/shared/card/card.component';
import { CardContentComponent } from 'src/app/shared/card/components/card-content/card-content.component';
import { CardHeaderComponent } from 'src/app/shared/card/components/card-header/card-header.component';
import { ExerciseInfoPopoverComponent } from '../exercise-info-popover/exercise-info-popover.component';
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
  ],
})
export class ExercisesCardComponent {
  private popoverController = inject(PopoverController);
  @Input({ required: true }) exercise!: Exercises;

  async onOpenExerciseInfo(event: Event, observation: Exercises['observation']) {
    const popover = await this.popoverController.create({
      component: ExerciseInfoPopoverComponent,
      event,
      componentProps: <ExerciseInfoPopoverComponent> {
        observation
      },
    });

    await popover.present();
  }
}
