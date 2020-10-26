import { async, TestBed } from '@angular/core/testing';
import { FacilityRefferalReportComponent } from './facility-refferal-report.component';
describe('FacilityRefferalReportComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FacilityRefferalReportComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FacilityRefferalReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=facility-refferal-report.component.spec.js.map