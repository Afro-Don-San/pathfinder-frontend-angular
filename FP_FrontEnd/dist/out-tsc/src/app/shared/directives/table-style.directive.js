import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
var TableStyleDirective = /** @class */ (function () {
    function TableStyleDirective(el) {
        this.el = el;
        this.color = 'red';
    }
    // afterViewInit lifecycle hook runs after DOM is rendered
    TableStyleDirective.prototype.ngAfterViewInit = function () {
        // get anchor element
        console.log('kwenye directive hapa');
        var anchorEl = this.el.nativeElement.querySelector('table');
        console.log({ anchorEl: anchorEl });
        // assign color
        if (anchorEl) {
            anchorEl.style.backgroundColor = this.color;
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TableStyleDirective.prototype, "color", void 0);
    TableStyleDirective = tslib_1.__decorate([
        Directive({
            selector: '[appTableStyle]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], TableStyleDirective);
    return TableStyleDirective;
}());
export { TableStyleDirective };
//# sourceMappingURL=table-style.directive.js.map