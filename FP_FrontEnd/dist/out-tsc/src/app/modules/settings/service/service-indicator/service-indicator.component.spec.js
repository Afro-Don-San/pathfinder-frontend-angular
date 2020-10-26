import { async, TestBed } from '@angular/core/testing';
import { ServiceIndicatorComponent } from './service-indicator.component';
describe('ServiceIndicatorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ServiceIndicatorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ServiceIndicatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=service-indicator.component.spec.js.map