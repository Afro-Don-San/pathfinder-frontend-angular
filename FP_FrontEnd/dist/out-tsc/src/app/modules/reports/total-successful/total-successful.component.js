import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var TotalSuccessfulComponent = /** @class */ (function () {
    function TotalSuccessfulComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalSuccessfulComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalSuccessfulComponent.prototype, "jsonData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalSuccessfulComponent.prototype, "startDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalSuccessfulComponent.prototype, "endDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TotalSuccessfulComponent.prototype, "orgUnitName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalSuccessfulComponent.prototype, "report", void 0);
    TotalSuccessfulComponent = tslib_1.__decorate([
        Component({
            selector: 'app-total-successful',
            templateUrl: './total-successful.component.html',
            styleUrls: ['./total-successful.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TotalSuccessfulComponent);
    return TotalSuccessfulComponent;
}());
export { TotalSuccessfulComponent };
//# sourceMappingURL=total-successful.component.js.map