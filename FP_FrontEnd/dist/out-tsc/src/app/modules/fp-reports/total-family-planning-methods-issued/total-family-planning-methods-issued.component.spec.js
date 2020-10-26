import { async, TestBed } from '@angular/core/testing';
import { TotalFamilyPlanningMethodsIssuedComponent } from './total-family-planning-methods-issued.component';
describe('TotalFamilyPlanningMethodsIssuedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TotalFamilyPlanningMethodsIssuedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TotalFamilyPlanningMethodsIssuedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-family-planning-methods-issued.component.spec.js.map