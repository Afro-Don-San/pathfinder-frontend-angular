import { async, TestBed } from '@angular/core/testing';
import { SuccessfulMaraliaReferalsComponent } from './successful-maralia-referals.component';
describe('SuccessfulMaraliaReferalsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SuccessfulMaraliaReferalsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SuccessfulMaraliaReferalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=successful-maralia-referals.component.spec.js.map