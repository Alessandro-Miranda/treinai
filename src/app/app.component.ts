import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  add,
  arrowForwardOutline,
  barbellOutline,
  calendarClearOutline,
  lockClosedOutline,
  logoGoogle,
  mailOutline,
  personOutline,
  statsChartOutline,
  timeOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      mailOutline,
      lockClosedOutline,
      logoGoogle,
      arrowForwardOutline,
      barbellOutline,
      statsChartOutline,
      personOutline,
      timeOutline,
      add,
      calendarClearOutline
    });
  }
}
