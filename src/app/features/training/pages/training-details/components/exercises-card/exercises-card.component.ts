import { Component, Input, forwardRef } from "@angular/core";
import { Exercises } from "@Features/training/pages/create-training/@types/exercises";
import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/angular/standalone";
import { CardComponent } from "src/app/shared/card/card.component";
import { CardContentComponent } from "src/app/shared/card/components/card-content/card-content.component";
import { CardHeaderComponent } from "src/app/shared/card/components/card-header/card-header.component";

@Component({
  selector: 'app-exercises-card',
  templateUrl: './exercises-card.component.html',
  styleUrl: './exercises-card.component.scss',
  imports: [CardComponent, CardHeaderComponent, CardContentComponent, IonGrid, IonRow, IonCol, IonButton, IonIcon, forwardRef(() => ExerciseCardDetailComponent)]
})
export class ExercisesCardComponent {
  @Input({ required: true }) exercise!: Exercises
}

@Component({
  selector: 'app-exercises-card-detail',
  template: `
    <ion-col size="auto">
      <p>{{ label }}</p>
      <p>
        {{ value }}
      </p>
    </ion-col>
  `,
  imports: [IonCol],
})
export class ExerciseCardDetailComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value?: string | number;
}