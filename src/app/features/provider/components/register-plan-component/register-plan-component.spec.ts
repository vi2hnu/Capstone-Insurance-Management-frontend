import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPlanComponent } from './register-plan-component';

describe('RegisterPlanComponent', () => {
  let component: RegisterPlanComponent;
  let fixture: ComponentFixture<RegisterPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
