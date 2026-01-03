import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllClaims } from './see-all-claims';

describe('SeeAllClaims', () => {
  let component: SeeAllClaims;
  let fixture: ComponentFixture<SeeAllClaims>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeAllClaims]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAllClaims);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
