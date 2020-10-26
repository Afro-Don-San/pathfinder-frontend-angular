import { async, TestBed } from '@angular/core/testing';
import { RefferealTypeComponent } from './reffereal-type.component';
describe('RefferealTypeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RefferealTypeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RefferealTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reffereal-type.component.spec.js.map