import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledPolicyCard } from './enrolled-policy-card';

describe('EnrolledPolicyCard', () => {
  let component: EnrolledPolicyCard;
  let fixture: ComponentFixture<EnrolledPolicyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrolledPolicyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledPolicyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
