import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCardComponent } from './workout-card.component';

describe('WorkoutCardComponent', () => {
  let component: WorkoutCardComponent;
  let fixture: ComponentFixture<WorkoutCardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
