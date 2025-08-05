import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, informationCircleOutline } from 'ionicons/icons';
import { Divisions } from 'src/app/core/interfaces/training.interface';
import { ExercisesListModalService } from './exercises-list-modal.service';

@Component({
  selector: 'app-exercises-list-modal',
  templateUrl: './exercises-list-modal.component.html',
  styleUrl: './exercises-list-modal.component.scss',
  imports: [
    IonModal,
    IonContent,
    IonCol,
    IonTitle,
    IonIcon,
    IonRow,
    IonGrid,
    IonToolbar,
    IonHeader,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
],
})
export class ExercisesListModalComponent implements OnInit {
  private modalService = inject(ExercisesListModalService);

  exerciseDivision!: Divisions;
  isOpen = false;

  constructor() {
    addIcons({ chevronBackOutline, informationCircleOutline });
  }

  get exercises() {
    return this.exerciseDivision.exercises;
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
