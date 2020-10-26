import { async, TestBed } from '@angular/core/testing';
import { UpdateMemberComponent } from './update-member.component';
describe('UpdateMemberComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdateMemberComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdateMemberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-member.component.spec.js.map