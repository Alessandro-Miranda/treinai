import { Component, Input } from "@angular/core";
import { IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  imports: [IonCardHeader, IonCardTitle]
})
export class CardHeaderComponent {
  @Input({ required: true }) title!: string;
}