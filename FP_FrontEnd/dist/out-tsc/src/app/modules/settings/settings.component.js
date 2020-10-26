import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.activeLinkIndex = -1;
        this.title = 'System Settings';
        this.navLinks = [
            {
                label: 'Services',
                link: ['', 'settings', 'services'],
                index: 0
            }, {
                label: 'Indicators',
                link: ['', 'settings', 'indicators'],
                index: 1
            }, {
                label: 'Referral Type',
                link: ['', 'settings', 'reffereal-type'],
                index: 2
            }, {
                label: 'Referral Feedback',
                link: ['', 'settings', 'reffereal-feedback'],
                index: 2
            }, {
                label: 'Registration Reason',
                link: ['', 'settings', 'registration-reason'],
                index: 2
            },
        ];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map