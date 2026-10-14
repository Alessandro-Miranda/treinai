import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoachSignIn } from './coach-sign-in';

describe('CoachSignIn', () => {
  let component: CoachSignIn;
  let fixture: ComponentFixture<CoachSignIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachSignIn],
    }).compileComponents();

    fixture = TestBed.createComponent(CoachSignIn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
