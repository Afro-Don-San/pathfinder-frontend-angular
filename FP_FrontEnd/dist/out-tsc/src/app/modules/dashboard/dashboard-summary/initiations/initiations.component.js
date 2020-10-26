import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../shared/animations/router-animation';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClientService } from '../../../../services/http-client.service';
import { LocationService } from '../../../../services/location.service';
import { OrgUnitService } from '../../../../services/org-unit.service';
import * as _ from 'lodash';
import * as Highcharts from 'highcharts';
import { SettingsService } from '../../../../services/settings.service';
import exporting from 'highcharts/modules/exporting';
import * as XLSX from "xlsx";
exporting(Highcharts);
var InitiationsComponent = /** @class */ (function () {
    function InitiationsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
        this.location_loading = false;
        this.locations = [];
        this.values = [];
        this.card2Data = null;
        this.card1DataLoading = false;
        this.card3DataLoading = false;
        this.data_loading = false;
    }
    InitiationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date(new Date().setDate(new Date().getDate() - 90));
        this.endDate = new Date(new Date().setDate(new Date().getDate() + 2));
        var start_date = new Date(this.startDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.endDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        this.start_date = start_date;
        this.end_date = end_date;
        var starting_location = localStorage.getItem('htmr-starting-location');
        this.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
            _this.orgunitName = _this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
            _this.updateCard1({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard3({ from_date: start_date, to_date: end_date, facilities: facilities });
        });
    };
    InitiationsComponent.prototype.updateCards = function (filter) {
        this.orgunitName = filter.ouName;
        this.updateCard1Chart(filter);
        this.updateCard3Chart(filter);
    };
    InitiationsComponent.prototype.updateCard1 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard1Chart(filter);
    };
    InitiationsComponent.prototype.updateCard1Chart = function (filter) {
        var _this = this;
        this.card1DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Months',
                        data: data['family_planning_initiations'].map(function (item) { return item.value; })
                    }];
                var categories = data['family_planning_initiations'].map(function (item) { return item.month_name; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Client Count', 'Family Planning Initiations' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                Highcharts.chart('card1Chart', chartConfig);
            }
            _this.card1DataLoading = false;
        }, function (error1) { return _this.card1DataLoading = false; });
    };
    InitiationsComponent.prototype.updateCard3 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard3Chart(filter);
    };
    InitiationsComponent.prototype.updateCard3Chart = function (filter) {
        var _this = this;
        this.card3DataLoading = true;
        this.data_loading = true;
        var reportUrl = 'clients_families/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                _this.values = data['clients'];
            }
            _this.card3DataLoading = false;
            _this.data_loading = false;
        }, function (error1) { return _this.card3DataLoading = false; });
    };
    // this method was coppied form the orguni component and is to be moved to service letter
    InitiationsComponent.prototype.getLocation = function (starting_location) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = _.find(top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
                        visit_locations = [];
                        visit_locations.push({
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            parents: ""
                        });
                        visit_location = {
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            children: visit_location.childLocations.map(function (location) {
                                var child_loc = _this.getChildOrgunits(top_locations, location.uuid);
                                visit_locations.push({
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    parents: "" + visit_location.uuid
                                });
                                return {
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    children: child_loc.childLocations.map(function (child) {
                                        var before_last_child = _this.getChildOrgunits(top_locations, child.uuid);
                                        visit_locations.push({
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            parents: visit_location.uuid + ";" + child_loc.uuid
                                        });
                                        return {
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            children: before_last_child.childLocations.map(function (level3child) {
                                                var last_child = _this.getChildOrgunits(top_locations, level3child.uuid);
                                                visit_locations.push({
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid
                                                });
                                                return {
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    // children: facility.childLocations
                                                    children: last_child.childLocations.map(function (level4child) {
                                                        var facility = _this.getChildOrgunits(top_locations, level4child.uuid);
                                                        visit_locations.push({
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid
                                                        });
                                                        return {
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            // children: lastest.childLocations
                                                            children: facility.childLocations.map(function (level5child) {
                                                                var village = _this.getChildOrgunits(top_locations, level5child.uuid);
                                                                visit_locations.push({
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6,
                                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + facility.uuid + ";" + village.uuid
                                                                });
                                                                return {
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6
                                                                };
                                                            })
                                                        };
                                                    })
                                                };
                                            })
                                        };
                                    })
                                };
                            })
                        };
                        this.location_loading = false;
                        console.log(visit_locations);
                        return [2 /*return*/, visit_locations];
                }
            });
        });
    };
    InitiationsComponent.prototype.exportexcel = function (table, fileName) {
        /* table id is passed over here */
        var element = document.getElementById('' + table + '');
        var ws = XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, fileName);
    };
    InitiationsComponent.prototype.print = function () {
        window.print();
    };
    InitiationsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return _.find(orgunits, { uuid: uuid });
    };
    tslib_1.__decorate([
        ViewChild('reportArea1'),
        tslib_1.__metadata("design:type", ElementRef)
    ], InitiationsComponent.prototype, "el1", void 0);
    tslib_1.__decorate([
        ViewChild('reportArea2'),
        tslib_1.__metadata("design:type", ElementRef)
    ], InitiationsComponent.prototype, "el2", void 0);
    tslib_1.__decorate([
        ViewChild('reportArea3'),
        tslib_1.__metadata("design:type", ElementRef)
    ], InitiationsComponent.prototype, "el3", void 0);
    tslib_1.__decorate([
        ViewChild('reportArea4'),
        tslib_1.__metadata("design:type", ElementRef)
    ], InitiationsComponent.prototype, "el4", void 0);
    InitiationsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-initiations',
            templateUrl: './initiations.component.html',
            styleUrls: ['./initiations.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BreakpointObserver,
            HttpClientService,
            LocationService,
            OrgUnitService,
            SettingsService])
    ], InitiationsComponent);
    return InitiationsComponent;
}());
export { InitiationsComponent };
//# sourceMappingURL=initiations.component.js.map