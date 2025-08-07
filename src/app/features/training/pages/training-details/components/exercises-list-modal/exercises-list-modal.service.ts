import { Injectable } from "@angular/core";
import { Divisions } from "@Features/training/interfaces/training.interface";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ExercisesListModalService {
  private modalSubject = new Subject<{ exercisesDivision: Divisions }>;
  modal$ = this.modalSubject.asObservable();

  open(exercisesDivision: Divisions) {
    this.modalSubject.next({ exercisesDivision })
  }
}