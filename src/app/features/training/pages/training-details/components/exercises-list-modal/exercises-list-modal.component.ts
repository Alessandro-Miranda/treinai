import { Component, inject, OnInit } from '@angular/core';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonModal,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { Divisions } from 'src/app/core/interfaces/training.interface';
import { ExercisesListModalService } from './exercises-list-modal.service';

@Component({
  selector: 'app-exercises-list-modal',
  templateUrl: './exercises-list-modal.component.html',
  imports: [
    IonModal,
    IonContent,
    IonText,
    IonCol,
    IonTitle,
    IonIcon,
    IonRow,
    IonGrid,
    IonToolbar,
    IonHeader,
    IonButton,
  ],
})
export class ExercisesListModalComponent implements OnInit {
  private modalService = inject(ExercisesListModalService);

  exerciseDivision!: Divisions;
  isOpen = false;

  constructor() {
    addIcons({ chevronBackOutline });
  }

  ngOnInit() {
    this.modalService.modal$.subscribe(({ exercisesDivision }) => {
      this.exerciseDivision = exercisesDivision;
      this.isOpen = true;
    });
  }

  onCloseModal() {
    this.isOpen = false;
  }
}
