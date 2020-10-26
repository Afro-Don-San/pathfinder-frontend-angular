import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeIn } from '../../animations/router-animation';
var SaveAreaComponent = /** @class */ (function () {
    function SaveAreaComponent() {
        this.saveDisabled = false;
        this.confirmFirst = false;
        this.saveText = 'Save';
        this.saveIcon = 'save';
        this.cancelText = 'Cancel';
        this.showCancel = true;
        this.confirmText = 'Are you sure you want to perform this action?';
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.showConfirm = false;
    }
    SaveAreaComponent.prototype.onSave = function (sendRequest) {
        if (sendRequest === void 0) { sendRequest = false; }
        if (this.confirmFirst && sendRequest) {
            this.showConfirm = true;
        }
        else {
            this.save.emit();
        }
    };
    SaveAreaComponent.prototype.onClose = function () {
        this.cancel.emit();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAreaComponent.prototype, "saveDisabled", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAreaComponent.prototype, "confirmFirst", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAreaComponent.prototype, "saveText", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAreaComponent.prototype, "saveIcon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAreaComponent.prototype, "cancelText", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SaveAreaComponent.prototype, "showCancel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAreaComponent.prototype, "confirmText", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAreaComponent.prototype, "save", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAreaComponent.prototype, "cancel", void 0);
    SaveAreaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-save-area',
            templateUrl: './save-area.component.html',
            styleUrls: ['./save-area.component.scss'],
            animations: [fadeIn],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], SaveAreaComponent);
    return SaveAreaComponent;
}());
export { SaveAreaComponent };
//# sourceMappingURL=save-area.component.js.map