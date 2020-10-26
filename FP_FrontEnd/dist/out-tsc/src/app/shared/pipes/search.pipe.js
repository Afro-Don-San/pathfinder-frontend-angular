import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
/**
 * A search pipe to help to search items using thier property
 * just pass multiple properties using comma separated list
 * Usage: items | search:'obj_property_1,obj_property_2...,obj_property_n':searchValue
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term, strict) {
        if (strict === void 0) { strict = false; }
        if (!term) {
            return value;
        }
        if (typeof term === 'string') {
            if (strict) {
                return (value || [])
                    .filter(function (item) { return keys.split(',')
                    .some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gy')
                    .test(item[key]); }); });
            }
            else {
                return (value || [])
                    .filter(function (item) { return keys.split(',')
                    .some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi')
                    .test(item[key]); }); });
            }
        }
        else {
            var retValue_1 = [];
            term.forEach(function (t) {
                retValue_1 = retValue_1.concat((value || [])
                    .filter(function (item) { return keys.split(',')
                    .some(function (key) { return item.hasOwnProperty(key) && new RegExp(t, 'gi')
                    .test(item[key]); }); }));
            });
            return retValue_1;
        }
    };
    SearchPipe = tslib_1.__decorate([
        Pipe({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());
export { SearchPipe };
//# sourceMappingURL=search.pipe.js.map