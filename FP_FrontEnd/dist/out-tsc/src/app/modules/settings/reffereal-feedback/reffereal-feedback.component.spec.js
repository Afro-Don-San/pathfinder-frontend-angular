import { async, TestBed } from '@angular/core/testing';
import { RefferealFeedbackComponent } from './reffereal-feedback.component';
describe('RefferealFeedbackComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RefferealFeedbackComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RefferealFeedbackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reffereal-feedback.component.spec.js.map