import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var TopbannerComponent = /** @class */ (function () {
    function TopbannerComponent() {
        this.title = '';
        this.image = '';
        this.url = '';
        this.loading = false;
    }
    TopbannerComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TopbannerComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TopbannerComponent.prototype, "image", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TopbannerComponent.prototype, "url", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TopbannerComponent.prototype, "loading", void 0);
    TopbannerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-topbanner',
            templateUrl: './topbanner.component.html',
            styleUrls: ['./topbanner.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TopbannerComponent);
    return TopbannerComponent;
}());
export { TopbannerComponent };
//# sourceMappingURL=topbanner.component.js.map