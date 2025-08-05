import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonCol, IonContent, IonGrid, IonIcon, IonRow, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, chevronBackOutline } from 'ionicons/icons';
import { Observable } from 'rxjs';
import { Training } from 'src/app/core/interfaces/training.interface';
import { TrainingService } from 'src/app/core/services/training.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ExercisesListModalComponent } from "./components/exercises-list-modal/exercises-list-modal.component";
import { TrainingDetailsCardComponent } from "./components/training-details-card/training-details-card.component";

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss'],
  imports: [
    AsyncPipe,
    IonContent,
    HeaderComponent,
    IonText,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    ExercisesListModalComponent,
    TrainingDetailsCardComponent
],
})
export class TrainingDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private trainingService = inject(TrainingService);
  private trainingId!: string;
  training$!: Observable<Training>;

  constructor() {
    addIcons({ chevronBackOutline, calendarOutline });
  }

  async ngOnInit() {
    this.trainingId = this.route.snapshot.params['id'];
    this.training$ = this.trainingService.findTrainingById(this.trainingId);
  }
}
