import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var TotalFailedReferralsComponent = /** @class */ (function () {
    function TotalFailedReferralsComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalFailedReferralsComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalFailedReferralsComponent.prototype, "jsonData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalFailedReferralsComponent.prototype, "startDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalFailedReferralsComponent.prototype, "endDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TotalFailedReferralsComponent.prototype, "orgUnitName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalFailedReferralsComponent.prototype, "report", void 0);
    TotalFailedReferralsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-total-failed-referrals',
            templateUrl: './total-failed-referrals.component.html',
            styleUrls: ['./total-failed-referrals.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TotalFailedReferralsComponent);
    return TotalFailedReferralsComponent;
}());
export { TotalFailedReferralsComponent };
//# sourceMappingURL=total-failed-referrals.component.js.map