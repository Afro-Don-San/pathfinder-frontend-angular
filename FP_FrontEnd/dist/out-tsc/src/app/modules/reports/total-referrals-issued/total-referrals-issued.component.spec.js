import { async, TestBed } from '@angular/core/testing';
import { TotalReferralsIssuedComponent } from './total-referrals-issued.component';
describe('TotalReferralsIssuedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TotalReferralsIssuedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TotalReferralsIssuedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-referrals-issued.component.spec.js.map