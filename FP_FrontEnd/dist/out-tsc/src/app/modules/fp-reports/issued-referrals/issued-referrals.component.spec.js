import { async, TestBed } from '@angular/core/testing';
import { IssuedReferralsComponent } from './issued-referrals.component';
describe('IssuedReferralsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [IssuedReferralsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(IssuedReferralsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=issued-referrals.component.spec.js.map