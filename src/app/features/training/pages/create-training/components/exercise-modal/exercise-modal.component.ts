import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemGroup, IonModal, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { ExercisesGroup } from '../../@types/exercises-group';

@Component({
  selector: 'app-exercise-modal',
  templateUrl: './exercise-modal.component.html',
  styleUrls: ['./exercise-modal.component.scss'],
  imports: [
    IonModal,
    IonHeader,
    IonToolbar,
    IonButton,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonItemGroup,
    IonTextarea,
  ],
})
export class ExerciseModalComponent {
  @Input() addExercise = { open: false, divisionIndex: 0 };
  @Output() addExerciseChange = new EventEmitter<{
    open: boolean;
    divisionIndex: number;
  }>();
  
  exercises = new FormGroup<ExercisesGroup>({
    uuid: new FormControl(''),
    title: new FormControl(''),
    sets: new FormControl(0),
    reps: new FormControl(0),
    rest: new FormControl(0),
    weight: new FormControl(0),
    observation: new FormControl(''),
  })

  constructor() {
    addIcons({ chevronBackOutline });
  }

  onCloseModal(divisionIndex: number) {
    this.addExerciseChange.emit({ open: false, divisionIndex });
  }
}
