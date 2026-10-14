import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoachSignUp } from './coach-sign-up';

describe('CoachSignUp', () => {
  let component: CoachSignUp;
  let fixture: ComponentFixture<CoachSignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachSignUp],
    }).compileComponents();

    fixture = TestBed.createComponent(CoachSignUp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
