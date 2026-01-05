import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPlansPanel } from './top-plans-panel';

describe('TopPlansPanel', () => {
  let component: TopPlansPanel;
  let fixture: ComponentFixture<TopPlansPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPlansPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPlansPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
