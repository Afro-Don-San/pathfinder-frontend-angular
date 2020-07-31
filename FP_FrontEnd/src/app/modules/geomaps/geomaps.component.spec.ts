import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeomapsComponent } from './geomaps.component';

describe('GeomapsComponent', () => {
  let component: GeomapsComponent;
  let fixture: ComponentFixture<GeomapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeomapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeomapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
