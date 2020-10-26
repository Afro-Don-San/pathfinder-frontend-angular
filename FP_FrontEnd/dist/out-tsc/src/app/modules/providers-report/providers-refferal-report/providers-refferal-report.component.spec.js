import { async, TestBed } from '@angular/core/testing';
import { ProvidersRefferalReportComponent } from './providers-refferal-report.component';
describe('ProvidersRefferalReportComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProvidersRefferalReportComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProvidersRefferalReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=providers-refferal-report.component.spec.js.map