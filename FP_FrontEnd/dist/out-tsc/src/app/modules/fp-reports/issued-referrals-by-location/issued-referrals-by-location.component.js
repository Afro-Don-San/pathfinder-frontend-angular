import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { OrgUnitService } from '../../../services/org-unit.service';
import { fadeIn } from '../../../shared/animations/router-animation';
import { DashboardComponent } from '../../../modules/dashboard/dashboard.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LocationService } from '../../../services/location.service';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ExcelDownloadService } from '../../../services/excel-download.service';
import * as XLSX from 'xlsx';
var IssuedReferralsByLocationComponent = /** @class */ (function () {
    function IssuedReferralsByLocationComponent(httpClient, orgunitService, breakpointObserver, router, http, activatedRoute, userService, titleService, locationService, settingsService, excelService) {
        this.httpClient = httpClient;
        this.orgunitService = orgunitService;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.titleService = titleService;
        this.locationService = locationService;
        this.settingsService = settingsService;
        this.excelService = excelService;
        this.loading = false;
        this.loading_failed = false;
        this.locations = [];
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
        this.orgunit = null;
        this.start_date = '';
        this.end_date = '';
        this.providers = [];
        this.selected_providers = [];
        this.values = [];
        this.orgunitnames = '';
        this.done_loading = false;
        this.data_loading = false;
        this.selected_providers_names = '';
        this.detailed_values = [];
        this.detailed_loading = false;
        this.show_detailed = false;
    }
    IssuedReferralsByLocationComponent.prototype.ngOnInit = function () {
    };
    IssuedReferralsByLocationComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    IssuedReferralsByLocationComponent.prototype.print = function () {
        window.print();
    };
    IssuedReferralsByLocationComponent.prototype.downloadExcel = function () {
        var startDate = new Date(this.start_date).toISOString().substr(0, 10);
        var endDate = new Date(this.end_date).toISOString().substr(0, 10);
        // this.excelService.download1(
        //   `${this.report.name} from ${startDate} to ${endDate} for ${this.orgUnitName}`,
        //   this.dataTable.nativeElement
        // );
    };
    IssuedReferralsByLocationComponent.prototype.exportexcel = function (table, fileName) {
        /* table id is passed over here */
        var element = document.getElementById('' + table + '');
        var ws = XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, fileName);
    };
    IssuedReferralsByLocationComponent.prototype.checkDate = function () { };
    IssuedReferralsByLocationComponent.prototype.getProviders = function () {
        var _this = this;
        this.loading = true;
        this.loading_failed = false;
        this.done_loading = false;
        var from_date = new Date(this.start_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var to_date = new Date(this.end_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var starting_location = localStorage.getItem('htmr-starting-location');
        var dashboard = new DashboardComponent(this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
        var facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
        this.httpClient.postDJANGOURL('events_summary/', { from_date: from_date, to_date: to_date, facilities: facilities })
            .subscribe(function (data) {
            if (data && data.length !== 0) {
                console.log(data);
                _this.providers = data["query_service_providers"].map(function (d) {
                    return {
                        // id: d.id,
                        name: d.team
                    };
                });
                console.log('providers', _this.providers);
            }
            _this.loading = false;
            _this.loading_failed = false;
        }, function (error) {
            _this.loading_failed = true;
            _this.loading = false;
        });
    };
    IssuedReferralsByLocationComponent.prototype.setSelectedData = function (data) {
        console.log("team data: ", data);
        this.selected_providers = data;
        var team_name = this.selected_providers.map(function (d) { return d.name; });
        console.log("team name is:", team_name);
        if (team_name.length > 3) {
            var extra_length = team_name.length - 3;
            this.selected_providers_names = team_name.slice(0, 3).join(', ') + ' and ' + extra_length + ' more ';
        }
    };
    IssuedReferralsByLocationComponent.prototype.getData = function () {
        var _this = this;
        this.data_loading = true;
        this.detailed_loading = true;
        var chw_uuid = this.selected_providers.map(function (provider) { return provider.id; });
        var from_date = new Date(this.start_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var to_date = new Date(this.end_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var starting_location = localStorage.getItem('htmr-starting-location');
        console.log("selected providers in get data are", this.selected_providers);
        var dashboard = new DashboardComponent(this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
        dashboard.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(_this.orgunit.visit_locations, _this.orgunit.value);
            _this.httpClient.postDJANGOURL('events_summary/', { from_date: from_date, to_date: to_date, facilities: facilities })
                .subscribe(function (data) {
                _this.done_loading = true;
                _this.data_loading = false;
                _this.values = data["total_services_aggregate"];
            });
            _this.httpClient.postDJANGOURL('events_summary/', { from_date: from_date, to_date: to_date, facilities: facilities })
                .subscribe(function (data) {
                _this.detailed_loading = false;
                _this.detailed_values = data["records"].map(function (item) {
                    var chw = _this.selected_providers.find(function (i) { return i.id === item.team; });
                    return tslib_1.__assign({}, item, { service_provider_name: chw ? chw.name : '' });
                });
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], IssuedReferralsByLocationComponent.prototype, "orgunit_tree_config", void 0);
    IssuedReferralsByLocationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-providers-refferal-report',
            templateUrl: './issued-referrals-by-location.component.html',
            styleUrls: ['./issued-referrals-by-location.component.scss'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            OrgUnitService,
            BreakpointObserver,
            Router,
            HttpClientService,
            ActivatedRoute,
            UserService,
            Title,
            LocationService,
            SettingsService,
            ExcelDownloadService])
    ], IssuedReferralsByLocationComponent);
    return IssuedReferralsByLocationComponent;
}());
export { IssuedReferralsByLocationComponent };
//# sourceMappingURL=issued-referrals-by-location.component.js.map