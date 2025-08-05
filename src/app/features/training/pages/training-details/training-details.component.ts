import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonRow, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, chevronBackOutline } from 'ionicons/icons';
import { Observable } from 'rxjs';
import { Divisions, Training } from 'src/app/core/interfaces/training.interface';
import { TrainingService } from 'src/app/core/services/training.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ExercisesListModalComponent } from "./components/exercises-list-modal/exercises-list-modal.component";
import { ExercisesListModalService } from './components/exercises-list-modal/exercises-list-modal.service';

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
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    ExercisesListModalComponent
],
})
export class TrainingDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private trainingService = inject(TrainingService);
  private exercisesListService = inject(ExercisesListModalService);
  private trainingId!: string;
  training$!: Observable<Training>;

  constructor() {
    addIcons({ chevronBackOutline, calendarOutline });
  }

  async ngOnInit() {
    this.trainingId = this.route.snapshot.params['id'];
    this.training$ = this.trainingService.findTrainingById(this.trainingId);
  }

  openExerciseList(exerciseDivision: Divisions) {
    this.exercisesListService.open(exerciseDivision);
  }
}
