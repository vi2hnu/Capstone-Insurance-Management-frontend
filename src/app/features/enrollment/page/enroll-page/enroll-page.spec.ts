import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollPage } from './enroll-page';

describe('EnrollPage', () => {
  let component: EnrollPage;
  let fixture: ComponentFixture<EnrollPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
