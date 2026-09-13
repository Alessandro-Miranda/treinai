import { ITrainingPlan, IWorkout } from '../models/IWorkout';

export const WORKOUT_MOCK: IWorkout[] = [
  {
    id: 'xpto',
    name: 'Treino A',
    muscleGroup: ['Peito', 'Ombro'],
    exercies: [
      {
        name: 'Supino Reto',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
      {
        name: 'Elevação Frontal',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
    ],
    duration: 65,
    position: 1,
    status: 'not_started',
  },
  {
    id: 'abc',
    name: 'Treino B',
    muscleGroup: ['Quadriceps', 'Gluteo'],
    exercies: [
      {
        name: 'Extensora',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
    ],
    duration: 60,
    position: 1,
    status: 'not_started',
  },
  {
    id: 'abcd',
    name: 'Treino C',
    muscleGroup: ['Costas', 'Bíceps'],
    exercies: [
      {
        name: 'Remada curvada',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
      {
        name: 'Pulley Frontal',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
      {
        name: 'Rosca Martelo',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
    ],
    duration: 70,
    position: 1,
    status: 'not_started',
  },
  {
    id: 'abcde',
    name: 'Treino D',
    muscleGroup: ['Costas', 'Bíceps'],
    exercies: [
      {
        name: 'Remada curvada',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
      {
        name: 'Pulley Frontal',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
      {
        name: 'Rosca Martelo',
        series: 4,
        repetitions: 12,
        restPeriod: 60,
      },
    ],
    duration: 70,
    position: 1,
    status: 'finished',
  }
];

export const TRAINING_PLAN_MOCK: ITrainingPlan = {
  id: 'plan-001',
  currentWorkoutId: 'xpto',
  name: 'Plano mock',
  workouts: WORKOUT_MOCK,
};