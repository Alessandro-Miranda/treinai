import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TrainingPreviewData } from '@Features/training/interfaces/training.interface';
import { TrainingService } from '@Features/training/services/training.service';
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, addOutline } from 'ionicons/icons';
import { map, Observable } from 'rxjs';
import { HeaderComponent } from 'src/app/shared/header/header.component';
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
    HeaderComponent,
    RouterLink,
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

  async ngOnInit() {
    const training = await this.trainingService.listTrainings();
    this.training$ = training.pipe(
      map((trainings) =>
        trainings
          .map(
            (training): TrainingPreviewData => ({
              id: training.id,
              createdAt: training.createdAt,
              duration: training.duration,
              name: training.name,
            })
          )
          .sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis())
      )
    );
  }

  onAddNewTraining() {
    this.router.navigate(['/training/create']);
  }
}
