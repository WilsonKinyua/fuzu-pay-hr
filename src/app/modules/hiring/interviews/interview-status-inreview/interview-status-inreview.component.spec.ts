import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewStatusInreviewComponent } from './interview-status-inreview.component';

describe('InterviewStatusInreviewComponent', () => {
  let component: InterviewStatusInreviewComponent;
  let fixture: ComponentFixture<InterviewStatusInreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewStatusInreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewStatusInreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
