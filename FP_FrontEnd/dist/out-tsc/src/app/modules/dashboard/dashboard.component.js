import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../shared/animations/router-animation';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClientService } from '../../services/http-client.service';
import { LocationService } from '../../services/location.service';
import { OrgUnitService } from '../../services/org-unit.service';
import * as _ from 'lodash';
import * as Highcharts from 'highcharts';
import { SettingsService } from '../../services/settings.service';
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
        this.location_loading = false;
        this.locations = [];
        this.total_anc_referrals = 0;
        this.total_services = 0;
        this.total_fp_initiations = 0;
        this.total_fp_discontinuations = 0;
        this.card1Data = null;
        this.card2Data = null;
        this.card3Data = null;
        this.card4Data = null;
        this.card1DataLoading = false;
        this.card2DataLoading = false;
        this.card3DataLoading = false;
        this.card4DataLoading = false;
        this.card5DataLoading = false;
        this.label1DataLoading = false;
        this.label2DataLoading = false;
        this.label3DataLoading = false;
        this.label4DataLoading = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
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
            _this.getTotalRegistration({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.getTotalServices({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.getTotalFamilyPlanningInitiations({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.getTotalFamilyPlanningDiscontinuations({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard1({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard2({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard3({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard4({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard5({ from_date: start_date, to_date: end_date, facilities: facilities });
        });
    };
    DashboardComponent.prototype.updateCards = function (filter) {
        this.orgunitName = filter.ouName;
        this.updateCard1Chart(filter);
        this.updateCard2Chart(filter);
        this.updateCard3Chart(filter);
        this.updateCard4Chart(filter);
        this.updateCard5Chart(filter);
        this.getTotalRegistration(filter);
        this.getTotalServices(filter);
        this.getTotalFamilyPlanningInitiations(filter);
        this.getTotalFamilyPlanningDiscontinuations(filter.ouId);
    };
    DashboardComponent.prototype.getTotalServices = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var reportUrl, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.label1DataLoading = true;
                        reportUrl = 'events_summary/';
                        return [4 /*yield*/, this.http.postDJANGOURL(reportUrl, filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_services = data['total_family_planning_refferals'];
                            this.label1DataLoading = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.getTotalFamilyPlanningInitiations = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.label2DataLoading = true;
                        // const data = await this.http.postOpenSRP(
                        //   'reports/summary_total_LTFS/json',
                        //   {from_date, to_date, facilities}
                        // ).toPromise();
                        // if (data) {
                        //   this.total_ltfs = data['Total LTFs'];
                        //   this.label2DataLoading = false;
                        // }
                        this.label2DataLoading = true;
                        return [4 /*yield*/, this.http.postDJANGOURL('events_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_fp_initiations = data['total_family_planning_initiations'];
                            this.label2DataLoading = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.getTotalRegistration = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.label3DataLoading = true;
                        return [4 /*yield*/, this.http.postDJANGOURL('events_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_anc_referrals = data['total_anc_referrals'];
                            this.label3DataLoading = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.getTotalFamilyPlanningDiscontinuations = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.label4DataLoading = true;
                        // const data = await this.http.getOpenSRP(`get-team-members-by-facility-hierarchy/${ouID}`).toPromise();
                        // if (data) {
                        //   this.total_chw = data;
                        //   this.label4DataLoading = false;
                        // }
                        this.label4DataLoading = true;
                        return [4 /*yield*/, this.http.postDJANGOURL('events_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_fp_discontinuations = data['total_family_planning_discontinuations'];
                            this.label4DataLoading = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.updateCard1 = function (filter) {
        this.updateCard1Chart(filter);
        this.card1DataLoading = true;
        // const reportUrl = 'reports/dashboard_total_referrals_issued/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card1Data = data;
        //     this.card1DataLoading = false;
        //   }, error1 => this.card1DataLoading = false);
    };
    DashboardComponent.prototype.updateCard1Chart = function (filter) {
        var _this = this;
        this.card1DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Months',
                        data: data['total_services_by_month'].map(function (item) { return item.value; })
                    }];
                var categories = data['total_services_by_month'].map(function (item) { return item.month_name; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Total Services Issued by Month', 'Total Services Issued by Months' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                Highcharts.chart('card1Chart', chartConfig);
            }
            _this.card1DataLoading = false;
        }, function (error1) { return _this.card1DataLoading = false; });
    };
    DashboardComponent.prototype.updateCard2 = function (filter) {
        this.card2DataLoading = true;
        this.updateCard2Chart(filter);
        // const reportUrl = 'reports/dashboard_total_registrations/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card2Data = data;
        //     this.card2DataLoading = false;
        //   }, error1 => this.card2DataLoading = false);
    };
    DashboardComponent.prototype.updateCard2Chart = function (filter) {
        var _this = this;
        this.card2DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = data['total_services_aggregate'].map(function (item) { return ({
                    name: item.event_type,
                    y: item.value
                }); });
                var chartConfig = _this.settingsService.drawPieChart(series, 'Total Issued Services' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName), 'Services');
                Highcharts.chart('card2Chart', chartConfig);
            }
            _this.card2DataLoading = false;
        }, function (error1) { return _this.card2DataLoading = false; });
    };
    DashboardComponent.prototype.updateCard3 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard3Chart(filter);
        // const reportUrl = 'reports/dashboard_ltf_feedbacks/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card3Data = data;
        //     this.card3DataLoading = false;
        //   }, error1 => this.card3DataLoading = false);
    };
    DashboardComponent.prototype.updateCard3Chart = function (filter) {
        var _this = this;
        this.card3DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Referrals',
                        data: data['total_issued_referrals'].map(function (item) { return item.value; })
                    }];
                var categories = data['total_issued_referrals'].map(function (item) { return item.event_type; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Services', 'Total Issued Referrals' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName), '', 'line');
                Highcharts.chart('card3Chart', chartConfig);
            }
            _this.card3DataLoading = false;
        }, function (error1) { return _this.card3DataLoading = false; });
    };
    DashboardComponent.prototype.updateCard4 = function (filter) {
        this.card4DataLoading = true;
        this.updateCard4Chart(filter);
        // const reportUrl = 'reports/dashboard_total_failed_referrals/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card4Data = data;
        //     this.card4DataLoading = false;
        //   }, error1 => this.card4DataLoading = false);
    };
    DashboardComponent.prototype.updateCard4Chart = function (filter) {
        var _this = this;
        this.card4DataLoading = true;
        var reportUrl = 'give_fp_methods/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data['total_clients']) {
                var series = [{
                        name: 'Family Planning Methods',
                        data: data['total_clients'].map(function (item) { return item.clients; })
                    }];
                var categories = data['total_clients'].map(function (item) { return item.method_type; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Number of Clients', 'Total Number of Clients Issued Family Planning Methods' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                Highcharts.chart('card4Chart', chartConfig);
            }
            _this.card4DataLoading = false;
        }, function (error1) { return _this.card4DataLoading = false; });
    };
    DashboardComponent.prototype.updateCard5 = function (filter) {
        this.card5DataLoading = true;
        this.updateCard5Chart(filter);
        // const reportUrl = 'reports/dashboard_total_failed_referrals/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card4Data = data;
        //     this.card4DataLoading = false;
        //   }, error1 => this.card4DataLoading = false);
    };
    DashboardComponent.prototype.updateCard5Chart = function (filter) {
        var _this = this;
        this.card5DataLoading = true;
        var reportUrl = 'give_fp_methods/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data['total_fp_methods']) {
                console.log(data['total_fp_methods']);
                var series = [{
                        name: 'Family Planning Methods',
                        data: data['total_fp_methods'].map(function (item) { return item.items; })
                    }];
                var categories = data['total_fp_methods']
                    .map(function (item) { return item.method_type; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Number of items', 'Total Number of  Family Planning Methods Issued' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                Highcharts.chart('card5Chart', chartConfig);
            }
            _this.card5DataLoading = false;
        }, function (error1) { return _this.card5DataLoading = false; });
    };
    // this method was coppied form the orguni component and is to be moved to service letter
    DashboardComponent.prototype.getLocation = function (starting_location) {
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
                                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid + ";" + facility.uuid
                                                                });
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
                        return [2 /*return*/, visit_locations];
                }
            });
        });
    };
    DashboardComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return _.find(orgunits, { uuid: uuid });
    };
    tslib_1.__decorate([
        ViewChild('reportArea1'),
        tslib_1.__metadata("design:type", ElementRef)
    ], DashboardComponent.prototype, "el1", void 0);
    tslib_1.__decorate([
        ViewChild('reportArea2'),
        tslib_1.__metadata("design:type", ElementRef)
    ], DashboardComponent.prototype, "el2", void 0);
    tslib_1.__decorate([
        ViewChild('reportArea3'),
        tslib_1.__metadata("design:type", ElementRef)
    ], DashboardComponent.prototype, "el3", void 0);
    tslib_1.__decorate([
        ViewChild('reportArea4'),
        tslib_1.__metadata("design:type", ElementRef)
    ], DashboardComponent.prototype, "el4", void 0);
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BreakpointObserver,
            HttpClientService,
            LocationService,
            OrgUnitService,
            SettingsService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map