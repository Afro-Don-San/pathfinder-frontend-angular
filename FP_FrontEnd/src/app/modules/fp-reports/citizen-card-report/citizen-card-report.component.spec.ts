import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenCardReportComponent } from './citizen-card-report.component';

describe('CitizenCardReportComponent', () => {
  let component: CitizenCardReportComponent;
  let fixture: ComponentFixture<CitizenCardReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenCardReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenCardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
