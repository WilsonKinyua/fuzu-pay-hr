import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewStatusDeclinedComponent } from './interview-status-declined.component';

describe('InterviewStatusDeclinedComponent', () => {
  let component: InterviewStatusDeclinedComponent;
  let fixture: ComponentFixture<InterviewStatusDeclinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewStatusDeclinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewStatusDeclinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
