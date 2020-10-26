import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { OrgUnitService } from '../../../services/org-unit.service';
var FacilityRefferalReportComponent = /** @class */ (function () {
    function FacilityRefferalReportComponent(httpClient, orgUnitService) {
        this.httpClient = httpClient;
        this.orgUnitService = orgUnitService;
        this.loading = false;
        this.loading_failed = false;
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
    }
    FacilityRefferalReportComponent.prototype.ngOnInit = function () {
    };
    FacilityRefferalReportComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    FacilityRefferalReportComponent.prototype.checkDate = function () { };
    FacilityRefferalReportComponent.prototype.getProviders = function () {
        var _this = this;
        var from_date = new Date(this.start_date).toISOString().substr(0, 10);
        var to_date = new Date(this.end_date).toISOString().substr(0, 10);
        this.data_loading = true;
        this.loading_failed = false;
        this.done_loading = false;
        var facilities = this.orgUnitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
        var payload = { from_date: from_date, to_date: to_date, facilities: facilities };
        this.httpClient.postOpenSRP('/report/get-inter-facility-referrals-summary', payload)
            .subscribe(function (data) {
            if (data && data.length !== 0) {
                // {'to_date':'2020-01-01','from_date':'2017-01-01','facilities':[{'facility_name':'test','facility_id':'tNo7WxkmuoN'}]}
                _this.values = data;
            }
            _this.done_loading = true;
            _this.data_loading = false;
            _this.loading_failed = false;
        }, function (error) {
            _this.loading_failed = true;
            _this.data_loading = false;
        });
    };
    FacilityRefferalReportComponent.prototype.setSelectedData = function (data) {
        this.selected_providers = data;
        this.selected_providers_names = this.selected_providers.map(function (d) { return d.name; }).join(', ');
    };
    FacilityRefferalReportComponent.prototype.getData = function () {
        var _this = this;
        this.data_loading = true;
        var chw_uuid = this.selected_providers.map(function (provider) { return provider.id; });
        var start_date = new Date(this.start_date).toISOString().substr(0, 10);
        var end_date = new Date(this.end_date).toISOString().substr(0, 10);
        this.httpClient.postOpenSRP('report/get-chw-referrals-summary', { from_date: start_date, to_date: end_date, chw_uuid: chw_uuid })
            .subscribe(function (data) {
            _this.done_loading = true;
            _this.data_loading = false;
            _this.values = data;
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], FacilityRefferalReportComponent.prototype, "orgunit_tree_config", void 0);
    FacilityRefferalReportComponent = tslib_1.__decorate([
        Component({
            selector: 'app-facility-refferal-report',
            templateUrl: './facility-refferal-report.component.html',
            styleUrls: ['./facility-refferal-report.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            OrgUnitService])
    ], FacilityRefferalReportComponent);
    return FacilityRefferalReportComponent;
}());
export { FacilityRefferalReportComponent };
//# sourceMappingURL=facility-refferal-report.component.js.map