import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrgUnitService } from '../../../services/org-unit.service';
var CardFilterComponent = /** @class */ (function () {
    function CardFilterComponent(orgunitService) {
        this.orgunitService = orgunitService;
        this.start_date = '';
        this.end_date = '';
        this.reportFilter = new EventEmitter();
        this.orgunit = null;
        this.orgunitnames = '';
        this.orgunit_tree_config = {
            show_search: true,
            search_text: 'Search',
            level: null,
            loading: true,
            loading_message: 'Loading Organisation units...',
            multiple: true,
            multiple_key: 'control',
            placeholder: 'Select Location'
        };
    }
    CardFilterComponent.prototype.ngOnInit = function () {
    };
    CardFilterComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    CardFilterComponent.prototype.getReport = function () {
        var start_date = new Date(this.start_date).toISOString().substr(0, 10);
        var end_date = new Date(this.end_date).toISOString().substr(0, 10);
        var facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
        var ouName = this.orgunitService.getLevel4OrgunitsNames(this.orgunit.visit_locations, this.orgunit.value);
        var ouId = this.orgunitService.getLevel4OrgunitsId(this.orgunit.visit_locations, this.orgunit.value);
        var from_date = start_date.replace('-', '/').replace('-', '/');
        var to_date = end_date.replace('-', '/').replace('-', '/');
        this.reportFilter.emit({
            from_date: from_date,
            to_date: to_date,
            facilities: facilities,
            ouName: ouName,
            ouId: ouId
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CardFilterComponent.prototype, "start_date", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CardFilterComponent.prototype, "end_date", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CardFilterComponent.prototype, "reportFilter", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CardFilterComponent.prototype, "orgunit_tree_config", void 0);
    CardFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-card-filter',
            templateUrl: './card-filter.component.html',
            styleUrls: ['./card-filter.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [OrgUnitService])
    ], CardFilterComponent);
    return CardFilterComponent;
}());
export { CardFilterComponent };
//# sourceMappingURL=card-filter.component.js.map