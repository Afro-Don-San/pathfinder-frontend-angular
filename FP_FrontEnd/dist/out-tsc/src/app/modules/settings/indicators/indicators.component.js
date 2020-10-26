import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClientService } from '../../../services/http-client.service';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeIn } from '../../../shared/animations/router-animation';
var IndicatorsComponent = /** @class */ (function () {
    function IndicatorsComponent(httpClient, fb) {
        this.httpClient = httpClient;
        this.fb = fb;
        this.viewDetails = false;
        this.loading = false;
        this.saving_data = false;
        this.items = [];
        this.tableConfigurations = {
            tableColumns: [
                { name: 'indicatorName', label: 'English Name' },
                { name: 'indicatorNameSw', label: 'Swahili Name' },
                { name: 'isActive', label: 'Active', type: 'boolean' },
                { name: 'updatedAt', label: 'Last Update', type: 'date' },
            ],
            tableCaption: '',
            tableNotifications: '',
            showSearch: true,
            showBorder: true,
            allowPagination: true,
            actionIcons: { edit: true, delete: false, more: false, print: false },
            doneLoading: false,
            deleting: {},
            active: {},
            empty_msg: 'No Indicators'
        };
    }
    IndicatorsComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.submitForm = this.fb.group({
            indicatorName: ['', Validators.required],
            indicatorNameSw: ['', Validators.required],
            isActive: [true]
        });
    };
    IndicatorsComponent.prototype.getItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var items;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('get-indicators').toPromise()];
                    case 1:
                        items = _a.sent();
                        this.items = items.map(function (item) { return (tslib_1.__assign({}, item, { id: item.indicatorId })); });
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    IndicatorsComponent.prototype.add = function () {
        this.viewDetails = true;
        this.itemId = null;
    };
    IndicatorsComponent.prototype.viewMore = function (item) {
        console.log(item);
    };
    IndicatorsComponent.prototype.onUpdate = function (item) {
        this.itemId = item.indicatorId;
        this.submitForm.patchValue({
            indicatorName: item.indicatorName,
            indicatorNameSw: item.indicatorNameSw,
            isActive: item.isActive
        });
        this.viewDetails = true;
    };
    IndicatorsComponent.prototype.save = function (formValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, saved, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.saving_data = true;
                        payload = [{
                                indicatorName: formValue.indicatorName,
                                indicatorNameSw: formValue.indicatorNameSw,
                                isActive: formValue.isActive
                            }];
                        if (this.itemId) {
                            payload[0].indicatorId = this.itemId;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.postOpenSRP('create-referral-indicators', payload).toPromise()];
                    case 2:
                        saved = _a.sent();
                        this.saving_data = false;
                        this.httpClient.showSuccess('Indicator Created Successful');
                        this.getItems();
                        this.closeForm();
                        this.submitForm.reset();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.saving_data = false;
                        console.log(e_1);
                        this.httpClient.showError('Something went wrong, Try Again', 3000);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    IndicatorsComponent.prototype.onDelete = function (item) {
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
    };
    IndicatorsComponent.prototype.closeForm = function () {
        this.viewDetails = false;
    };
    IndicatorsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-indicators',
            templateUrl: './indicators.component.html',
            styleUrls: ['./indicators.component.scss'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            FormBuilder])
    ], IndicatorsComponent);
    return IndicatorsComponent;
}());
export { IndicatorsComponent };
//# sourceMappingURL=indicators.component.js.map