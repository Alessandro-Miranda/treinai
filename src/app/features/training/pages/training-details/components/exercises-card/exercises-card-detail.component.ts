import { Component, Input } from "@angular/core";
import { IonCol } from "@ionic/angular/standalone";

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
