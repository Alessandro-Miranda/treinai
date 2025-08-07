import { Component, inject, Input } from "@angular/core";
import { Divisions } from "@Features/training/interfaces/training.interface";
import { IonButton, IonText } from "@ionic/angular/standalone";
import { CardComponent } from "src/app/shared/card/card.component";
import { CardContentComponent } from "src/app/shared/card/components/card-content/card-content.component";
import { CardHeaderComponent } from "src/app/shared/card/components/card-header/card-header.component";
import { ExercisesListModalService } from "../exercises-list-modal/exercises-list-modal.service";

@Component({
  selector: 'app-training-details-card',
  templateUrl: './training-details-card.component.html',
  styleUrl: './training-details-card.component.scss',
  imports: [
    IonText,
    IonButton,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent
],
})
export class TrainingDetailsCardComponent {
  private exercisesListService = inject(ExercisesListModalService);
  @Input({ required: true }) trainingDivision!: Divisions;

  openExerciseList(exerciseDivision: Divisions) {
    this.exercisesListService.open(exerciseDivision);
  }
}