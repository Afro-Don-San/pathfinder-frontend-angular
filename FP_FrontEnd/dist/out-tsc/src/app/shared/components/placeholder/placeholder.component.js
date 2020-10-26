import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var PlaceholderComponent = /** @class */ (function () {
    function PlaceholderComponent() {
        this.numberOfLines = 4;
        this.useGrid = false;
    }
    PlaceholderComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PlaceholderComponent.prototype, "numberOfLines", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PlaceholderComponent.prototype, "useGrid", void 0);
    PlaceholderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-placeholder',
            templateUrl: './placeholder.component.html',
            styleUrls: ['./placeholder.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PlaceholderComponent);
    return PlaceholderComponent;
}());
export { PlaceholderComponent };
//# sourceMappingURL=placeholder.component.js.map