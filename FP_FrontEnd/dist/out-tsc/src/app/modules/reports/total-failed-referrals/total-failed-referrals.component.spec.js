import { async, TestBed } from '@angular/core/testing';
import { TotalFailedReferralsComponent } from './total-failed-referrals.component';
describe('TotalFailedReferralsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TotalFailedReferralsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TotalFailedReferralsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-failed-referrals.component.spec.js.map