import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimByHospitalPanel } from './claim-by-hospital-panel';

describe('ClaimByHospitalPanel', () => {
  let component: ClaimByHospitalPanel;
  let fixture: ComponentFixture<ClaimByHospitalPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimByHospitalPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimByHospitalPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
