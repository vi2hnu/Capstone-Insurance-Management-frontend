import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanForm } from './add-plan-form';

describe('AddPlanForm', () => {
  let component: AddPlanForm;
  let fixture: ComponentFixture<AddPlanForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlanForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlanForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
