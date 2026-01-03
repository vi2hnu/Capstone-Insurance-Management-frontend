import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollPlanCard } from './enroll-plan-card';

describe('EnrollPlanCard', () => {
  let component: EnrollPlanCard;
  let fixture: ComponentFixture<EnrollPlanCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollPlanCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollPlanCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
