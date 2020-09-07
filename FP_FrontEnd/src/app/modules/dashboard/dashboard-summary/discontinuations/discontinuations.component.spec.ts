import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscontinuationsComponent } from './discontinuations.component';

describe('DiscontinuationsComponent', () => {
  let component: DiscontinuationsComponent;
  let fixture: ComponentFixture<DiscontinuationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscontinuationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscontinuationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
