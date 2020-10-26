import { async, TestBed } from '@angular/core/testing';
import { MatSelectSearchComponent } from './mat-select-search.component';
describe('MatSelectSearchComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MatSelectSearchComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MatSelectSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mat-select-search.component.spec.js.map