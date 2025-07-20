import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipse, square, triangle } from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabsLayoutComponent {
  public environmentInjector = inject(EnvironmentInjector)

  constructor() {
    addIcons({ triangle, ellipse, square })
  }

}
