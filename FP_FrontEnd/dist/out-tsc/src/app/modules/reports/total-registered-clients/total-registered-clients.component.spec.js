import { async, TestBed } from '@angular/core/testing';
import { TotalRegisteredClientsComponent } from './total-registered-clients.component';
describe('TotalRegisteredClientsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TotalRegisteredClientsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TotalRegisteredClientsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=total-registered-clients.component.spec.js.map