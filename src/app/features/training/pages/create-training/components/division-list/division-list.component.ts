import { Component } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.scss'],
  imports: [IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonText],
})
export class DivisionListComponent {

  constructor() { }

}
