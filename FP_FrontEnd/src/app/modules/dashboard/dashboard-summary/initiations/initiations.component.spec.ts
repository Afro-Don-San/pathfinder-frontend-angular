import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiationsComponent } from './initiations.component';

describe('InitiationsComponent', () => {
  let component: InitiationsComponent;
  let fixture: ComponentFixture<InitiationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
