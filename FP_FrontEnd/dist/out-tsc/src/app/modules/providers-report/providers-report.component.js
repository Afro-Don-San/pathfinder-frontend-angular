import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ProvidersReportComponent = /** @class */ (function () {
    function ProvidersReportComponent(router) {
        this.router = router;
        this.activeLinkIndex = -1;
        this.title = 'Family Planning Reports';
        this.navLinks = [
            {
                label: 'Issued Services By Teams',
                link: ['', 'providers_report', 'issued-referrals-by-location-report'],
                index: 0
            },
            {
                label: 'Citizens Card Report',
                link: ['', 'providers_report', 'citizens-report'],
                index: 1
            },
            {
                label: 'Total Clients Enrolled to Beach Management Units',
                link: ['', 'providers_report', 'total-clients-enrolled-to-beach-management-report'],
                index: 2
            },
            {
                label: 'Total Clients Enrolled to Bee Keeping',
                link: ['', 'providers_report', 'total-clients-enrolled-to-bee-keeping-report'],
                index: 3
            },
            {
                label: 'Total Clients Enrolled to Loan units',
                link: ['', 'providers_report', 'total-clients-enrolled-to-loan-units-report'],
                index: 4
            },
        ];
    }
    ProvidersReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks
                .find(function (tab) { return tab.link[1] === '.' + _this.router.url; }));
        });
    };
    ProvidersReportComponent = tslib_1.__decorate([
        Component({
            selector: 'app-providers-report',
            templateUrl: './providers-report.component.html',
            styleUrls: ['./providers-report.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ProvidersReportComponent);
    return ProvidersReportComponent;
}());
export { ProvidersReportComponent };
//# sourceMappingURL=providers-report.component.js.map