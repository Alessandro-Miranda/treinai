import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonModal, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { ToastComponent } from "src/app/shared/toast/toast.component";
import { ToastService } from 'src/app/shared/toast/toast.service';
import { ExerciseControl, Exercises } from '../../@types/exercises';

@Component({
  selector: 'app-exercise-form-modal',
  templateUrl: './exercise-form-modal.component.html',
  styleUrls: ['./exercise-form-modal.component.scss'],
  imports: [
    IonModal,
    IonHeader,
    IonToolbar,
    IonButton,
    IonTitle,
    IonContent,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonTextarea,
    ReactiveFormsModule,
    ToastComponent
],
})
export class ExerciseModalComponent {
  private toastService = inject(ToastService);

  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() exerciseAdded = new EventEmitter<Exercises>();

  exercisesForm = new FormGroup<ExerciseControl<Exercises>>({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    sets: new FormControl(0, [Validators.required, Validators.min(1)]),
    reps: new FormControl(0, [Validators.required, Validators.min(1)]),
    rest: new FormControl(0, [Validators.required, Validators.min(1)]),
    weight: new FormControl(),
    observation: new FormControl(),
  });

  constructor() {
    addIcons({ chevronBackOutline });
  }

  onCloseModal() {
    this.isOpenChange.emit(false);
    this.exercisesForm.reset();
  }

  onAddExercise() {
    if (this.exercisesForm.invalid) {
      this.exercisesForm.markAllAsTouched();
      return;
    }

    this.toastService.show('Exercício adicionado');
    this.exerciseAdded.emit(this.exercisesForm.getRawValue() as Exercises);
    this.exercisesForm.reset();
  }
}
