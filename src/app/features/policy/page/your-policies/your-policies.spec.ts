import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPolicies } from './your-policies';

describe('YourPolicies', () => {
  let component: YourPolicies;
  let fixture: ComponentFixture<YourPolicies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourPolicies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourPolicies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
