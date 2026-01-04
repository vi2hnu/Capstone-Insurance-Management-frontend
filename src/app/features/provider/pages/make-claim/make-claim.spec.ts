import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeClaim } from './make-claim';

describe('MakeClaim', () => {
  let component: MakeClaim;
  let fixture: ComponentFixture<MakeClaim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeClaim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeClaim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
