import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrgUnitService } from '../../../services/org-unit.service';
var MapFilterComponent = /** @class */ (function () {
    function MapFilterComponent(orgunitService) {
        this.orgunitService = orgunitService;
        this.start_date = '';
        this.end_date = '';
        this.reportFilter = new EventEmitter();
        this.orgunit = null;
        this.orgunitnames = '';
        this.services = [
            { id: 1, name: 'Family Planning Registration' },
            { id: 2, name: 'Family Planning Follow Up Visit' },
            { id: 3, name: 'Introduction to Family Planning' },
            { id: 4, name: 'Family Planning Pregnancy Screening' },
            { id: 5, name: 'Family Planning Method Issued' },
            { id: 6, name: 'Family Planning Discontinuation' },
            { id: 7, name: 'ANC Referral' },
            { id: 8, name: 'Family Planning Referral' },
            { id: 9, name: 'Family Planning Referral Followup' },
        ];
        this.selectedService = 0;
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
    MapFilterComponent.prototype.ngOnInit = function () {
    };
    MapFilterComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    MapFilterComponent.prototype.getReport = function () {
        var start_date = new Date(this.start_date).toISOString().substr(0, 10);
        var end_date = new Date(this.end_date).toISOString().substr(0, 10);
        var facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
        var ouName = this.orgunitService.getLevel4OrgunitsNames(this.orgunit.visit_locations, this.orgunit.value);
        var ouId = this.orgunitService.getLevel4OrgunitsId(this.orgunit.visit_locations, this.orgunit.value);
        var from_date = start_date.replace('-', '/').replace('-', '/');
        var to_date = end_date.replace('-', '/').replace('-', '/');
        var service = this.selectedService;
        var orgUnits = this.orgunit.visit_locations;
        console.log("visit locations are", this.orgunit.visit_locations);
        this.reportFilter.emit({
            from_date: from_date,
            to_date: to_date,
            orgUnits: orgUnits,
            facilities: facilities,
            service: service,
            ouName: ouName,
            ouId: ouId
        });
    };
    MapFilterComponent.prototype.onChangeService = function (selectedServiceId) {
        this.selectedService = selectedServiceId;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MapFilterComponent.prototype, "start_date", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MapFilterComponent.prototype, "end_date", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MapFilterComponent.prototype, "reportFilter", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MapFilterComponent.prototype, "orgunit_tree_config", void 0);
    MapFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-map-filter',
            templateUrl: './map-filter.component.html',
            styleUrls: ['./map-filter.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [OrgUnitService])
    ], MapFilterComponent);
    return MapFilterComponent;
}());
export { MapFilterComponent };
//# sourceMappingURL=map-filter.component.js.map