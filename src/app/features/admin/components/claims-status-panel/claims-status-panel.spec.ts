import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsStatusPanel } from './claims-status-panel';

describe('ClaimsStatusPanel', () => {
  let component: ClaimsStatusPanel;
  let fixture: ComponentFixture<ClaimsStatusPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimsStatusPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsStatusPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
