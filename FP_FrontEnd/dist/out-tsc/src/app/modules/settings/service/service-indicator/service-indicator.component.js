import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClientService } from '../../../../services/http-client.service';
var ServiceIndicatorComponent = /** @class */ (function () {
    function ServiceIndicatorComponent(httpClient) {
        this.httpClient = httpClient;
        this.close = new EventEmitter();
        this.indicators = [];
        this.currentIndicators = [];
        this.tableConfigurations = {
            tableColumns: [
                { name: 'indicatorName', label: 'English Name' },
                { name: 'indicatorNameSw', label: 'Swahili Name' },
            ],
            tableCaption: '',
            tableNotifications: '',
            showSearch: false,
            showBorder: true,
            allowPagination: false,
            hideExport: true,
            actionIcons: { edit: false, delete: true, more: false, print: false },
            doneLoading: false,
            deleting: {},
            active: {},
            empty_msg: 'No Indicators'
        };
        this.selectedIndicators = [];
        this.searchValue = '';
        this.excludeIds = '';
    }
    ServiceIndicatorComponent.prototype.ngOnInit = function () {
        this.getIndicators();
        if (this.serviceItem) {
            if (this.serviceItem.indicators) {
                this.currentIndicators = this.serviceItem.indicators.map(function (item) {
                    return tslib_1.__assign({}, item, { id: item.referralServiceIndicatorId });
                });
                this.excludeIds = this.serviceItem.indicators.map(function (i) { return i.referralIndicatorId; }).join('');
            }
        }
    };
    ServiceIndicatorComponent.prototype.getIndicators = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var items;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingIndicators = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('get-indicators').toPromise()];
                    case 1:
                        items = _a.sent();
                        this.indicators = items.map(function (item) { return (tslib_1.__assign({}, item, { id: item.indicatorId })); });
                        this.loadingIndicators = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceIndicatorComponent.prototype.onDelete = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saved, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tableConfigurations.deleting = {};
                        this.tableConfigurations.deleting[item.id] = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.getOpenSRP("delete-referral-service-indicator/" + item.id).toPromise()];
                    case 2:
                        saved = _a.sent();
                        this.tableConfigurations.deleting[item.id] = true;
                        this.httpClient.showSuccess('Indicator Mapping Deleted Successful');
                        this.currentIndicators = this.currentIndicators.filter(function (ind) { return ind.id !== item.id; });
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
    ServiceIndicatorComponent.prototype.save = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, saved, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.saving_data = true;
                        payload = [
                            {
                                referralServiceId: this.serviceItem.serviceId,
                                referralIndicatorId: this.selectedIndicators.map(function (i) { return parseInt(i + '', 10); })
                            }
                        ];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.postOpenSRP('create-referral-services-indicators', payload).toPromise()];
                    case 2:
                        saved = _a.sent();
                        this.saving_data = false;
                        this.httpClient.showSuccess('Indicator Mapping Created Successful');
                        this.closeForm(true);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.httpClient.showError('Something went wrong, Try Again', 3000);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ServiceIndicatorComponent.prototype.closeForm = function (success) {
        if (success === void 0) { success = false; }
        this.close.emit(success);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ServiceIndicatorComponent.prototype, "serviceItem", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ServiceIndicatorComponent.prototype, "close", void 0);
    ServiceIndicatorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-service-indicator',
            templateUrl: './service-indicator.component.html',
            styleUrls: ['./service-indicator.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService])
    ], ServiceIndicatorComponent);
    return ServiceIndicatorComponent;
}());
export { ServiceIndicatorComponent };
//# sourceMappingURL=service-indicator.component.js.map