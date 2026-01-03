import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClaimPage } from './add-claim-page';

describe('AddClaimPage', () => {
  let component: AddClaimPage;
  let fixture: ComponentFixture<AddClaimPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClaimPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
