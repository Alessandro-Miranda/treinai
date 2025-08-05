import { Component } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  imports: [IonContent, HeaderComponent],
})
export class ProgressComponent {

}
