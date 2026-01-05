import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopClaimsPanel } from './top-claims-panel';

describe('TopClaimsPanel', () => {
  let component: TopClaimsPanel;
  let fixture: ComponentFixture<TopClaimsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopClaimsPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopClaimsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
