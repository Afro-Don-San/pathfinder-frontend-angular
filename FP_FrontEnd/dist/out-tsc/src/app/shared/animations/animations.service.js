import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AnimationsService = /** @class */ (function () {
    function AnimationsService() {
    }
    AnimationsService_1 = AnimationsService;
    AnimationsService.isRouteAnimationsType = function (type) {
        return AnimationsService_1.routeAnimationType === type;
    };
    AnimationsService.prototype.updateRouteAnimationType = function (pageAnimations, elementsAnimations) {
        AnimationsService_1.routeAnimationType =
            pageAnimations && elementsAnimations
                ? 'ALL'
                : pageAnimations
                    ? 'PAGE'
                    : elementsAnimations
                        ? 'ELEMENTS'
                        : 'NONE';
    };
    var AnimationsService_1;
    AnimationsService.routeAnimationType = 'ALL';
    AnimationsService = AnimationsService_1 = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AnimationsService);
    return AnimationsService;
}());
export { AnimationsService };
//# sourceMappingURL=animations.service.js.map