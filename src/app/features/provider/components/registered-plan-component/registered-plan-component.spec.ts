import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredPlanComponent } from './registered-plan-component';

describe('RegisteredPlanComponent', () => {
  let component: RegisteredPlanComponent;
  let fixture: ComponentFixture<RegisteredPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
