import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formSize, tableSize } from '../../animations/router-animation';
var TableFormComponent = /** @class */ (function () {
    function TableFormComponent() {
        this.loading = false;
        this.showTopBanner = true;
        this.viewDetails = false;
        this.hideAdd = false;
        this.smallForm = true;
        this.addItem = new EventEmitter();
        this.close = new EventEmitter();
        this.animationSize = 'sixty';
    }
    TableFormComponent.prototype.ngOnInit = function () {
    };
    TableFormComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    TableFormComponent.prototype.add = function () {
        this.addItem.emit();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TableFormComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TableFormComponent.prototype, "image", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TableFormComponent.prototype, "loading", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TableFormComponent.prototype, "formTitle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TableFormComponent.prototype, "showTopBanner", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TableFormComponent.prototype, "viewDetails", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TableFormComponent.prototype, "hideAdd", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TableFormComponent.prototype, "smallForm", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TableFormComponent.prototype, "addItem", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TableFormComponent.prototype, "close", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TableFormComponent.prototype, "animationSize", void 0);
    TableFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-table-form',
            templateUrl: './table-form.component.html',
            styleUrls: ['./table-form.component.scss'],
            animations: [
                formSize, tableSize
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TableFormComponent);
    return TableFormComponent;
}());
export { TableFormComponent };
//# sourceMappingURL=table-form.component.js.map