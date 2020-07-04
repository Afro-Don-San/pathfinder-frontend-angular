import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFamilyPlanningMethodsIssuedComponent } from './total-family-planning-methods-issued.component';

describe('TotalFamilyPlanningMethodsIssuedComponent', () => {
  let component: TotalFamilyPlanningMethodsIssuedComponent;
  let fixture: ComponentFixture<TotalFamilyPlanningMethodsIssuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalFamilyPlanningMethodsIssuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalFamilyPlanningMethodsIssuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
