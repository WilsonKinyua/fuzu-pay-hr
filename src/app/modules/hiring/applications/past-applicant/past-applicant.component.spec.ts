import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastApplicantComponent } from './past-applicant.component';

describe('PastApplicantComponent', () => {
  let component: PastApplicantComponent;
  let fixture: ComponentFixture<PastApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastApplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
