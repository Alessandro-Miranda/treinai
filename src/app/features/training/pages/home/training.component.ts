import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

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
  ],
})
export class TrainingComponent implements OnInit {
  private router = inject(Router);

  trainings: string[] | null = null;

  constructor() {
    addIcons({ addOutline });
  }

  ngOnInit() {
    console.log('iniciou');
  }

  onAddNewTraining() {
    this.router.navigate(['/training/add']);
  }
}
