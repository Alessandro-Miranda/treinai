import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Divisions } from "src/app/core/interfaces/training.interface";

@Injectable({ providedIn: 'root' })
export class ExercisesListModalService {
  private modalSubject = new Subject<{ exercisesDivision: Divisions }>;
  modal$ = this.modalSubject.asObservable();

  open(exercisesDivision: Divisions) {
    this.modalSubject.next({ exercisesDivision })
  }
}