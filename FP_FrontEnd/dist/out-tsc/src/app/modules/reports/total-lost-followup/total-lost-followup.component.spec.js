import { async, TestBed } from '@angular/core/testing';
import { TotalLostFollowupComponent } from './total-lost-followup.component';
describe('TotalLostFollowupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TotalLostFollowupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TotalLostFollowupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-lost-followup.component.spec.js.map