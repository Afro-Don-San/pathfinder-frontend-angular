import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
var OrgUnitService = /** @class */ (function () {
    function OrgUnitService(http) {
        this.http = http;
        this.nodes = null;
        this.visit_locations = null;
    }
    OrgUnitService.prototype.getLevel4OrgunitsIds = function (orgunits, uuid) {
        var orgunitItems = orgunits
            .filter(function (ou) { return ou.parents.indexOf(uuid) !== -1; })
            .map(function (ou) { return ou.id; });
        if (orgunitItems.length === 0) {
            orgunitItems = [uuid];
        }
        return orgunitItems;
    };
    OrgUnitService.prototype.getLevel4OrgunitsNames = function (orgunits, uuid) {
        console.log({ orgunits: orgunits });
        return orgunits
            .filter(function (ou) { return ou.id === uuid; })
            .map(function (ou) { return ou.name; })
            .join(', ');
    };
    OrgUnitService.prototype.getLevel4OrgunitsId = function (orgunits, uuid) {
        return orgunits
            .filter(function (ou) { return ou.id === uuid; })
            .map(function (ou) { return ou.id; })
            .join('');
    };
    OrgUnitService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService])
    ], OrgUnitService);
    return OrgUnitService;
}());
export { OrgUnitService };
//# sourceMappingURL=org-unit.service.js.map