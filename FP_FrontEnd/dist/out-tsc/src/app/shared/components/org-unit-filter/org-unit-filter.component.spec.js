import { async, TestBed } from '@angular/core/testing';
import { OrgUnitFilterComponent } from './org-unit-filter.component';
describe('OrgUnitFilterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OrgUnitFilterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OrgUnitFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=org-unit-filter.component.spec.js.map