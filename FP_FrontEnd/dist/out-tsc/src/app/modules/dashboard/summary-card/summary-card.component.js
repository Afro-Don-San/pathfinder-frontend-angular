import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../shared/animations/router-animation';
var SummaryCardComponent = /** @class */ (function () {
    function SummaryCardComponent() {
        this.routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
    }
    SummaryCardComponent.prototype.ngOnInit = function () {
    };
    SummaryCardComponent.prototype.goTo = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SummaryCardComponent.prototype, "top_title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SummaryCardComponent.prototype, "low_title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SummaryCardComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SummaryCardComponent.prototype, "additional_information", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SummaryCardComponent.prototype, "image", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SummaryCardComponent.prototype, "loading", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], SummaryCardComponent.prototype, "route", void 0);
    SummaryCardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-summary-card',
            templateUrl: './summary-card.component.html',
            styleUrls: ['./summary-card.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SummaryCardComponent);
    return SummaryCardComponent;
}());
export { SummaryCardComponent };
//# sourceMappingURL=summary-card.component.js.map