import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var ShowButtonPipe = /** @class */ (function () {
    function ShowButtonPipe() {
    }
    ShowButtonPipe.prototype.transform = function (value, property) {
        var show = true;
        if (value.hasOwnProperty('actionButtons')) {
            if (value.actionButtons.hasOwnProperty(property)) {
                return value.actionButtons[property];
            }
        }
        return show;
    };
    ShowButtonPipe = tslib_1.__decorate([
        Pipe({
            name: 'showButton'
        })
    ], ShowButtonPipe);
    return ShowButtonPipe;
}());
export { ShowButtonPipe };
//# sourceMappingURL=show-button.pipe.js.map