import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var TotalReferralsIssuedComponent = /** @class */ (function () {
    function TotalReferralsIssuedComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalReferralsIssuedComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalReferralsIssuedComponent.prototype, "jsonData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalReferralsIssuedComponent.prototype, "startDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalReferralsIssuedComponent.prototype, "endDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TotalReferralsIssuedComponent.prototype, "orgUnitName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalReferralsIssuedComponent.prototype, "report", void 0);
    TotalReferralsIssuedComponent = tslib_1.__decorate([
        Component({
            selector: 'app-total-referrals-issued',
            templateUrl: './total-referrals-issued.component.html',
            styleUrls: ['./total-referrals-issued.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TotalReferralsIssuedComponent);
    return TotalReferralsIssuedComponent;
}());
export { TotalReferralsIssuedComponent };
//# sourceMappingURL=total-referrals-issued.component.js.map