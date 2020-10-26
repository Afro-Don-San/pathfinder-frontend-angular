import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../../services/http-client.service';
import { fadeIn } from '../../../shared/animations/router-animation';
var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(httpClient, fb) {
        this.httpClient = httpClient;
        this.fb = fb;
        this.viewDetails = false;
        this.loading = false;
        this.saving_data = false;
        this.items = [];
        this.itemId = null;
        this.tableConfigurations = {
            tableColumns: [
                { name: 'serviceName', label: 'English Name' },
                { name: 'serviceNameSw', label: 'Swahili Name' },
                { name: 'category', label: 'Category' },
                { name: 'indicatorEn', label: 'Indicators' },
            ],
            tableCaption: '',
            tableNotifications: '',
            showSearch: true,
            showBorder: true,
            allowPagination: true,
            actionIcons: { edit: true, delete: true, more: false, print: false, customPrimary: true },
            doneLoading: false,
            deleting: {},
            customPrimaryMessage: 'Indicators',
            active: {},
            empty_msg: 'No Referral Services'
        };
        this.view_type = 'add';
    }
    ServiceComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.submitForm = this.fb.group({
            serviceName: ['', Validators.required],
            serviceNameSw: ['', Validators.required],
            category: ['', Validators.required]
        });
    };
    ServiceComponent.prototype.getItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var items;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('boresha-afya-services').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) {
                            return tslib_1.__assign({}, item, { indicatorEn: item.indicators.map(function (i) { return i.indicatorName; }).join(', '), indicatorSw: item.indicators.map(function (i) { return i.indicatorNameSw; }).join(', ') });
                        });
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceComponent.prototype.add = function () {
        this.viewDetails = true;
        this.view_type = 'add';
        this.itemId = null;
        this.formTitle = 'Create new Service';
    };
    ServiceComponent.prototype.setIndicators = function (item) {
        this.currentService = item;
        this.formTitle = "Set Services for " + item.serviceName;
        this.view_type = 'indicator';
        this.viewDetails = true;
    };
    ServiceComponent.prototype.viewMore = function (item) {
        console.log(item);
    };
    ServiceComponent.prototype.onUpdate = function (item) {
        this.itemId = item.id;
        this.submitForm.patchValue({
            serviceName: item.serviceName,
            serviceNameSw: item.serviceNameSw,
            category: item.categoryName
        });
        this.formTitle = "Update Services " + item.serviceName;
        this.view_type = 'add';
        this.viewDetails = true;
    };
    ServiceComponent.prototype.save = function (formValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, saved, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.saving_data = true;
                        payload = [{
                                serviceName: formValue.serviceName,
                                serviceNameSw: formValue.serviceNameSw,
                                category: formValue.category
                            }];
                        if (this.itemId) {
                            payload[0].id = this.itemId;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.postOpenSRP('create-referral-services', payload).toPromise()];
                    case 2:
                        saved = _a.sent();
                        this.loading = false;
                        this.httpClient.showSuccess('Referral Services Created Successful');
                        this.getItems();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.httpClient.showError('Something went wrong, Try Again', 3000);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ServiceComponent.prototype.onDelete = function (item) {
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
    };
    ServiceComponent.prototype.doneMapping = function (event) {
        if (event) {
            this.getItems();
            this.closeForm();
        }
    };
    ServiceComponent.prototype.closeForm = function () {
        this.viewDetails = false;
        this.view_type = '';
    };
    ServiceComponent = tslib_1.__decorate([
        Component({
            selector: 'app-service',
            templateUrl: './service.component.html',
            styleUrls: ['./service.component.scss'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            FormBuilder])
    ], ServiceComponent);
    return ServiceComponent;
}());
export { ServiceComponent };
//# sourceMappingURL=service.component.js.map