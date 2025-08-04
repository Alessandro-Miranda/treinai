import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonRow,
  IonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, addOutline } from 'ionicons/icons';
import { map, Observable } from 'rxjs';
import { TrainingPreviewData } from 'src/app/core/interfaces/training.interface';
import { TrainingService } from 'src/app/core/services/training.service';
import { HeaderComponent } from "src/app/shared/header/header.component";
import { TrainingCardComponent } from './components/training-card/training-card.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    CommonModule,
    IonText,
    IonButton,
    IonIcon,
    AsyncPipe,
    IonFab,
    IonFabButton,
    TrainingCardComponent,
    HeaderComponent
],
})
export class TrainingComponent implements OnInit {
  private router = inject(Router);
  private trainingService = inject(TrainingService);
  training$!: Observable<TrainingPreviewData[]>;

  trainings: string[] | null = null;

  constructor() {
    addIcons({ addOutline, add });
  }

  ngOnInit() {
    this.training$ = this.trainingService.listTrainings().pipe(
      map((trainings) =>
        trainings.map(
          (training): TrainingPreviewData => ({
            id: training.id,
            createdAt: training.createdAt,
            duration: training.duration,
            name: training.name,
          })
        )
      )
    );
  }

  onAddNewTraining() {
    this.router.navigate(['/training/create']);
  }
}
