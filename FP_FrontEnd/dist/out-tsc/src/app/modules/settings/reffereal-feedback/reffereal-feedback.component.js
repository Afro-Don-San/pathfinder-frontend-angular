import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../../services/http-client.service';
import { fadeIn } from '../../../shared/animations/router-animation';
var RefferealFeedbackComponent = /** @class */ (function () {
    function RefferealFeedbackComponent(httpClient, fb) {
        this.httpClient = httpClient;
        this.fb = fb;
        this.viewDetails = false;
        this.loading = false;
        this.saving_data = false;
        this.items = [];
        this.tableConfigurations = {
            tableColumns: [
                { name: 'desc', label: 'Name' },
                { name: 'descSw', label: 'Swahili Name' },
                { name: 'referralTypeName', label: 'Referral Type' },
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
        this.referral_types = [];
    }
    RefferealFeedbackComponent.prototype.ngOnInit = function () {
        this.getItems();
        this.submitForm = this.fb.group({
            desc: ['', Validators.required],
            descSw: ['', Validators.required],
            referralType: ['', Validators.required],
        });
    };
    RefferealFeedbackComponent.prototype.getItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, items;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loading = true;
                        _a = this;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('referral-types').toPromise()];
                    case 1:
                        _a.referral_types = _b.sent();
                        return [4 /*yield*/, this.httpClient.getOpenSRP('referral-feedback').toPromise()];
                    case 2:
                        items = _b.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) {
                            var referral_type = _this.referral_types.filter(function (it) { return it.referralTypeId === item.referralType.referralTypeId; })[0];
                            return tslib_1.__assign({}, item, { referralTypeName: referral_type ? referral_type.referralTypeName : '' });
                        });
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    RefferealFeedbackComponent.prototype.add = function () {
        this.viewDetails = true;
        this.itemId = null;
    };
    RefferealFeedbackComponent.prototype.viewMore = function (item) {
        console.log(item);
    };
    RefferealFeedbackComponent.prototype.onUpdate = function (item) {
        this.itemId = item.id;
        this.submitForm.patchValue({
            desc: item.desc,
            descSw: item.descSw,
            referralType: item.referralType.referralTypeId
        });
        this.viewDetails = true;
    };
    RefferealFeedbackComponent.prototype.save = function (formValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, url, saved, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.saving_data = true;
                        payload = [{
                                desc: formValue.desc,
                                descSw: formValue.descSw,
                                referralType: {
                                    referralTypeId: formValue.referralType
                                }
                            }];
                        url = 'create-referral-feedback';
                        if (this.itemId) {
                            payload[0].id = this.itemId;
                            url = 'update-referral-feedback';
                            payload = {
                                id: this.itemId,
                                desc: formValue.desc,
                                descSw: formValue.descSw,
                                referralType: {
                                    referralTypeId: formValue.referralType
                                }
                            };
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.postOpenSRP(url, payload).toPromise()];
                    case 2:
                        saved = _a.sent();
                        this.saving_data = false;
                        this.httpClient.showSuccess('Referral Feedback Created Successful');
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
    RefferealFeedbackComponent.prototype.onDelete = function (item) {
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
    };
    RefferealFeedbackComponent.prototype.closeForm = function () {
        this.viewDetails = false;
    };
    RefferealFeedbackComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reffereal-feedback',
            templateUrl: './reffereal-feedback.component.html',
            styleUrls: ['./reffereal-feedback.component.scss'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            FormBuilder])
    ], RefferealFeedbackComponent);
    return RefferealFeedbackComponent;
}());
export { RefferealFeedbackComponent };
//# sourceMappingURL=reffereal-feedback.component.js.map