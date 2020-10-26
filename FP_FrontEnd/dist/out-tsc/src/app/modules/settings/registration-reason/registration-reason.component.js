import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../../services/http-client.service';
var RegistrationReasonComponent = /** @class */ (function () {
    function RegistrationReasonComponent(httpClient, fb) {
        this.httpClient = httpClient;
        this.fb = fb;
        this.viewDetails = false;
        this.loading = false;
        this.saving_data = false;
        this.items = [];
        this.tableConfigurations = {
            tableColumns: [
                { name: 'descEn', label: 'English Name' },
                { name: 'descSw', label: 'Swahili Name' },
                { name: 'active', label: 'Active', type: 'boolean' },
                { name: 'applicableToMen', label: 'Applicable To Men', type: 'boolean' },
                { name: 'applicableToWomen', label: 'Applicable To Women', type: 'boolean' },
                { name: 'updatedAt', label: 'Last Update', type: 'date' },
            ],
            tableCaption: '',
            tableNotifications: '',
            showSearch: true,
            showBorder: true,
            allowPagination: true,
            actionIcons: { edit: true, delete: true, more: false, print: false },
            doneLoading: false,
            deleting: {},
            active: {},
            empty_msg: 'No Items'
        };
    }
    RegistrationReasonComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.submitForm = this.fb.group({
            descEn: ['', Validators.required],
            descSw: ['', Validators.required],
            isActive: [true],
            applicableToMen: [true],
            applicableToWomen: [true]
        });
    };
    RegistrationReasonComponent.prototype.getItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var items;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('registration-reasons').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) { return (tslib_1.__assign({}, item, { id: item.registrationId })); });
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationReasonComponent.prototype.add = function () {
        this.viewDetails = true;
        this.itemId = null;
    };
    RegistrationReasonComponent.prototype.viewMore = function (item) {
        console.log(item);
    };
    RegistrationReasonComponent.prototype.onUpdate = function (item) {
        this.itemId = item.registrationId;
        this.submitForm.patchValue({
            descEn: item.descEn,
            descSw: item.descSw,
            isActive: item.isActive,
            applicableToMen: item.applicableToMen,
            applicableToWomen: item.applicableToWomen
        });
        this.viewDetails = true;
    };
    RegistrationReasonComponent.prototype.save = function (formValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, url, saved, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.saving_data = true;
                        payload = [{
                                descEn: formValue.descEn,
                                descSw: formValue.descSw,
                                isActive: formValue.isActive,
                                applicableToMen: formValue.applicableToMen,
                                applicableToWomen: formValue.applicableToWomen
                            }];
                        url = 'create-registration-reasons';
                        if (this.itemId) {
                            url = 'update-registration-reason';
                            payload = {
                                registrationId: this.itemId,
                                descEn: formValue.descEn,
                                descSw: formValue.descSw,
                                isActive: formValue.isActive,
                                applicableToMen: formValue.applicableToMen,
                                applicableToWomen: formValue.applicableToWomen
                            };
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.postOpenSRP(url, payload).toPromise()];
                    case 2:
                        saved = _a.sent();
                        this.loading = false;
                        this.httpClient.showSuccess('Registration Reason Created Successful');
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
    RegistrationReasonComponent.prototype.onDelete = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saved, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tableConfigurations.deleting = {};
                        this.tableConfigurations.deleting[item.id] = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.getOpenSRP("delete-registration-reasons/" + item.id).toPromise()];
                    case 2:
                        saved = _a.sent();
                        this.tableConfigurations.deleting[item.id] = true;
                        this.httpClient.showSuccess('Registration Reason Deleted Successful');
                        this.items = this.items.filter(function (ind) { return ind.id !== item.id; });
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
    RegistrationReasonComponent.prototype.closeForm = function () {
        this.viewDetails = false;
    };
    RegistrationReasonComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registration-reason',
            templateUrl: './registration-reason.component.html',
            styleUrls: ['./registration-reason.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            FormBuilder])
    ], RegistrationReasonComponent);
    return RegistrationReasonComponent;
}());
export { RegistrationReasonComponent };
//# sourceMappingURL=registration-reason.component.js.map