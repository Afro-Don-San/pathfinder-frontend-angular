import { async, TestBed } from '@angular/core/testing';
import { CitizenCardReportComponent } from './citizen-card-report.component';
describe('CitizenCardReportComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CitizenCardReportComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CitizenCardReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=citizen-card-report.component.spec.js.map