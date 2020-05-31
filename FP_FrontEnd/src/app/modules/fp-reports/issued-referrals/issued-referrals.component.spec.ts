import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedReferralsComponent } from './issued-referrals.component';

describe('IssuedReferralsComponent', () => {
  let component: IssuedReferralsComponent;
  let fixture: ComponentFixture<IssuedReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedReferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
