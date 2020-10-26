import { async, TestBed } from '@angular/core/testing';
import { TotalIssuedLostFollowupComponent } from './total-issued-lost-followup.component';
describe('TotalIssuedLostFollowupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TotalIssuedLostFollowupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TotalIssuedLostFollowupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-issued-lost-followup.component.spec.js.map