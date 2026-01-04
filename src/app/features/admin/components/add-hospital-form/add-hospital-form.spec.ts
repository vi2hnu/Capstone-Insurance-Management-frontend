import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHospitalForm } from './add-hospital-form';

describe('AddHospitalForm', () => {
  let component: AddHospitalForm;
  let fixture: ComponentFixture<AddHospitalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHospitalForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHospitalForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
