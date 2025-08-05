import { Component, Input } from "@angular/core";
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-exercise-info-popover',
  templateUrl: './exercise-info-popover.component.html',
  styleUrl: './exercise-info-popover.component.scss',
  imports: [IonContent],
})
export class ExerciseInfoPopoverComponent {
  @Input() observation?: string;
}