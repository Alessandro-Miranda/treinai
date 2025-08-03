import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, addOutline, calendarOutline, timeOutline } from 'ionicons/icons';
import { Observable } from 'rxjs';
import { Training } from 'src/app/core/interfaces/training.interface';
import { TrainingService } from 'src/app/core/services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    CommonModule,
    IonText,
    IonButton,
    IonIcon,
    AsyncPipe,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonFab,
    IonFabButton,
    DatePipe
],
})
export class TrainingComponent implements OnInit {
  private router = inject(Router);
  private trainingService = inject(TrainingService);
  training$!: Observable<Training[]>;

  trainings: string[] | null = null;

  constructor() {
    addIcons({ addOutline, add, calendarOutline, timeOutline });
  }

  ngOnInit() {
    this.training$ = this.trainingService.listWorkouts();
  }

  onAddNewTraining() {
    this.router.navigate(['/training/create']);
  }
}
