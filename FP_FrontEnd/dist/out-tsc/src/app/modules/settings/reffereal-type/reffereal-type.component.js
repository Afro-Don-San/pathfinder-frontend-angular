import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../../services/http-client.service';
import { fadeIn } from '../../../shared/animations/router-animation';
var RefferealTypeComponent = /** @class */ (function () {
    function RefferealTypeComponent(httpClient, fb) {
        this.httpClient = httpClient;
        this.fb = fb;
        this.viewDetails = false;
        this.loading = false;
        this.saving_data = false;
        this.items = [];
        this.tableConfigurations = {
            tableColumns: [
                { name: 'referralTypeName', label: 'Name' },
                { name: 'active', label: 'Active', type: 'boolean' },
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
            empty_msg: 'No Items'
        };
    }
    RefferealTypeComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.submitForm = this.fb.group({
            referralTypeName: ['', Validators.required],
            isActive: [true]
        });
    };
    RefferealTypeComponent.prototype.getItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var items;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('referral-types').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) { return (tslib_1.__assign({}, item, { id: item.referralTypeId })); });
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    RefferealTypeComponent.prototype.add = function () {
        this.viewDetails = true;
        this.itemId = null;
    };
    RefferealTypeComponent.prototype.viewMore = function (item) {
        console.log(item);
    };
    RefferealTypeComponent.prototype.onUpdate = function (item) {
        this.itemId = item.referralTypeId;
        this.submitForm.patchValue({
            referralTypeName: item.referralTypeName,
            isActive: item.active
        });
        this.viewDetails = true;
    };
    RefferealTypeComponent.prototype.save = function (formValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, saved, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.saving_data = true;
                        payload = [{
                                referralTypeName: formValue.referralTypeName,
                                isActive: formValue.isActive
                            }];
                        if (this.itemId) {
                            payload[0].referralTypeId = this.itemId;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.postOpenSRP('create-referral-types', payload).toPromise()];
                    case 2:
                        saved = _a.sent();
                        this.saving_data = false;
                        this.httpClient.showSuccess('Referral Type Created Successful');
                        this.getItems();
                        this.closeForm();
                        this.submitForm.reset();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.saving_data = false;
                        this.httpClient.showError('Something went wrong, Try Again', 3000);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RefferealTypeComponent.prototype.onDelete = function (item) {
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
    };
    RefferealTypeComponent.prototype.closeForm = function () {
        this.viewDetails = false;
    };
    RefferealTypeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reffereal-type',
            templateUrl: './reffereal-type.component.html',
            styleUrls: ['./reffereal-type.component.scss'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            FormBuilder])
    ], RefferealTypeComponent);
    return RefferealTypeComponent;
}());
export { RefferealTypeComponent };
//# sourceMappingURL=reffereal-type.component.js.map