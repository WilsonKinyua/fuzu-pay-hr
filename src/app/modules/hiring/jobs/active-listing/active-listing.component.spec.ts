import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveListingComponent } from './active-listing.component';

describe('ActiveListingComponent', () => {
  let component: ActiveListingComponent;
  let fixture: ComponentFixture<ActiveListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
