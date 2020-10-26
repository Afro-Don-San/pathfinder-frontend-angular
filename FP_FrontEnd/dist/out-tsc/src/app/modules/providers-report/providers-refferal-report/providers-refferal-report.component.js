import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { OrgUnitService } from '../../../services/org-unit.service';
import { fadeIn } from '../../../shared/animations/router-animation';
var ProvidersRefferalReportComponent = /** @class */ (function () {
    function ProvidersRefferalReportComponent(httpClient, orgunitService) {
        this.httpClient = httpClient;
        this.orgunitService = orgunitService;
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
        this.detailed_values = [];
        this.detailed_loading = false;
        this.show_detailed = false;
    }
    ProvidersRefferalReportComponent.prototype.ngOnInit = function () {
    };
    ProvidersRefferalReportComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    ProvidersRefferalReportComponent.prototype.checkDate = function () { };
    ProvidersRefferalReportComponent.prototype.getProviders = function () {
        var _this = this;
        this.loading = true;
        this.loading_failed = false;
        this.done_loading = false;
        var facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
        this.httpClient.getDJANGOURL('family_planning_registration_summary')
            .subscribe(function (data) {
            if (data && data.length !== 0) {
                _this.providers = data.map(function (d) {
                    return {
                        name: d.person.display,
                        id: d.person.uuid
                    };
                });
                console.log('prodviders', _this.providers);
            }
            _this.loading = false;
            _this.loading_failed = false;
        }, function (error) {
            _this.loading_failed = true;
            _this.loading = false;
        });
    };
    ProvidersRefferalReportComponent.prototype.setSelectedData = function (data) {
        console.log(data);
        this.selected_providers = data;
        var providers_names = this.selected_providers.map(function (d) { return d.name; });
        if (providers_names.length > 3) {
            var extra_length = providers_names.length - 3;
            this.selected_providers_names = providers_names.slice(0, 3).join(', ') + ' and ' + extra_length + ' more ';
        }
    };
    ProvidersRefferalReportComponent.prototype.getData = function () {
        var _this = this;
        this.data_loading = true;
        this.detailed_loading = true;
        var chw_uuid = this.selected_providers.map(function (provider) { return provider.id; });
        var start_date = new Date(this.start_date).toISOString().substr(0, 10);
        var end_date = new Date(this.end_date).toISOString().substr(0, 10);
        this.httpClient.postOpenSRP('report/get-chw-referrals-summary', { from_date: start_date, to_date: end_date, chw_uuid: chw_uuid })
            .subscribe(function (data) {
            _this.done_loading = true;
            _this.data_loading = false;
            _this.values = data;
        });
        this.httpClient.postOpenSRP('get-chw-referrals-list', { from_date: start_date, to_date: end_date, chw_uuid: chw_uuid })
            .subscribe(function (data) {
            _this.detailed_loading = false;
            _this.detailed_values = data.map(function (item) {
                var chw = _this.selected_providers.find(function (i) { return i.id === item.service_provider_uuid; });
                return tslib_1.__assign({}, item, { service_provider_name: chw ? chw.name : '' });
            });
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProvidersRefferalReportComponent.prototype, "orgunit_tree_config", void 0);
    ProvidersRefferalReportComponent = tslib_1.__decorate([
        Component({
            selector: 'app-providers-refferal-report',
            templateUrl: './providers-refferal-report.component.html',
            styleUrls: ['./providers-refferal-report.component.scss'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            OrgUnitService])
    ], ProvidersRefferalReportComponent);
    return ProvidersRefferalReportComponent;
}());
export { ProvidersRefferalReportComponent };
//# sourceMappingURL=providers-refferal-report.component.js.map