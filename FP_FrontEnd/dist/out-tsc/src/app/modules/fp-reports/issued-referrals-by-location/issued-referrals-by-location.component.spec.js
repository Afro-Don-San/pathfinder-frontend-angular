import { async, TestBed } from '@angular/core/testing';
import { IssuedReferralsByLocationComponent } from './issued-referrals-by-location.component';
describe('IssuedReferralsByLocationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [IssuedReferralsByLocationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(IssuedReferralsByLocationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=issued-referrals-by-location.component.spec.js.map