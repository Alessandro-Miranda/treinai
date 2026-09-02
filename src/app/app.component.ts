import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  lockClosedOutline,
  logoGoogle,
  mailOutline,
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
    });
  }
}
