import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var WithoutPipe = /** @class */ (function () {
    function WithoutPipe() {
    }
    WithoutPipe.prototype.transform = function (value, property, val) {
        console.log({ value: value }, { property: property }, { val: val });
        if (!property) {
            return value;
        }
        if (!value) {
            return value;
        }
        if (!val) {
            return value;
        }
        console.log(val);
        return value.filter(function (v) { return !(val.includes(v[property])); });
    };
    WithoutPipe = tslib_1.__decorate([
        Pipe({
            name: 'without'
        })
    ], WithoutPipe);
    return WithoutPipe;
}());
export { WithoutPipe };
//# sourceMappingURL=without.pipe.js.map