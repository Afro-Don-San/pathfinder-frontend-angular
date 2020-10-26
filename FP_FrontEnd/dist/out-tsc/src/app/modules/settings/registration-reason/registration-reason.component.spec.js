import { async, TestBed } from '@angular/core/testing';
import { RegistrationReasonComponent } from './registration-reason.component';
describe('RegistrationReasonComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RegistrationReasonComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RegistrationReasonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=registration-reason.component.spec.js.map