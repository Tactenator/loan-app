import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestDetailsComponent } from './interest-details.component';

describe('InterestDetailsComponent', () => {
  let component: InterestDetailsComponent;
  let fixture: ComponentFixture<InterestDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestDetailsComponent]
    });
    fixture = TestBed.createComponent(InterestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
