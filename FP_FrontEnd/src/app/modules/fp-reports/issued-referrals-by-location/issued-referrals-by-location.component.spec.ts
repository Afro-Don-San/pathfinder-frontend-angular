import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedReferralsByLocationComponent } from './issued-referrals-by-location.component';

describe('IssuedReferralsByLocationComponent', () => {
  let component: IssuedReferralsByLocationComponent;
  let fixture: ComponentFixture<IssuedReferralsByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedReferralsByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedReferralsByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
