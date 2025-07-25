import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemGroup, IonModal, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';

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
    IonTextarea
],
})
export class ExerciseModalComponent {
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  constructor() {
    addIcons({ chevronBackOutline })
  }

  onCloseModal() {
    this.isOpenChange.emit(false);
  }
}
