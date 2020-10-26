import * as tslib_1 from "tslib";
import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new EventEmitter();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(true);
        }
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    tslib_1.__decorate([
        HostListener('document:click', ['$event.target']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = tslib_1.__decorate([
        Directive({
            selector: '[appClickOutside]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
//# sourceMappingURL=click-outside.directive.js.map