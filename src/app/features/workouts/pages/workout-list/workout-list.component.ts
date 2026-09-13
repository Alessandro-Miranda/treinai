import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/angular';
import { map, Observable, of } from 'rxjs';
import { TRAINING_PLAN_MOCK, WORKOUT_MOCK } from '../../_mocks/workout-mock';
import { EmptyStateComponent } from '../../components/empty-state/empty-state.component';
import { WorkoutCardComponent } from '../../components/workout-card/workout-card.component';
import { ITrainingPlan, IWorkout } from '../../models/IWorkout';

type Workouts = {
  currentWorkout: IWorkout;
  nextWorkouts: IWorkout[];
};

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss'],
  imports: [
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    EmptyStateComponent,
    AsyncPipe,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    WorkoutCardComponent
],
})
export class WorkoutsComponent implements OnInit {
  workouts$: Observable<Workouts> | undefined;
  trainingPlan!: ITrainingPlan;

  ngOnInit(): void {
    // Vai chamar o TrainingPlan e com base no currentWorkoutId será obtido a lista de treinos do plano
    this.trainingPlan = TRAINING_PLAN_MOCK;
    this.workouts$ = of(WORKOUT_MOCK).pipe(
      map((workouts) => ({
        currentWorkout: workouts.find(
          (workout) => workout.id === this.trainingPlan.currentWorkoutId,
        ) as IWorkout,
        nextWorkouts: workouts.filter(
          (workout) =>
            workout.id !== this.trainingPlan.currentWorkoutId &&
            workout.status !== 'finished',
        ),
      })),
    );
  }
}

/**
 * REGRAS DE NEGÓCIO PARA O CADASTRO:
 * - OS TREINOS SERÃO CADASTRADOS EM FORMATO DE PLANO DE TREINO
 * - O PLANO MANTERÁ O ID DO PRÓXIMO TREINO A SER FEITO
 * - O PRIMEIRO TREINO DA LISTA NO MOMENTO DO CADASTRO SERÁ O TREINO ATUAL
 * - CADA TREINO TERÁ UMA POSIÇÃO NA LISTA QUE SERVIRÁ COMO LINK PARA IDENTIFIACR O TREINO ATUAL DO PLANO
 * REGRAS DE NEGÓCIO DE EXECUÇÃO E FINALIZAÇÃO DO TREINO:
 * - O TREINO DO DIA SERÁ DEFINIDO COM BASE EM CURRENT_WORKOUT = TRUE E STATUS = NOT_STARTED | IN_PROGRESS
 * - AO INICIAR O TREINO, ALTERAR O STATUS PARA IN_PROGRESS
 * - AO FINALIZAR O TREINO: ATUALIZAR O PONTEIRO NO PLANO COM A POSIÇÃO DO PRÓXIMO TREINO
 */
