import { async, TestBed } from '@angular/core/testing';
import { TotalSuccessfulComponent } from './total-successful.component';
describe('TotalSuccessfulComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TotalSuccessfulComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TotalSuccessfulComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-successful.component.spec.js.map