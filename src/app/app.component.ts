import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  add,
  arrowForwardOutline,
  barbellOutline,
  calendarClearOutline,
  listOutline,
  lockClosedOutline,
  logoGoogle,
  mailOutline,
  personOutline,
  play,
  star,
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
      personOutline,
      timeOutline,
      add,
      calendarClearOutline,
      star,
      listOutline,
      play
    });
  }
}
