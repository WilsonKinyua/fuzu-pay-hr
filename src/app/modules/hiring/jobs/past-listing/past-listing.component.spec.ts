import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastListingComponent } from './past-listing.component';

describe('PastListingComponent', () => {
  let component: PastListingComponent;
  let fixture: ComponentFixture<PastListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
