import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyStatusPannel } from './policy-status-pannel';

describe('PolicyStatusPannel', () => {
  let component: PolicyStatusPannel;
  let fixture: ComponentFixture<PolicyStatusPannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyStatusPannel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyStatusPannel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
