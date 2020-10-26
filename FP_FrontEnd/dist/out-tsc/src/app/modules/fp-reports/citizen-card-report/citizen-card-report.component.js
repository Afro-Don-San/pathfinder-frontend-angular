import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { OrgUnitService } from '../../../services/org-unit.service';
import { DashboardComponent } from '../../../modules/dashboard/dashboard.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LocationService } from '../../../services/location.service';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from '../../../services/user.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../shared/animations/router-animation';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ExcelDownloadService } from '../../../services/excel-download.service';
import * as XLSX from 'xlsx';
var CitizenCardReportComponent = /** @class */ (function () {
    function CitizenCardReportComponent(httpClient, orgunitService, breakpointObserver, router, http, activatedRoute, userService, titleService, locationService, settingsService, excelService) {
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
        this.routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
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
        this.willing_to_participate_in_survey = [];
        this.residence = [];
        this.education = [];
        this.occupation = [];
        this.marital_status = [];
        this.religion = [];
        this.reasons_for_people_not_going_to_health_facilities = [];
        this.means_of_transport_to_facility = [];
        this.time_to_reach_closest_facility = [];
        this.is_this_the_nearest_facility_from_home = [];
        this.was_the_facility_open_when_you_arrived = [];
        this.did_you_get_family_planning_information_at_the_reception = [];
        this.how_long_it_took_to_be_attended_by_service_provider = [];
        this.did_the_service_provider_make_you_feel_welcome = [];
        this.did_the_service_provider_assure_confidentiality = [];
        this.did_you_meet_the_service_providers_in_a_private_room = [];
        this.did_the_service_providers_provide_clear_information_about_various_fp_services_and_methods = [];
        this.did_the_service_providers_use_visual_aids_to_demo_fp_methods = [];
        this.did_the_service_providers_ask_if_you_had_any_concerns_about_previously_used_methods = [];
        this.were_you_given_info_on_dual_protection = [];
        this.methods_not_wanted = [];
        this.orgunitnames = '';
        this.done_loading = false;
        this.data_loading = false;
        this.selected_providers_names = '';
        this.detailed_values = [];
        this.detailed_loading = false;
        this.show_detailed = false;
    }
    CitizenCardReportComponent.prototype.ngOnInit = function () {
    };
    CitizenCardReportComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    CitizenCardReportComponent.prototype.setSelectedData = function (data) {
        console.log("team data: ", data);
        this.selected_providers = data;
        var team_name = this.selected_providers.map(function (d) { return d.name; });
        console.log("team name is:", team_name);
        if (team_name.length > 3) {
            var extra_length = team_name.length - 3;
            this.selected_providers_names = team_name.slice(0, 3).join(', ') + ' and ' + extra_length + ' more ';
        }
    };
    CitizenCardReportComponent.prototype.print = function () {
        window.print();
    };
    CitizenCardReportComponent.prototype.downloadExcel = function () {
        var startDate = new Date(this.start_date).toISOString().substr(0, 10);
        var endDate = new Date(this.end_date).toISOString().substr(0, 10);
        // this.excelService.download1(
        //   `${this.report.name} from ${startDate} to ${endDate} for ${this.orgUnitName}`,
        //   this.dataTable.nativeElement
        // );
    };
    CitizenCardReportComponent.prototype.exportexcel = function (table, fileName) {
        /* table id is passed over here */
        var element = document.getElementById('' + table + '');
        var ws = XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, fileName);
    };
    CitizenCardReportComponent.prototype.getData = function () {
        var _this = this;
        this.data_loading = true;
        this.detailed_loading = true;
        var chw_uuid = this.selected_providers.map(function (provider) { return provider.id; });
        var start_date = new Date(this.start_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.end_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var starting_location = localStorage.getItem('htmr-starting-location');
        var dashboard = new DashboardComponent(this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
        dashboard.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(_this.orgunit.visit_locations, _this.orgunit.value);
            console.log(facilities);
            _this.httpClient.postDJANGOURL('citizen_report_card/', { start_date: start_date, end_date: end_date, facilities: facilities })
                .subscribe(function (data) {
                console.log(data);
                _this.done_loading = true;
                _this.data_loading = false;
                _this.willing_to_participate_in_survey = data["willing_to_participate_in_survey_summary"];
                _this.residence = data["residence_summary"];
                _this.education = data["education_summary"];
                _this.occupation = data["occupation_summary"];
                _this.marital_status = data["marital_status_summary"];
                _this.religion = data["religion_summary"];
                _this.reasons_for_people_not_going_to_health_facilities = data["reasons_for_people_not_going_to_health_facilities_summary"];
                _this.means_of_transport_to_facility = data["means_of_transport_to_facility_summary"];
                _this.is_this_the_nearest_facility_from_home = data["is_this_the_nearest_facility_from_home_summary"];
                _this.was_the_facility_open_when_you_arrived = data["was_the_facility_open_when_you_arrived_summary"];
                _this.did_you_get_family_planning_information_at_the_reception = data["did_you_get_family_planning_information_at_the_reception_summary"];
                _this.how_long_it_took_to_be_attended_by_service_provider = data["how_long_it_took_to_be_attended_by_service_provider_summary"];
                _this.did_the_service_provider_make_you_feel_welcome = data["did_the_service_provider_make_you_feel_welcome_summary"];
                _this.did_the_service_provider_assure_confidentiality = data["did_the_service_provider_assure_confidentiality_summary"];
                _this.did_you_meet_the_service_providers_in_a_private_room = data["did_you_meet_the_service_providers_in_a_private_room_summary"];
                _this.did_the_service_providers_provide_clear_information_about_various_fp_services_and_methods = data["did_the_service_providers_provide_clear_information_about_various_fp_services_and_methods_summary"];
                _this.did_the_service_providers_use_visual_aids_to_demo_fp_methods = data["did_the_service_providers_use_visual_aids_to_demo_fp_methods_summary"];
                _this.did_the_service_providers_ask_if_you_had_any_concerns_about_previously_used_methods = data["did_the_service_providers_ask_if_you_had_any_concerns_about_previously_used_methods_summary"];
                _this.were_you_given_info_on_dual_protection = data["were_you_given_info_on_dual_protection_summary"];
                // this.methods_not_wanted = data["methods_not_wanted_summary"];
            });
            _this.httpClient.postDJANGOURL('citizen_report_card/', { start_date: start_date, end_date: end_date, facilities: facilities })
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
    ], CitizenCardReportComponent.prototype, "orgunit_tree_config", void 0);
    CitizenCardReportComponent = tslib_1.__decorate([
        Component({
            selector: 'app-citizen-card-report',
            templateUrl: './citizen-card-report.component.html',
            styleUrls: ['./citizen-card-report.component.scss']
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
    ], CitizenCardReportComponent);
    return CitizenCardReportComponent;
}());
export { CitizenCardReportComponent };
//# sourceMappingURL=citizen-card-report.component.js.map