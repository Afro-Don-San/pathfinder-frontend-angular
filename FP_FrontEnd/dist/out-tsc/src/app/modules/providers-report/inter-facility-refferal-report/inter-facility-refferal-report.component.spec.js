import { async, TestBed } from '@angular/core/testing';
import { InterFacilityRefferalReportComponent } from './inter-facility-refferal-report.component';
describe('InterFacilityRefferalReportComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InterFacilityRefferalReportComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InterFacilityRefferalReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inter-facility-refferal-report.component.spec.js.map