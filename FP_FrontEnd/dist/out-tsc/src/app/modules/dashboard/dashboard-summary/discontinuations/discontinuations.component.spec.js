import { async, TestBed } from '@angular/core/testing';
import { DiscontinuationsComponent } from './discontinuations.component';
describe('DiscontinuationsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DiscontinuationsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DiscontinuationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=discontinuations.component.spec.js.map