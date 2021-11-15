import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveInterviewComponent } from './active-interview.component';

describe('ActiveInterviewComponent', () => {
  let component: ActiveInterviewComponent;
  let fixture: ComponentFixture<ActiveInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
