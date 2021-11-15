import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastInterviewComponent } from './past-interview.component';

describe('PastInterviewComponent', () => {
  let component: PastInterviewComponent;
  let fixture: ComponentFixture<PastInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
