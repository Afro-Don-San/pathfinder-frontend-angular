import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import * as _ from 'lodash';
var FilterByNamePipe = /** @class */ (function () {
    function FilterByNamePipe() {
    }
    FilterByNamePipe.prototype.transform = function (value, name) {
        if (name !== undefined && value) {
            // filter users, users which match and return true will be kept, false will be filtered out
            if (value.length !== 0 && name !== null) {
                var splitData_1 = name;
                [',', '[', ']', '(', ')', ',', '.', '-', '_'].forEach(function (char) {
                    splitData_1 = splitData_1.split(char).join(' ');
                });
                return _.sortBy(value.filter(function (item) {
                    var found = true;
                    splitData_1.split(' ').forEach(function (str) {
                        if (item.name.toLowerCase().indexOf(str.toLowerCase()) === -1) {
                            found = false;
                        }
                    });
                    return found;
                }), [function (item) { return item.name; }]);
            }
        }
        return _.sortBy(value, [function (item) { return item.name; }]);
    };
    FilterByNamePipe = tslib_1.__decorate([
        Pipe({
            name: 'filterByName'
        })
    ], FilterByNamePipe);
    return FilterByNamePipe;
}());
export { FilterByNamePipe };
//# sourceMappingURL=filter-by-name.pipe.js.map