(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Wc9":
/*!************************************************************!*\
  !*** ./src/app/modules/locations/locations.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "+dyC":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/settings/registration-reason/registration-reason.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RegistrationReasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationReasonComponent", function() { return RegistrationReasonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_reason_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration-reason.component.html */ "CLOK");
/* harmony import */ var _registration_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-reason.component.scss */ "OAJ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");






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
            descEn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            descSw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            isActive: [true],
            applicableToMen: [true],
            applicableToWomen: [true]
        });
    };
    RegistrationReasonComponent.prototype.getItems = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('registration-reasons').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { id: item.registrationId })); });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var payload, url, saved, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var saved, e_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
    RegistrationReasonComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    RegistrationReasonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-registration-reason',
            template: _raw_loader_registration_reason_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_registration_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegistrationReasonComponent);
    return RegistrationReasonComponent;
}());



/***/ }),

/***/ "+m/1":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/topbanner/topbanner.component.ts ***!
  \********************************************************************/
/*! exports provided: TopbannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbannerComponent", function() { return TopbannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_topbanner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./topbanner.component.html */ "TBHj");
/* harmony import */ var _topbanner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topbanner.component.scss */ "J/nd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TopbannerComponent = /** @class */ (function () {
    function TopbannerComponent() {
        this.title = '';
        this.image = '';
        this.url = '';
        this.loading = false;
    }
    TopbannerComponent.prototype.ngOnInit = function () { };
    TopbannerComponent.ctorParameters = function () { return []; };
    TopbannerComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    TopbannerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-topbanner',
            template: _raw_loader_topbanner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_topbanner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TopbannerComponent);
    return TopbannerComponent;
}());



/***/ }),

/***/ "/IIO":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chw-locations/chw-locations.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tree-input\" appClickOutside (clickOutside)=\"showOrgTree = true\">\n  <div class=\"show_items\" (click)=\"displayOrgTree()\">\n              <span *ngIf=\"!orgunit_tree_config.loading\">\n                  {{  getProperPreOrgunitName() }}\n              </span>\n    <span *ngIf=\"orgunit_model.selected_orgunits.length > 3 && orgunit_model.selected_user_orgunit.length == 0\">\n                <span class=\"selected-item\">\n                  {{ orgunit_model.selected_orgunits[0].name }}\n                  <a (click)=\"deActivateNode(orgunit_model.selected_orgunits[0].id,orgtree,$event)\" class=\"removeorgunit\" >x</a>\n                </span>\n                <span class=\"selected-item\">\n                  {{ orgunit_model.selected_orgunits[1].name }}\n                  <a (click)=\"deActivateNode(orgunit_model.selected_orgunits[1].id,orgtree,$event)\" class=\"removeorgunit\">x</a>\n                </span>\n                <span class=\"selected-item\">\n                  &nbsp; and {{ orgunit_model.selected_orgunits.length - 2 }} more\n                </span>\n              </span>\n    <span *ngIf=\"orgunit_model.selected_orgunits.length <= 3 && orgunit_model.selected_user_orgunit.length == 0\">\n                 <span *ngFor=\"let item of orgunit_model.selected_orgunits\" class=\"selected-item ng-binding ng-scope\">\n                  {{ item.name }}\n                   <a (click)=\"deActivateNode(item.id,orgtree,$event)\" class=\"removeorgunit\">x</a>\n                </span>\n              </span>\n    <span class=\"no-selection\" *ngIf=\"orgunit_model.selected_orgunits.length == 0 && !orgunit_tree_config.loading && orgunit_model.selected_user_orgunit.length == 0\">\n          {{ orgunit_tree_config.placeholder }}\n        </span>\n\n    <i class=\"fa fa-caret-down pull-right\"></i>\n    <span  *ngIf=\"orgunit_model.selected_orgunits.length > 3\" class=\"pull-right\">\n            <span class=\"selected-item\" style=\"cursor: pointer\" (click)=\"clearAll()\" style=\"opacity: 0.7\" >X clear all</span>\n          </span>\n    <span *ngIf=\"orgunit_tree_config.loading\">{{ orgunit_tree_config.loading_message }}</span>\n  </div>\n  <div class=\"tree-view\" [ngClass]=\"{'hiddenTree':showOrgTree}\" id=\"tree_view\">\n    <div class=\"container-fluid\">\n      <div *ngIf=\"orgunit_tree_config.loading\">{{ orgunit_tree_config.loading_message }}</div>\n      <div class=\"tree-area\" [ngClass]=\"{'someclass': orgunit_model.selected_user_orgunit.length != 0}\">\n        <!--          <tree-root [nodes]=\"nodes\"-->\n        <!--                     #orgtree-->\n        <!--                     (toggleExpanded)=\"onEvent($event)\"-->\n        <!--                     (activate)=\"activateOrg($event)\"-->\n        <!--                     (focus)=\"onEvent($event)\"-->\n        <!--                     (blur)=\"onEvent($event)\">-->\n        <!--          </tree-root>-->\n        <tree-root\n          #orgtree\n          [nodes]=\"organisationunits\"\n          [focused]=\"true\"\n          (activate)=\"activateOrg($event)\"\n          (deactivate)=\"deactivateOrg($event)\"\n        >\n          <ng-template #treeNodeTemplate let-node>\n            <span (click)=\"updateModelOnSelect(node.data)\" style=\"font-size: 12px\">{{ node.data.name }}</span>\n          </ng-template>\n        </tree-root>\n      </div>\n      <div class=\"col-sm-12\" style=\"padding:0px;margin-top: 5px;border-top:1px solid rgba(0,0,0,0.3)\" *ngIf=\"showUpdate\">\n        <button class=\"btn btn-outline-secondary btn-sm pull-right cursor\" style=\"margin-top: 5px\" (click)=\"updateOrgunits()\">\n          <i class=\"fa fa-refresh\"></i>\n          <span>Update</span>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "/IrT":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/clients/clients.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clients.component.html */ "fNEv");
/* harmony import */ var _clients_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.component.scss */ "oD/F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/location.service */ "yHma");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/org-unit.service */ "n3tq");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/settings.service */ "6nr9");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);














highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default()(highcharts__WEBPACK_IMPORTED_MODULE_10__);
var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.location_loading = false;
        this.locations = [];
        this.values = [];
        this.card2Data = null;
        this.card1DataLoading = false;
        this.card3DataLoading = false;
        this.data_loading = false;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date(new Date().setDate(new Date().getDate() - 90));
        this.endDate = new Date(new Date().setDate(new Date().getDate() + 2));
        var start_date = new Date(this.startDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.endDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        this.start_date = start_date;
        this.end_date = end_date;
        var starting_location = localStorage.getItem('htmr-starting-location');
        this.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
            _this.orgunitName = _this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
            _this.updateCard1({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard3({ from_date: start_date, to_date: end_date, facilities: facilities });
        });
    };
    ClientsComponent.prototype.updateCards = function (filter) {
        this.orgunitName = filter.ouName;
        this.updateCard1Chart(filter);
        this.updateCard3Chart(filter);
    };
    ClientsComponent.prototype.updateCard1 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard1Chart(filter);
    };
    ClientsComponent.prototype.updateCard1Chart = function (filter) {
        var _this = this;
        this.card1DataLoading = true;
        var reportUrl = 'clients_families/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Months',
                        data: data['client_registration_by_month'].map(function (item) { return item.value; })
                    }];
                var categories = data['client_registration_by_month'].map(function (item) { return item.month_name; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Client Count', 'Registered Clients' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('cardClientsChart', chartConfig);
            }
            _this.card1DataLoading = false;
        }, function (error1) { return _this.card1DataLoading = false; });
    };
    ClientsComponent.prototype.updateCard3 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard3Chart(filter);
    };
    ClientsComponent.prototype.updateCard3Chart = function (filter) {
        var _this = this;
        this.card3DataLoading = true;
        this.data_loading = true;
        var reportUrl = 'clients_families/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                _this.values = data['clients'];
            }
            _this.card3DataLoading = false;
            _this.data_loading = false;
        }, function (error1) { return _this.card3DataLoading = false; });
    };
    // this method was coppied form the orguni component and is to be moved to service letter
    ClientsComponent.prototype.getLocation = function (starting_location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
                        visit_locations = [];
                        visit_locations.push({
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            parents: ""
                        });
                        visit_location = {
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            children: visit_location.childLocations.map(function (location) {
                                var child_loc = _this.getChildOrgunits(top_locations, location.uuid);
                                visit_locations.push({
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    parents: "" + visit_location.uuid
                                });
                                return {
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    children: child_loc.childLocations.map(function (child) {
                                        var before_last_child = _this.getChildOrgunits(top_locations, child.uuid);
                                        visit_locations.push({
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            parents: visit_location.uuid + ";" + child_loc.uuid
                                        });
                                        return {
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            children: before_last_child.childLocations.map(function (level3child) {
                                                var last_child = _this.getChildOrgunits(top_locations, level3child.uuid);
                                                visit_locations.push({
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid
                                                });
                                                return {
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    // children: facility.childLocations
                                                    children: last_child.childLocations.map(function (level4child) {
                                                        var facility = _this.getChildOrgunits(top_locations, level4child.uuid);
                                                        visit_locations.push({
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid
                                                        });
                                                        return {
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            // children: lastest.childLocations
                                                            children: facility.childLocations.map(function (level5child) {
                                                                var village = _this.getChildOrgunits(top_locations, level5child.uuid);
                                                                visit_locations.push({
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6,
                                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + facility.uuid + ";" + village.uuid
                                                                });
                                                                return {
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6
                                                                };
                                                            })
                                                        };
                                                    })
                                                };
                                            })
                                        };
                                    })
                                };
                            })
                        };
                        this.location_loading = false;
                        console.log(visit_locations);
                        return [2 /*return*/, visit_locations];
                }
            });
        });
    };
    ClientsComponent.prototype.exportexcel = function (table, fileName) {
        /* table id is passed over here */
        var element = document.getElementById('' + table + '');
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_13__["writeFile"](wb, fileName);
    };
    ClientsComponent.prototype.print = function () {
        window.print();
    };
    ClientsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_9__["find"](orgunits, { uuid: uuid });
    };
    ClientsComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"] }
    ]; };
    ClientsComponent.propDecorators = {
        el1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea1',] }],
        el2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea2',] }],
        el3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea3',] }],
        el4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea4',] }]
    };
    ClientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-clients',
            template: _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_clients_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "/sPm":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TotalReferralsIssuedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalReferralsIssuedComponent", function() { return TotalReferralsIssuedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_total_referrals_issued_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./total-referrals-issued.component.html */ "NBeo");
/* harmony import */ var _total_referrals_issued_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-referrals-issued.component.scss */ "5Ysc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TotalReferralsIssuedComponent = /** @class */ (function () {
    function TotalReferralsIssuedComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalReferralsIssuedComponent.prototype.ngOnInit = function () {
    };
    TotalReferralsIssuedComponent.ctorParameters = function () { return []; };
    TotalReferralsIssuedComponent.propDecorators = {
        jsonData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgUnitName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        report: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    TotalReferralsIssuedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-total-referrals-issued',
            template: _raw_loader_total_referrals_issued_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_total_referrals_issued_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TotalReferralsIssuedComponent);
    return TotalReferralsIssuedComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Documents/Projects/Family Planning/FP_FrontEnd/src/main.ts */"zUnb");


/***/ }),

/***/ "0FF5":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/summary-card/summary-card.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card\n  class=\"card-1 cursor\"\n  [ngClass]=\"routeAnimationsElements\">\n  <mat-card-content>\n    <app-placeholder *ngIf=\"loading\" [useGrid]=\"true\" [numberOfLines]=\"12\"></app-placeholder>\n    <div class=\"container-fluid\" *ngIf=\"!loading\" (click)=\"goTo()\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <img style=\"height: 64px!important;\" src=\"assets/img/{{image}}.png\" alt=\"image\">\n        </div>\n        <div class=\"col-sm-8\">\n          <p class=\"text-right\">{{ top_title }} <br> {{ low_title }}</p>\n          <h3 class=\"text-right\">{{ value | number }}</h3>\n        </div>\n      </div>\n      <hr>\n      <p class=\"text-muted\" style=\"font-size: 10px\">{{ additional_information }}</p>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "0riC":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password.component.html */ "He27");
/* harmony import */ var _change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.component.scss */ "4upH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginNotification = { isError: false, message: '', attempted: false, loading: false };
        this.customeUsernameNotifier = false;
        this.customePasswordNotifier = false;
        this.hide = true;
        this.ChangePasswordForm = this.formBuilder.group({
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('htmr-web-token');
        var location = localStorage.getItem('htmr-starting-location');
    };
    ChangePasswordComponent.prototype.changePassword = function (loginCredentials) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.ChangePasswordForm.valid) return [3 /*break*/, 6];
                        this.loginNotification.loading = true;
                        if (!(this.ChangePasswordForm.value.newpassword == this.ChangePasswordForm.value.confirmpassword)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // const openMrsResult: any = await this.userService.changePassword(loginCredentials).toPromise();
                        // console.log(openMrsResult);
                        // if (openMrsResult)
                        return [4 /*yield*/, this.userService.changePassword(loginCredentials).toPromise()];
                    case 2:
                        // const openMrsResult: any = await this.userService.changePassword(loginCredentials).toPromise();
                        // console.log(openMrsResult);
                        // if (openMrsResult)
                        _a.sent();
                        {
                            this.loginNotification.isError = false;
                            this.loginNotification.message = "Password change successful.";
                            this.loginNotification.attempted = true;
                            this.loginNotification.loading = false;
                            setTimeout(function () {
                                _this.closeNotification();
                            }, 6000);
                            this.userService.deleteToken();
                            this.router.navigate(['', 'login']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.loginNotification.isError = true;
                        this.loginNotification.message = "Operation failed, please check password and try again.";
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = false;
                        setTimeout(function () {
                            _this.closeNotification();
                        }, 6000);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.loginNotification.isError = true;
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.loginNotification.message = "Passwords do not match.";
                        setTimeout(function () {
                            _this.closeNotification();
                        }, 6000);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ChangePasswordComponent.prototype.closeNotification = function () {
        this.loginNotification.isError = false;
        this.loginNotification.attempted = false;
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-change-password',
            template: _raw_loader_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "0xG3":
/*!************************************************************************!*\
  !*** ./src/app/modules/users/update-member/update-member.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMemberComponent", function() { return UpdateMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_member_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-member.component.html */ "rwKw");
/* harmony import */ var _update_member_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-member.component.scss */ "fS4Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/team.service */ "GDbA");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");








var UpdateMemberComponent = /** @class */ (function () {
    function UpdateMemberComponent(formBuilder, teamService, dialogRef, data, http) {
        this.formBuilder = formBuilder;
        this.teamService = teamService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.orgunit = null;
        this.orgunitnames = '';
        this.orgunit_tree_config = {
            show_search: true,
            search_text: 'Search',
            level: null,
            loading: true,
            loading_message: 'Loading Organisation units...',
            multiple: true,
            multiple_key: 'control',
            placeholder: 'Assigned Location'
        };
        this.loading = false;
        this.startingOu = [];
    }
    UpdateMemberComponent.prototype.ngOnInit = function () {
        this.teamMemberForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            familyName: [''],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            age: [''],
            team: [''],
            teamRole: [''],
            assignedLocation: [''],
            isProvider: ['']
        });
        if (this.data.team) {
            this.teamMemberForm.patchValue({
                team: this.data.team.uuid
            });
        }
        if (this.data.member) {
            this.teamMemberForm.patchValue({
                firstName: this.data.member.person.names
            });
        }
    };
    UpdateMemberComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.teamMemberForm.patchValue({
            assignedLocation: orgunit.value
        });
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    UpdateMemberComponent.prototype.save = function () {
        var _this = this;
        var formData = this.teamMemberForm.value;
        var person = {
            names: [
                {
                    givenName: formData.firstName,
                    familyName: formData.familyName
                }
            ],
            gender: formData.gender,
            age: formData.age
        };
        this.loading = true;
        var teamMember = {
            person: { uuid: this.data.member.person.uuid },
            teamRole: formData.teamRole,
            locations: [
                { uuid: formData.assignedLocation }
            ],
            team: { uuid: this.data.team.uuid },
            isDataProvider: true,
            identifier: this.data.member.identifier
        };
        this.teamService.createTeamMember(teamMember).subscribe(function (teamMemberResponse) {
            console.log(teamMemberResponse);
            _this.loading = false;
            _this.http.showSuccess('Team member has been updated successful');
        }, function (teamMemberError) {
        });
    };
    UpdateMemberComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_7__["HttpClientService"] }
    ]; };
    UpdateMemberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-update-member',
            template: _raw_loader_update_member_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_update_member_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object, _services_http_client_service__WEBPACK_IMPORTED_MODULE_7__["HttpClientService"]])
    ], UpdateMemberComponent);
    return UpdateMemberComponent;
}());



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1S53":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h5>\n        {{ report?.name}} from {{startDate | date:'mediumDate'}} to {{ endDate  | date:'mediumDate'}} for {{ orgUnitName }}\n        <button (click)=\"downloadExcel()\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n      </h5>\n    </div>\n  </div>\n  <div class=\"row mt-3 no-print\">\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Rows</mat-label>\n        <mat-select\n          (selectionChange)=\"changeRows($event)\"\n          [(ngModel)]=\"visibleRows\"\n          multiple\n          placeholder=\"Select Indicators\">\n          <app-mat-select-search [(ngModel)]=\"searchRows\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of rows | search:'indicatorName':searchRows\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenRows.length > 0\">{{hiddenRows.length}} hidden rows</mat-hint>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Columns</mat-label>\n        <mat-select\n          (selectionChange)=\"changeColumn($event)\"\n          [(ngModel)]=\"visibleColumns\"\n          multiple\n          placeholder=\"Visible Columns\">\n          <app-mat-select-search [(ngModel)]=\"searchColumns\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of columns | search:'indicatorName':searchColumns\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenColumns.length > 0\">{{hiddenColumns.length}} hidden columns</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <table #dataTable class=\"table table-bordered reportTable mt-3\">\n        <thead>\n        <tr>\n          <th colspan=\"2\"></th>\n          <th class=\"text-center\" colspan=\"2\" [attr.colspan]=\"visibleColumns.includes('JUMLA ME') && visibleColumns.includes('JUMLA KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME') || visibleColumns.includes('JUMLA KE')\">JUMLA</th>\n          <th class=\"text-center\" colspan=\"2\"  [attr.colspan]=\"visibleColumns.includes('CHINI YA MIAKA 5 ME') && visibleColumns.includes('CHINI YA MIAKA 5 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 ME') || visibleColumns.includes('CHINI YA MIAKA 5 KE')\">CHINI YA MIAKA 5</th>\n          <th class=\"text-center\" colspan=\"2\"  [attr.colspan]=\"visibleColumns.includes('JUU YA MIAKA 5 ME') && visibleColumns.includes('JUU YA MIAKA 5 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 ME') || visibleColumns.includes('JUU YA MIAKA 5 KE')\">JUU YA MIAKA 5</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th style=\"width: 10px\">SN</th>\n          <th>{{ main_title }}</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">ME</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">KE</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 ME')\">ME</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 KE')\">KE</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 ME')\">ME</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 KE')\">KE</th>\n        </tr>\n        <ng-container *ngFor=\"let row of jsonData;\">\n          <tr *ngIf=\"visibleRows.includes('RUFAA ZA MALARIA ZILIZOFANYIKA')\">\n            <td>1</td>\n            <td>RUFAA ZA MALARIA ZILIZOFANYIKA</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">{{row.totalMale || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">{{row.totalFemale || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 ME')\">{{row.lessThanFiveMale || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 KE')\">{{row.lessThanFiveFemale || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 ME')\">{{row.greaterThan5Male || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 KE')\">{{row.greaterThan5Female || '-'}}</td>\n          </tr>\n        </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "1aYY":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/table-style.directive.ts ***!
  \************************************************************/
/*! exports provided: TableStyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStyleDirective", function() { return TableStyleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TableStyleDirective = /** @class */ (function () {
    function TableStyleDirective(el) {
        this.el = el;
        this.color = 'red';
    }
    // afterViewInit lifecycle hook runs after DOM is rendered
    TableStyleDirective.prototype.ngAfterViewInit = function () {
        // get anchor element
        console.log('kwenye directive hapa');
        var anchorEl = this.el.nativeElement.querySelector('table');
        console.log({ anchorEl: anchorEl });
        // assign color
        if (anchorEl) {
            anchorEl.style.backgroundColor = this.color;
        }
    };
    TableStyleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    TableStyleDirective.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    TableStyleDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTableStyle]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TableStyleDirective);
    return TableStyleDirective;
}());



/***/ }),

/***/ "1pFH":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/main-data-table/main-data-table.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-cover\">\n  <div class=\"top-area\">\n    <div class=\"search-area\">\n      <mat-form-field *ngIf=\"tableConfigurations.showSearch\">\n        <mat-label>\n          <mat-icon>search</mat-icon>\n          Search\n        </mat-label>\n        <!--<input matInput [(ngModel)]=\"searchQuery\" placeholder=\"Search\">-->\n        <input autocomplete=\"off\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n      </mat-form-field>\n    </div>\n    <div class=\"excel-button\">\n      <button mat-raised-button (click)=\"downloadToCsv()\" *ngIf=\"!tableConfigurations.hideExport\">\n        <i style=\"margin-bottom: 5px; color: green\" class=\"fa fa-file-excel-o\"></i>\n        Export\n      </button>\n    </div>\n  </div>\n\n  <app-loader @fadeIn *ngIf=\"loading\"\n                  message=\"{{ loadingMessage || 'Getting Data Please Wait...' }}\"></app-loader>\n\n  <table\n    [ngClass]=\"{'table-bordered': tableConfigurations.showBorder}\"\n    mat-table\n    [trackBy]=\"trackByFn\"\n    [dataSource]=\"dataSource\"\n    matSort class=\"mat-elevation-z2\"\n    *ngIf=\"tableList.length != 0; else noData\"\n  >\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No</th>\n      <td mat-cell *matCellDef=\"let element;let i = index;\" [ngClass]=\"{'active': tableConfigurations.active[element?.id]}\"> {{ i + 1 }}</td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container *ngFor=\"let column of tableConfigurations.tableColumns\" matColumnDef=\"{{ column.name }}\" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header > {{ column.label }}</th>\n      <td mat-cell *matCellDef=\"let element\"  [ngClass]=\"{'active': tableConfigurations.active[element?.id]}\" >\n        <span *ngIf=\"column.type == 'number'\">\n            {{ element[column?.name] | number }}\n          </span>\n        <span *ngIf=\"column.type == 'date'\">\n            {{ element[column?.name] | date:'mediumDate' }}\n        </span>\n        <span *ngIf=\"column.type == 'boolean'\">\n          <mat-icon *ngIf=\"element[column?.name]\" fontSet=\"fa\" fontIcon=\"fa-check\"></mat-icon>\n<!--          {{ element[column?.name] }}-->\n        </span>\n        <span *ngIf=\"column.type != 'date' && column.type != 'number' && column.type != 'boolean'\">\n            {{ element[column?.name] }}\n          </span>\n      </td>\n    </ng-container>\n\n    <!--Action Icons-->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let tableListItem\" [ngClass]=\"{'active': tableConfigurations.active[tableListItem?.id]}\">\n        <div class=\"float-right\" role=\"group\" aria-label=\"Basic example\"\n             *ngIf=\"tableConfigurations.actionIcons.edit || tableConfigurations.actionIcons.print || tableConfigurations.actionIcons.delete || tableConfigurations.actionIcons.more || tableConfigurations.actionIcons.cancel || tableConfigurations.actionIcons.download || tableConfigurations.actionIcons.customPrimary || actionButtons.length > 0 \">\n\n          <a\n            class=\"btn btn-sm btn-primary action-button mr-1 btn-float cursor text-white\"\n            title=\"{{tableConfigurations.customPrimaryMessage}}\"\n            style=\"border-radius: 5px!important;\"\n            (click)=\"customPrimaryItem(tableListItem)\"\n            *ngIf=\"tableConfigurations?.actionIcons?.customPrimary && !showDelete[tableListItem?.id] && (tableListItem | showButton:'customPrimary')\">\n            {{tableConfigurations.customPrimaryMessage}}\n          </a>\n          <a @fadeIn class=\"cursor text-primary action-button mr-1 btn-float\" title=\"print\"\n             (click)=\"printItem(tableListItem)\"\n             style=\"border-radius: 50%\"\n             *ngIf=\"tableConfigurations?.actionIcons?.print && !showDelete[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-print\"></mat-icon>\n<!--            <i class=\"fa fa-print\"></i>-->\n          </a>\n          <a @fadeIn class=\"btn btn-sm btn-light action-button mr-1 btn-float\" title=\"view details\"\n             (click)=\"viewItemDetails(tableListItem)\"\n             style=\"border-radius: 50%\"\n             *ngIf=\"tableConfigurations?.actionIcons?.more && !showDelete[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-list\"></mat-icon>\n<!--            <i class=\"fa fa-list\"></i>-->\n          </a>\n          <a @fadeIn class=\"btn btn-sm btn-light action-button mr-1 btn-float\" title=\"edit\"\n             (click)=\"editItem(tableListItem)\"\n             style=\"border-radius: 50%\"\n             *ngIf=\"tableConfigurations?.actionIcons?.edit && !showDelete[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-edit\"></mat-icon>\n            <i class=\"fas fa-pencil-alt\"></i>\n<!--            <i class=\"fa fa-pencil\"></i>-->\n          </a>\n          <a @fadeIn class=\"btn btn-sm btn-light action-button mr-1 btn-float\" title=\"Download\"\n             (click)=\"downloadItem(tableListItem)\"\n             style=\"border-radius: 50%\"\n             *ngIf=\"tableConfigurations?.actionIcons?.download && !showDownload[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-edit\"></mat-icon>\n<!--            <i class=\"fa fa-cloud-download-alt\"></i>-->\n          </a>\n\n          <a @fadeIn class=\"btn btn-sm btn-danger action-button  btn-float\"\n             (click)=\"showDelete[tableListItem?.id] = true\"\n             style=\"border-radius: 50%\"\n             title=\"delete\" *ngIf=\"tableConfigurations?.actionIcons?.delete && !showDelete[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-trash\"></mat-icon>\n<!--            <i class=\"fa fa-trash-o\"></i>-->\n          </a>\n          <!--extra menu items-->\n          <button title=\"More Actions\" *ngIf=\"actionButtons.length != 0\" mat-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button\n              mat-menu-item\n              *ngFor=\"let btn of actionButtons\"\n              [title]=\"btn.title\"\n              (click)=\"submitCustomButtom(btn, tableListItem, 'first')\"\n            >\n              <img *ngIf=\"btn.image\" [src]=\"btn.image\" style=\"height: 20px\" [alt]=\"btn.title\">\n              <mat-icon *ngIf=\"btn.icon\" fontSet=\"fa\" fontIcon=\"fa-{{btn.icon}}\"></mat-icon>\n              {{btn.label}}\n            </button>\n          </mat-menu>\n          <button @fadeIn mat-flat-button (click)=\"showDelete[tableListItem?.id] = true\"\n                  title=\"Cancel\" *ngIf=\"tableConfigurations?.actionIcons?.cancel && !showDelete[tableListItem?.id]\">\n            <mat-icon>cancel</mat-icon>\n            Cancel\n          </button>\n\n          <!--delete confirmation-->\n          <p @fadeIn *ngIf=\"showDelete[tableListItem?.id] && !tableConfigurations.deleting[tableListItem?.id]\">Are You\n            sure?</p>\n          <p @fadeIn *ngIf=\"showDelete[tableListItem?.id] && tableConfigurations.deleting[tableListItem?.id]\">\n            <span *ngIf=\"tableConfigurations?.actionIcons?.cancel\">Canceling</span>\n            <span *ngIf=\"tableConfigurations?.actionIcons?.delete\">Deleting</span>\n          </p>\n          <p @fadeIn *ngIf=\"showDelete[tableListItem?.id]\">\n            <mat-progress-bar mode=\"indeterminate\" @fadeIn\n                              *ngIf=\"tableConfigurations.deleting[tableListItem?.id]\"></mat-progress-bar>\n            <button mat-mini-fab style=\"color: white; background-color: red; border-radius: 50%!important;\" @fadeIn\n                    *ngIf=\"!tableConfigurations.deleting[tableListItem?.id]\"\n                    (click)=\"showDelete = {}\">\n              <mat-icon>clear</mat-icon>\n            </button>\n            <button mat-mini-fab style=\"color: white; background-color: green; border-radius: 50%!important;\" @fadeIn\n                    *ngIf=\"!tableConfigurations.deleting[tableListItem?.id]\"\n                    (click)=\"deleteItem(tableListItem)\">\n              <mat-icon>done</mat-icon>\n            </button>\n          </p>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n        style='background-color: rgba(0, 0, 0, 0.1); opacity: 0.8;'></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"routeAnimationsElements\"\n        class=\"card-1\"></tr>\n  </table>\n\n  <!--Pagination-->\n  <mat-paginator\n    [ngClass]=\"{'hidden': !tableConfigurations.allowPagination}\"\n    [pageSizeOptions]=\"[10, 20, 25, 50, 100]\">\n  </mat-paginator>\n\n\n  <ng-template #noData>\n    <table *ngIf=\"!loading\" [ngClass]=\"{'table-bordered': tableConfigurations.showBorder}\" mat-table\n           [trackBy]=\"trackByFn\" [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z2\">\n\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> No</th>\n        <td mat-cell *matCellDef=\"let element;let i = index;\"> {{ i + 1 }}</td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container *ngFor=\"let column of tableConfigurations.tableColumns\" matColumnDef=\"{{ column.name }}\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.label }}</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element[column?.name] }}</td>\n      </ng-container>\n\n      <!--Action Icons-->\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let tableListItem\">&nbsp;</td>\n      </ng-container>\n\n      <!-- Disclaimer column -->\n      <ng-container matColumnDef=\"disclaimer\">\n        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"displayedColumns.length\">\n          <h5 class=\"text-center text-muted pt-1\">\n            {{tableConfigurations.empty_msg || \"No data\"}}\n          </h5>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n          style='background-color: rgba(0, 0, 0, 0.1); opacity: 0.8;'></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"routeAnimationsElements\"\n          class=\"card-1\"></tr>\n\n      <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\n    </table>\n\n  </ng-template>\n</div>\n");

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "20vP":
/*!************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-report.component.ts ***!
  \************************************************************************/
/*! exports provided: ProvidersReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersReportComponent", function() { return ProvidersReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_providers_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./providers-report.component.html */ "ekQ/");
/* harmony import */ var _providers_report_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers-report.component.scss */ "2svg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var ProvidersReportComponent = /** @class */ (function () {
    function ProvidersReportComponent(router) {
        this.router = router;
        this.activeLinkIndex = -1;
        this.title = 'Family Planning Reports';
        this.navLinks = [
            {
                label: 'Issued Services By Teams',
                link: ['', 'providers_report', 'issued-referrals-by-location-report'],
                index: 0
            },
            {
                label: 'Citizens Card Report',
                link: ['', 'providers_report', 'citizens-report'],
                index: 1
            },
            {
                label: 'Total Clients Enrolled to Beach Management Units',
                link: ['', 'providers_report', 'total-clients-enrolled-to-beach-management-report'],
                index: 2
            },
            {
                label: 'Total Clients Enrolled to Bee Keeping',
                link: ['', 'providers_report', 'total-clients-enrolled-to-bee-keeping-report'],
                index: 3
            },
            {
                label: 'Total Clients Enrolled to Loan units',
                link: ['', 'providers_report', 'total-clients-enrolled-to-loan-units-report'],
                index: 4
            },
        ];
    }
    ProvidersReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks
                .find(function (tab) { return tab.link[1] === '.' + _this.router.url; }));
        });
    };
    ProvidersReportComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ProvidersReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-providers-report',
            template: _raw_loader_providers_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_providers_report_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProvidersReportComponent);
    return ProvidersReportComponent;
}());



/***/ }),

/***/ "29wZ":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  margin: 5px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important;\n}\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLXN1bW1hcnkvcmVmZXJyYWxzL3JlZmVycmFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsc0JBQUE7RUFDQSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0RBQXNEO0VBQ3RELGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQUE7RUFDQSwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkNBQTJDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLXN1bW1hcnkvcmVmZXJyYWxzL3JlZmVycmFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZC1jb250YWluZXIxIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBncmlkLWdhcDogMTVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcikgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtMSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWltcG9ydGFudDtcbn1cblxuLm1haW4tc3RhdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDI1cHg7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjMwcHgsIDFmcikpXG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDUxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4iXX0= */");

/***/ }),

/***/ "2svg":
/*!**************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-report.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvdmlkZXJzLXJlcG9ydC9wcm92aWRlcnMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3tDl":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-4 pt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getProviders()\"\n        >Get Providers List</button>\n      </div>\n    </div>\n    <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a list of providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <app-multiselect\n          *ngIf=\"providers.length != 0\"\n          [items]=\"providers\"\n          [placeholder]=\"'Select data items to see in the report'\"\n          (onSelected)=\"setSelectedData($event)\"\n        ></app-multiselect>\n      </div>\n      <div class=\"col-7\" *ngIf=\"selected_providers.length != 0\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"getData()\">Get Report</button> &nbsp;\n        <button *ngIf=\"done_loading && !show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = true\">Get Detailed</button>\n        <button *ngIf=\"done_loading && show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = false\">Get Summary</button>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a Data for providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\" *ngIf=\"!show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Service Provided by {{ selected_providers_names }} for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n        <table class=\"table table-bordered\">\n          <tr>\n            <th>Referral Type</th>\n            <th>Number of Referals</th>\n          </tr>\n          <tr *ngFor=\"let data of values\">\n            <td>{{ data.serviceName }}</td>\n            <td>{{ data.count }}</td>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"col\" *ngIf=\"show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Detailed Service Provided by {{ selected_providers_names }} for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n        <table class=\"table table-bordered\">\n          <tr>\n            <th>Service Provider</th>\n            <th>Client</th>\n            <th>Facility</th>\n            <th>Refferal Status</th>\n          </tr>\n          <tr *ngFor=\"let data of detailed_values\">\n            <td>{{ data.service_provider_name }}</td>\n            <td>{{ data.client_name }}</td>\n            <td>{{ data.facility_name }}</td>\n            <td>{{ data.referral_status }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "4HVU":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/placeholder/placeholder.component.ts ***!
  \************************************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_placeholder_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./placeholder.component.html */ "ozM8");
/* harmony import */ var _placeholder_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder.component.scss */ "NCVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var PlaceholderComponent = /** @class */ (function () {
    function PlaceholderComponent() {
        this.numberOfLines = 4;
        this.useGrid = false;
    }
    PlaceholderComponent.prototype.ngOnInit = function () { };
    PlaceholderComponent.ctorParameters = function () { return []; };
    PlaceholderComponent.propDecorators = {
        numberOfLines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        useGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    PlaceholderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-placeholder',
            template: _raw_loader_placeholder_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_placeholder_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PlaceholderComponent);
    return PlaceholderComponent;
}());



/***/ }),

/***/ "4ZGS":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvdmlkZXJzLXJlcG9ydC9wcm92aWRlcnMtcmVmZmVyYWwtcmVwb3J0L3Byb3ZpZGVycy1yZWZmZXJhbC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "4upH":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.title {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.login {\n  position: absolute;\n  top: 12%;\n  right: 6%;\n  background-color: transparent;\n  height: 450px;\n  width: 400px;\n  z-index: 100;\n  border-top-left-radius: 10px;\n}\n\n.logintop {\n  height: 50px;\n  background-color: yellow;\n  width: 100%;\n  border-top-left-radius: 15px !important;\n}\n\n.loginbottom {\n  height: 500px;\n  background-color: white;\n  width: 100%;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n\n.logos {\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n}\n\n.logos img {\n  padding: 10px;\n  height: 50px;\n  opacity: 0.5;\n}\n\n.bgimage {\n  background: url('bg-fp.jpg') no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bgcolor {\n  background-color: rgba(70, 107, 73, 0.8);\n}\n\n.logintop:before {\n  height: 50px;\n  width: 10px;\n  display: block;\n  content: \" \";\n  background-color: #FFF;\n  position: absolute;\n  right: -0px;\n  top: -0px;\n  border-top: 0px solid blue;\n  border-bottom: 0px solid blue;\n}\n\n.logintop {\n  height: 50px;\n  width: 350px;\n  border-radius: 0px 0px 0px 0px;\n  background-color: #FFF;\n  position: relative;\n  border: 0px solid blue;\n}\n\n.logintop:after {\n  display: block;\n  content: \" \";\n  width: 100px;\n  height: 50px;\n  top: -0px;\n  background-color: #FFF;\n  position: absolute;\n  right: -25.6px;\n  transform: skewX(45deg);\n  -ms-transform: skewX(45deg);\n  -webkit-transform: skewX(45deg);\n  border: 0px solid blue;\n  z-index: -1;\n}\n\n.loginform {\n  margin-top: 30px;\n}\n\n.loginform button {\n  margin-top: 30px;\n  border-radius: 0px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.loginform form {\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  padding-top: 20px;\n}\n\n.loginform input {\n  border-top: 0px;\n  border-left: 0px;\n  border-radius: 0px;\n  border-right: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBQ2Q7O0FBRUU7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDYjs7QUFFRTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7QUFDaEM7O0FBRUU7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCx1Q0FBc0M7QUFDMUM7O0FBRUU7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ3BDOztBQUVFO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ2I7O0FBRUU7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDaEI7O0FBRUU7RUFDRSwwREFBeUU7RUFJekUsc0JBQXNCO0FBQzFCOztBQUNFO0VBQ0Usd0NBQXdDO0FBRTVDOztBQUVFO0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQWpDOztBQUVFO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDMUI7O0FBQ0U7RUFDRSxjQUFjO0VBQ2QsWUFBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUFzQjtFQUN0QiwyQkFBMEI7RUFDMUIsK0JBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixXQUFXO0FBRWY7O0FBQ0U7RUFDRSxnQkFBZ0I7QUFFcEI7O0FBQ0U7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFFdkI7O0FBQUU7RUFDRSx3Q0FBcUM7RUFDckMsaUJBQWlCO0FBR3JCOztBQURFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBSXJCIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gIH1cbiAgXG4gIC50aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgfVxuICBcbiAgLmxvZ2luIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMiU7XG4gICAgcmlnaHQ6IDYlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAubG9naW50b3Age1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sb2dpbmJvdHRvbSB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICB9XG4gIFxuICAubG9nb3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgfVxuICBcbiAgLmxvZ29zIGltZ3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgXG4gIC5iZ2ltYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZy1mcC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5iZ2NvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcwLCAxMDcsIDczLCAwLjgpO1xuICB9XG4gIFxuICBcbiAgLmxvZ2ludG9wOmJlZm9yZSB7XG4gIFxuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OlwiIFwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMHB4O1xuICAgIHRvcDogLTBweDtcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgYmx1ZTtcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbiAgfVxuICAubG9naW50b3Age1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsdWU7XG4gIH1cbiAgLmxvZ2ludG9wOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OlwiIFwiO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdG9wOiAtMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMjUuNnB4O1xuICAgIHRyYW5zZm9ybTpza2V3WCg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTpza2V3WCg0NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2tld1goNDVkZWcpO1xuICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsdWU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgXG4gIC5sb2dpbmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgXG4gIC5sb2dpbmZvcm0gYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgfVxuICAubG9naW5mb3JtIGZvcm17XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAubG9naW5mb3JtIGlucHV0e1xuICAgIGJvcmRlci10b3A6IDBweDtcbiAgICBib3JkZXItbGVmdDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "4veK":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/service/service-indicator/service-indicator.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\">\n  <app-loader *ngIf=\"loadingIndicators\" message=\"Preparing Indicators\"></app-loader>\n\n  <div *ngIf=\"!loadingIndicators\">\n    <p class=\"lead\">Select Indicators to be mapped to {{serviceItem?.serviceName}}</p>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Select Indicators</mat-label>\n      <mat-select\n        [(ngModel)]=\"selectedIndicators\"\n        multiple\n        placeholder=\"Select Indicators\">\n        <app-mat-select-search [(ngModel)]=\"searchValue\"></app-mat-select-search>\n        <mat-option\n          *ngFor=\"let item of indicators | without:'indicatorId':excludeIds | search:'indicatorName':searchValue\"\n          [value]=\"item.indicatorId\"\n        >{{ item.indicatorName }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <p class=\"clearfix\">\n      <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n\n      <button\n        mat-raised-button\n        color=\"primary\"\n        class=\"btn-block\"\n        [disabled]=\"selectedIndicators.length  == 0\"\n        (click)=\"save()\"\n      >Map Indicators</button>\n    </p>\n\n  </div>\n  <div *ngIf=\"!loadingIndicators\">\n    <h5> Current Mapped Indicators</h5>\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"false\"\n      [tableList]=\"currentIndicators\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </div>\n</div>\n");

/***/ }),

/***/ "5Ysc":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy90b3RhbC1yZWZlcnJhbHMtaXNzdWVkL3RvdGFsLXJlZmVycmFscy1pc3N1ZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "5xsu":
/*!**************************************************!*\
  !*** ./src/app/modules/users/users.component.ts ***!
  \**************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.component.html */ "ewzc");
/* harmony import */ var _users_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component.scss */ "73MK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/team.service */ "GDbA");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(httpClient, teamService, userService) {
        this.httpClient = httpClient;
        this.teamService = teamService;
        this.userService = userService;
        this.viewDetails = false;
        this.loading = false;
        this.saving_data = false;
        this.teams = [];
        this.teamMembers = [];
        this.tableConfigurations = {
            tableColumns: [
                { name: 'teamIdentifier', label: 'Identifier' },
                { name: 'teamName', label: 'Name' },
                { name: 'supervisor', label: 'Supervisor' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ],
            tableCaption: '',
            tableNotifications: '',
            showSearch: true,
            showBorder: true,
            allowPagination: true,
            actionIcons: { edit: true, delete: true, more: true, print: false, customPrimary: true },
            doneLoading: false,
            deleting: {},
            active: {},
            customPrimaryMessage: 'Add Member',
            empty_msg: 'No Teams'
        };
        this.smallForm = false;
        this.animationSize = 'full';
        this.view_data = '';
        this.formTitle = '';
        this.roles = [];
        this.teamRoles = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.prepareTeamWithMembers();
        this.getRoles();
        this.getTeamRoles();
    };
    UsersComponent.prototype.getItems = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingMessage = 'Getting Team information...';
                        _a = this;
                        return [4 /*yield*/, this.teamService.listTeams().toPromise()];
                    case 1:
                        _a.teams = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.getTeamMembers = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingMessage = 'Getting Team Members information...';
                        _a = this;
                        return [4 /*yield*/, this.teamService.listTeamMembers().toPromise()];
                    case 1:
                        _a.teamMembers = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.getTeamRoles = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.teamService.listTeamRoles().toPromise()];
                    case 1:
                        _a.teamRoles = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.getRoles = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var roles;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.listRoles().toPromise()];
                    case 1:
                        roles = _a.sent();
                        console.log(roles);
                        this.roles = roles.results;
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.prepareTeamWithMembers = function () {
        var _this = this;
        this.loading = true;
        this.getItems().then(function (items) {
            _this.getTeamMembers().then(function (members) {
                _this.loading = false;
                _this.teams = _this.teams.map(function (team) { return ({
                    id: team.uuid,
                    uuid: team.uuid,
                    display: team.display,
                    teamName: team.teamName,
                    teamIdentifier: team.teamIdentifier,
                    supervisor: team.supervisor,
                    supervisorUuid: team.supervisorUuid,
                    supervisorTeam: team.supervisorTeam,
                    supervisorTeamUuid: team.supervisorTeamUuid,
                    supervisorIdentifier: team.supervisorIdentifier,
                    location: {
                        uuid: team.location ? team.location.uuid : '',
                        display: team.location ? team.location.display : '',
                        name: team.location ? team.location.name : '',
                    },
                    members: team.members,
                    locationName: team.location ? team.location.display : '',
                    teamMembers: _this.teamMembers
                        .filter(function (member) { return member.team ? member.team.uuid === team.uuid : false; })
                        .map(function (member) { return ({
                        display: member.display,
                        identifier: member.identifier,
                        id: member.uuid,
                        uuid: member.uuid,
                        isDataProvider: member.isDataProvider,
                        person: member.person,
                        teamRole: member.teamRole,
                        locations: member.locations.map(function (location) { return ({
                            uuid: location.uuid,
                            display: location.display,
                            name: location.name,
                            parentLocation: location.parentLocation ? { uuid: location.parentLocation.uuid, display: location.parentLocation.display } : null,
                            childLocations: location.childLocations.map(function (child) { return ({
                                uuid: child.uuid,
                                display: child.display
                            }); })
                        }); })
                    }); })
                }); });
            });
        });
    };
    UsersComponent.prototype.add = function () {
        this.viewDetails = true;
        this.currentTeam = null;
        this.view_data = 'addData';
        this.smallForm = true;
        this.formTitle = 'Create new Team';
        this.tableConfigurations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.tableConfigurations), { tableColumns: [
                { name: 'teamName', label: 'Name' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ] });
    };
    UsersComponent.prototype.viewMore = function (item) {
        console.log(item);
        this.currentTeam = item;
        this.smallForm = false;
        this.viewDetails = true;
        this.view_data = 'moreDetails';
        this.formTitle = "" + item.teamName;
    };
    UsersComponent.prototype.onUpdate = function (item) {
        this.currentTeam = item;
        this.view_data = 'addData';
        this.viewDetails = true;
        this.formTitle = "Update " + item.teamName;
        this.smallForm = true;
        this.tableConfigurations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.tableConfigurations), { tableColumns: [
                { name: 'teamName', label: 'Name' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ] });
    };
    UsersComponent.prototype.addMember = function (team) {
        this.currentTeam = team;
        this.view_data = 'addMember';
        this.viewDetails = true;
        this.smallForm = false;
        this.animationSize = 'full';
        this.formTitle = "Add Team Member to " + team.teamName;
    };
    UsersComponent.prototype.onDelete = function (item) {
        var _this = this;
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
        this.teamService.deleteTeam(item).subscribe(function (success) {
            _this.httpClient.showSuccess('Team Deleted Successful');
            _this.tableConfigurations.deleting = {};
            _this.prepareTeamWithMembers();
        }, function (error) {
            _this.tableConfigurations.deleting = {};
            _this.httpClient.showError('Failed to Delete Team Please Try again letter');
        });
    };
    UsersComponent.prototype.closeForm = function () {
        this.viewDetails = false;
        this.view_data = '';
        this.currentTeam = null;
        this.tableConfigurations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.tableConfigurations), { tableColumns: [
                { name: 'teamIdentifier', label: 'Identifier' },
                { name: 'teamName', label: 'Name' },
                { name: 'supervisor', label: 'Supervisor' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ] });
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _services_team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-users',
            template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_users_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "668k":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loader.component.html */ "dO0u");
/* harmony import */ var _loader_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component.css */ "xHJT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    LoaderComponent.ctorParameters = function () { return []; };
    LoaderComponent.propDecorators = {
        message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-loader',
            template: _raw_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_loader_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "6CMu":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: InterFacilityRefferalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterFacilityRefferalReportComponent", function() { return InterFacilityRefferalReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inter_facility_refferal_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inter-facility-refferal-report.component.html */ "stBI");
/* harmony import */ var _inter_facility_refferal_report_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inter-facility-refferal-report.component.scss */ "MOlP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");






var InterFacilityRefferalReportComponent = /** @class */ (function () {
    function InterFacilityRefferalReportComponent(httpClient, orgUnitService) {
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
    InterFacilityRefferalReportComponent.prototype.ngOnInit = function () {
    };
    InterFacilityRefferalReportComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    InterFacilityRefferalReportComponent.prototype.checkDate = function () { };
    InterFacilityRefferalReportComponent.prototype.getProviders = function () {
        var _this = this;
        this.data_loading = true;
        this.loading_failed = false;
        this.done_loading = false;
        var facilities = this.orgUnitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
        var payload = { from_date: this.start_date, to_date: this.end_date, facilities: facilities };
        this.httpClient.postOpenSRP('report/get-intra-facility-departments-referrals-summary', payload)
            .subscribe(function (data) {
            console.log('data');
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
    InterFacilityRefferalReportComponent.prototype.setSelectedData = function (data) {
        this.selected_providers = data;
        this.selected_providers_names = this.selected_providers.map(function (d) { return d.name; }).join(', ');
    };
    InterFacilityRefferalReportComponent.prototype.getData = function () {
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
    InterFacilityRefferalReportComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"] }
    ]; };
    InterFacilityRefferalReportComponent.propDecorators = {
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    InterFacilityRefferalReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-inter-facility-refferal-report',
            template: _raw_loader_inter_facility_refferal_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_inter_facility_refferal_report_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"]])
    ], InterFacilityRefferalReportComponent);
    return InterFacilityRefferalReportComponent;
}());



/***/ }),

/***/ "6Ns1":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy90b3RhbC1pc3N1ZWQtbG9zdC1mb2xsb3d1cC90b3RhbC1pc3N1ZWQtbG9zdC1mb2xsb3d1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6nr9":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client.service */ "gkM4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.listReferalIndicators = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.getOpenSRP('get-indicators')
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.listReferalServices = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.getOpenSRP('get-referral-services')
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.addReferalIndicators = function (data) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenSRP('add-referral-indicators', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error("Some error occurred: " + error.statusText);
            });
        });
    };
    SettingsService.prototype.addReferalServices = function (data) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenSRP('add-referral-services', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.editReferalIndicators = function (data, id) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenSRP('edit-referral-services', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.editReferalServices = function (data, id) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenSRP('', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.deleteReferalIndicators = function (data, id) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.deleteOpenSRP('', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.deleteReferalServices = function (data, id) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.deleteOpenSRP('', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.listServiceIndicatorMerge = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.getOpenSRP('boresha-afya-services')
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.createServiceIndicatorMerge = function (data) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenSRP('add-referral-service-indicators', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.deleteServiceIndicatorMerge = function (id) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.deleteOpenSRP('', '')
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.drawChart = function (categories, series, yAxisLabel, title, subtitle, type) {
        if (title === void 0) { title = ''; }
        if (subtitle === void 0) { subtitle = ''; }
        if (type === void 0) { type = 'column'; }
        return {
            credits: {
                enabled: false
            },
            chart: {
                type: type
            },
            events: {
                load: function (chart) {
                    setTimeout(function () {
                        chart.target.reflow();
                    }, 0);
                }
            },
            title: {
                text: title
            },
            subtitle: {
                text: subtitle
            },
            xAxis: {
                categories: categories,
                crosshair: true,
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: yAxisLabel
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} ' +
                    yAxisLabel +
                    ' </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: series
        };
    };
    SettingsService.prototype.drawPieChart = function (data, title, tooltipLabel) {
        if (tooltipLabel === void 0) { tooltipLabel = ''; }
        return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b>'
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: tooltipLabel,
                    colorByPoint: true,
                    data: data
                }]
        };
    };
    SettingsService.ctorParameters = function () { return [
        { type: _http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
    ]; };
    SettingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "73MK":
/*!****************************************************!*\
  !*** ./src/app/modules/users/users.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "7JL1":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/table-form/table-form.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-topbanner\n  [title]=\"title\"\n  [image]=\"image\"\n  [url]=\"''\"\n  *ngIf=\"showTopBanner\"\n></app-topbanner>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ng-content select=\"summary\"></ng-content>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div [@tableSize]=\"!viewDetails ? 'hundred' : (smallForm ? 'eighty': animationSize)\">\n          <ng-content select=\"table\"></ng-content>\n        </div>\n\n        <div [@formSize]=\"viewDetails ? (smallForm ? 'twenty': animationSize) : 'zero'\">\n          <h5 class=\"mat-divider-title mt-3 row pl-3 pr-3\">\n\n            <span *ngIf=\"formTitle\"> {{ formTitle }} </span>\n            <!-- This fills the remaining space of the current row -->\n            <span class=\"example-fill-remaining-space\"></span>\n\n            <a title=\"Close Form\" (click)=\"closeForm()\" class=\"pull-right cursor\">\n              <mat-icon>close</mat-icon>\n            </a>\n          </h5>\n          <mat-divider></mat-divider>\n          <p *ngIf=\"loading\">Saving Data...</p>\n          <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\">\n          </mat-progress-bar>\n          <mat-card>\n            <ng-content select=\"form\"></ng-content>\n          </mat-card>\n        </div>\n      <!-- /.col-md-12 -->\n    </div>\n\n\n  </div>\n\n</div>\n\n\n<div class=\"col-md-12\" *ngIf=\"!viewDetails\">\n  <a *ngIf=\"!hideAdd\" title=\"Add\" (click)=\"add()\" mat-fab color=\"primary\" class=\"add-item\">\n    <mat-icon>add</mat-icon>\n  </a>\n</div>\n");

/***/ }),

/***/ "7SI1":
/*!***************************************************************!*\
  !*** ./src/app/modules/settings/service/service.component.ts ***!
  \***************************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service.component.html */ "U3GP");
/* harmony import */ var _service_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.component.scss */ "adsu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");







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
            serviceName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            serviceNameSw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    ServiceComponent.prototype.getItems = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('boresha-afya-services').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { indicatorEn: item.indicators.map(function (i) { return i.indicatorName; }).join(', '), indicatorSw: item.indicators.map(function (i) { return i.indicatorNameSw; }).join(', ') });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var payload, saved, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
    ServiceComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    ServiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-service',
            template: _raw_loader_service_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]],
            styles: [_service_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "7WbC":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SuccessfulMaraliaReferalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulMaraliaReferalsComponent", function() { return SuccessfulMaraliaReferalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_successful_maralia_referals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./successful-maralia-referals.component.html */ "1S53");
/* harmony import */ var _successful_maralia_referals_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./successful-maralia-referals.component.scss */ "uxBz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/excel-download.service */ "KQVd");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");






var SuccessfulMaraliaReferalsComponent = /** @class */ (function () {
    function SuccessfulMaraliaReferalsComponent(excelService) {
        this.excelService = excelService;
        this.jsonData = [];
        this.startDate = '';
        this.orgUnitName = '';
        this.rows = [];
        this.visibleRows = [];
        this.visibleColumns = [];
        this.searchRows = '';
        this.searchColumns = '';
        this.hiddenColumns = [];
        this.hiddenRows = [];
        this.columns = [
            'JUMLA ME',
            'JUMLA KE',
            'CHINI YA MIAKA 5 ME',
            'CHINI YA MIAKA 5 KE',
            'JUU YA MIAKA 5 ME',
            'JUU YA MIAKA 5 KE',
        ];
        this.totals = {};
    }
    SuccessfulMaraliaReferalsComponent.prototype.ngOnInit = function () {
        this.rows = ['RUFAA ZA MALARIA ZILIZOFANYIKA'];
        this.visibleColumns = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.columns);
        this.visibleRows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
    };
    SuccessfulMaraliaReferalsComponent.prototype.changeRows = function (event) {
        var _this = this;
        this.hiddenRows = this.rows.filter(function (item) { return !_this.visibleRows.includes(item); });
    };
    SuccessfulMaraliaReferalsComponent.prototype.changeColumn = function (event) {
        var _this = this;
        this.hiddenColumns = this.columns.filter(function (item) { return !_this.visibleColumns.includes(item); });
    };
    SuccessfulMaraliaReferalsComponent.prototype.print = function () {
        window.print();
    };
    SuccessfulMaraliaReferalsComponent.prototype.downloadExcel = function () {
        var startDate = new Date(this.startDate).toISOString().substr(0, 10);
        var endDate = new Date(this.endDate).toISOString().substr(0, 10);
        this.excelService.download1(this.report.name + " from " + startDate + " to " + endDate + " for " + this.orgUnitName, this.dataTable.nativeElement);
    };
    SuccessfulMaraliaReferalsComponent.ctorParameters = function () { return [
        { type: _services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__["ExcelDownloadService"] }
    ]; };
    SuccessfulMaraliaReferalsComponent.propDecorators = {
        jsonData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgUnitName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        report: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        main_title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        dataTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dataTable', { static: true },] }]
    };
    SuccessfulMaraliaReferalsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-successful-maralia-referals',
            template: _raw_loader_successful_maralia_referals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeIn"], _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeOut"]],
            styles: [_successful_maralia_referals_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__["ExcelDownloadService"]])
    ], SuccessfulMaraliaReferalsComponent);
    return SuccessfulMaraliaReferalsComponent;
}());



/***/ }),

/***/ "8WTZ":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/mat-select-search/mat-select-search.component.ts ***!
  \************************************************************************************/
/*! exports provided: MatSelectSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectSearchComponent", function() { return MatSelectSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mat_select_search_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mat-select-search.component.html */ "PexN");
/* harmony import */ var _mat_select_search_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat-select-search.component.scss */ "or7i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








var MatSelectSearchComponent = /** @class */ (function () {
    function MatSelectSearchComponent(matSelect, changeDetectorRef) {
        this.matSelect = matSelect;
        this.changeDetectorRef = changeDetectorRef;
        /** Label of the search placeholder */
        this.placeholderLabel = 'Search';
        /** Label to be shown when no entries are found. Set to null if no message should be shown. */
        this.noEntriesFoundLabel = 'Keine Optionen gefunden';
        /** Whether the backdrop class has been set */
        this.overlayClassSet = false;
        /** Event that emits when the current value changes */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
    }
    MatSelectSearchComponent_1 = MatSelectSearchComponent;
    Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
        /** Current search value */
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    MatSelectSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set custom panel class
        var panelClass = 'mat-select-search-panel';
        if (this.matSelect.panelClass) {
            if (Array.isArray(this.matSelect.panelClass)) {
                this.matSelect.panelClass.push(panelClass);
            }
            else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
            }
            else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
            }
        }
        else {
            this.matSelect.panelClass = panelClass;
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(function (opened) {
            if (opened) {
                // focus the search field when opening
                _this._focus();
            }
            else {
                // clear it when closing
                _this._reset();
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this._options = _this.matSelect.options;
            _this._options.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                var keyManager = _this.matSelect._keyManager;
                if (keyManager && _this.matSelect.panelOpen) {
                    // avoid "expression has been changed" error
                    setTimeout(function () {
                        keyManager.setFirstItemActive();
                    });
                }
            });
        });
        // detect changes when the input changes
        this.change
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.changeDetectorRef.detectChanges();
        });
        this.initMultipleHandling();
    };
    MatSelectSearchComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    MatSelectSearchComponent.prototype.ngAfterViewInit = function () {
        this.setOverlayClass();
    };
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param {KeyboardEvent} event
     * @private
     */
    MatSelectSearchComponent.prototype._handleKeydown = function (event) {
        if (event.keyCode === 32) {
            // do not propagate spaces to MatSelect, as this would select the currently active option
            event.stopPropagation();
        }
    };
    MatSelectSearchComponent.prototype.writeValue = function (value) {
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.change.emit(value);
        }
    };
    MatSelectSearchComponent.prototype.onInputChange = function (value) {
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.onChange(value);
            this.change.emit(value);
        }
    };
    MatSelectSearchComponent.prototype.onBlur = function (value) {
        this.writeValue(value);
        this.onTouched();
    };
    MatSelectSearchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MatSelectSearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Focuses the search input field
     * @private
     */
    MatSelectSearchComponent.prototype._focus = function () {
        if (!this.searchSelectInput) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        var panel = this.matSelect.panel.nativeElement;
        var scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    };
    /**
     * Resets the current search value
     * @param {boolean} focus whether to focus after resetting
     * @private
     */
    MatSelectSearchComponent.prototype._reset = function (focus) {
        if (!this.searchSelectInput) {
            return;
        }
        this.searchSelectInput.nativeElement.value = '';
        this.onInputChange('');
        if (focus) {
            this._focus();
        }
    };
    /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     */
    MatSelectSearchComponent.prototype.setOverlayClass = function () {
        var _this = this;
        if (this.overlayClassSet) {
            return;
        }
        var overlayClass = 'cdk-overlay-pane-select-search';
        this.matSelect.overlayDir.attach
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            // note: this is hacky, but currently there is no better way to do this
            _this.searchSelectInput.nativeElement.parentElement.parentElement
                .parentElement.parentElement.parentElement.classList.add(overlayClass);
        });
        this.overlayClassSet = true;
    };
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    MatSelectSearchComponent.prototype.initMultipleHandling = function () {
        var _this = this;
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.matSelect.valueChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(function (values) {
            if (_this.matSelect.multiple) {
                var restoreSelectedValues_1 = false;
                if (_this._value && _this._value.length
                    && _this.previousSelectedValues && Array.isArray(_this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    var optionValues_1 = _this.matSelect.options.map(function (option) { return option.value; });
                    _this.previousSelectedValues.forEach(function (previousValue) {
                        if (values.indexOf(previousValue) === -1 && optionValues_1.indexOf(previousValue) === -1) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues_1 = true;
                        }
                    });
                }
                if (restoreSelectedValues_1) {
                    _this.matSelect._onChange(values);
                }
                _this.previousSelectedValues = values;
            }
        });
    };
    var MatSelectSearchComponent_1;
    MatSelectSearchComponent.ctorParameters = function () { return [
        { type: _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    MatSelectSearchComponent.propDecorators = {
        placeholderLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        noEntriesFoundLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        searchSelectInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['searchSelectInput', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: true },] }]
    };
    MatSelectSearchComponent = MatSelectSearchComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-mat-select-search',
            template: _raw_loader_mat_select_search_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () { return MatSelectSearchComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_mat_select_search_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], MatSelectSearchComponent);
    return MatSelectSearchComponent;
}());



/***/ }),

/***/ "8int":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/users/add-team/add-team.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <p class=\"clearfix\">\n    <!--  Identifier-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Team Identifier</mat-label>\n      <input\n        [(ngModel)]=\"teamIdentifier\"\n        matInput\n        required\n        placeholder=\"Team Identifier\">\n    </mat-form-field>\n  </p>\n  <!--         Swahili Name-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Team Name</mat-label>\n      <input\n        [(ngModel)]=\"teamName\"\n        matInput\n        required\n        placeholder=\"Team Name\">\n    </mat-form-field>\n  </p>\n  <p class=\"clearfix\">\n    <app-org-unit-filter\n      (onOrgUnitChange)=\"changeOrgUnit($event)\"\n      [current_orgunits]=\"current_orgunits\"\n      [orgunit_tree_config]=\"orgunit_tree_config\">\n    </app-org-unit-filter>\n  </p>\n\n  <div class=\"col-sm-12\">\n    <app-loader message=\"Saving Team Information Please Wait..\" *ngIf=\"loading\"></app-loader>\n    <app-save-area\n      *ngIf=\"!loading\"\n      @fadeIn\n      [saveDisabled]=\"!teamName || !teamIdentifier || !orgunit\"\n      (save)=\"save()\"\n      (cancel)=\"closeForm()\"\n      [confirmFirst]=\"true\"\n      [confirmText]=\"'Confirm Saving Information?'\"\n    ></app-save-area>\n  </div>\n</div>\n");

/***/ }),

/***/ "8pjq":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hiddenTree{\n  display: none;\n}\nli{\n  cursor: pointer;\n}\n.selected{\n  background-color: rgba(0,0,0,0.1);\n}\n.tree-view {\n  text-align: left;\n  background-color: #d7e3f7;\n  position: absolute;\n  z-index: 999;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n  width: 370px;\n  margin-right: 30px;\n  max-height: 360px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 45px;\n}\n.hiddenTree{\n  display: none;\n}\n.tree-area::-webkit-scrollbar {\n  width: 5px;\n}\n.tree-area::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n.tree-area::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n.tree-area{\n  max-height: 270px;\n  overflow: hidden;\n  width: 100%;\n}\n.tree-area:hover{\n  overflow: auto;\n}\n.tree-area{\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%;\n}\n.tree-area{\n  overflow: auto;\n}\n.tree-view::-webkit-scrollbar {\n  width: 5px;\n}\n.tree-view::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n.tree-view::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n.tree-view input{\n  border-radius: 0px;\n  border: 1px solid #ccc;\n  height: 26px;\n  font-size: 14px;\n  width: 100%;\n  padding-left: 7px;\n  box-sizing: border-box;\n  color: #888;\n  margin: 0 0 8px;\n}\n.show_items{\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #c6c6c6;\n  padding: 11px 8px;\n  font-size: 14px;\n  min-height: 45px!important;\n  border-radius: 0px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: rgba(45,105,165,0.1);\n  background-image: linear-gradient(rgba(45,105,165,0.1),rgba(45,105,165,0.2));\n  width: 370px;\n  height: 45px;\n}\nspan.selected-item {\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  padding: 3px 5px 3px 5px;\n  margin-right: 2px;\n  cursor: text;\n  font-size: 11px;\n\n}\n.selected-item-close {\n  width: 20px;\n  cursor: pointer;\n  font-weight: 700;\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  font-size: xx-small;\n}\n.removeitem{\n  cursor: pointer;\n}\n.removeitem:hover{\n  font-size: 1.1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb3JnLXVuaXQtZmlsdGVyL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFFbEIsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlEQUFpRDtBQUNuRDtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBR2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBRXRCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0Qyw0RUFBNEU7RUFDNUUsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTs7QUFFakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb3JnLXVuaXQtZmlsdGVyL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVuVHJlZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmxpe1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4udHJlZS12aWV3IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTNmNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xuICB3aWR0aDogMzcwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWF4LWhlaWdodDogMzYwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cblxuLmhpZGRlblRyZWV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50cmVlLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLnRyZWUtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udHJlZS1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi50cmVlLWFyZWF7XG4gIG1heC1oZWlnaHQ6IDI3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi50cmVlLWFyZWE6aG92ZXJ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udHJlZS1hcmVhe1xuICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmVlLWFyZWF7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udHJlZS12aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi50cmVlLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRyZWUtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4udHJlZS12aWV3IGlucHV0e1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luOiAwIDAgOHB4O1xufVxuXG4uc2hvd19pdGVtc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgcGFkZGluZzogMTFweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLWhlaWdodDogNDVweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY29sb3I6ICM1NTU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LDEwNSwxNjUsMC4xKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNDUsMTA1LDE2NSwwLjEpLHJnYmEoNDUsMTA1LDE2NSwwLjIpKTtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbnNwYW4uc2VsZWN0ZWQtaXRlbSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAzcHggNXB4IDNweCA1cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjdXJzb3I6IHRleHQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcblxufVxuXG4uc2VsZWN0ZWQtaXRlbS1jbG9zZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG59XG4ucmVtb3ZlaXRlbXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlaXRlbTpob3ZlcntcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/http-client.service */ "gkM4");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/location.service */ "yHma");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/org-unit.service */ "n3tq");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/settings.service */ "6nr9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modules/dashboard/dashboard.component */ "M95H");















var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver, router, http, activatedRoute, userService, titleService, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.titleService = titleService;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.locations = [];
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) { return result.matches; }));
        this.isOpen = true;
        this.location_loading = false;
        this.total_clients = 0;
        this.total_families = 0;
        this.total_initiations = 0;
        this.total_discontinuations = 0;
        this.total_services = 0;
        this.total_referrals = 0;
        this.total_citizen_reports = 0;
        this.navigation = [];
        this.username = '';
        this.location = [];
        this.loading = false;
        this.navigation = userService.getNavigation();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('htmr-web-token');
        var starting_location = localStorage.getItem('htmr-starting-location');
        this.username = localStorage.getItem('trcmis-user');
        if (!token || !location) {
            this.router.navigate(['', 'login']);
        }
        var dashboard = new _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"](this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
        dashboard.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
            _this.orgunitName = _this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
            _this.getTotalClients({ facilities: facilities });
            _this.getTotalClientFamilies({ facilities: facilities });
            _this.getTotalServices({ facilities: facilities });
            _this.getTotalInitiations({ facilities: facilities });
            _this.getTotalDiscontinuations({ facilities: facilities });
            _this.getTotalReferrals({ facilities: facilities });
            _this.getTotalCitizenReports({ facilities: facilities });
        });
        // this.getLocation(starting_location).then(locations => {
        //   const facilities = this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
        //   this.getTotalClients({facilities});
        // });
    };
    HomeComponent.prototype.getTotalClients = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_clients = data['total_clients'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalClientFamilies = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_families = data['total_clients_families'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalInitiations = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_initiations = data['total_family_planning_initiations'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalDiscontinuations = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_discontinuations = data['total_family_planning_discontinuations'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalServices = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_services = data['total_services'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalReferrals = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_referrals = data['total_referrals'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalCitizenReports = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_citizen_reports = data['total_citizen_reports'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.goToChangePass = function () {
        //  this.userService.removeLocalStorageNavigation();
        // this.userService.deleteToken();
        this.userService.loggedIn = false;
        this.locationService.locations = [];
        this.router.navigate(['', 'change-password']);
    };
    HomeComponent.prototype.goTo = function (path) {
        this.router.navigate(path);
    };
    HomeComponent.prototype.logout = function () {
        this.userService.removeLocalStorageNavigation();
        this.userService.deleteToken();
        this.userService.loggedIn = false;
        this.locationService.locations = [];
        this.router.navigate(['', 'login']);
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["NavigationStart"]) {
                _this.loading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["NavigationCancel"]) {
                _this.loading = false;
            }
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["mergeMap"])(function (route) { return route.data; })).subscribe(function (event) { return _this.titleService.setTitle(event.title); });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_11__["routeAnimations"]],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "AsCH":
/*!*******************************************************!*\
  !*** ./src/app/modules/reports/reports.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group-item {\n  transition: all 0.3s cubic-bezier(.25, .8, .25, 1) !important;\n  cursor: pointer;\n}\n\n.list-group-item:hover {\n  transform: scale(1.02) !important;\n  background-color: rgba(0, 0, 0, 0.1) !important;\n  font-weight: 600;\n  border-bottom: 2px solid #0277bd;\n}\n\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZEQUE2RDtFQUM3RCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLCtDQUErQztFQUMvQyxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAyNzdiZDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "AzsU":
/*!******************************************************!*\
  !*** ./src/app/modules/reports/reports.component.ts ***!
  \******************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reports.component.html */ "fr54");
/* harmony import */ var _reports_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component.css */ "AsCH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(router) {
        this.router = router;
        this.activeLinkIndex = -1;
        this.title = 'Client Enrollment Reports';
        this.navLinks = [
            {
                label: 'Total Clients Enrolled to Beach Management Units',
                link: ['', 'more_reports', 'total-clients-enrolled-to-beach-management-report'],
                index: 2
            },
            {
                label: 'Total Clients Enrolled to Bee Keeping',
                link: ['', 'more_reports', 'total-clients-enrolled-to-bee-keeping-report'],
                index: 3
            },
            {
                label: 'Total Clients Enrolled to Loan units',
                link: ['', 'more_reports', 'total-clients-enrolled-to-loan-units-report'],
                index: 4
            },
        ];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks
                .find(function (tab) { return tab.link[1] === '.' + _this.router.url; }));
        });
    };
    // report_loading: boolean = false;
    // loading: boolean = false;
    // orgunit: any = null;
    // orgunitnames: string = '';
    // reportTitle: string = '';
    // showReport: boolean = false;
    // start_date: any = '';
    // end_date: any = '';
    // done_loading: boolean = false;
    // loading_failed: boolean = false;
    // @ViewChild('reportArea') el: ElementRef;
    // @Input() orgunit_tree_config: any = {
    //   show_search : true,
    //   search_text : 'Search',
    //   level: null,
    //   loading: true,
    //   loading_message: 'Loading Organisation units...',
    //   multiple: true,
    //   multiple_key: 'control', // can be control or shift
    //   placeholder: 'Select Location'
    // };
    // reports: {
    //   id: string;
    //   name: string;
    //   notes: string;
    //   url: string;
    //   createdAt: string;
    //   updatedAt: string;
    //   active: boolean
    // }[] = [];
    // current_report = null;
    // html_data = null;
    // reportId = null;
    // jsonData: any;
    // routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
    // preparedReports = [
    //   '/opensrp/reports/total_registered_clients',
    //   '/opensrp/reports/total_referrals_issued',
    //   '/opensrp/reports/total_successful_referrals',
    //   '/opensrp/reports/total_issued_ltfs',
    //   '/opensrp/reports/ltfs_feedback',
    //   '/opensrp/reports/successful_malaria_referrals',
    //   '/opensrp/reports/total_failed_referrals'
    // ];
    // constructor(
    //   private httpClient: HttpClientService,
    //   private orgunitService: OrgUnitService
    //   ) {
    // }
    // ngOnInit() {
    // this.report_loading = true;
    // this.httpClient.getOpenSRP('available_reports')
    // .subscribe((data: any) => {
    //   this.reports = data;
    //   this.report_loading = false;
    // });
    // }
    ReportsComponent.prototype.ngOnDestroy = function () { };
    ReportsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reports',
            template: _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [_reports_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "B+bl":
/*!*********************************************************************!*\
  !*** ./src/app/modules/settings/indicators/indicators.component.ts ***!
  \*********************************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_indicators_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./indicators.component.html */ "RFbJ");
/* harmony import */ var _indicators_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indicators.component.scss */ "juDX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");







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
            indicatorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            indicatorNameSw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            isActive: [true]
        });
    };
    IndicatorsComponent.prototype.getItems = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('get-indicators').toPromise()];
                    case 1:
                        items = _a.sent();
                        this.items = items.map(function (item) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { id: item.indicatorId })); });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var payload, saved, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
    IndicatorsComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    IndicatorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-indicators',
            template: _raw_loader_indicators_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]],
            styles: [_indicators_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], IndicatorsComponent);
    return IndicatorsComponent;
}());



/***/ }),

/***/ "CD9V":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/locations/locations.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n     <app-add-location\n       [locations]=\"items\"\n       (saved)=\"loadLocations1()\"\n       (close)=\"closeForm()\"\n       [currentLocation]=\"currentLocation\"\n       *ngIf=\"view_type == 'addData'\"\n     ></app-add-location>\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "CLOK":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/registration-reason/registration-reason.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <div class=\"container-fluid\">\n      <form [formGroup]=\"submitForm\">\n        <!--         English Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> English Name</mat-label>\n            <input\n              formControlName=\"descEn\"\n              matInput\n              required\n              placeholder=\"English Name\">\n            <mat-error *ngIf=\"!submitForm.get('descEn').valid && submitForm.get('descEn').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Swahili Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Swahili Name</mat-label>\n            <input\n              formControlName=\"descSw\"\n              matInput\n              required\n              placeholder=\"Swahili Name\">\n            <mat-error *ngIf=\"!submitForm.get('descSw').valid && submitForm.get('descSw').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Is Active-->\n        <p class=\"clearfix\">\n          <mat-checkbox formControlName=\"isActive\">\n            Is Active\n          </mat-checkbox>\n        </p>\n\n        <!--         Is Active-->\n        <p class=\"clearfix\">\n          <mat-checkbox formControlName=\"applicableToMen\">\n            Applicable To Men\n          </mat-checkbox>\n        </p>\n\n        <!--         Is Active-->\n        <p class=\"clearfix\">\n          <mat-checkbox formControlName=\"applicableToWomen\">\n            Applicable To Women\n          </mat-checkbox>\n        </p>\n\n        <div class=\"col-sm-12\">\n          <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n          <app-save-area\n            *ngIf=\"!loading\"\n            @fadeIn\n            [saveDisabled]=\"submitForm.invalid || saving_data\"\n            (save)=\"save(submitForm.value)\"\n            (cancel)=\"closeForm()\"\n            [confirmFirst]=\"true\"\n            [confirmText]=\"'Confirm Saving Information?'\"\n          ></app-save-area>\n        </div>\n      </form>\n    </div>\n\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "CeFl":
/*!**********************************************************!*\
  !*** ./src/app/modules/locations/locations.component.ts ***!
  \**********************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_locations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./locations.component.html */ "CD9V");
/* harmony import */ var _locations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations.component.scss */ "+Wc9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/location.service */ "yHma");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http-client.service */ "gkM4");







var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(locationService, formBuilder, http) {
        this.locationService = locationService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.viewDetails = false;
        this.loading = false;
        this.saving_data = false;
        this.items = [];
        this.tableConfigurations = {
            tableColumns: [
                { name: 'name', label: 'Name' },
                { name: 'tags', label: 'Tags' },
                { name: 'parent', label: 'Parent Location' }
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
            empty_msg: 'No Locations'
        };
        this.view_type = '';
    }
    LocationsComponent.prototype.ngOnInit = function () {
        this.loadLocations();
    };
    LocationsComponent.prototype.loadLocations = function () {
        var _this = this;
        this.loading = true;
        this.locationService.loadTreeLocations(true).subscribe(function (locations) {
            _this.items = locations.map(function (location) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, location), { id: location.uuid, tags: location.tags.map(function (item) { return item.display; }).join(', '), parent: location.parentLocation ? location.parentLocation.display : '' })); });
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            _this.http.showError('Something went wrong while loading locations');
        });
    };
    LocationsComponent.prototype.loadLocations1 = function () {
        this.closeForm();
        this.loadLocations();
    };
    LocationsComponent.prototype.viewMore = function (event) { };
    LocationsComponent.prototype.onUpdate = function (event) {
        this.currentLocation = event;
        this.view_type = 'addData';
        this.viewDetails = true;
    };
    LocationsComponent.prototype.onDelete = function (item) {
        var _this = this;
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
        this.locationService.deleteLocation(item).subscribe(function (success) {
            _this.loadLocations();
            _this.tableConfigurations.deleting = {};
            _this.http.showSuccess('Location Deleted Successful');
        }, function (error) {
            _this.tableConfigurations.deleting = {};
            _this.http.showError('Failed to delete location Please try again!');
        });
    };
    LocationsComponent.prototype.closeForm = function () {
        this.viewDetails = false;
        this.view_type = '';
    };
    LocationsComponent.prototype.add = function () {
        this.viewDetails = true;
        this.currentLocation = null;
        this.itemId = null;
        this.view_type = 'addData';
    };
    LocationsComponent.ctorParameters = function () { return [
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] }
    ]; };
    LocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-locations',
            template: _raw_loader_locations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_locations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "ClsM":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TotalIssuedLostFollowupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalIssuedLostFollowupComponent", function() { return TotalIssuedLostFollowupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_total_issued_lost_followup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./total-issued-lost-followup.component.html */ "DcC/");
/* harmony import */ var _total_issued_lost_followup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-issued-lost-followup.component.scss */ "6Ns1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/excel-download.service */ "KQVd");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");






var TotalIssuedLostFollowupComponent = /** @class */ (function () {
    function TotalIssuedLostFollowupComponent(excelService) {
        this.excelService = excelService;
        this.jsonData = [];
        this.startDate = '';
        this.orgUnitName = '';
        this.rows = [];
        this.visibleRows = [];
        this.visibleColumns = [];
        this.searchRows = '';
        this.searchColumns = '';
        this.hiddenColumns = [];
        this.hiddenRows = [];
        this.columns = [
            'JUMLA',
            'WANAUME',
            'WANAWAKE',
        ];
        this.totals = {};
    }
    TotalIssuedLostFollowupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rows = this.jsonData.map(function (item) { return item.itemName; });
        this.jsonData.forEach(function (item) {
            _this.totals.total = _this.addToNUmber(_this.totals.total, item.total);
            _this.totals.male = _this.addToNUmber(_this.totals.male, item.male);
            _this.totals.female = _this.addToNUmber(_this.totals.female, item.female);
        });
        this.visibleColumns = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.columns);
        this.visibleRows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
    };
    TotalIssuedLostFollowupComponent.prototype.changeRows = function (event) {
        var _this = this;
        this.hiddenRows = this.rows.filter(function (item) { return !_this.visibleRows.includes(item); });
    };
    TotalIssuedLostFollowupComponent.prototype.changeColumn = function (event) {
        var _this = this;
        this.hiddenColumns = this.columns.filter(function (item) { return !_this.visibleColumns.includes(item); });
    };
    TotalIssuedLostFollowupComponent.prototype.print = function () {
        window.print();
    };
    TotalIssuedLostFollowupComponent.prototype.downloadExcel = function () {
        var startDate = new Date(this.startDate).toISOString().substr(0, 10);
        var endDate = new Date(this.endDate).toISOString().substr(0, 10);
        this.excelService.download1(this.report.name + " from " + startDate + " to " + endDate + " for " + this.orgUnitName, this.dataTable.nativeElement);
    };
    TotalIssuedLostFollowupComponent.prototype.addToNUmber = function (prev, next) {
        var sum = 0;
        if (prev) {
            if (next) {
                sum = parseInt(prev + '', 10) + parseInt(next + '', 10);
            }
            else {
                sum = parseInt(prev + '', 10);
            }
        }
        else if (next) {
            sum = next;
        }
        return sum;
    };
    TotalIssuedLostFollowupComponent.ctorParameters = function () { return [
        { type: _services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__["ExcelDownloadService"] }
    ]; };
    TotalIssuedLostFollowupComponent.propDecorators = {
        jsonData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgUnitName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        report: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        main_title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        dataTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dataTable', { static: true },] }]
    };
    TotalIssuedLostFollowupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-total-issued-lost-followup',
            template: _raw_loader_total_issued_lost_followup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeOut"], _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]],
            styles: [_total_issued_lost_followup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__["ExcelDownloadService"]])
    ], TotalIssuedLostFollowupComponent);
    return TotalIssuedLostFollowupComponent;
}());



/***/ }),

/***/ "DKZe":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/card-filter/card-filter.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!--      Start Date-->\n    <div class=\"col-sm-3\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Start Date</mat-label>\n        <input\n          [(ngModel)]=\"start_date\"\n          [matDatepicker]=\"dw\"\n          matInput\n          placeholder=\"From\"\n          [max]=\"end_date\"\n          required/>\n        <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n        <mat-datepicker #dw></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <!--      End Date-->\n    <div class=\"col-sm-3\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>End Date</mat-label>\n        <input\n          [(ngModel)]=\"end_date\"\n          [matDatepicker]=\"dw1\"\n          matInput\n          placeholder=\"To\"\n          [min]=\"start_date\"\n          required/>\n        <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n        <mat-datepicker #dw1></mat-datepicker>\n      </mat-form-field>\n    </div>\n    \n    <div class=\"col-sm-4 mt-1\">\n      <app-org-unit-filter\n        (onOrgUnitChange)=\"changeOrgUnit($event)\"\n        [orgunit_tree_config]=\"orgunit_tree_config\">\n      </app-org-unit-filter>\n    </div>\n    <div class=\"col-sm-2\">\n      <button\n        style=\"margin-top: 5px; height: 46px;\"\n        [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n        class=\"btn btn-block btn-outline-primary\"\n        (click)=\"getReport()\"\n      >Update Dashboard</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "DRfc":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-type/reffereal-type.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvcmVmZmVyZWFsLXR5cGUvcmVmZmVyZWFsLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "DSL8":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/total-successful/total-successful.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  total-successful works!\n</p>\n");

/***/ }),

/***/ "DYfB":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/add-team/add-team.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvYWRkLXRlYW0vYWRkLXRlYW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "DcC/":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h5>\n        {{ report?.name}} from {{startDate | date:'mediumDate'}} to {{ endDate  | date:'mediumDate'}} for {{ orgUnitName }}\n        <button (click)=\"downloadExcel()\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n      </h5>\n    </div>\n  </div>\n  <div class=\"row mt-3 no-print\">\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Rows</mat-label>\n        <mat-select\n          (selectionChange)=\"changeRows($event)\"\n          [(ngModel)]=\"visibleRows\"\n          multiple\n          placeholder=\"Select Indicators\">\n          <app-mat-select-search [(ngModel)]=\"searchRows\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of rows | search:'indicatorName':searchRows\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenRows.length > 0\">{{hiddenRows.length}} hidden rows</mat-hint>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Columns</mat-label>\n        <mat-select\n          (selectionChange)=\"changeColumn($event)\"\n          [(ngModel)]=\"visibleColumns\"\n          multiple\n          placeholder=\"Visible Columns\">\n          <app-mat-select-search [(ngModel)]=\"searchColumns\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of columns | search:'indicatorName':searchColumns\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenColumns.length > 0\">{{hiddenColumns.length}} hidden columns</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <table #dataTable class=\"table table-bordered reportTable mt-3\">\n        <thead>\n        <tr>\n          <th colspan=\"2\"></th>\n          <th class=\"text-center\" rowspan=\"2\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA')\">JUMLA</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('WANAUME') && visibleColumns.includes('WANAWAKE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAUME') || visibleColumns.includes('WANAWAKE')\">JINSIA</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th style=\"width: 10px\">SN</th>\n          <th>{{ main_title }}</th>\n          <td @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA')\"></td>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAUME')\">ME</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAWAKE')\">KE</th>\n        </tr>\n        <ng-container *ngFor=\"let row of jsonData;\">\n          <tr *ngIf=\"visibleRows.includes(row.itemName)\">\n            <td>{{row.sn}}</td>\n            <td>{{row.itemName}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA')\">{{row.total || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAUME')\">{{row.male || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAWAKE')\">{{row.female || '-'}}</td>\n          </tr>\n        </ng-container>\n        <tr *ngIf=\"hiddenRows.length == 0 && hiddenColumns.length == 0\">\n          <td colspan=\"2\"><b>JUMLA</b></td>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA')\">{{totals.total }}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAUME')\">{{totals.male }}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAWAKE')\">{{totals.female }}</th>\n        </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "E+N0":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/locations/add-location/add-location.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n</div>\n\n\n<form [formGroup]=\"locationForm\" (ngSubmit)=\"onSubmit()\">\n  <!-- Location Name-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Location Name</mat-label>\n      <input\n        formControlName=\"name\"\n        matInput\n        required\n        placeholder=\"Location Name\">\n      <mat-error *ngIf=\"name.invalid && name.touched\">\n        This field is required\n      </mat-error>\n    </mat-form-field>\n  </p>\n\n  <!-- Location Name-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Description</mat-label>\n      <textarea\n        formControlName=\"description\"\n        matInput\n        placeholder=\"Description\"\n      ></textarea>\n      <mat-error *ngIf=\"name.invalid && name.touched\">\n        This field is required\n      </mat-error>\n    </mat-form-field>\n  </p>\n\n  <!-- Parent-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Parent Location</mat-label>\n      <mat-select formControlName=\"parentLocation\" placeholder=\"Parent Location\">\n        <app-mat-select-search formControlName=\"search\"></app-mat-select-search>\n        <mat-option *ngFor=\"let item of locations | search:'display':locationForm.get('search').value\" [value]=\"item.uuid\">\n          {{ item.display }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </p>\n\n  <!-- HFR Code-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> HFR Code</mat-label>\n      <input\n        formControlName=\"hfrCode\"\n        matInput\n        placeholder=\"HFR Code\">\n    </mat-form-field>\n  </p>\n  <div class=\"form-group\">\n    <label>Tags</label>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <mat-checkbox  formControlName=\"tagOne\" [value]=\"tags.tagOne\">\n          CHW Locations\n        </mat-checkbox>\n      </div>\n      <div class=\"col-md-6\">\n        <mat-checkbox  formControlName=\"tagTwo\" [value]=\"tags.tagTwo\">\n          Transfer Location\n        </mat-checkbox>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"loading\"></app-loader>\n    <app-save-area\n      *ngIf=\"!loading\"\n      @fadeIn\n      [saveDisabled]=\"locationForm.invalid || loading\"\n      (save)=\"onSubmit()\"\n      (cancel)=\"closeForm()\"\n      [confirmFirst]=\"true\"\n      [confirmText]=\"'Confirm Saving Information?'\"\n    ></app-save-area>\n  </div>\n</form>\n");

/***/ }),

/***/ "EUrl":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/team-info/team-info.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdGVhbS1pbmZvL3RlYW0taW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Eb2j":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/filter-by-name.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FilterByNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByNamePipe", function() { return FilterByNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var FilterByNamePipe = /** @class */ (function () {
    function FilterByNamePipe() {
    }
    FilterByNamePipe.prototype.transform = function (value, name) {
        if (name !== undefined && value) {
            // filter users, users which match and return true will be kept, false will be filtered out
            if (value.length !== 0 && name !== null) {
                var splitData_1 = name;
                [',', '[', ']', '(', ')', ',', '.', '-', '_'].forEach(function (char) {
                    splitData_1 = splitData_1.split(char).join(' ');
                });
                return lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](value.filter(function (item) {
                    var found = true;
                    splitData_1.split(' ').forEach(function (str) {
                        if (item.name.toLowerCase().indexOf(str.toLowerCase()) === -1) {
                            found = false;
                        }
                    });
                    return found;
                }), [function (item) { return item.name; }]);
            }
        }
        return lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](value, [function (item) { return item.name; }]);
    };
    FilterByNamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterByName'
        })
    ], FilterByNamePipe);
    return FilterByNamePipe;
}());



/***/ }),

/***/ "Ekib":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/card-filter/card-filter.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NhcmQtZmlsdGVyL2NhcmQtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Emfe":
/*!*********************************************************!*\
  !*** ./src/app/shared/animations/animations.service.ts ***!
  \*********************************************************/
/*! exports provided: AnimationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return AnimationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var AnimationsService = /** @class */ (function () {
    function AnimationsService() {
    }
    AnimationsService_1 = AnimationsService;
    AnimationsService.isRouteAnimationsType = function (type) {
        return AnimationsService_1.routeAnimationType === type;
    };
    AnimationsService.prototype.updateRouteAnimationType = function (pageAnimations, elementsAnimations) {
        AnimationsService_1.routeAnimationType =
            pageAnimations && elementsAnimations
                ? 'ALL'
                : pageAnimations
                    ? 'PAGE'
                    : elementsAnimations
                        ? 'ELEMENTS'
                        : 'NONE';
    };
    var AnimationsService_1;
    AnimationsService.routeAnimationType = 'ALL';
    AnimationsService.ctorParameters = function () { return []; };
    AnimationsService = AnimationsService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AnimationsService);
    return AnimationsService;
}());



/***/ }),

/***/ "Eo/H":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  title=\"Dashboard\"\n  image=\"dashboard\"\n  [viewDetails]=\"false\"\n  [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"main-stats-container p-3\" style=\"margin-bottom: 25px\">\n      <app-summary-card\n        image=\"registration\"\n        [value]=\"total_anc_referrals || 0\"\n        [loading]=\"location_loading || label3DataLoading\"\n        [route]=\"['report']\"\n        [additional_information]=\"start_date + ' to ' + end_date + ' ' + orgunitName\"\n        top_title=\"ANC\"\n        low_title=\"Referrals\">\n      </app-summary-card>\n\n      <app-summary-card\n        image=\"icons8-send-job-list-80\"\n        [route]=\"['report']\"\n        [loading]=\"location_loading || label1DataLoading\"\n        [value]=\"total_services || 0\"\n        [additional_information]=\"start_date + ' to ' + end_date + ' ' + orgunitName\"\n        top_title=\"Family Planning\"\n        low_title=\"Referrals\">\n      </app-summary-card>\n\n      <app-summary-card\n        image=\"ltf\"\n        [route]=\"['report']\"\n        [value]=\"total_fp_initiations || 0\"\n        [loading]=\"location_loading || label2DataLoading\"\n        [additional_information]=\"start_date + ' to ' + end_date + ' ' + orgunitName\"\n        top_title=\"Family Planning\"\n        low_title=\"Initiations\">\n      </app-summary-card>\n\n      <app-summary-card\n        image=\"chw\"\n        [route]=\"['report']\"\n        [value]=\"total_fp_discontinuations || 0\"\n        [loading]=\"location_loading || label2DataLoading\"\n        [additional_information]=\"start_date + ' to ' + end_date + ' ' + orgunitName\"\n        top_title=\"Family Planning\"\n        low_title=\"Discontinuations\">\n      </app-summary-card>\n\n    </div>\n    <div class=\"grid-container\">\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"600px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n<!--              <div *ngIf=\"!location_loading\">-->\n<!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n<!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n<!--              <div-->\n<!--                #reportArea1-->\n<!--                [ngClass]=\"{'hidden': !card1Data || location_loading || card1DataLoading}\"-->\n<!--                [innerHtml]=\"card1Data | safeHtml\"-->\n<!--              ></div>-->\n              <div\n                [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                id=\"card1Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n<!--              <div *ngIf=\"!location_loading\">-->\n<!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard2($event)\"></app-card-filter>-->\n<!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card2DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                [ngClass]=\"{'hidden': location_loading || card2DataLoading}\"\n                id=\"card2Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n<!--              <div-->\n<!--                #reportArea2-->\n<!--                [ngClass]=\"{'hidden': !card2Data || location_loading || card2DataLoading}\"-->\n<!--                [innerHtml]=\"card2Data | safeHtml\"-->\n<!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n<!--              <div *ngIf=\"!location_loading\">-->\n<!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard3($event)\"></app-card-filter>-->\n<!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"10\"></app-placeholder>\n              <div\n                [ngClass]=\"{'hidden': location_loading || card3DataLoading}\"\n                id=\"card3Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n<!--              <div-->\n<!--                #reportArea3-->\n<!--                [ngClass]=\"{'hidden': !card3Data || location_loading || card3DataLoading}\"-->\n<!--                [innerHtml]=\"card3Data | safeHtml\"-->\n<!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n\n            <mat-card-content class=\"dashboard-card-content\">\n\n              <app-placeholder *ngIf=\"location_loading || card4DataLoading\" [numberOfLines]=\"10\"></app-placeholder>\n              <div\n                [ngClass]=\"{'hidden': location_loading || card4DataLoading}\"\n                id=\"card4Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n<!--              <div-->\n<!--                #reportArea4-->\n<!--                [ngClass]=\"{'hidden': !card4Data || location_loading || card4DataLoading}\"-->\n<!--                [innerHtml]=\"card4Data | safeHtml\"-->\n<!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n          <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n\n            <mat-card-content class=\"dashboard-card-content\">\n\n              <app-placeholder *ngIf=\"location_loading || card5DataLoading\" [numberOfLines]=\"10\"></app-placeholder>\n              <div\n                [ngClass]=\"{'hidden': location_loading || card5DataLoading}\"\n                id=\"card5Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n<!--              <div-->\n<!--                #reportArea4-->\n<!--                [ngClass]=\"{'hidden': !card4Data || location_loading || card4DataLoading}\"-->\n<!--                [innerHtml]=\"card4Data | safeHtml\"-->\n<!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </ng-container>\n</app-table-form>\n\n");

/***/ }),

/***/ "FNkG":
/*!**********************************************************!*\
  !*** ./src/app/modules/superset/superset.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VwZXJzZXQvc3VwZXJzZXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "FfVP":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RefferealFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefferealFeedbackComponent", function() { return RefferealFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reffereal_feedback_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reffereal-feedback.component.html */ "ZeMP");
/* harmony import */ var _reffereal_feedback_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reffereal-feedback.component.scss */ "b3UF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");







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
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            descSw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            referralType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    RefferealFeedbackComponent.prototype.getItems = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, items;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
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
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { referralTypeName: referral_type ? referral_type.referralTypeName : '' });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var payload, url, saved, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
    RefferealFeedbackComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    RefferealFeedbackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reffereal-feedback',
            template: _raw_loader_reffereal_feedback_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]],
            styles: [_reffereal_feedback_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RefferealFeedbackComponent);
    return RefferealFeedbackComponent;
}());



/***/ }),

/***/ "FjWv":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n        title=\"Referrals\"\n        image=\"fa fa-arrows-alt\"\n        [viewDetails]=\"false\"\n        [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"grid-container\">\n      <mat-grid-list cols=\"2\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard2($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card2DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card2DataLoading}\"\n                      id=\"card1Chart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n              <!--              <div-->\n              <!--                #reportArea2-->\n              <!--                [ngClass]=\"{'hidden': !card2Data || location_loading || card2DataLoading}\"-->\n              <!--                [innerHtml]=\"card2Data | safeHtml\"-->\n              <!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                      id=\"card2Chart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <mat-grid-list cols=\"1\" rowHeight=\"600px\">\n\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n              <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n                <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n                  <app-loader [message]=\"'Loading Referral Report...'\"></app-loader>\n                </div>\n              </div>\n\n\n              <div class=\"col\">\n                <h4>Referral Count by CHW from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>\n\n                <button (click)=\"exportexcel('summary-table', 'Referral Count By CHW.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n                  <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n                </button>\n                <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n                  <img src=\"assets/img/print.png\" style=\"height: 26px\">\n                </button>\n\n                <table class=\"table table-bordered\" id='summary-table'>\n                  <tr>\n                    <th>Chw Name</th>\n                    <th>Number of Referrals Issued</th>\n                  </tr>\n                  <tr *ngFor=\"let data of values\">\n                    <td>{{ data.chw_name }}</td>\n                    <td>{{ data.value }}</td>\n                  </tr>\n                </table>\n              </div>\n              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n\n            </mat-card-content>\n          </mat-card>\n\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <!--      <mat-grid-list cols=\"1\" rowHeight=\"470px\">-->\n      <!--        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">-->\n      <!--          <div class=\"col\">-->\n      <!--            <h4>Referral Count by CHW from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>-->\n\n      <!--            <button (click)=\"exportexcel('summary-table', 'Summary Issued Services By Teams.xlsx')\" mat-raised-button class=\"pull-right no-print\">-->\n      <!--              <img src=\"assets/img/csv.png\" style=\"height: 26px\">-->\n      <!--            </button>-->\n      <!--            <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">-->\n      <!--              <img src=\"assets/img/print.png\" style=\"height: 26px\">-->\n      <!--            </button>-->\n\n      <!--            <table class=\"table table-bordered\" id='summary-table'>-->\n      <!--              <tr>-->\n      <!--                <th>Chw Name</th>-->\n      <!--                <th>Number of Referrals Issued</th>-->\n      <!--              </tr>-->\n      <!--              <tr *ngFor=\"let data of values\">-->\n      <!--                <td>{{ data.chw_name }}</td>-->\n      <!--                <td>{{ data.value }}</td>-->\n      <!--              </tr>-->\n      <!--            </table>-->\n      <!--          </div>-->\n      <!--        </mat-grid-tile>-->\n      <!--      </mat-grid-list>-->\n\n\n\n    </div>\n  </ng-container>\n</app-table-form>\n\n");

/***/ }),

/***/ "GDbA":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-client.service */ "gkM4");




var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.loadingMessage = 'Loading Teams';
    }
    TeamService.prototype.listTeams = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.getOpenMRS("team/team?v=default&limit=1000")
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamResponse.results);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.createTeam = function (team) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.postOpenMRS("team/team", team)
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'Team created successfully';
                observer.next(teamResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'Team creation failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.updateTeam = function (team, uuid) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.postOpenMRS("team/team/" + uuid, team)
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.deleteTeam = function (team) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.deleteOpenMRS("team/team/" + team.uuid)
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'Deleted successfully';
                observer.next(teamResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'Deleting failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.listTeamMembers = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.getOpenMRS("team/teammember?v=default&limit=1000")
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamResponse.results);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.listTeamRoles = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.getOpenMRS("team/teamrole?v=default")
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamResponse.results);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.createTeamMember = function (teamMember) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.postOpenMRS("team/teammember", teamMember)
                .subscribe(function (teamMemberResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamMemberResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.updateTeamMember = function (teamMember, uuid) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.putOpenMRS("/team/teammember/" + uuid, teamMember)
                .subscribe(function (teamMemberResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamMemberResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.deleteTeamMember = function (teamMember) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.deleteOpenMRS("/team/teammember/" + teamMember.uuid)
                .subscribe(function (teamMemberResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamMemberResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.ctorParameters = function () { return [
        { type: _http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"] }
    ]; };
    TeamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "GUdM":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/settings/service/service-indicator/service-indicator.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServiceIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceIndicatorComponent", function() { return ServiceIndicatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_indicator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-indicator.component.html */ "4veK");
/* harmony import */ var _service_indicator_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-indicator.component.scss */ "S3aa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http-client.service */ "gkM4");





var ServiceIndicatorComponent = /** @class */ (function () {
    function ServiceIndicatorComponent(httpClient) {
        this.httpClient = httpClient;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
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
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { id: item.referralServiceIndicatorId });
                });
                this.excludeIds = this.serviceItem.indicators.map(function (i) { return i.referralIndicatorId; }).join('');
            }
        }
    };
    ServiceIndicatorComponent.prototype.getIndicators = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingIndicators = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('get-indicators').toPromise()];
                    case 1:
                        items = _a.sent();
                        this.indicators = items.map(function (item) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { id: item.indicatorId })); });
                        this.loadingIndicators = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceIndicatorComponent.prototype.onDelete = function (item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var saved, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var payload, saved, e_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
    ServiceIndicatorComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] }
    ]; };
    ServiceIndicatorComponent.propDecorators = {
        serviceItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    ServiceIndicatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-service-indicator',
            template: _raw_loader_service_indicator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_service_indicator_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"]])
    ], ServiceIndicatorComponent);
    return ServiceIndicatorComponent;
}());



/***/ }),

/***/ "GVSg":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/users/add-member/add-member.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"teamMemberForm\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!--<div *ngIf=\"showNewPersonForm\" class=\"bordered-form\">-->\n      <div class=\"bordered-form\">\n        <div class=\"form-group\">\n          <label>Given Name <span class=\"important-field\">*</span></label>\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"first_name\" formControlName=\"firstName\"\n                 placeholder=\"Given Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"familyName\">Family Name <span class=\"important-field\">*</span></label>\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"familyName\" formControlName=\"familyName\"\n                 placeholder=\"Family Name \">\n        </div>\n        <div class=\"form-group\">\n          <label>Gender</label>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\"\n                         value=\"M\">\n                  Male\n                </label>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\"\n                         value=\"F\">\n                  Female\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Age</label>\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"age\" formControlName=\"age\"\n                 placeholder=\"Age\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"bordered-form\">\n        <!-- User Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> User Name</mat-label>\n            <input\n              formControlName=\"username\"\n              matInput\n              required\n              placeholder=\"User Name\">\n            <mat-error *ngIf=\"teamMemberForm.get('username').invalid && teamMemberForm.get('username').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!-- Password-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Password</mat-label>\n            <input\n              formControlName=\"password\"\n              matInput\n              type=\"password\"\n              required>\n            <mat-error *ngIf=\"teamMemberForm.get('password').invalid && teamMemberForm.get('password').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!-- Re Password-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Confirm Password</mat-label>\n            <input\n              formControlName=\"confirmPassword\"\n              matInput\n              type=\"password\"\n              required>\n            <mat-error\n              *ngIf=\"teamMemberForm.get('confirmPassword').invalid && teamMemberForm.get('confirmPassword').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n      </div>\n    </div>\n  </div>\n  <br/>\n  <div class=\"row mb-3\">\n    <div class=\"col-md-12\">\n      <div class=\"bordered-form\">\n        <!--  User Roles-->\n        <p class=\"clearfix\" *ngIf=\"roles\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Role</mat-label>\n            <mat-select multiple formControlName=\"roles\" placeholder=\"Role\">\n              <mat-option *ngFor=\"let item of roles\" [value]=\"item.uuid\">\n                {{ item.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"!teamMemberForm.get('roles').valid && teamMemberForm.get('roles').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--  Team Roles-->\n        <p class=\"clearfix\" *ngIf=\"teamRoles\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Team Roles</mat-label>\n            <mat-select formControlName=\"teamRole\" placeholder=\"Team Roles\">\n              <mat-option *ngFor=\"let item of teamRoles\" [value]=\"item.uuid\">\n                {{ item.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"!teamMemberForm.get('teamRole').valid && teamMemberForm.get('teamRole').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <p class=\"clearfix\">\n          <app-chw-locations\n            (onOrgUnitChange)=\"changeOrgUnit($event)\"\n            [orgunit_tree_config]=\"orgunit_tree_config\"\n          ></app-chw-locations>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-12\">\n    <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"loading\"></app-loader>\n    <app-save-area\n      *ngIf=\"!loading\"\n      @fadeIn\n      [saveDisabled]=\"teamMemberForm.invalid || loading\"\n      (save)=\"save()\"\n      (cancel)=\"closeForm()\"\n      [confirmFirst]=\"true\"\n      [confirmText]=\"'Confirm Saving Information?'\"\n    ></app-save-area>\n  </div>\n</form>\n");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"main-nav mat-elevation-z6\">\n  <!--<mat-toolbar class=\"toolbar no-print\" style=\"background-color: #07587f\"> -->\n  <mat-toolbar class=\"toolbar no-print\" style=\"background-color: #3F997B\">\n    <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n\n    <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"isOpen = !isOpen\"\n            title=\"Toggle Menu\"\n            *ngIf=\"!(isHandset$ | async)\">\n      <mat-icon class=\"secondary-color\" aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    <span class=\"secondary-color\">\n      <img src=\"assets/img/logo.png\"\n           style=\"height: 75px; width: 75px; margin-left: 10px; margin-right: 21px; border-radius: 50%;\">\n    </span>\n    <span style=\"display: inline-block; margin-top: 14px; margin-left: 7px; font-size: 33px; color: #ffffff\">\n      Family Planning\n      <span *ngIf=\"isHandset$ | async\">(FP)</span>\n    </span>\n\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"example-fill-remaining-space\"></span>\n\n    <!--    user dropdown menu-->\n    <mat-menu #appMenu=\"matMenu\">\n      <!--\n        <a (click)=\"logout()\" mat-menu-item>\n          <i class=\"fa fa-user\"></i>\n          Profile\n        </a>\n        -->\n      <a (click)=\"goToChangePass()\" mat-menu-item>\n        <i class=\"fa fa-key\"></i>\n        Change Password\n      </a>\n      <mat-divider></mat-divider>\n      <a (click)=\"logout()\" mat-menu-item>\n        <i class=\"fa fa-sign-out\"></i>\n        Logout\n      </a>\n\n    </mat-menu>\n\n    <button mat-button [matMenuTriggerFor]=\"appMenu\">\n      <span class=\"secondary-color\">\n        <mat-icon fontSet=\"fa\" fontIcon=\"fa-user\" style=\"margin-top: 6px\"></mat-icon>\n        {{ username }}\n      </span>\n    </button>\n  </mat-toolbar>\n</nav>\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav no-print\" fixedInViewport=\"false\"\n               [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n               [opened]=\"!(isHandset$ | async) && isOpen\">\n    <mat-toolbar>FP</mat-toolbar>\n    <app-placeholder *ngIf=\"loading$ | async\" [numberOfLines]=\"30\"></app-placeholder>\n    <mat-nav-list>\n      <ng-container *ngFor=\"let linkItem of navigation\">\n        <!--        <div class=\"col-sm-12 item\" [routerLinkActive]=\"'active-item'\" [routerLink]=\"linkItem.links\" >-->\n        <!--          <div class=\"text-center\"><i class=\"{{linkItem.icon}}\"></i></div>-->\n        <!--          <h3>{{linkItem.name}}</h3>-->\n        <!--        </div>-->\n        <a mat-list-item [routerLink]=\"linkItem.links\" routerLinkActive=\"active-menu\">\n          <i style=\"color: #07587f\" class=\"{{linkItem.icon}}\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{linkItem.name}}</span>\n        </a>\n        <mat-divider></mat-divider>\n      </ng-container><br /><br />\n\n      <ng-container>\n        <p> &nbsp;&nbsp; Dashboard Summary</p>\n        <mat-divider></mat-divider>\n        <a mat-list-item routerLink=\"/client\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-user\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Clients</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_clients }}</span>\n        </a>\n\n        <a mat-list-item routerLink=\"/client\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-scissors\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Methods</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">0</span>\n        </a>\n\n        <a mat-list-item routerLink='/referral-summary'> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-arrows-alt\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Referrals</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_referrals }}</span>\n        </a>\n\n<!--        <a mat-list-item> &nbsp;&nbsp;-->\n<!--          <i style=\"color: #0DA98F\" class=\"fa fa-users\"></i> &nbsp;&nbsp;-->\n<!--          <span style=\"font-weight: 250\">Families</span> &nbsp;&nbsp;-->\n<!--          <span style=\"font-weight: 500\">{{ total_families }}</span>-->\n<!--        </a>-->\n\n        <a mat-list-item routerLink=\"/initiation\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-thumbs-up\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Initiations</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_initiations }}</span>\n        </a>\n        <a mat-list-item routerLink=\"/discontinuation\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-thumbs-down\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Discontinuations</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_discontinuations }}</span>\n        </a>\n\n<!--        <a mat-list-item> &nbsp;&nbsp;-->\n<!--          <i style=\"color: #0DA98F\" class=\"fa fa-scissors\"></i> &nbsp;&nbsp;-->\n<!--          <span style=\"font-weight: 250\">Services</span> &nbsp;&nbsp;-->\n<!--          <span style=\"font-weight: 500\">{{ total_services }}</span>-->\n<!--        </a>-->\n        <a mat-list-item routerLink=\"/providers_report/citizens-report\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-users\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Citizen Reports</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_citizen_reports }}</span>\n        </a>\n\n        <mat-divider></mat-divider>\n      </ng-container>\n\n\n    </mat-nav-list>\n\n  </mat-sidenav>\n  <mat-sidenav-content>\n\n    <!-- Add Content Here -->\n    <div class=\"content\" style=\"margin-top: 80px\"\n         [@routeAnimations]=\"o.isActivated ? o.activatedRoute : ''\">\n      <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "GdE2":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/main-data-table/main-data-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDataTableComponent", function() { return MainDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_data_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main-data-table.component.html */ "1pFH");
/* harmony import */ var _main_data_table_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-data-table.component.scss */ "nzNI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-csv/ngx-csv */ "QAmw");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _animations_router_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../animations/router-animation */ "fT3M");










var MainDataTableComponent = /** @class */ (function () {
    function MainDataTableComponent() {
        this.routeAnimationsElements = _animations_router_animation__WEBPACK_IMPORTED_MODULE_9__["ROUTE_ANIMATIONS_ELEMENTS"];
        /** Table Inputs */
        this.tableList = [];
        this.tableConfigurations = {
            tableColumns: [],
            tableCaption: '',
            allowPagination: true,
            tableNotifications: null,
            actionIcons: {
                edit: false,
                delete: false,
                download: false,
                more: false,
                print: false,
                cancel: false
            },
            doneLoading: false,
            deleting: {},
            active: {},
            showSearch: true,
            showBorder: true,
            customPrimaryMessage: '',
            empty_msg: 'No Data',
            hideExport: false
        };
        /** Table Events */
        this.rowCustomPrimary = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.rowUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.rowDownload = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.rowDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.rowPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.rowPrint = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.customAction = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loadingMessage = null;
        // list of all the added buttons that you want to deal with separately
        this.actionButtons = [];
        this.showDelete = {};
        this.showDownload = {};
        this.showButtonConfirm = {};
        this.searchFieldControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        // this.searchFieldControl.valueChanges.subscribe(v => console.log({ v }));
        if (this.tableConfigurations) {
            this.tableConfigurations.showSearch =
                this.tableConfigurations.showSearch !== null
                    ? this.tableConfigurations.showSearch
                    : true;
            this.tableConfigurations.allowPagination =
                this.tableConfigurations.allowPagination !== null
                    ? this.tableConfigurations.allowPagination
                    : true;
            this.tableConfigurations.showBorder =
                this.tableConfigurations.showBorder !== null
                    ? this.tableConfigurations.showBorder
                    : false;
            this.searchFields = this.tableConfigurations.tableColumns
                .map(function (column) { return column.name; })
                .join(',');
            this.tableConfigurations.actionIcons = this.tableConfigurations
                .actionIcons
                ? this.tableConfigurations.actionIcons
                : {
                    edit: false,
                    delete: false,
                    download: false,
                    more: false,
                    print: false,
                    cancel: false,
                    customPrimary: false,
                };
            this.tableConfigurations.active = this.tableConfigurations.active
                ? this.tableConfigurations.active
                : {};
        }
        else {
            this.tableConfigurations.showSearch = true;
            this.tableConfigurations.allowPagination = true;
            this.tableConfigurations.showBorder = false;
            this.tableConfigurations.actionIcons = {
                edit: false,
                delete: false,
                more: false,
                download: false,
                print: false,
                cancel: false,
                customPrimary: false,
            };
        }
    }
    MainDataTableComponent.prototype.ngOnInit = function () {
    };
    MainDataTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MainDataTableComponent.prototype.ngOnChanges = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.tableList);
        var _a = this.tableConfigurations.actionIcons, edit = _a.edit, print = _a.print, more = _a.more, cancel = _a.cancel, download = _a.download, customPrimary = _a.customPrimary;
        var colums = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([
            'position'
        ], this.tableConfigurations.tableColumns.map(function (column) { return column.name; }));
        if (edit ||
            print ||
            download ||
            more ||
            cancel ||
            customPrimary ||
            this.tableConfigurations.actionIcons.delete) {
            this.displayedColumns = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(colums, ['action']);
        }
        else {
            this.displayedColumns = colums;
        }
        if (this.tableConfigurations.allowPagination) {
            this.dataSource.paginator = this.paginator;
        }
        this.dataSource.sort = this.sort;
        if (this.tableConfigurations.allowPagination) {
            this.dataSource.paginator = this.paginator;
        }
    };
    MainDataTableComponent.prototype.viewItemDetails = function (itemId) {
        this.rowPreview.emit(itemId);
    };
    MainDataTableComponent.prototype.editItem = function (itemId) {
        this.rowUpdate.emit(itemId);
    };
    MainDataTableComponent.prototype.printItem = function (itemId) {
        this.rowPrint.emit(itemId);
    };
    MainDataTableComponent.prototype.deleteItem = function (itemId) {
        this.rowDelete.emit(itemId);
    };
    MainDataTableComponent.prototype.downloadItem = function (item) {
        this.rowDownload.emit(item);
    };
    MainDataTableComponent.prototype.trackByFn = function (index, item) {
        return item ? item.id : undefined;
    };
    MainDataTableComponent.prototype.submitCustomButtom = function (button, item, step) {
        var action = button.action;
        this.showButtonConfirm = {};
        if (step === 'first' && button.confirm_first) {
            this.showButtonConfirm[button.id + item.id] = true;
        }
        else {
            this.customAction.emit({ action: action, value: item });
        }
    };
    MainDataTableComponent.prototype.customPrimaryItem = function (item) {
        this.rowCustomPrimary.emit(item);
    };
    MainDataTableComponent.prototype.downloadToCsv = function () {
        var _this = this;
        var data = this.tableList.map(function (item) {
            var object = {};
            for (var _i = 0, _a = _this.tableConfigurations.tableColumns; _i < _a.length; _i++) {
                var col = _a[_i];
                object[col.name] = item[col.name] ? item[col.name] : '';
            }
            return object;
        });
        var csvFile = new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_5__["ngxCsv"](data, 'My Report', {
            headers: this.tableConfigurations.tableColumns.map(function (col) { return col.label; })
        });
    };
    MainDataTableComponent.ctorParameters = function () { return []; };
    MainDataTableComponent.propDecorators = {
        tableList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        tableConfigurations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        rowCustomPrimary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        rowUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        rowDownload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        rowDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        rowPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        rowPrint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        customAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        loadingMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        actionButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true },] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"],] }]
    };
    MainDataTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-main-data-table',
            template: _raw_loader_main_data_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_animations_router_animation__WEBPACK_IMPORTED_MODULE_9__["fadeSmooth"], _animations_router_animation__WEBPACK_IMPORTED_MODULE_9__["fadeIn"]],
            styles: [_main_data_table_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MainDataTableComponent);
    return MainDataTableComponent;
}());



/***/ }),

/***/ "Goz+":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/org-unit-filter.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tree-node-active > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n}\n\n.toggle-children {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.tree-node-expanded > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg) !important;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=);\n\n}\n\n.tree-node-collapsed > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n\n}\n\n.tree-node-active.tree-node-focused > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n  font-weight: bold;\n}\n\n.tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover {\n  box-shadow: none !important;\n}\n\n.tree-input {\n\n}\n\n.show_items{\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: left;\n  cursor: pointer;\n  border: 1px solid #c6c6c6;\n  padding: 14px 8px;\n  font-size: 14px;\n  min-height: 45px!important;\n  border-radius: 7px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: rgba(45,105,165,0.1);\n  background-image: linear-gradient(rgba(45,105,165,0.1),rgba(45,105,165,0.2));\n  width: 100%;\n  height: 45px;\n}\n\n.show_items span,\n.show_items small {\n  cursor: pointer;\n}\n\n.show_tops{\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  /*cursor: pointer;*/\n  border: 1px solid #c6c6c6;\n  /*padding: 8px 8px;*/\n  font-size: 14px;\n  min-height: 38px!important;\n  border-radius: 4px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: #fff;\n  background-image: linear-gradient(#fff,#f7f7f7);\n  width: 7%;\n  height: 34px;\n}\n\n.arrows:hover{\n  transform: scale(1.001, 1.001);\n  box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  background-color: rgba(0,0,0,0.05);\n}\n\n.tree-view {\n  text-align: left;\n  background-color: #d7e3f7;\n  position: absolute;\n  z-index: 9999;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n  min-width: 370px;\n  margin-right: 30px;\n  max-height: 360px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 45px;\n}\n\n.additional-options {\n  text-align: left;\n  background-color: #fff;\n  position: absolute;\n  z-index: 999;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n  min-width: 420px;\n  margin-right: 13px;\n  max-height: 400px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 38px;\n  right: 0px;\n}\n\n.scorecard_table{\n  margin-bottom: 3px;\n  font-size: 9px;\n  border: 1px solid #ddd;\n  border-spacing: 0;\n  border-collapse: collapse;\n  display: table;\n}\n\n.pointer label{\n  cursor: pointer;\n}\n\n.tree-area{\n  max-height: 250px;\n  min-height: 250px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area{\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area{\n  overflow: auto;\n}\n\n.tree-area1{\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area1:hover{\n  overflow: auto;\n}\n\n.hiddenTree{\n  display: none;\n}\n\n.tree-area::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-area::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n\n.tree-area::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n\n.tree-area1::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-area1::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n\n.tree-area1::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n\n.tree-view::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-view::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n\n.tree-view::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n\n.tree-view input{\n  border-radius: 2px;\n  border: 1px solid #ccc;\n  height: 26px;\n  font-size: 14px;\n  width: 100%;\n  padding-left: 7px;\n  box-sizing: border-box;\n  color: #888;\n  margin: 0 0 8px;\n}\n\nspan.selected-item {\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 1px;\n  padding: 3px 5px 3px 5px;\n  margin-right: 2px;\n  cursor: text;\n  font-size: 11px;\n\n}\n\n.selected-item-close {\n  width: 20px;\n  cursor: pointer;\n  font-weight: 700;\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  font-size: xx-small;\n}\n\n/* dhis2 Styling structure*/\n\n#tree_view .tree-node-active > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n}\n\n#tree_view .toggle-children {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#tree_view .tree-node-expanded > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg) !important;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=);\n\n}\n\n#tree_view .tree-node-collapsed > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n\n}\n\n#tree_view .tree-node-active.tree-node-focused > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n  font-weight: bold;\n}\n\n#tree_view .tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover {\n  box-shadow: none !important;\n}\n\n.close-area{\n  border-top: 1px solid blanchedalmond;\n  padding-top: 5px;\n}\n\n@media print {\n  .no-print *{\n    display: none;\n  }\n  .no-print{\n    display: none;\n  }\n\n  .orgUnitName{\n    min-width: 130px;\n    height: 35px;\n    max-height: 35px;\n    font-size: 9px;\n  }\n  .table-bordered td{\n    /*border-top: 0.1em;*/\n  }\n  .legendItem{\n    width: 200px;\n    float: left;\n  }\n\n}\n\n/*scorecard indicator details*/\n\n.indicator_details{\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  /*display: none;*/\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: opacity .15s linear;\n  background-color: rgba(0,0,0,.4);\n}\n\n.indicator_dialog{\n  width: 86%;\n  margin: 100px 7% auto 7%;\n}\n\n.indicator-content {\n  box-shadow: 0 5px 15px rgba(0,0,0,.5);\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0,0,0,.2);\n  border-radius: 6px;\n  outline: 0;\n  min-height: 200px;\n  padding: 10px;\n}\n\n.hide_no_group{\n  display: none;\n}\n\ntable * {\n  line-height: 80%;\n}\n\n.subtotal{\n  width:90px;max-width: 90px;\n}\n\n.indicator_title{\n  font-size: 10px;\n  width:90px;\n  max-width: 90px;\n  overflow-wrap: break-word;\n  cursor: pointer;\n  line-height: 140%\n}\n\n.list-group-item{\n  padding: 5px 15px\n}\n\n.removeorgunit{\n  cursor:pointer;\n  border: 1px solid rgba(95, 158, 160, 0.1);\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.someclass{\n  color: rgba(0,0,0,0.1);\n  background-color: rgba(0,0,0,0.1);\n}\n\n.node-content-wrapper-focused{\n  background-color: white!important;\n}\n\n.group-image{\n  height: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb3JnLXVuaXQtZmlsdGVyL29yZy11bml0LWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFRQUFxUTtFQUNyUSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMseVBBQXlQOztBQUUzUDs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixxUUFBcVE7O0FBRXZROztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFFdEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLDRFQUE0RTtFQUM1RSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFFdEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQyxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBRTlCLG9DQUFvQztFQUNwQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUVsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUVsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBR2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUdBLDJCQUEyQjs7QUFDM0I7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscVFBQXFRO0VBQ3JRLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5UEFBeVA7O0FBRTNQOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFRQUFxUTs7QUFFdlE7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVGOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxVQUFVO0VBR1YsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFFRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVSxDQUFDLGVBQWU7QUFDNUI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUNBO0VBQ0UsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL29yZy11bml0LWZpbHRlci9vcmctdW5pdC1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlLW5vZGUtYWN0aXZlID4gLm5vZGUtY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUtY2hpbGRyZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFKQ0FJQUFBQnY4NUZIQUFBQUIzUkpUVVVIMUFnRkZ5c2ZvTVFLQXdBQUFBbHdTRmx6QUFBTEVnQUFDeElCMHQxKy9BQUFBRUZKUkVGVWVOcGpiR2hvWU1BQldJQzR2cjRlVTZLeHNaRUptYy9JeUlqTVpXTEFEVmpRZEVBWS8vLy9SOGhCT0VBSkNJT3dtU2h5eUpxZ1pnS2RpMVVmQUUxWkVoMDJLTTdPQUFBQUFFbEZUa1N1UW1DQyk7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50cmVlLW5vZGUtZXhwYW5kZWQgPiAudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXIgPiAudG9nZ2xlLWNoaWxkcmVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNUcVhKR0tBQUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQURkSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkdKQVRmQUo4Y0NvUmdaR1pGRi8vLy9qNUNEY0Vnd2s1QjlRT2RpbFFNQXJ4ME1HclhKcUM4QUFBQUFTVVZPUks1Q1lJST0pO1xuXG59XG4udHJlZS1ub2RlLWNvbGxhcHNlZCA+IC50b2dnbGUtY2hpbGRyZW4td3JhcHBlciA+IC50b2dnbGUtY2hpbGRyZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNmb01RS0F3QUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQUVGSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkVKbWMvSXlJak1aV0xBRFZqUWRFQVkvLy8vUjhoQk9FQUpDSU93bVNoeXlKcWdaZ0tkaTFVZkFFMVpFaDAyS003T0FBQUFBRWxGVGtTdVFtQ0MpO1xuXG59XG4udHJlZS1ub2RlLWFjdGl2ZS50cmVlLW5vZGUtZm9jdXNlZCA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50cmVlLW5vZGUtYWN0aXZlID4gLm5vZGUtY29udGVudC13cmFwcGVyLCAudHJlZS1ub2RlLWZvY3VzZWQgPiAubm9kZS1jb250ZW50LXdyYXBwZXIsIC5ub2RlLWNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRyZWUtaW5wdXQge1xuXG59XG5cbi5zaG93X2l0ZW1ze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgcGFkZGluZzogMTRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLWhlaWdodDogNDVweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY29sb3I6ICM1NTU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LDEwNSwxNjUsMC4xKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNDUsMTA1LDE2NSwwLjEpLHJnYmEoNDUsMTA1LDE2NSwwLjIpKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnNob3dfaXRlbXMgc3Bhbixcbi5zaG93X2l0ZW1zIHNtYWxsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hvd190b3Bze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypjdXJzb3I6IHBvaW50ZXI7Ki9cbiAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgLypwYWRkaW5nOiA4cHggOHB4OyovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLWhlaWdodDogMzhweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM1NTU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwjZjdmN2Y3KTtcbiAgd2lkdGg6IDclO1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5hcnJvd3M6aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDEsIDEuMDAxKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcbn1cblxuLnRyZWUtdmlldyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2UzZjc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjE3NSk7XG4gIG1pbi13aWR0aDogMzcwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWF4LWhlaWdodDogMzYwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cblxuLmFkZGl0aW9uYWwtb3B0aW9ucyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbiAgbWluLXdpZHRoOiA0MjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW4tdG9wOiAzOHB4O1xuICByaWdodDogMHB4O1xufVxuXG4uc2NvcmVjYXJkX3RhYmxle1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5wb2ludGVyIGxhYmVse1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmVlLWFyZWF7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udHJlZS1hcmVhe1xuICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udHJlZS1hcmVhe1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRyZWUtYXJlYTF7XG4gIG1heC1oZWlnaHQ6IDIxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi50cmVlLWFyZWExOmhvdmVye1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5oaWRkZW5UcmVle1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJlZS1hcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi50cmVlLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRyZWUtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4udHJlZS1hcmVhMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4udHJlZS1hcmVhMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udHJlZS1hcmVhMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4udHJlZS12aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi50cmVlLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRyZWUtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4udHJlZS12aWV3IGlucHV0e1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luOiAwIDAgOHB4O1xufVxuc3Bhbi5zZWxlY3RlZC1pdGVtIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIHBhZGRpbmc6IDNweCA1cHggM3B4IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGN1cnNvcjogdGV4dDtcbiAgZm9udC1zaXplOiAxMXB4O1xuXG59XG5cbi5zZWxlY3RlZC1pdGVtLWNsb3NlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcbn1cblxuXG4vKiBkaGlzMiBTdHlsaW5nIHN0cnVjdHVyZSovXG4jdHJlZV92aWV3IC50cmVlLW5vZGUtYWN0aXZlID4gLm5vZGUtY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbiN0cmVlX3ZpZXcgLnRvZ2dsZS1jaGlsZHJlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQUlBQUFCdjg1RkhBQUFBQjNSSlRVVUgxQWdGRnlzZm9NUUtBd0FBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFFRkpSRUZVZU5wamJHaG9ZTUFCV0lDNHZyNGVVNkt4c1pFSm1jL0l5SWpNWldMQURWalFkRUFZLy8vL1I4aEJPRUFKQ0lPd21TaHl5SnFnWmdLZGkxVWZBRTFaRWgwMktNN09BQUFBQUVsRlRrU3VRbUNDKTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI3RyZWVfdmlldyAudHJlZS1ub2RlLWV4cGFuZGVkID4gLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyID4gLnRvZ2dsZS1jaGlsZHJlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQUlBQUFCdjg1RkhBQUFBQjNSSlRVVUgxQWdGRnlzVHFYSkdLQUFBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFEZEpSRUZVZU5wamJHaG9ZTUFCV0lDNHZyNGVVNkt4c1pHSkFUZkFKOGNDb1JnWkdaRkYvLy8vajVDRGNFZ3drNUI5UU9kaWxRTUFyeDBNR3JYSnFDOEFBQUFBU1VWT1JLNUNZSUk9KTtcblxufVxuI3RyZWVfdmlldyAudHJlZS1ub2RlLWNvbGxhcHNlZCA+IC50b2dnbGUtY2hpbGRyZW4td3JhcHBlciA+IC50b2dnbGUtY2hpbGRyZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNmb01RS0F3QUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQUVGSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkVKbWMvSXlJak1aV0xBRFZqUWRFQVkvLy8vUjhoQk9FQUpDSU93bVNoeXlKcWdaZ0tkaTFVZkFFMVpFaDAyS003T0FBQUFBRWxGVGtTdVFtQ0MpO1xuXG59XG4jdHJlZV92aWV3IC50cmVlLW5vZGUtYWN0aXZlLnRyZWUtbm9kZS1mb2N1c2VkID4gLm5vZGUtY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3RyZWVfdmlldyAudHJlZS1ub2RlLWFjdGl2ZSA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciwgLnRyZWUtbm9kZS1mb2N1c2VkID4gLm5vZGUtY29udGVudC13cmFwcGVyLCAubm9kZS1jb250ZW50LXdyYXBwZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1hcmVhe1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cblxuQG1lZGlhIHByaW50IHtcbiAgLm5vLXByaW50ICp7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubm8tcHJpbnR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5vcmdVbml0TmFtZXtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG4gIC50YWJsZS1ib3JkZXJlZCB0ZHtcbiAgICAvKmJvcmRlci10b3A6IDAuMWVtOyovXG4gIH1cbiAgLmxlZ2VuZEl0ZW17XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbn1cblxuLypzY29yZWNhcmQgaW5kaWNhdG9yIGRldGFpbHMqL1xuLmluZGljYXRvcl9kZXRhaWxze1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA1MDtcbiAgLypkaXNwbGF5OiBub25lOyovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcbn1cblxuLmluZGljYXRvcl9kaWFsb2d7XG4gIHdpZHRoOiA4NiU7XG4gIG1hcmdpbjogMTAwcHggNyUgYXV0byA3JTtcbn1cbi5pbmRpY2F0b3ItY29udGVudCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLC41KTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLC41KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG91dGxpbmU6IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGlkZV9ub19ncm91cHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUgKiB7XG4gIGxpbmUtaGVpZ2h0OiA4MCU7XG59XG5cbi5zdWJ0b3RhbHtcbiAgd2lkdGg6OTBweDttYXgtd2lkdGg6IDkwcHg7XG59XG4uaW5kaWNhdG9yX3RpdGxle1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOjkwcHg7XG4gIG1heC13aWR0aDogOTBweDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMTQwJVxufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuICBwYWRkaW5nOiA1cHggMTVweFxufVxuLnJlbW92ZW9yZ3VuaXR7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk1LCAxNTgsIDE2MCwgMC4xKTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cbi5zb21lY2xhc3N7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbn1cbi5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2Vke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG59XG5cbi5ncm91cC1pbWFnZXtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "HEZd":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  issued-referrals works!\n</p>\n");

/***/ }),

/***/ "He27":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer bgimage\">\n  <div class=\"outer bgcolor\">\n\n  </div>\n</div>\n<div class=\"logos\">\n <img src=\"assets/partners/rsz_tanzania_logo.jpg\"> \n <img src=\"assets/partners/rsz_usaid_logo.png\"> \n</div>\n\n<div class=\"title\">\n  <table>\n    <tr>\n      <td style=\"vertical-align: top\">\n    <!--  <img src=\"assets/img/logo.png\" style=\"height: 70px\"> -->\n        &nbsp;&nbsp;&nbsp;\n      </td>\n      <td style=\"color: white\">\n        <h1 style=\"font-weight: bolder;\">Family Planning</h1>\n        <h5>Provision Of Quality Reproductive Health</h5>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<div class=\"login\">\n  <div class=\"logintop\">\n    <img src=\"assets/img/lock.png\" style=\"height: 50px; padding-top: 10px;margin-left: 20px;\">\n  </div>\n  <div class=\"loginbottom\" style=\"padding: 20px;\">\n    <h2 style=\"font-weight: bold;margin-bottom: 0px; color: #2D69A5\">Change Password</h2>\n\n    <div class=\"loginform\">\n      <form [formGroup]=\"ChangePasswordForm\" (ngSubmit)=\"changePassword(ChangePasswordForm.value)\" validate>\n\n         <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"oldpassword\" matInput placeholder=\"Old Password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error *ngIf=\"!ChangePasswordForm.get('oldpassword').valid && ChangePasswordForm.get('oldpassword').touched\">Please Enter New Password\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"newpassword\" matInput placeholder=\"New Password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error *ngIf=\"!ChangePasswordForm.get('newpassword').valid && ChangePasswordForm.get('newpassword').touched\">Please Enter New Password\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"confirmpassword\" matInput placeholder=\"Confirm Password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error *ngIf=\"!ChangePasswordForm.get('confirmpassword').valid && ChangePasswordForm.get('confirmpassword').touched\">Please Confirm New Password\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n\n       <div class=\"col-md-12 mb-5\">\n          <button style=\"border-radius: 5px\" mat-raised-button color=\"primary\" type=\"submit\" class=\"cursor btn-block\" >Change Password</button>\n          <div *ngIf=\"!loginNotification.isError&&loginNotification.attempted\"  style=\"padding:.35rem 0.25rem!important;color: forestgreen!important;font-weight: bolder;font-size: 14px\" class=\"\" role=\"alert\">\n            {{loginNotification.message}}\n            <button type=\"button\" class=\"close\" style=\"padding-top: 0px!important;margin-top: 0px!important;\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div>\n            <img *ngIf=\"loginNotification.loading\" src=\"assets/img/loading.gif\">\n          </div>\n          <div class=\"\" style=\"padding:.35rem 0.25rem!important;color: orangered!important;font-weight: bolder;font-size: 14px\" *ngIf=\"loginNotification.isError&&loginNotification.attempted\" role=\"alert\">\n            {{loginNotification.message}}\n            <button type=\"button\" class=\"close\" (click)=\"closeNotification()\"  style=\"padding-top: 0px!important;margin-top: 0px!important;\"  data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n        </div> \n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "I7x6":
/*!********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "qNiJ");
/* harmony import */ var _settings_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.scss */ "JhP8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        this.activeLinkIndex = -1;
        this.title = 'System Settings';
        this.navLinks = [
            {
                label: 'Services',
                link: ['', 'settings', 'services'],
                index: 0
            }, {
                label: 'Indicators',
                link: ['', 'settings', 'indicators'],
                index: 1
            }, {
                label: 'Referral Type',
                link: ['', 'settings', 'reffereal-type'],
                index: 2
            }, {
                label: 'Referral Feedback',
                link: ['', 'settings', 'reffereal-feedback'],
                index: 2
            }, {
                label: 'Registration Reason',
                link: ['', 'settings', 'registration-reason'],
                index: 2
            },
        ];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.ctorParameters = function () { return []; };
    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-settings',
            template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_settings_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "IrhX":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n\n      <div class=\"col-4 pt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n   \n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getData()\"\n        >View Report</button>\n      </div>\n    </div>\n  <!--  <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a list of providers...'\"></app-loader>\n      </div>\n    </div>\n    -->\n\n\n    <div class=\"row\">\n      \n      <!--<div class=\"col-5\">\n        <app-multiselect\n          *ngIf=\"providers.length != 0\"\n          [items]=\"providers\"\n          [placeholder]=\"'Select data items to see in the report'\"\n          (onSelected)=\"setSelectedData($event)\"\n        ></app-multiselect>\n      </div>\n      -->\n      <div class=\"col-7\">\n       <!-- <button class=\"btn btn-outline-secondary\" (click)=\"getData()\">Get Report</button> &nbsp;-->\n        <button *ngIf=\"done_loading && !show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = true\">Get Detailed</button>\n        <button *ngIf=\"done_loading && show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = false\">Get Summary</button>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting Citizen Card Report'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\" *ngIf=\"!show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Citizen Card Report for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n\n        <button (click)=\"exportexcel('summary-citizen-card', 'Summarized Citizen Card Report.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n\n        <table class=\"table table-bordered\" id=\"summary-citizen-card\">\n      \n          <h1><u>Survey Information</u></h1>\n        <tr><h4>Willingness To Participate in the Survey</h4></tr>\n          <tr *ngFor=\"let data of willing_to_participate_in_survey\">\n            <td>{{ data.values_1 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n          <td bgcolor=\"#FFFFFF\" style=\"line-height:10px;\" colspan=3>&nbsp;</td>\n\n          <tr><h1><u>Demographics</u></h1></tr>\n\n          <tr><h4>Residence</h4></tr>\n          <tr *ngFor=\"let data of residence\">\n            <td>{{ data.values_3 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n           <tr><h4>Education</h4></tr>\n          <tr *ngFor=\"let data of education\">\n            <td>{{ data.values_4 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n            <tr><h4>Occupation</h4></tr>\n          <tr *ngFor=\"let data of occupation\">\n            <td>{{ data.values_5 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n              <tr><h4>Marital Status</h4></tr>\n          <tr *ngFor=\"let data of marital_status\">\n            <td>{{ data.values_6 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                <tr><h4>Religion Summary</h4></tr>\n          <tr *ngFor=\"let data of religion\">\n            <td>{{ data.values_7 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n       <td bgcolor=\"#FFFFFF\" style=\"line-height:10px;\" colspan=3>&nbsp;</td>\n\n         <tr> <h1><u>Visit Information</u></h1> </tr>\n                <tr><h4>Reasons for people not going to Health FAcilities</h4></tr>\n          <tr *ngFor=\"let data of reasons_for_people_not_going_to_health_facilities\">\n            <td>{{ data.values_8 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                    <tr><h4>Means of Transport to the Facility</h4></tr>\n          <tr *ngFor=\"let data of means_of_transport_to_facility\">\n            <td>{{ data.values_9 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n            <tr><h4>Time to reach closest facility</h4></tr>\n          <tr *ngFor=\"let data of time_to_reach_closest_facility\">\n            <td>{{ data.values_10 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n    \n               <tr><h4>Is this the nearest facility from home?</h4></tr>\n          <tr *ngFor=\"let data of is_this_the_nearest_facility_from_home\">\n            <td>{{ data.values_11 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                   <tr><h4>Was the facility open when you arrived</h4></tr>\n          <tr *ngFor=\"let data of was_the_facility_open_when_you_arrived\">\n            <td>{{ data.values_12 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                   <tr><h4>Did you get Family Planning Information at the Reception?</h4></tr>\n          <tr *ngFor=\"let data of did_you_get_family_planning_information_at_the_reception\">\n            <td>{{ data.values_13 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                   <tr><h4>How long did it take to be attended by the Service Provider?</h4></tr>\n          <tr *ngFor=\"let data of how_long_it_took_to_be_attended_by_service_provider\">\n            <td>{{ data.values_14 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                   <tr><h4>Did the Service Provider make you feel welcome?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_provider_make_you_feel_welcome\">\n            <td>{{ data.values_15 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did the Service Provider assure confidentiality?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_provider_assure_confidentiality\">\n            <td>{{ data.values_16 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did you meet the Service Provider in a private room?</h4></tr>\n          <tr *ngFor=\"let data of did_you_meet_the_service_providers_in_a_private_room\">\n            <td>{{ data.values_17 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did the Service Providers provide clear information about varous fp services and methods?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_providers_provide_clear_information_about_various_fp_services_and_methods\">\n            <td>{{ data.values_18 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did the Service Providers use visual aids to demo fp methods?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_providers_use_visual_aids_to_demo_fp_methods\">\n            <td>{{ data.values_19 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did the Service Providers ask if you had any concerns about previous used methods?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_providers_ask_if_you_had_any_concerns_about_previously_used_methods\">\n            <td>{{ data.values_20 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Were you given info on Dual Protection?</h4></tr>\n          <tr *ngFor=\"let data of were_you_given_info_on_dual_protection\">\n            <td>{{ data.values_21 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Methods not wanted.</h4></tr>\n          <tr *ngFor=\"let data of methods_not_wanted\">\n            <td>{{ data.values_22 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n        </table>\n      </div>\n\n\n      <div class=\"col\" *ngIf=\"show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Detailed Citizen Card Report for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n\n        <button (click)=\"exportexcel('detailled-summary-card-report', 'Detailled Citizen Card Report.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n\n        <table class=\"table table-bordered\" id=\"detailled-summary-card-report\">\n          <tr>\n            <th>Willingness to Participate</th>\n            <th>Residencee</th>\n            <th>Education</th>\n            <th>Occupation</th>\n            <th>Marital Status</th>\n            <th>Religion</th>\n            <th>Means of Transport to Facility</th>\n            <th>Time to reach closest Facility</th>\n          </tr>\n          <tr *ngFor=\"let data of detailed_values\">\n            <td>{{ data.willing_to_participate_in_survey }}</td>\n            <td>{{ data.residence }}</td>\n            <td>{{ data.education }}</td>\n            <td>{{ data.occupation }}</td>\n            <td>{{ data.marital_status }}</td>\n            <td>{{ data.religion }}</td>\n            <td>{{ data.means_of_transport_to_facility }}</td>\n            <td>{{ data.time_to_reach_closest_facility }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "J/nd":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/topbanner/topbanner.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvcGJhbm5lci90b3BiYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Jczc":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  total-family-planning-methods-issued works!\n</p>\n");

/***/ }),

/***/ "JhP8":
/*!**********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "KQVd":
/*!****************************************************!*\
  !*** ./src/app/services/excel-download.service.ts ***!
  \****************************************************/
/*! exports provided: ExcelDownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelDownloadService", function() { return ExcelDownloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var ExcelDownloadService = /** @class */ (function () {
    function ExcelDownloadService() {
    }
    ExcelDownloadService.prototype.download = function (name, nativeElement) {
        var uri = 'data:application/vnd.ms-excel;base64,';
        var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" ';
        template += 'xmlns="http://www.w3.org/TR/REC-html40"><head>';
        template +=
            '<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->';
        template +=
            '</head><body><table border="1">{table}</table><br /><table border="1">{table}</table></body></html>';
        var base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)));
        };
        var format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            });
        };
        var ctx = { worksheet: 'Sheet 1' };
        var str = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>';
        var el = nativeElement;
        jquery__WEBPACK_IMPORTED_MODULE_2__(el)
            .find('td.hidden')
            .each(function (index2) {
            //
            this.remove();
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(el)
            .find('td')
            .each(function (index2) {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(el)
                .html()
                .indexOf('&amp;') > -1) {
                jquery__WEBPACK_IMPORTED_MODULE_2__(el).html(jquery__WEBPACK_IMPORTED_MODULE_2__(el)
                    .html()
                    .replace(/&amp;/g, ''));
            }
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(el)
                .text()
                .indexOf('&') > -1 ||
                jquery__WEBPACK_IMPORTED_MODULE_2__(el)
                    .text()
                    .indexOf('\'') > -1 ||
                jquery__WEBPACK_IMPORTED_MODULE_2__(el)
                    .text()
                    .indexOf('"') > -1) {
                jquery__WEBPACK_IMPORTED_MODULE_2__(el).text(jquery__WEBPACK_IMPORTED_MODULE_2__(el)
                    .text()
                    .replace(/&/g, '&amp;')
                    .replace(/"/g, '&quot;')); // .replace(/'/g, '&apos;'));
            }
        });
        ctx['table1'] = el.innerHTML.split('& ').join('&amp; ');
        str += '<table border="1">{table1}</table><br />';
        str += '</body></html>';
        setTimeout(function () {
            var link = document.createElement('a');
            link.download = name + '.xls';
            link.href = uri + base64(format(str, ctx));
            link.click();
        }, 100);
    };
    ExcelDownloadService.prototype.download1 = function (name, nativeElement) {
        var uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table border="1">{table}</table><br /><table border="1">{table}</table></body></html>', base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)));
        }, format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            });
        };
        //
        var ctx = { worksheet: 'Sheet 1' };
        var str = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>';
        var el = nativeElement;
        jquery__WEBPACK_IMPORTED_MODULE_2__(el)
            .find('td.hidden')
            .each(function (index2) {
            //
            this.remove();
        });
        ctx['table1'] = el.innerHTML.split('& ').join('&amp; ');
        str += '<table border="1">{table1}</table><br />';
        str += '</body></html>';
        setTimeout(function () {
            var link = document.createElement('a');
            link.download = name + '.xls';
            link.href = uri + base64(format(str, ctx));
            link.click();
        }, 100);
    };
    ExcelDownloadService.ctorParameters = function () { return []; };
    ExcelDownloadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ExcelDownloadService);
    return ExcelDownloadService;
}());



/***/ }),

/***/ "KSFr":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/safe-html.pipe.ts ***!
  \************************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "KVCe":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralsComponent", function() { return ReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_referrals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./referrals.component.html */ "FjWv");
/* harmony import */ var _referrals_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./referrals.component.scss */ "29wZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/location.service */ "yHma");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/org-unit.service */ "n3tq");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/settings.service */ "6nr9");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);














highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default()(highcharts__WEBPACK_IMPORTED_MODULE_10__);
var ReferralsComponent = /** @class */ (function () {
    function ReferralsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.location_loading = false;
        this.locations = [];
        this.values = [];
        this.card1Data = null;
        this.card2Data = null;
        this.card3Data = null;
        this.card4Data = null;
        this.data_loading = false;
        this.card1DataLoading = false;
        this.card2DataLoading = false;
        this.card3DataLoading = false;
        this.card4DataLoading = false;
        this.card5DataLoading = false;
        this.label1DataLoading = false;
        this.label2DataLoading = false;
        this.label3DataLoading = false;
        this.label4DataLoading = false;
    }
    ReferralsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date(new Date().setDate(new Date().getDate() - 90));
        this.endDate = new Date(new Date().setDate(new Date().getDate() + 2));
        var start_date = new Date(this.startDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.endDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        this.start_date = start_date;
        this.end_date = end_date;
        var starting_location = localStorage.getItem('htmr-starting-location');
        this.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
            _this.orgunitName = _this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
            _this.updateCard1({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard2({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard3({ from_date: start_date, to_date: end_date, facilities: facilities });
        });
    };
    ReferralsComponent.prototype.updateCards = function (filter) {
        this.orgunitName = filter.ouName;
        this.updateCard1Chart(filter);
        this.updateCard2Chart(filter);
        this.updateCard3Chart(filter);
    };
    ReferralsComponent.prototype.updateCard1 = function (filter) {
        this.card1DataLoading = true;
        this.updateCard1Chart(filter);
        // const reportUrl = 'reports/dashboard_total_registrations/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card2Data = data;
        //     this.card2DataLoading = false;
        //   }, error1 => this.card2DataLoading = false);
    };
    ReferralsComponent.prototype.updateCard1Chart = function (filter) {
        var _this = this;
        this.card1DataLoading = true;
        var reportUrl = 'referral_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = data['referral_status'].map(function (item) { return ({
                    name: item.businessstatus,
                    y: item.value
                }); });
                var chartConfig = _this.settingsService.drawPieChart(series, 'Referral Status' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName), 'Status');
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card1Chart', chartConfig);
            }
            _this.card1DataLoading = false;
        }, function (error1) { return _this.card1DataLoading = false; });
    };
    ReferralsComponent.prototype.updateCard2 = function (filter) {
        this.updateCard2Chart(filter);
        this.card2DataLoading = true;
        // const reportUrl = 'reports/dashboard_total_referrals_issued/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card1Data = data;
        //     this.card1DataLoading = false;
        //   }, error1 => this.card1DataLoading = false);
    };
    ReferralsComponent.prototype.updateCard2Chart = function (filter) {
        var _this = this;
        this.card2DataLoading = true;
        var reportUrl = 'referral_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Referral Focus',
                        data: data['referral_types_focus'].map(function (item) { return item.value; })
                    }];
                var categories = data['referral_types_focus'].map(function (item) { return item.focus; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Client Count', 'Referral Focus Areas' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card2Chart', chartConfig);
            }
            _this.card2DataLoading = false;
        }, function (error1) { return _this.card2DataLoading = false; });
    };
    ReferralsComponent.prototype.updateCard3 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard3Chart(filter);
        // const reportUrl = 'reports/dashboard_ltf_feedbacks/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card3Data = data;
        //     this.card3DataLoading = false;
        //   }, error1 => this.card3DataLoading = false);
    };
    ReferralsComponent.prototype.updateCard3Chart = function (filter) {
        var _this = this;
        this.card3DataLoading = true;
        this.data_loading = true;
        var reportUrl = 'referral_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                _this.values = data['referral_issued_by_chw'];
            }
            _this.card3DataLoading = false;
            _this.data_loading = false;
        }, function (error1) { return _this.card3DataLoading = false; });
    };
    // this method was coppied form the orguni component and is to be moved to service letter
    ReferralsComponent.prototype.getLocation = function (starting_location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
                        visit_locations = [];
                        visit_locations.push({
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            parents: ""
                        });
                        visit_location = {
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            children: visit_location.childLocations.map(function (location) {
                                var child_loc = _this.getChildOrgunits(top_locations, location.uuid);
                                visit_locations.push({
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    parents: "" + visit_location.uuid
                                });
                                return {
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    children: child_loc.childLocations.map(function (child) {
                                        var before_last_child = _this.getChildOrgunits(top_locations, child.uuid);
                                        visit_locations.push({
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            parents: visit_location.uuid + ";" + child_loc.uuid
                                        });
                                        return {
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            children: before_last_child.childLocations.map(function (level3child) {
                                                var last_child = _this.getChildOrgunits(top_locations, level3child.uuid);
                                                visit_locations.push({
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid
                                                });
                                                return {
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    // children: facility.childLocations
                                                    children: last_child.childLocations.map(function (level4child) {
                                                        var facility = _this.getChildOrgunits(top_locations, level4child.uuid);
                                                        visit_locations.push({
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid
                                                        });
                                                        return {
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            // children: lastest.childLocations
                                                            children: facility.childLocations.map(function (level5child) {
                                                                var village = _this.getChildOrgunits(top_locations, level5child.uuid);
                                                                visit_locations.push({
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6,
                                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + facility.uuid + ";" + village.uuid
                                                                });
                                                                return {
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6
                                                                };
                                                            })
                                                        };
                                                    })
                                                };
                                            })
                                        };
                                    })
                                };
                            })
                        };
                        this.location_loading = false;
                        console.log(visit_locations);
                        return [2 /*return*/, visit_locations];
                }
            });
        });
    };
    ReferralsComponent.prototype.exportexcel = function (table, fileName) {
        /* table id is passed over here */
        var element = document.getElementById('' + table + '');
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_13__["writeFile"](wb, fileName);
    };
    ReferralsComponent.prototype.print = function () {
        window.print();
    };
    ReferralsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_9__["find"](orgunits, { uuid: uuid });
    };
    ReferralsComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"] }
    ]; };
    ReferralsComponent.propDecorators = {
        el1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea1',] }],
        el2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea2',] }],
        el3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea3',] }],
        el4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea4',] }]
    };
    ReferralsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-referrals',
            template: _raw_loader_referrals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_referrals_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]])
    ], ReferralsComponent);
    return ReferralsComponent;
}());



/***/ }),

/***/ "Lf37":
/*!**************************************************************!*\
  !*** ./src/app/modules/users/add-team/add-team.component.ts ***!
  \**************************************************************/
/*! exports provided: AddTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return AddTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_team_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-team.component.html */ "8int");
/* harmony import */ var _add_team_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-team.component.scss */ "DYfB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/team.service */ "GDbA");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");







var AddTeamComponent = /** @class */ (function () {
    function AddTeamComponent(teamService, http) {
        this.teamService = teamService;
        this.http = http;
        this.orgunit = null;
        this.orgunitnames = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.current_orgunits = [];
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
        this.loading = false;
    }
    AddTeamComponent.prototype.ngOnInit = function () {
        if (this.team) {
            this.teamName = this.team.teamName;
            this.teamIdentifier = this.team.teamIdentifier;
            this.startingLocation = this.team.location.uuid;
            this.current_orgunits = [this.startingLocation];
        }
    };
    AddTeamComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    AddTeamComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    AddTeamComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        var team = {
            teamName: this.teamName,
            teamIdentifier: this.teamIdentifier,
            location: this.orgunit.value
        };
        var resItems$;
        if (this.team) {
            resItems$ = this.teamService.updateTeam(team, this.team.uuid);
        }
        else {
            resItems$ = this.teamService.createTeam(team);
        }
        resItems$.subscribe(function (success) {
            _this.loading = false;
            _this.saved.emit();
            _this.closeForm();
            _this.http.showSuccess('Team Created Successful');
        }, function (error) {
            _this.loading = false;
            _this.http.showError('Failed to Create Team please try again');
        });
    };
    AddTeamComponent.ctorParameters = function () { return [
        { type: _services_team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] }
    ]; };
    AddTeamComponent.propDecorators = {
        team: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        saved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    AddTeamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-team',
            template: _raw_loader_add_team_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            styles: [_add_team_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"]])
    ], AddTeamComponent);
    return AddTeamComponent;
}());



/***/ }),

/***/ "M2DL":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FacilityRefferalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityRefferalReportComponent", function() { return FacilityRefferalReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_facility_refferal_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./facility-refferal-report.component.html */ "jC1y");
/* harmony import */ var _facility_refferal_report_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facility-refferal-report.component.scss */ "WFub");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");






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
    FacilityRefferalReportComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"] }
    ]; };
    FacilityRefferalReportComponent.propDecorators = {
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    FacilityRefferalReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-facility-refferal-report',
            template: _raw_loader_facility_refferal_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_facility_refferal_report_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"]])
    ], FacilityRefferalReportComponent);
    return FacilityRefferalReportComponent;
}());



/***/ }),

/***/ "M95H":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "Eo/H");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "PsZA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/location.service */ "yHma");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/org-unit.service */ "n3tq");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/settings.service */ "6nr9");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__);













highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default()(highcharts__WEBPACK_IMPORTED_MODULE_10__);
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.location_loading = false;
        this.locations = [];
        this.total_anc_referrals = 0;
        this.total_services = 0;
        this.total_fp_initiations = 0;
        this.total_fp_discontinuations = 0;
        this.card1Data = null;
        this.card2Data = null;
        this.card3Data = null;
        this.card4Data = null;
        this.card1DataLoading = false;
        this.card2DataLoading = false;
        this.card3DataLoading = false;
        this.card4DataLoading = false;
        this.card5DataLoading = false;
        this.label1DataLoading = false;
        this.label2DataLoading = false;
        this.label3DataLoading = false;
        this.label4DataLoading = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date(new Date().setDate(new Date().getDate() - 90));
        this.endDate = new Date(new Date().setDate(new Date().getDate() + 2));
        var start_date = new Date(this.startDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.endDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        this.start_date = start_date;
        this.end_date = end_date;
        var starting_location = localStorage.getItem('htmr-starting-location');
        this.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
            _this.orgunitName = _this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
            _this.getTotalRegistration({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.getTotalServices({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.getTotalFamilyPlanningInitiations({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.getTotalFamilyPlanningDiscontinuations({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard1({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard2({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard3({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard4({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard5({ from_date: start_date, to_date: end_date, facilities: facilities });
        });
    };
    DashboardComponent.prototype.updateCards = function (filter) {
        this.orgunitName = filter.ouName;
        this.updateCard1Chart(filter);
        this.updateCard2Chart(filter);
        this.updateCard3Chart(filter);
        this.updateCard4Chart(filter);
        this.updateCard5Chart(filter);
        this.getTotalRegistration(filter);
        this.getTotalServices(filter);
        this.getTotalFamilyPlanningInitiations(filter);
        this.getTotalFamilyPlanningDiscontinuations(filter.ouId);
    };
    DashboardComponent.prototype.getTotalServices = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var reportUrl, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.label1DataLoading = true;
                        reportUrl = 'events_summary/';
                        return [4 /*yield*/, this.http.postDJANGOURL(reportUrl, filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_services = data['total_family_planning_refferals'];
                            this.label1DataLoading = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.getTotalFamilyPlanningInitiations = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.label2DataLoading = true;
                        // const data = await this.http.postOpenSRP(
                        //   'reports/summary_total_LTFS/json',
                        //   {from_date, to_date, facilities}
                        // ).toPromise();
                        // if (data) {
                        //   this.total_ltfs = data['Total LTFs'];
                        //   this.label2DataLoading = false;
                        // }
                        this.label2DataLoading = true;
                        return [4 /*yield*/, this.http.postDJANGOURL('events_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_fp_initiations = data['total_family_planning_initiations'];
                            this.label2DataLoading = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.getTotalRegistration = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.label3DataLoading = true;
                        return [4 /*yield*/, this.http.postDJANGOURL('events_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_anc_referrals = data['total_anc_referrals'];
                            this.label3DataLoading = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.getTotalFamilyPlanningDiscontinuations = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.label4DataLoading = true;
                        // const data = await this.http.getOpenSRP(`get-team-members-by-facility-hierarchy/${ouID}`).toPromise();
                        // if (data) {
                        //   this.total_chw = data;
                        //   this.label4DataLoading = false;
                        // }
                        this.label4DataLoading = true;
                        return [4 /*yield*/, this.http.postDJANGOURL('events_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_fp_discontinuations = data['total_family_planning_discontinuations'];
                            this.label4DataLoading = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.updateCard1 = function (filter) {
        this.updateCard1Chart(filter);
        this.card1DataLoading = true;
        // const reportUrl = 'reports/dashboard_total_referrals_issued/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card1Data = data;
        //     this.card1DataLoading = false;
        //   }, error1 => this.card1DataLoading = false);
    };
    DashboardComponent.prototype.updateCard1Chart = function (filter) {
        var _this = this;
        this.card1DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Months',
                        data: data['total_services_by_month'].map(function (item) { return item.value; })
                    }];
                var categories = data['total_services_by_month'].map(function (item) { return item.month_name; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Total Services Issued by Month', 'Total Services Issued by Months' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card1Chart', chartConfig);
            }
            _this.card1DataLoading = false;
        }, function (error1) { return _this.card1DataLoading = false; });
    };
    DashboardComponent.prototype.updateCard2 = function (filter) {
        this.card2DataLoading = true;
        this.updateCard2Chart(filter);
        // const reportUrl = 'reports/dashboard_total_registrations/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card2Data = data;
        //     this.card2DataLoading = false;
        //   }, error1 => this.card2DataLoading = false);
    };
    DashboardComponent.prototype.updateCard2Chart = function (filter) {
        var _this = this;
        this.card2DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = data['total_services_aggregate'].map(function (item) { return ({
                    name: item.event_type,
                    y: item.value
                }); });
                var chartConfig = _this.settingsService.drawPieChart(series, 'Total Issued Services' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName), 'Services');
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card2Chart', chartConfig);
            }
            _this.card2DataLoading = false;
        }, function (error1) { return _this.card2DataLoading = false; });
    };
    DashboardComponent.prototype.updateCard3 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard3Chart(filter);
        // const reportUrl = 'reports/dashboard_ltf_feedbacks/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card3Data = data;
        //     this.card3DataLoading = false;
        //   }, error1 => this.card3DataLoading = false);
    };
    DashboardComponent.prototype.updateCard3Chart = function (filter) {
        var _this = this;
        this.card3DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Referrals',
                        data: data['total_issued_referrals'].map(function (item) { return item.value; })
                    }];
                var categories = data['total_issued_referrals'].map(function (item) { return item.event_type; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Services', 'Total Issued Referrals' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName), '', 'line');
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card3Chart', chartConfig);
            }
            _this.card3DataLoading = false;
        }, function (error1) { return _this.card3DataLoading = false; });
    };
    DashboardComponent.prototype.updateCard4 = function (filter) {
        this.card4DataLoading = true;
        this.updateCard4Chart(filter);
        // const reportUrl = 'reports/dashboard_total_failed_referrals/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card4Data = data;
        //     this.card4DataLoading = false;
        //   }, error1 => this.card4DataLoading = false);
    };
    DashboardComponent.prototype.updateCard4Chart = function (filter) {
        var _this = this;
        this.card4DataLoading = true;
        var reportUrl = 'give_fp_methods/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data['total_clients']) {
                var series = [{
                        name: 'Family Planning Methods',
                        data: data['total_clients'].map(function (item) { return item.clients; })
                    }];
                var categories = data['total_clients'].map(function (item) { return item.method_type; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Number of Clients', 'Total Number of Clients Issued Family Planning Methods' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card4Chart', chartConfig);
            }
            _this.card4DataLoading = false;
        }, function (error1) { return _this.card4DataLoading = false; });
    };
    DashboardComponent.prototype.updateCard5 = function (filter) {
        this.card5DataLoading = true;
        this.updateCard5Chart(filter);
        // const reportUrl = 'reports/dashboard_total_failed_referrals/html';
        // this.http.postOpenSRP1(reportUrl,
        //   filter)
        //   .subscribe((data: any) => {
        //     this.card4Data = data;
        //     this.card4DataLoading = false;
        //   }, error1 => this.card4DataLoading = false);
    };
    DashboardComponent.prototype.updateCard5Chart = function (filter) {
        var _this = this;
        this.card5DataLoading = true;
        var reportUrl = 'give_fp_methods/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data['total_fp_methods']) {
                console.log(data['total_fp_methods']);
                var series = [{
                        name: 'Family Planning Methods',
                        data: data['total_fp_methods'].map(function (item) { return item.items; })
                    }];
                var categories = data['total_fp_methods']
                    .map(function (item) { return item.method_type; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Number of items', 'Total Number of  Family Planning Methods Issued' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card5Chart', chartConfig);
            }
            _this.card5DataLoading = false;
        }, function (error1) { return _this.card5DataLoading = false; });
    };
    // this method was coppied form the orguni component and is to be moved to service letter
    DashboardComponent.prototype.getLocation = function (starting_location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
                        visit_locations = [];
                        visit_locations.push({
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            parents: ""
                        });
                        visit_location = {
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            children: visit_location.childLocations.map(function (location) {
                                var child_loc = _this.getChildOrgunits(top_locations, location.uuid);
                                visit_locations.push({
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    parents: "" + visit_location.uuid
                                });
                                return {
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    children: child_loc.childLocations.map(function (child) {
                                        var before_last_child = _this.getChildOrgunits(top_locations, child.uuid);
                                        visit_locations.push({
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            parents: visit_location.uuid + ";" + child_loc.uuid
                                        });
                                        return {
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            children: before_last_child.childLocations.map(function (level3child) {
                                                var last_child = _this.getChildOrgunits(top_locations, level3child.uuid);
                                                visit_locations.push({
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid
                                                });
                                                return {
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    // children: facility.childLocations
                                                    children: last_child.childLocations.map(function (level4child) {
                                                        var facility = _this.getChildOrgunits(top_locations, level4child.uuid);
                                                        visit_locations.push({
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid
                                                        });
                                                        return {
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            // children: lastest.childLocations
                                                            children: facility.childLocations.map(function (level5child) {
                                                                var village = _this.getChildOrgunits(top_locations, level5child.uuid);
                                                                visit_locations.push({
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6,
                                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid + ";" + facility.uuid
                                                                });
                                                            })
                                                        };
                                                    })
                                                };
                                            })
                                        };
                                    })
                                };
                            })
                        };
                        this.location_loading = false;
                        return [2 /*return*/, visit_locations];
                }
            });
        });
    };
    DashboardComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_9__["find"](orgunits, { uuid: uuid });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"] }
    ]; };
    DashboardComponent.propDecorators = {
        el1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea1',] }],
        el2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea2',] }],
        el3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea3',] }],
        el4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea4',] }]
    };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "MOlP":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvdmlkZXJzLXJlcG9ydC9pbnRlci1mYWNpbGl0eS1yZWZmZXJhbC1yZXBvcnQvaW50ZXItZmFjaWxpdHktcmVmZmVyYWwtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "NBeo":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  total-referrals-issued works!\n</p>\n");

/***/ }),

/***/ "NCVu":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/placeholder/placeholder.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-contaner {\n  display: grid;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));\n}\n\n.placeholder-container {\n  width: 100%;\n}\n\n.placeholder-container .line {\n  height: 14px;\n  margin: 10px;\n  border-radius: 4px;\n  animation: pulse 2s infinite ease-in-out;\n  -webkit-animation: pulse 2s infinite ease-in-out;\n}\n\n.placeholder-container div {\n  width: 95%;\n}\n\n.placeholder-container div:nth-child(1) {\n  width: 95%;\n}\n\n.placeholder-container div:nth-child(2) {\n  width: 90%;\n}\n\n.placeholder-container div:nth-child(3) {\n  width: 85%;\n}\n\n.placeholder-container div:nth-child(4) {\n  width: 83%;\n}\n\n.placeholder-container div:nth-child(5) {\n  width: 80%;\n}\n\n.placeholder-container div:nth-child(6) {\n  width: 80%;\n}\n\n@keyframes pulse {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1);\n    -webkit-box-shadow: 0 0 0 0 rgba(165, 165, 165, 0.4);\n  }\n  50% {\n    background-color: rgba(165, 165, 165, 0.3);\n    -webkit-box-shadow: 0 0 0 2px rgba(165, 165, 165, 0);\n  }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1);\n    -webkit-box-shadow: 0 0 0 0 rgba(165, 165, 165, 0);\n  }\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1);\n    -webkit-box-shadow: 0 0 0 0 rgba(165, 165, 165, 0.4);\n  }\n  50% {\n    background-color: rgba(165, 165, 165, 0.3);\n    -webkit-box-shadow: 0 0 0 2px rgba(165, 165, 165, 0);\n  }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1);\n    -webkit-box-shadow: 0 0 0 0 rgba(165, 165, 165, 0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQUE7RUFDQSwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRkE7RUFHSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsZ0RBQWdEO0FBR3BEOztBQVZBO0VBV0ksVUFBVTtBQUdkOztBQWRBO0VBZUksVUFDRjtBQUVGOztBQWxCQTtFQWtCSSxVQUNGO0FBR0Y7O0FBdEJBO0VBcUJJLFVBQ0Y7QUFJRjs7QUExQkE7RUF3QkksVUFDRjtBQUtGOztBQTlCQTtFQTJCSSxVQUNGO0FBTUY7O0FBbENBO0VBOEJJLFVBQ0Y7QUFPRjs7QUFKQTtFQUNFO0lBQ0UsMENBQXNDO0lBQ3RDLG9EQUFrRDtFQU9wRDtFQUxBO0lBQ0UsMENBQXNDO0lBQ3RDLG9EQUFrRDtFQU9wRDtFQUxBO0lBQ0UsMENBQXNDO0lBQ3RDLGtEQUFnRDtFQU9sRDtBQUNGOztBQUpBO0VBQ0U7SUFDRSwwQ0FBc0M7SUFDdEMsb0RBQWtEO0VBT3BEO0VBTEE7SUFDRSwwQ0FBc0M7SUFDdEMsb0RBQWtEO0VBT3BEO0VBTEE7SUFDRSwwQ0FBc0M7SUFDdEMsa0RBQWdEO0VBT2xEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg3MHB4LCAxZnIpKTtcbn1cblxuLnBsYWNlaG9sZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICAubGluZSB7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICBkaXYge1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cblxuICBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICB3aWR0aDogOTUlXG4gIH1cbiAgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IDkwJVxuICB9XG4gIGRpdjpudGgtY2hpbGQoMykge1xuICAgIHdpZHRoOiA4NSVcbiAgfVxuICBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICB3aWR0aDogODMlXG4gIH1cbiAgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgd2lkdGg6IDgwJVxuICB9XG4gIGRpdjpudGgtY2hpbGQoNikge1xuICAgIHdpZHRoOiA4MCVcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LDE2NSwxNjUsLjEpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDE2NSwxNjUsMTY1LCAwLjQpO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsMTY1LDE2NSwuMyk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgxNjUsMTY1LDE2NSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsMTY1LDE2NSwuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMTY1LDE2NSwxNjUsIDApO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwxNjUsMTY1LC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgxNjUsMTY1LDE2NSwgMC40KTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LDE2NSwxNjUsLjMpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMTY1LDE2NSwxNjUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LDE2NSwxNjUsLjEpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDE2NSwxNjUsMTY1LCAwKTtcbiAgfVxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "NF+Y":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IssuedReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuedReferralsComponent", function() { return IssuedReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_issued_referrals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./issued-referrals.component.html */ "HEZd");
/* harmony import */ var _issued_referrals_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issued-referrals.component.scss */ "S2lu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var IssuedReferralsComponent = /** @class */ (function () {
    function IssuedReferralsComponent() {
    }
    IssuedReferralsComponent.prototype.ngOnInit = function () {
    };
    IssuedReferralsComponent.ctorParameters = function () { return []; };
    IssuedReferralsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-issued-referrals',
            template: _raw_loader_issued_referrals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_issued_referrals_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IssuedReferralsComponent);
    return IssuedReferralsComponent;
}());



/***/ }),

/***/ "Nc2L":
/*!********************************************************************!*\
  !*** ./src/app/modules/geomaps/map-filter/map-filter.component.ts ***!
  \********************************************************************/
/*! exports provided: MapFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapFilterComponent", function() { return MapFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-filter.component.html */ "pbsO");
/* harmony import */ var _map_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-filter.component.scss */ "OVJc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");





var MapFilterComponent = /** @class */ (function () {
    function MapFilterComponent(orgunitService) {
        this.orgunitService = orgunitService;
        this.start_date = '';
        this.end_date = '';
        this.reportFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.orgunit = null;
        this.orgunitnames = '';
        this.services = [
            { id: 1, name: 'Family Planning Registration' },
            { id: 2, name: 'Family Planning Follow Up Visit' },
            { id: 3, name: 'Introduction to Family Planning' },
            { id: 4, name: 'Family Planning Pregnancy Screening' },
            { id: 5, name: 'Family Planning Method Issued' },
            { id: 6, name: 'Family Planning Discontinuation' },
            { id: 7, name: 'ANC Referral' },
            { id: 8, name: 'Family Planning Referral' },
            { id: 9, name: 'Family Planning Referral Followup' },
        ];
        this.selectedService = 0;
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
    }
    MapFilterComponent.prototype.ngOnInit = function () {
    };
    MapFilterComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    MapFilterComponent.prototype.getReport = function () {
        var start_date = new Date(this.start_date).toISOString().substr(0, 10);
        var end_date = new Date(this.end_date).toISOString().substr(0, 10);
        var facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
        var ouName = this.orgunitService.getLevel4OrgunitsNames(this.orgunit.visit_locations, this.orgunit.value);
        var ouId = this.orgunitService.getLevel4OrgunitsId(this.orgunit.visit_locations, this.orgunit.value);
        var from_date = start_date.replace('-', '/').replace('-', '/');
        var to_date = end_date.replace('-', '/').replace('-', '/');
        var service = this.selectedService;
        var orgUnits = this.orgunit.visit_locations;
        console.log("visit locations are", this.orgunit.visit_locations);
        this.reportFilter.emit({
            from_date: from_date,
            to_date: to_date,
            orgUnits: orgUnits,
            facilities: facilities,
            service: service,
            ouName: ouName,
            ouId: ouId
        });
    };
    MapFilterComponent.prototype.onChangeService = function (selectedServiceId) {
        this.selectedService = selectedServiceId;
    };
    MapFilterComponent.ctorParameters = function () { return [
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_4__["OrgUnitService"] }
    ]; };
    MapFilterComponent.propDecorators = {
        start_date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        end_date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        reportFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    MapFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-map-filter',
            template: _raw_loader_map_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_map_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_org_unit_service__WEBPACK_IMPORTED_MODULE_4__["OrgUnitService"]])
    ], MapFilterComponent);
    return MapFilterComponent;
}());



/***/ }),

/***/ "OAJ6":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/settings/registration-reason/registration-reason.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvcmVnaXN0cmF0aW9uLXJlYXNvbi9yZWdpc3RyYXRpb24tcmVhc29uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "OCw3":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/total-registered-clients/total-registered-clients.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h5>\n        {{ report?.name}} from {{startDate | date:'mediumDate'}} to {{ endDate  | date:'mediumDate'}} for {{ orgUnitName }}\n        <button (click)=\"downloadExcel()\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n      </h5>\n    </div>\n  </div>\n  <div class=\"row mt-3 no-print\">\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Rows</mat-label>\n        <mat-select\n          (selectionChange)=\"changeRows($event)\"\n          [(ngModel)]=\"visibleRows\"\n          multiple\n          placeholder=\"Select Indicators\">\n          <app-mat-select-search [(ngModel)]=\"searchRows\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of rows | search:'indicatorName':searchRows\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenRows.length > 0\">{{hiddenRows.length}} hidden rows</mat-hint>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Columns</mat-label>\n        <mat-select\n          (selectionChange)=\"changeColumn($event)\"\n          [(ngModel)]=\"visibleColumns\"\n          multiple\n          placeholder=\"Visible Columns\">\n          <app-mat-select-search [(ngModel)]=\"searchColumns\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of columns | search:'indicatorName':searchColumns\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenColumns.length > 0\">{{hiddenColumns.length}} hidden columns</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <table #dataTable class=\"table table-bordered reportTable mt-3\">\n        <thead>\n        <tr>\n          <th colspan=\"2\"></th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('JUMLA ME') && visibleColumns.includes('JUMLA KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME') || visibleColumns.includes('JUMLA KE')\">JUMLA</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME') && visibleColumns.includes('CHINI YA MWAKA MMOJA KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME') || visibleColumns.includes('CHINI YA MWAKA MMOJA KE')\">CHINI YA MWAKA MMOJA</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 1-5 ME') && visibleColumns.includes('MIAKA 1-5 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 ME') || visibleColumns.includes('MIAKA 1-5 KE')\">MIAKA <br> 1-5</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 6 - 9 ME') && visibleColumns.includes('MIAKA 6 - 9 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 ME') || visibleColumns.includes('MIAKA 6 - 9 KE')\">MIAKA <br> 6 - 9</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 10 - 14 ME') && visibleColumns.includes('MIAKA 10 - 14 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 ME') || visibleColumns.includes('MIAKA 10 - 14 KE')\">MIAKA <br> 10 - 14</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 15 - 19 ME') && visibleColumns.includes('MIAKA 15 - 19 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 ME') || visibleColumns.includes('MIAKA 15 - 19 KE')\">MIAKA <br> 15 - 19</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 20 - 24 ME') && visibleColumns.includes('MIAKA 20 - 24 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 ME') || visibleColumns.includes('MIAKA 20 - 24 KE')\">MIAKA <br> 20 - 24</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 25 - 49 ME') && visibleColumns.includes('MIAKA 25 - 49 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 ME') || visibleColumns.includes('MIAKA 25 - 49 KE')\">MIAKA <br> 25 - 49</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 50 - 59 ME') && visibleColumns.includes('MIAKA 50 - 59 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 ME') || visibleColumns.includes('MIAKA 50 - 59 KE')\">MIAKA <br> 50 - 59</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 60+ ME') && visibleColumns.includes('MIAKA 60+ KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ ME') || visibleColumns.includes('MIAKA 60+ KE')\">MIAKA <br> 60+</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th style=\"width: 10px\">SN</th>\n          <th>{{ main_title }}</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ KE')\">KE</th>\n        </tr>\n        <ng-container *ngFor=\"let row of jsonData;\">\n          <tr *ngIf=\"visibleRows.includes(row.itemName)\">\n            <td>{{row.sn}}</td>\n            <td>{{row.itemName}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">{{row.totalMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">{{row.totalFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME')\">{{row.lessThan1Male || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA KE')\">{{row.lessThan1Female || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 ME')\">{{row.oneTofiveMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 KE')\">{{row.oneTofiveFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 ME')\">{{row.sixToNineMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 KE')\">{{row.sixToNineFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 ME')\">{{row.tenToFourteenMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 KE')\">{{row.tenToFourteenFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 ME')\">{{row.fifteenToNineteenMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 KE')\">{{row.fifteenToNineteenFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 ME')\">{{row.twentyToTwentyFourMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 KE')\">{{row.twentyToTwentyFourFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 ME')\">{{row.twentyFiveToFourtyNineMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 KE')\">{{row.twentyFiveToFourtyNineFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 ME')\">{{row.fiftyToFiftyNineMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 KE')\">{{row.fiftyToFiftyNineFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ ME')\">{{row.aboveSixtyMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ KE')\">{{row.aboveSixtyFemale || '-'}}</td>\n          </tr>\n        </ng-container>\n        <tr *ngIf=\"hiddenRows.length == 0 && hiddenColumns.length == 0\" >\n          <td colspan=\"2\"><b>JUMLA</b></td>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">{{totals.totalMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">{{totals.totalFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME')\">{{totals.lessThan1Male}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA KE')\">{{totals.lessThan1Female}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 ME')\">{{totals.oneTofiveMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 KE')\">{{totals.oneTofiveFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 ME')\">{{totals.sixToNineMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 KE')\">{{totals.sixToNineFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 ME')\">{{totals.tenToFourteenMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 KE')\">{{totals.tenToFourteenFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 ME')\">{{totals.fifteenToNineteenMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 KE')\">{{totals.fifteenToNineteenFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 ME')\">{{totals.twentyToTwentyFourMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 KE')\">{{totals.twentyToTwentyFourFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 ME')\">{{totals.twentyFiveToFourtyNineMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 KE')\">{{totals.twentyFiveToFourtyNineFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 ME')\">{{totals.fiftyToFiftyNineMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 KE')\">{{totals.fiftyToFiftyNineFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ ME')\">{{totals.aboveSixtyMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ KE')\">{{totals.aboveSixtyFemale}}</th>\n        </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "OVJc":
/*!**********************************************************************!*\
  !*** ./src/app/modules/geomaps/map-filter/map-filter.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VvbWFwcy9tYXAtZmlsdGVyL21hcC1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/search.pipe */ "WfBE");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "hctd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_topbanner_topbanner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/topbanner/topbanner.component */ "+m/1");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/click-outside.directive */ "jYWo");
/* harmony import */ var _components_main_data_table_main_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-data-table/main-data-table.component */ "GdE2");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/loader/loader.component */ "668k");
/* harmony import */ var _components_save_area_save_area_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/save-area/save-area.component */ "Y9Mv");
/* harmony import */ var _components_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/placeholder/placeholder.component */ "4HVU");
/* harmony import */ var _pipes_without_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/without.pipe */ "lb2d");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-tree-component */ "rDsv");
/* harmony import */ var _components_org_unit_filter_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/org-unit-filter/multiselect/multiselect.component */ "mA3v");
/* harmony import */ var _components_org_unit_filter_org_unit_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/org-unit-filter/org-unit-filter.component */ "ZIPz");
/* harmony import */ var _components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/table-form/table-form.component */ "QDv5");
/* harmony import */ var _components_mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/mat-select-search/mat-select-search.component */ "8WTZ");
/* harmony import */ var _components_main_data_table_show_button_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/main-data-table/show-button.pipe */ "p1Xg");
/* harmony import */ var _pipes_filter_by_name_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/filter-by-name.pipe */ "Eb2j");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ "KSFr");
/* harmony import */ var _directives_table_style_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/table-style.directive */ "1aYY");
/* harmony import */ var _components_chw_locations_chw_locations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/chw-locations/chw-locations.component */ "yBwf");

























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_15__["TreeModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            declarations: [
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"],
                _components_topbanner_topbanner_component__WEBPACK_IMPORTED_MODULE_7__["TopbannerComponent"],
                _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideDirective"],
                _components_main_data_table_main_data_table_component__WEBPACK_IMPORTED_MODULE_9__["MainDataTableComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"],
                _components_save_area_save_area_component__WEBPACK_IMPORTED_MODULE_11__["SaveAreaComponent"],
                _components_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_12__["PlaceholderComponent"],
                _pipes_without_pipe__WEBPACK_IMPORTED_MODULE_13__["WithoutPipe"],
                _components_org_unit_filter_org_unit_filter_component__WEBPACK_IMPORTED_MODULE_17__["OrgUnitFilterComponent"],
                _components_org_unit_filter_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__["MultiselectComponent"],
                _components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_18__["TableFormComponent"],
                _components_mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_19__["MatSelectSearchComponent"],
                _components_main_data_table_show_button_pipe__WEBPACK_IMPORTED_MODULE_20__["ShowButtonPipe"],
                _pipes_filter_by_name_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterByNamePipe"],
                _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_22__["SafeHtmlPipe"],
                _directives_table_style_directive__WEBPACK_IMPORTED_MODULE_23__["TableStyleDirective"],
                _components_chw_locations_chw_locations_component__WEBPACK_IMPORTED_MODULE_24__["ChwLocationsComponent"]
            ],
            exports: [
                _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _components_topbanner_topbanner_component__WEBPACK_IMPORTED_MODULE_7__["TopbannerComponent"],
                _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideDirective"],
                _components_main_data_table_main_data_table_component__WEBPACK_IMPORTED_MODULE_9__["MainDataTableComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"],
                _components_save_area_save_area_component__WEBPACK_IMPORTED_MODULE_11__["SaveAreaComponent"],
                _components_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_12__["PlaceholderComponent"],
                _pipes_without_pipe__WEBPACK_IMPORTED_MODULE_13__["WithoutPipe"],
                _components_org_unit_filter_org_unit_filter_component__WEBPACK_IMPORTED_MODULE_17__["OrgUnitFilterComponent"],
                _components_org_unit_filter_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__["MultiselectComponent"],
                _components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_18__["TableFormComponent"],
                _components_mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_19__["MatSelectSearchComponent"],
                _components_main_data_table_show_button_pipe__WEBPACK_IMPORTED_MODULE_20__["ShowButtonPipe"],
                _pipes_filter_by_name_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterByNamePipe"],
                _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_22__["SafeHtmlPipe"],
                _components_chw_locations_chw_locations_component__WEBPACK_IMPORTED_MODULE_24__["ChwLocationsComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "PCfH":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-type/reffereal-type.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RefferealTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefferealTypeComponent", function() { return RefferealTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reffereal_type_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reffereal-type.component.html */ "hefW");
/* harmony import */ var _reffereal_type_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reffereal-type.component.scss */ "DRfc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");







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
            referralTypeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            isActive: [true]
        });
    };
    RefferealTypeComponent.prototype.getItems = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('referral-types').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { id: item.referralTypeId })); });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var payload, saved, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
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
    RefferealTypeComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    RefferealTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reffereal-type',
            template: _raw_loader_reffereal_type_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]],
            styles: [_reffereal_type_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RefferealTypeComponent);
    return RefferealTypeComponent;
}());



/***/ }),

/***/ "PexN":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/mat-select-search/mat-select-search.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\n\n<div class=\"mat-select-search-inner\"\n     [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple}\">\n  <input matInput\n         class=\"mat-select-search-input\"\n         #searchSelectInput\n         (keydown)=\"_handleKeydown($event)\"\n         (input)=\"onInputChange($event.target.value)\"\n         (blur)=\"onBlur($event.target.value)\"\n         [placeholder]=\"placeholderLabel\"\n  />\n  <button mat-button *ngIf=\"value\"\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"_reset(true)\"\n          class=\"mat-select-search-clear\">\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n\n<div *ngIf=\"noEntriesFoundLabel && value && _options?.length === 0\"\n     class=\"mat-select-search-no-entries-found\">\n  {{noEntriesFoundLabel}}\n</div>\n");

/***/ }),

/***/ "PsZA":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  margin: 5px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important;\n}\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixzQkFBQTtFQUNBLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzREFBc0Q7RUFDdEQsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxzQkFBQTtFQUNBLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQ0FBMkM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQtY29udGFpbmVyMSB7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgZ3JpZC1nYXA6IDE1cHggMTVweCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLTEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXN0YXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyNXB4O1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIzMHB4LCAxZnIpKVxufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuIl19 */");

/***/ }),

/***/ "QDv5":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/table-form/table-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: TableFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFormComponent", function() { return TableFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_table_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./table-form.component.html */ "7JL1");
/* harmony import */ var _table_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-form.component.scss */ "k9gR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/router-animation */ "fT3M");





var TableFormComponent = /** @class */ (function () {
    function TableFormComponent() {
        this.loading = false;
        this.showTopBanner = true;
        this.viewDetails = false;
        this.hideAdd = false;
        this.smallForm = true;
        this.addItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.animationSize = 'sixty';
    }
    TableFormComponent.prototype.ngOnInit = function () {
    };
    TableFormComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    TableFormComponent.prototype.add = function () {
        this.addItem.emit();
    };
    TableFormComponent.ctorParameters = function () { return []; };
    TableFormComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        formTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        showTopBanner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        viewDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        hideAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        smallForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        addItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        animationSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    TableFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-table-form',
            template: _raw_loader_table_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [
                _animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["formSize"], _animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["tableSize"]
            ],
            styles: [_table_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TableFormComponent);
    return TableFormComponent;
}());



/***/ }),

/***/ "RFbJ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/indicators/indicators.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n     <div class=\"container-fluid\">\n       <form [formGroup]=\"submitForm\">\n<!--         English Name-->\n         <p class=\"clearfix\">\n           <mat-form-field appearance=\"outline\">\n             <mat-label> English Name</mat-label>\n             <input\n               formControlName=\"indicatorName\"\n               matInput\n               required\n               placeholder=\"English Name\">\n             <mat-error *ngIf=\"!submitForm.get('indicatorName').valid && submitForm.get('indicatorName').touched\">\n               This field is required\n             </mat-error>\n           </mat-form-field>\n         </p>\n\n<!--         Swahili Name-->\n         <p class=\"clearfix\">\n           <mat-form-field appearance=\"outline\">\n             <mat-label> Swahili Name</mat-label>\n             <input\n               formControlName=\"indicatorNameSw\"\n               matInput\n               required\n               placeholder=\"Swahili Name\">\n             <mat-error *ngIf=\"!submitForm.get('indicatorNameSw').valid && submitForm.get('indicatorNameSw').touched\">\n               This field is required\n             </mat-error>\n           </mat-form-field>\n         </p>\n\n<!--         Is Active-->\n         <p class=\"clearfix\">\n           <mat-checkbox formControlName=\"isActive\">\n             Is Active\n           </mat-checkbox>\n         </p>\n\n         <div class=\"col-sm-12\">\n           <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n           <app-save-area\n             *ngIf=\"!loading\"\n             @fadeIn\n             [saveDisabled]=\"submitForm.invalid || saving_data\"\n             (save)=\"save(submitForm.value)\"\n             (cancel)=\"closeForm()\"\n             [confirmFirst]=\"true\"\n             [confirmText]=\"'Confirm Saving Information?'\"\n           ></app-save-area>\n         </div>\n       </form>\n     </div>\n\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "RgVK":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/add-member/add-member.component.ts ***!
  \******************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_member_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-member.component.html */ "GVSg");
/* harmony import */ var _add_member_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-member.component.scss */ "YXSp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/team.service */ "GDbA");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");









var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(formBuilder, userService, teamService, http) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.teamService = teamService;
        this.http = http;
        this.orgunit = null;
        this.orgunitnames = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.orgunit_tree_config = {
            show_search: true,
            search_text: 'Search',
            level: null,
            loading: true,
            loading_message: 'Loading Organisation units...',
            multiple: true,
            multiple_key: 'control',
            placeholder: 'Assigned Location'
        };
        this.loading = false;
    }
    AddMemberComponent.prototype.ngOnInit = function () {
        this.teamMemberForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            familyName: [''],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            age: [''],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            roles: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            team: [''],
            teamRole: [''],
            assignedLocation: [''],
            isProvider: ['']
        });
        if (this.team) {
            this.teamMemberForm.patchValue({
                team: this.team.uuid
            });
        }
    };
    AddMemberComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.teamMemberForm.patchValue({
            assignedLocation: orgunit.value
        });
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    AddMemberComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    AddMemberComponent.prototype.save = function () {
        var _this = this;
        var formData = this.teamMemberForm.value;
        var person = {
            names: [
                {
                    givenName: formData.firstName,
                    familyName: formData.familyName
                }
            ],
            gender: formData.gender,
            age: formData.age
        };
        var userObject = {
            password: formData.password,
            person: person,
            roles: this.roles.filter(function (role) { return formData.roles.indexOf(role.uuid) !== -1; }),
            username: formData.username
        };
        this.loading = true;
        this.userService.createUser(userObject).subscribe(function (userResponse) {
            _this.userObject = userResponse;
            var teamMember = {
                person: { uuid: _this.userObject.person.uuid },
                teamRole: formData.teamRole,
                locations: [
                    { uuid: formData.assignedLocation }
                ],
                team: { uuid: _this.team.uuid },
                isDataProvider: true,
                identifier: _this.userObject.person.uuid
            };
            _this.teamService.createTeamMember(teamMember).subscribe(function (teamMemberResponse) {
                console.log(teamMemberResponse);
                _this.loading = false;
                _this.saved.emit();
                _this.close.emit();
                _this.http.showSuccess('Team member has been created successful');
            }, function (teamMemberError) {
            });
        }, function (userError) {
        });
    };
    AddMemberComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"] }
    ]; };
    AddMemberComponent.propDecorators = {
        roles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        team: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        teamRoles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        saved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    AddMemberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-member',
            template: _raw_loader_add_member_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]],
            styles: [_add_member_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"]])
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ }),

/***/ "Rw5e":
/*!************************************************************************!*\
  !*** ./src/app/modules/dashboard/card-filter/card-filter.component.ts ***!
  \************************************************************************/
/*! exports provided: CardFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFilterComponent", function() { return CardFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-filter.component.html */ "DKZe");
/* harmony import */ var _card_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-filter.component.scss */ "Ekib");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");





var CardFilterComponent = /** @class */ (function () {
    function CardFilterComponent(orgunitService) {
        this.orgunitService = orgunitService;
        this.start_date = '';
        this.end_date = '';
        this.reportFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.orgunit = null;
        this.orgunitnames = '';
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
    }
    CardFilterComponent.prototype.ngOnInit = function () {
    };
    CardFilterComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    CardFilterComponent.prototype.getReport = function () {
        var start_date = new Date(this.start_date).toISOString().substr(0, 10);
        var end_date = new Date(this.end_date).toISOString().substr(0, 10);
        var facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
        var ouName = this.orgunitService.getLevel4OrgunitsNames(this.orgunit.visit_locations, this.orgunit.value);
        var ouId = this.orgunitService.getLevel4OrgunitsId(this.orgunit.visit_locations, this.orgunit.value);
        var from_date = start_date.replace('-', '/').replace('-', '/');
        var to_date = end_date.replace('-', '/').replace('-', '/');
        this.reportFilter.emit({
            from_date: from_date,
            to_date: to_date,
            facilities: facilities,
            ouName: ouName,
            ouId: ouId
        });
    };
    CardFilterComponent.ctorParameters = function () { return [
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_4__["OrgUnitService"] }
    ]; };
    CardFilterComponent.propDecorators = {
        start_date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        end_date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        reportFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    CardFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-card-filter',
            template: _raw_loader_card_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_card_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_org_unit_service__WEBPACK_IMPORTED_MODULE_4__["OrgUnitService"]])
    ], CardFilterComponent);
    return CardFilterComponent;
}());



/***/ }),

/***/ "S2lu":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnAtcmVwb3J0cy9pc3N1ZWQtcmVmZXJyYWxzL2lzc3VlZC1yZWZlcnJhbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "S3aa":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/settings/service/service-indicator/service-indicator.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mvc2VydmljZS9zZXJ2aWNlLWluZGljYXRvci9zZXJ2aWNlLWluZGljYXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "SdCi":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: IssuedReferralsByLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuedReferralsByLocationComponent", function() { return IssuedReferralsByLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_issued_referrals_by_location_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./issued-referrals-by-location.component.html */ "rZPN");
/* harmony import */ var _issued_referrals_by_location_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issued-referrals-by-location.component.scss */ "lwQ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/dashboard/dashboard.component */ "M95H");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/location.service */ "yHma");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/settings.service */ "6nr9");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/excel-download.service */ "KQVd");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_15__);
















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
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_15__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_15__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_15__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_15__["writeFile"](wb, fileName);
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
        var dashboard = new _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"](this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
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
        var dashboard = new _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"](this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
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
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { service_provider_name: chw ? chw.name : '' });
                });
            });
        });
    };
    IssuedReferralsByLocationComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_9__["LocationService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"] },
        { type: _services_excel_download_service__WEBPACK_IMPORTED_MODULE_14__["ExcelDownloadService"] }
    ]; };
    IssuedReferralsByLocationComponent.propDecorators = {
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    IssuedReferralsByLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-providers-refferal-report',
            template: _raw_loader_issued_referrals_by_location_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]],
            styles: [_issued_referrals_by_location_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_9__["LocationService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"],
            _services_excel_download_service__WEBPACK_IMPORTED_MODULE_14__["ExcelDownloadService"]])
    ], IssuedReferralsByLocationComponent);
    return IssuedReferralsByLocationComponent;
}());



/***/ }),

/***/ "Sj95":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/reports/total-successful/total-successful.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy90b3RhbC1zdWNjZXNzZnVsL3RvdGFsLXN1Y2Nlc3NmdWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'htmr-web';
        this.links = ['link1', 'link1', 'link1'];
    }
    AppComponent.prototype.showInfo = function (link) { };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TBHj":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/topbanner/topbanner.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"no-print\">\n  <mat-toolbar-row>\n    <h3 [routerLink]=\"'/page/'+url\" style=\"cursor: pointer\">\n      <i style=\"color: #07587f\" class=\" mr-2 fa fa-{{image}}\"></i>\n      {{ title }}\n    </h3>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n");

/***/ }),

/***/ "Tb9U":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/org-unit-filter/org-unit-filter.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tree-input\" appClickOutside (clickOutside)=\"showOrgTree = true\">\n    <div class=\"show_items\" (click)=\"displayOrgTree()\">\n              <span *ngIf=\"!orgunit_tree_config.loading\">\n                  {{  getProperPreOrgunitName() }}\n              </span>\n        <span *ngIf=\"orgunit_model.selected_orgunits.length > 3 && orgunit_model.selected_user_orgunit.length == 0\">\n                <span class=\"selected-item\">\n                  {{ orgunit_model.selected_orgunits[0].name }}\n                  <a (click)=\"deActivateNode(orgunit_model.selected_orgunits[0].id,orgtree,$event)\" class=\"removeorgunit\" >x</a>\n                </span>\n                <span class=\"selected-item\">\n                  {{ orgunit_model.selected_orgunits[1].name }}\n                  <a (click)=\"deActivateNode(orgunit_model.selected_orgunits[1].id,orgtree,$event)\" class=\"removeorgunit\">x</a>\n                </span>\n                <span class=\"selected-item\">\n                  &nbsp; and {{ orgunit_model.selected_orgunits.length - 2 }} more\n                </span>\n              </span>\n        <span *ngIf=\"orgunit_model.selected_orgunits.length <= 3 && orgunit_model.selected_user_orgunit.length == 0\">\n                 <span *ngFor=\"let item of orgunit_model.selected_orgunits\" class=\"selected-item ng-binding ng-scope\">\n                  {{ item.name }}\n                   <a (click)=\"deActivateNode(item.id,orgtree,$event)\" class=\"removeorgunit\">x</a>\n                </span>\n              </span>\n        <span class=\"no-selection\" *ngIf=\"orgunit_model.selected_orgunits.length == 0 && !orgunit_tree_config.loading && orgunit_model.selected_user_orgunit.length == 0\">\n          {{ orgunit_tree_config.placeholder }}\n        </span>\n\n      <i class=\"fa fa-caret-down pull-right\"></i>\n      <span  *ngIf=\"orgunit_model.selected_orgunits.length > 3\" class=\"pull-right\">\n            <span class=\"selected-item\" style=\"cursor: pointer\" (click)=\"clearAll()\" style=\"opacity: 0.7\" >X clear all</span>\n          </span>\n      <span *ngIf=\"orgunit_tree_config.loading\">{{ orgunit_tree_config.loading_message }}</span>\n    </div>\n    <div class=\"tree-view\" [ngClass]=\"{'hiddenTree':showOrgTree}\" id=\"tree_view\">\n      <div class=\"container-fluid\">\n        <div *ngIf=\"orgunit_tree_config.loading\">{{ orgunit_tree_config.loading_message }}</div>\n        <div class=\"tree-area\" [ngClass]=\"{'someclass': orgunit_model.selected_user_orgunit.length != 0}\">\n<!--          <tree-root [nodes]=\"nodes\"-->\n<!--                     #orgtree-->\n<!--                     (toggleExpanded)=\"onEvent($event)\"-->\n<!--                     (activate)=\"activateOrg($event)\"-->\n<!--                     (focus)=\"onEvent($event)\"-->\n<!--                     (blur)=\"onEvent($event)\">-->\n<!--          </tree-root>-->\n          <tree-root\n            #orgtree\n            [nodes]=\"organisationunits\"\n            [focused]=\"true\"\n            (activate)=\"activateOrg($event)\"\n            (deactivate)=\"deactivateOrg($event)\"\n          >\n            <ng-template #treeNodeTemplate let-node>\n              <span (click)=\"updateModelOnSelect(node.data)\" style=\"font-size: 12px\">{{ node.data.name }}</span>\n            </ng-template>\n          </tree-root>\n        </div>\n        <div class=\"col-sm-12\" style=\"padding:0px;margin-top: 5px;border-top:1px solid rgba(0,0,0,0.3)\" *ngIf=\"showUpdate\">\n          <button class=\"btn btn-outline-secondary btn-sm pull-right cursor\" style=\"margin-top: 5px\" (click)=\"updateOrgunits()\">\n            <i class=\"fa fa-refresh\"></i>\n            <span>Update</span>\n          </button>\n        </div>\n      </div>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "Tq6c":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/total-lost-followup/total-lost-followup.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TotalLostFollowupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalLostFollowupComponent", function() { return TotalLostFollowupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_total_lost_followup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./total-lost-followup.component.html */ "rcqn");
/* harmony import */ var _total_lost_followup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-lost-followup.component.scss */ "qp0b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/excel-download.service */ "KQVd");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");






var TotalLostFollowupComponent = /** @class */ (function () {
    function TotalLostFollowupComponent(excelService) {
        this.excelService = excelService;
        this.jsonData = [];
        this.startDate = '';
        this.orgUnitName = '';
        this.rows = [];
        this.visibleRows = [];
        this.visibleColumns = [];
        this.searchRows = '';
        this.searchColumns = '';
        this.hiddenColumns = [];
        this.hiddenRows = [];
        this.columns = [
            'JUMLA',
            'WANAUME',
            'WANAWAKE',
        ];
        this.totals = {};
    }
    TotalLostFollowupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rows = this.jsonData.map(function (item) { return item.itemName; });
        this.jsonData.forEach(function (item) {
            _this.totals.total = _this.addToNUmber(_this.totals.total, item.total);
            _this.totals.male = _this.addToNUmber(_this.totals.male, item.male);
            _this.totals.female = _this.addToNUmber(_this.totals.female, item.female);
        });
    };
    TotalLostFollowupComponent.prototype.changeRows = function (event) {
        var _this = this;
        this.hiddenRows = this.rows.filter(function (item) { return !_this.visibleRows.includes(item); });
    };
    TotalLostFollowupComponent.prototype.changeColumn = function (event) {
        var _this = this;
        this.hiddenColumns = this.columns.filter(function (item) { return !_this.visibleColumns.includes(item); });
    };
    TotalLostFollowupComponent.prototype.print = function () {
        window.print();
    };
    TotalLostFollowupComponent.prototype.downloadExcel = function () {
        var startDate = new Date(this.startDate).toISOString().substr(0, 10);
        var endDate = new Date(this.endDate).toISOString().substr(0, 10);
        this.excelService.download1(this.report.name + " from " + startDate + " to " + endDate + " for " + this.orgUnitName, this.dataTable.nativeElement);
    };
    TotalLostFollowupComponent.prototype.addToNUmber = function (prev, next) {
        var sum = 0;
        if (prev) {
            if (next) {
                sum = parseInt(prev + '', 10) + parseInt(next + '', 10);
            }
            else {
                sum = parseInt(prev + '', 10);
            }
        }
        else if (next) {
            sum = next;
        }
        return sum;
    };
    TotalLostFollowupComponent.ctorParameters = function () { return [
        { type: _services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__["ExcelDownloadService"] }
    ]; };
    TotalLostFollowupComponent.propDecorators = {
        jsonData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgUnitName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        report: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        main_title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        dataTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dataTable',] }]
    };
    TotalLostFollowupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-total-lost-followup',
            template: _raw_loader_total_lost_followup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeOut"], _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]],
            styles: [_total_lost_followup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_excel_download_service__WEBPACK_IMPORTED_MODULE_4__["ExcelDownloadService"]])
    ], TotalLostFollowupComponent);
    return TotalLostFollowupComponent;
}());



/***/ }),

/***/ "Trk3":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n        title=\"Family Planning Initiations\"\n        image=\"fa fa-user\"\n        [viewDetails]=\"false\"\n        [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n        <app-loader [message]=\"'Loading Initiation Report...'\"></app-loader>\n      </div>\n    </div>\n\n\n    <div class=\"grid-container\">\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                      id=\"card1Chart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n<!--      <mat-grid-list cols=\"1\" rowHeight=\"1000px\">-->\n<!--        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">-->\n<!--          <mat-card class=\"dashboard-card\">-->\n<!--            <mat-card-content class=\"dashboard-card-content\">-->\n<!--              <div class=\"col\">-->\n<!--                <h4>Registered Users from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>-->\n\n<!--                <button (click)=\"exportexcel('summary-table', 'Registered Clients.xlsx')\" mat-raised-button class=\"pull-right no-print\">-->\n<!--                  <img src=\"assets/img/csv.png\" style=\"height: 26px\">-->\n<!--                </button>-->\n<!--                <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">-->\n<!--                  <img src=\"assets/img/print.png\" style=\"height: 26px\">-->\n<!--                </button>-->\n\n<!--                <table class=\"table table-bordered\" id='summary-table'>-->\n<!--                  <tr>-->\n<!--                    <th>Full Name</th>-->\n<!--                    <th>Gender</th>-->\n<!--                    <th>Birth Date</th>-->\n<!--                    <th>Phone Number</th>-->\n<!--                  </tr>-->\n<!--                  <tr *ngFor=\"let data of values\">-->\n<!--                    <td>{{ data.first_name }} {{ data.middle_name }} {{data.last_name }}</td>-->\n<!--                    <td>{{ data.gender }}</td>-->\n<!--                    <td>{{ data.birth_date }}</td>-->\n<!--                    <td>{{ data.phone_number }}</td>-->\n<!--                  </tr>-->\n<!--                </table>-->\n<!--              </div>-->\n<!--              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"16\"></app-placeholder>-->\n\n<!--            </mat-card-content>-->\n<!--          </mat-card>-->\n\n<!--        </mat-grid-tile>-->\n<!--      </mat-grid-list>-->\n    </div>\n  </ng-container>\n</app-table-form>\n\n");

/***/ }),

/***/ "U3GP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/service/service.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  [formTitle]=\"formTitle\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowCustomPrimary)=\"setIndicators($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <div *ngIf=\"view_type == 'add'\" class=\"container-fluid\">\n      <form [formGroup]=\"submitForm\">\n        <!--         English Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> English Name</mat-label>\n            <input\n              formControlName=\"serviceName\"\n              matInput\n              required\n              placeholder=\"English Name\">\n            <mat-error *ngIf=\"!submitForm.get('serviceName').valid && submitForm.get('serviceName').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Swahili Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Swahili Name</mat-label>\n            <input\n              formControlName=\"serviceNameSw\"\n              matInput\n              required\n              placeholder=\"Swahili Name\">\n            <mat-error *ngIf=\"!submitForm.get('serviceNameSw').valid && submitForm.get('serviceNameSw').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n<!--         Category-->\n        <p class=\"clearfix\" *ngIf=\"itemId == null\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Category</mat-label>\n            <input\n              formControlName=\"category\"\n              matInput\n              required\n              placeholder=\"Category\">\n            <mat-error *ngIf=\"!submitForm.get('category').valid && submitForm.get('category').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <div class=\"col-sm-12\">\n          <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n          <app-save-area\n            *ngIf=\"!loading\"\n            @fadeIn\n            [saveDisabled]=\"submitForm.invalid || saving_data\"\n            (save)=\"save(submitForm.value)\"\n            (cancel)=\"closeForm()\"\n            [confirmFirst]=\"true\"\n            [confirmText]=\"'Confirm Saving Information?'\"\n          ></app-save-area>\n        </div>\n      </form>\n    </div>\n\n    <app-service-indicator\n      [serviceItem]=\"currentService\"\n      *ngIf=\"view_type == 'indicator'\"\n      (close)=\"doneMapping($event)\"\n    ></app-service-indicator>\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "U8zK":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/save-area/save-area.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NhdmUtYXJlYS9zYXZlLWFyZWEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "VG5S":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tree-input\" appClickOutside (clickOutside)=\"hideOptions = true\">\n  <div class=\"show_items text-left\" (click)=\"displayPerTree()\">\n    <span *ngIf=\"selected_items.length == 1\">{{ prefix }}</span>\n    <span *ngIf=\"selected_items.length > 1\">{{ prefix_multiple }}</span>\n    <span *ngIf=\"selected_items.length !== 0\">\n       <span  class=\"selected-item ng-binding ng-scope\">\n        {{ selected_items.length}} Items selected\n         <a (click)=\"deActivateNode($event)\" title=\"clear all\" class=\"removeitem\">x</a>\n      </span>\n    </span>\n    <span *ngIf=\"selected_items.length == 0\">\n      {{ placeholder }}\n    </span>\n    <span class=\"fa fa-caret-down pull-right text-muted\"></span>\n  </div>\n  <div class=\"tree-view\" [ngClass]=\"{'hiddenTree':hideOptions}\">\n    <div style=\"padding: 10px\">\n      <input class=\"form-control\" [(ngModel)]=\"filterText\">\n    </div>\n    <ul class=\"nav nav-pills flex-column\">\n      <li *ngFor=\"let item of items | filterByName: filterText \"\n          class=\"period\" (click)=\"selectItem(item)\"\n          [ngClass]=\"{'selected': checkItemAvailabilty(item,selected_items)}\"\n          title=\"Click to select\"\n          style=\"font-size: 11px; border-bottom: 1px solid rgba(0,0,0,0.1)\"\n      >\n        {{ item.name }}\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "VvU+":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InitiationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiationsComponent", function() { return InitiationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_initiations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./initiations.component.html */ "Trk3");
/* harmony import */ var _initiations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initiations.component.scss */ "YyFi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/location.service */ "yHma");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/org-unit.service */ "n3tq");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/settings.service */ "6nr9");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);














highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default()(highcharts__WEBPACK_IMPORTED_MODULE_10__);
var InitiationsComponent = /** @class */ (function () {
    function InitiationsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.location_loading = false;
        this.locations = [];
        this.values = [];
        this.card2Data = null;
        this.card1DataLoading = false;
        this.card3DataLoading = false;
        this.data_loading = false;
    }
    InitiationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date(new Date().setDate(new Date().getDate() - 90));
        this.endDate = new Date(new Date().setDate(new Date().getDate() + 2));
        var start_date = new Date(this.startDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.endDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        this.start_date = start_date;
        this.end_date = end_date;
        var starting_location = localStorage.getItem('htmr-starting-location');
        this.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
            _this.orgunitName = _this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
            _this.updateCard1({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard3({ from_date: start_date, to_date: end_date, facilities: facilities });
        });
    };
    InitiationsComponent.prototype.updateCards = function (filter) {
        this.orgunitName = filter.ouName;
        this.updateCard1Chart(filter);
        this.updateCard3Chart(filter);
    };
    InitiationsComponent.prototype.updateCard1 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard1Chart(filter);
    };
    InitiationsComponent.prototype.updateCard1Chart = function (filter) {
        var _this = this;
        this.card1DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Months',
                        data: data['family_planning_initiations'].map(function (item) { return item.value; })
                    }];
                var categories = data['family_planning_initiations'].map(function (item) { return item.month_name; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Client Count', 'Family Planning Initiations' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card1Chart', chartConfig);
            }
            _this.card1DataLoading = false;
        }, function (error1) { return _this.card1DataLoading = false; });
    };
    InitiationsComponent.prototype.updateCard3 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard3Chart(filter);
    };
    InitiationsComponent.prototype.updateCard3Chart = function (filter) {
        var _this = this;
        this.card3DataLoading = true;
        this.data_loading = true;
        var reportUrl = 'clients_families/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                _this.values = data['clients'];
            }
            _this.card3DataLoading = false;
            _this.data_loading = false;
        }, function (error1) { return _this.card3DataLoading = false; });
    };
    // this method was coppied form the orguni component and is to be moved to service letter
    InitiationsComponent.prototype.getLocation = function (starting_location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
                        visit_locations = [];
                        visit_locations.push({
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            parents: ""
                        });
                        visit_location = {
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            children: visit_location.childLocations.map(function (location) {
                                var child_loc = _this.getChildOrgunits(top_locations, location.uuid);
                                visit_locations.push({
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    parents: "" + visit_location.uuid
                                });
                                return {
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    children: child_loc.childLocations.map(function (child) {
                                        var before_last_child = _this.getChildOrgunits(top_locations, child.uuid);
                                        visit_locations.push({
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            parents: visit_location.uuid + ";" + child_loc.uuid
                                        });
                                        return {
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            children: before_last_child.childLocations.map(function (level3child) {
                                                var last_child = _this.getChildOrgunits(top_locations, level3child.uuid);
                                                visit_locations.push({
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid
                                                });
                                                return {
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    // children: facility.childLocations
                                                    children: last_child.childLocations.map(function (level4child) {
                                                        var facility = _this.getChildOrgunits(top_locations, level4child.uuid);
                                                        visit_locations.push({
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid
                                                        });
                                                        return {
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            // children: lastest.childLocations
                                                            children: facility.childLocations.map(function (level5child) {
                                                                var village = _this.getChildOrgunits(top_locations, level5child.uuid);
                                                                visit_locations.push({
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6,
                                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + facility.uuid + ";" + village.uuid
                                                                });
                                                                return {
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6
                                                                };
                                                            })
                                                        };
                                                    })
                                                };
                                            })
                                        };
                                    })
                                };
                            })
                        };
                        this.location_loading = false;
                        console.log(visit_locations);
                        return [2 /*return*/, visit_locations];
                }
            });
        });
    };
    InitiationsComponent.prototype.exportexcel = function (table, fileName) {
        /* table id is passed over here */
        var element = document.getElementById('' + table + '');
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_13__["writeFile"](wb, fileName);
    };
    InitiationsComponent.prototype.print = function () {
        window.print();
    };
    InitiationsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_9__["find"](orgunits, { uuid: uuid });
    };
    InitiationsComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"] }
    ]; };
    InitiationsComponent.propDecorators = {
        el1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea1',] }],
        el2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea2',] }],
        el3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea3',] }],
        el4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea4',] }]
    };
    InitiationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-initiations',
            template: _raw_loader_initiations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_initiations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]])
    ], InitiationsComponent);
    return InitiationsComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WDiv":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DiscontinuationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinuationsComponent", function() { return DiscontinuationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_discontinuations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./discontinuations.component.html */ "Zzfw");
/* harmony import */ var _discontinuations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discontinuations.component.scss */ "pBI0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/location.service */ "yHma");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/org-unit.service */ "n3tq");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/settings.service */ "6nr9");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);














highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_12___default()(highcharts__WEBPACK_IMPORTED_MODULE_10__);
var DiscontinuationsComponent = /** @class */ (function () {
    function DiscontinuationsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.location_loading = false;
        this.locations = [];
        this.values = [];
        this.card2Data = null;
        this.card1DataLoading = false;
        this.card3DataLoading = false;
        this.data_loading = false;
    }
    DiscontinuationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date(new Date().setDate(new Date().getDate() - 90));
        this.endDate = new Date(new Date().setDate(new Date().getDate() + 2));
        var start_date = new Date(this.startDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.endDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        this.start_date = start_date;
        this.end_date = end_date;
        var starting_location = localStorage.getItem('htmr-starting-location');
        this.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
            _this.orgunitName = _this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
            _this.updateCard1({ from_date: start_date, to_date: end_date, facilities: facilities });
            _this.updateCard3({ from_date: start_date, to_date: end_date, facilities: facilities });
        });
    };
    DiscontinuationsComponent.prototype.updateCards = function (filter) {
        this.orgunitName = filter.ouName;
        this.updateCard1Chart(filter);
        this.updateCard3Chart(filter);
    };
    DiscontinuationsComponent.prototype.updateCard1 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard1Chart(filter);
    };
    DiscontinuationsComponent.prototype.updateCard1Chart = function (filter) {
        var _this = this;
        this.card1DataLoading = true;
        var reportUrl = 'events_summary/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                var series = [{
                        name: 'Months',
                        data: data['family_planning_discontinuations'].map(function (item) { return item.value; })
                    }];
                var categories = data['family_planning_discontinuations'].map(function (item) { return item.month_name; });
                var chartConfig = _this.settingsService.drawChart(categories, series, 'Client Count', 'Family Planning Discontinuations' + (" from " + filter.from_date + " to " + filter.to_date + " for " + _this.orgunitName));
                highcharts__WEBPACK_IMPORTED_MODULE_10__["chart"]('card1Chart', chartConfig);
            }
            _this.card1DataLoading = false;
        }, function (error1) { return _this.card1DataLoading = false; });
    };
    DiscontinuationsComponent.prototype.updateCard3 = function (filter) {
        this.card3DataLoading = true;
        this.updateCard3Chart(filter);
    };
    DiscontinuationsComponent.prototype.updateCard3Chart = function (filter) {
        var _this = this;
        this.card3DataLoading = true;
        this.data_loading = true;
        var reportUrl = 'clients_families/';
        this.http.postDJANGOURL(reportUrl, filter)
            .subscribe(function (data) {
            if (data) {
                _this.values = data['clients'];
            }
            _this.card3DataLoading = false;
            _this.data_loading = false;
        }, function (error1) { return _this.card3DataLoading = false; });
    };
    // this method was coppied form the orguni component and is to be moved to service letter
    DiscontinuationsComponent.prototype.getLocation = function (starting_location) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_9__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
                        visit_locations = [];
                        visit_locations.push({
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            parents: ""
                        });
                        visit_location = {
                            name: visit_location.name,
                            id: visit_location.uuid,
                            level: 1,
                            children: visit_location.childLocations.map(function (location) {
                                var child_loc = _this.getChildOrgunits(top_locations, location.uuid);
                                visit_locations.push({
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    parents: "" + visit_location.uuid
                                });
                                return {
                                    name: child_loc.name,
                                    id: child_loc.uuid,
                                    level: 2,
                                    children: child_loc.childLocations.map(function (child) {
                                        var before_last_child = _this.getChildOrgunits(top_locations, child.uuid);
                                        visit_locations.push({
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            parents: visit_location.uuid + ";" + child_loc.uuid
                                        });
                                        return {
                                            name: before_last_child.name,
                                            id: before_last_child.uuid,
                                            level: 3,
                                            children: before_last_child.childLocations.map(function (level3child) {
                                                var last_child = _this.getChildOrgunits(top_locations, level3child.uuid);
                                                visit_locations.push({
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid
                                                });
                                                return {
                                                    name: last_child.name,
                                                    id: last_child.uuid,
                                                    level: 4,
                                                    // children: facility.childLocations
                                                    children: last_child.childLocations.map(function (level4child) {
                                                        var facility = _this.getChildOrgunits(top_locations, level4child.uuid);
                                                        visit_locations.push({
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid
                                                        });
                                                        return {
                                                            name: facility.name,
                                                            id: facility.uuid,
                                                            level: 5,
                                                            // children: lastest.childLocations
                                                            children: facility.childLocations.map(function (level5child) {
                                                                var village = _this.getChildOrgunits(top_locations, level5child.uuid);
                                                                visit_locations.push({
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6,
                                                                    parents: visit_location.uuid + ";" + child_loc.uuid + ";" + facility.uuid + ";" + village.uuid
                                                                });
                                                                return {
                                                                    name: village.name,
                                                                    id: village.uuid,
                                                                    level: 6
                                                                };
                                                            })
                                                        };
                                                    })
                                                };
                                            })
                                        };
                                    })
                                };
                            })
                        };
                        this.location_loading = false;
                        console.log(visit_locations);
                        return [2 /*return*/, visit_locations];
                }
            });
        });
    };
    DiscontinuationsComponent.prototype.exportexcel = function (table, fileName) {
        /* table id is passed over here */
        var element = document.getElementById('' + table + '');
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_13__["writeFile"](wb, fileName);
    };
    DiscontinuationsComponent.prototype.print = function () {
        window.print();
    };
    DiscontinuationsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_9__["find"](orgunits, { uuid: uuid });
    };
    DiscontinuationsComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"] }
    ]; };
    DiscontinuationsComponent.propDecorators = {
        el1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea1',] }],
        el2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea2',] }],
        el3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea3',] }],
        el4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['reportArea4',] }]
    };
    DiscontinuationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-discontinuations',
            template: _raw_loader_discontinuations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_discontinuations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]])
    ], DiscontinuationsComponent);
    return DiscontinuationsComponent;
}());



/***/ }),

/***/ "WFub":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvdmlkZXJzLXJlcG9ydC9mYWNpbGl0eS1yZWZlcnJhbC1yZXBvcnQvZmFjaWxpdHktcmVmZmVyYWwtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "WfBE":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * A search pipe to help to search items using thier property
 * just pass multiple properties using comma separated list
 * Usage: items | search:'obj_property_1,obj_property_2...,obj_property_n':searchValue
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term, strict) {
        if (strict === void 0) { strict = false; }
        if (!term) {
            return value;
        }
        if (typeof term === 'string') {
            if (strict) {
                return (value || [])
                    .filter(function (item) { return keys.split(',')
                    .some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gy')
                    .test(item[key]); }); });
            }
            else {
                return (value || [])
                    .filter(function (item) { return keys.split(',')
                    .some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi')
                    .test(item[key]); }); });
            }
        }
        else {
            var retValue_1 = [];
            term.forEach(function (t) {
                retValue_1 = retValue_1.concat((value || [])
                    .filter(function (item) { return keys.split(',')
                    .some(function (key) { return item.hasOwnProperty(key) && new RegExp(t, 'gi')
                    .test(item[key]); }); }));
            });
            return retValue_1;
        }
    };
    SearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "XIDP":
/*!********************************************************************************!*\
  !*** ./src/app/modules/reports/total-successful/total-successful.component.ts ***!
  \********************************************************************************/
/*! exports provided: TotalSuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalSuccessfulComponent", function() { return TotalSuccessfulComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_total_successful_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./total-successful.component.html */ "DSL8");
/* harmony import */ var _total_successful_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-successful.component.scss */ "Sj95");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TotalSuccessfulComponent = /** @class */ (function () {
    function TotalSuccessfulComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalSuccessfulComponent.prototype.ngOnInit = function () {
    };
    TotalSuccessfulComponent.ctorParameters = function () { return []; };
    TotalSuccessfulComponent.propDecorators = {
        jsonData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgUnitName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        report: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    TotalSuccessfulComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-total-successful',
            template: _raw_loader_total_successful_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_total_successful_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TotalSuccessfulComponent);
    return TotalSuccessfulComponent;
}());



/***/ }),

/***/ "XspS":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/summary-card/summary-card.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-stats-container img {\n  height: 45px;\n  margin-top: 15px;\n}\n\n.main-stats-container mat-card {\n  border-radius: 10px;\n}\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n\n.card-1:hover {\n  transform: scale(1.01);\n  border-radius: 20px;\n  box-shadow: 0 5px 21px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvc3VtbWFyeS1jYXJkL3N1bW1hcnktY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQVk7RUFDWixnQkFDRjtBQURBOztBQUdBO0VBQ0UsbUJBQW1CO0FBQXJCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQztBQUE3Qzs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixzREFBc0Q7RUFDdEQsZ0VBQWdFO0FBQWxFOztBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnSEFBb0c7QUFBdEciLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9zdW1tYXJ5LWNhcmQvc3VtbWFyeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbi1zdGF0cy1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4XG59XG5cbi5tYWluLXN0YXRzLWNvbnRhaW5lciBtYXQtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDUxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jYXJkLTEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLTE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAyMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xufVxuIl19 */");

/***/ }),

/***/ "XwFo":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProvidersRefferalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersRefferalReportComponent", function() { return ProvidersRefferalReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_providers_refferal_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./providers-refferal-report.component.html */ "3tDl");
/* harmony import */ var _providers_refferal_report_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers-refferal-report.component.scss */ "4ZGS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");







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
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { service_provider_name: chw ? chw.name : '' });
            });
        });
    };
    ProvidersRefferalReportComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"] }
    ]; };
    ProvidersRefferalReportComponent.propDecorators = {
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    ProvidersRefferalReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-providers-refferal-report',
            template: _raw_loader_providers_refferal_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]],
            styles: [_providers_refferal_report_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"]])
    ], ProvidersRefferalReportComponent);
    return ProvidersRefferalReportComponent;
}());



/***/ }),

/***/ "Y9Mv":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/save-area/save-area.component.ts ***!
  \********************************************************************/
/*! exports provided: SaveAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAreaComponent", function() { return SaveAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_save_area_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./save-area.component.html */ "zM26");
/* harmony import */ var _save_area_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-area.component.scss */ "U8zK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations/router-animation */ "fT3M");





var SaveAreaComponent = /** @class */ (function () {
    function SaveAreaComponent() {
        this.saveDisabled = false;
        this.confirmFirst = false;
        this.saveText = 'Save';
        this.saveIcon = 'save';
        this.cancelText = 'Cancel';
        this.showCancel = true;
        this.confirmText = 'Are you sure you want to perform this action?';
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.showConfirm = false;
    }
    SaveAreaComponent.prototype.onSave = function (sendRequest) {
        if (sendRequest === void 0) { sendRequest = false; }
        if (this.confirmFirst && sendRequest) {
            this.showConfirm = true;
        }
        else {
            this.save.emit();
        }
    };
    SaveAreaComponent.prototype.onClose = function () {
        this.cancel.emit();
    };
    SaveAreaComponent.ctorParameters = function () { return []; };
    SaveAreaComponent.propDecorators = {
        saveDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        confirmFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        saveText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        saveIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cancelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        showCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        confirmText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        save: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    SaveAreaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-save-area',
            template: _raw_loader_save_area_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_save_area_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SaveAreaComponent);
    return SaveAreaComponent;
}());



/***/ }),

/***/ "YXSp":
/*!********************************************************************!*\
  !*** ./src/app/modules/users/add-member/add-member.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvYWRkLW1lbWJlci9hZGQtbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "YyFi":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  margin: 5px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important;\n}\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLXN1bW1hcnkvaW5pdGlhdGlvbnMvaW5pdGlhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHNCQUFBO0VBQ0EsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCxnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFBO0VBQ0EsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC1zdW1tYXJ5L2luaXRpYXRpb25zL2luaXRpYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmlkLWNvbnRhaW5lcjEge1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIGdyaWQtZ2FwOiAxNXB4IDE1cHggIWltcG9ydGFudDtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC0xIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjVweDtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMzBweCwgMWZyKSlcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _modules_dashboard_summary_card_summary_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/dashboard/summary-card/summary-card.component */ "gmCK");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "M95H");
/* harmony import */ var _modules_providers_report_providers_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/providers-report/providers-report.component */ "20vP");
/* harmony import */ var _modules_providers_report_facility_referral_report_facility_refferal_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/providers-report/facility-referral-report/facility-refferal-report.component */ "M2DL");
/* harmony import */ var _modules_providers_report_inter_facility_refferal_report_inter_facility_refferal_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component */ "6CMu");
/* harmony import */ var _modules_providers_report_providers_refferal_report_providers_refferal_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/providers-report/providers-refferal-report/providers-refferal-report.component */ "XwFo");
/* harmony import */ var _modules_reports_reports_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/reports/reports.component */ "AzsU");
/* harmony import */ var _modules_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/settings/settings.component */ "I7x6");
/* harmony import */ var _modules_settings_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/settings/indicators/indicators.component */ "B+bl");
/* harmony import */ var _modules_settings_service_service_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/settings/service/service.component */ "7SI1");
/* harmony import */ var _modules_settings_reffereal_type_reffereal_type_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/settings/reffereal-type/reffereal-type.component */ "PCfH");
/* harmony import */ var _modules_settings_reffereal_feedback_reffereal_feedback_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/settings/reffereal-feedback/reffereal-feedback.component */ "FfVP");
/* harmony import */ var _modules_settings_registration_reason_registration_reason_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/settings/registration-reason/registration-reason.component */ "+dyC");
/* harmony import */ var _modules_dashboard_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/dashboard/card-filter/card-filter.component */ "Rw5e");
/* harmony import */ var _modules_settings_service_service_indicator_service_indicator_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/settings/service/service-indicator/service-indicator.component */ "GUdM");
/* harmony import */ var _modules_reports_total_registered_clients_total_registered_clients_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/reports/total-registered-clients/total-registered-clients.component */ "eaUc");
/* harmony import */ var _modules_reports_total_referrals_issued_total_referrals_issued_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/reports/total-referrals-issued/total-referrals-issued.component */ "/sPm");
/* harmony import */ var _modules_reports_total_successful_total_successful_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/reports/total-successful/total-successful.component */ "XIDP");
/* harmony import */ var _modules_reports_total_issued_lost_followup_total_issued_lost_followup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/reports/total-issued-lost-followup/total-issued-lost-followup.component */ "ClsM");
/* harmony import */ var _modules_reports_total_lost_followup_total_lost_followup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/reports/total-lost-followup/total-lost-followup.component */ "Tq6c");
/* harmony import */ var _modules_reports_total_failed_referrals_total_failed_referrals_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/reports/total-failed-referrals/total-failed-referrals.component */ "e4+3");
/* harmony import */ var _modules_reports_successful_maralia_referals_successful_maralia_referals_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/reports/successful-maralia-referals/successful-maralia-referals.component */ "7WbC");
/* harmony import */ var _modules_locations_locations_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modules/locations/locations.component */ "CeFl");
/* harmony import */ var _modules_locations_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modules/locations/add-location/add-location.component */ "il9S");
/* harmony import */ var _modules_users_users_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modules/users/users.component */ "5xsu");
/* harmony import */ var _modules_users_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modules/users/add-member/add-member.component */ "RgVK");
/* harmony import */ var _modules_users_team_info_team_info_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modules/users/team-info/team-info.component */ "eoDt");
/* harmony import */ var _modules_users_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/users/add-team/add-team.component */ "Lf37");
/* harmony import */ var _modules_users_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/users/update-member/update-member.component */ "0xG3");
/* harmony import */ var _modules_superset_superset_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/superset/superset.component */ "ywvp");
/* harmony import */ var _modules_fp_reports_issued_referrals_by_location_issued_referrals_by_location_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component */ "SdCi");
/* harmony import */ var _modules_fp_reports_issued_referrals_issued_referrals_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modules/fp-reports/issued-referrals/issued-referrals.component */ "NF+Y");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./change-password/change-password.component */ "0riC");
/* harmony import */ var _modules_fp_reports_total_family_planning_methods_issued_total_family_planning_methods_issued_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component */ "p68Z");
/* harmony import */ var _modules_fp_reports_citizen_card_report_citizen_card_report_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./modules/fp-reports/citizen-card-report/citizen-card-report.component */ "ZH7t");
/* harmony import */ var _modules_geomaps_geomaps_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./modules/geomaps/geomaps.component */ "b99G");
/* harmony import */ var _modules_geomaps_map_filter_map_filter_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./modules/geomaps/map-filter/map-filter.component */ "Nc2L");
/* harmony import */ var _modules_dashboard_dashboard_summary_referrals_referrals_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/referrals/referrals.component */ "KVCe");
/* harmony import */ var _modules_dashboard_dashboard_summary_clients_clients_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/clients/clients.component */ "/IrT");
/* harmony import */ var _modules_dashboard_dashboard_summary_initiations_initiations_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/initiations/initiations.component */ "VvU+");
/* harmony import */ var _modules_dashboard_dashboard_summary_discontinuations_discontinuations_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/discontinuations/discontinuations.component */ "WDiv");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _modules_dashboard_summary_card_summary_card_component__WEBPACK_IMPORTED_MODULE_10__["SummaryCardComponent"],
                _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _modules_providers_report_providers_report_component__WEBPACK_IMPORTED_MODULE_12__["ProvidersReportComponent"],
                _modules_providers_report_facility_referral_report_facility_refferal_report_component__WEBPACK_IMPORTED_MODULE_13__["FacilityRefferalReportComponent"],
                _modules_providers_report_inter_facility_refferal_report_inter_facility_refferal_report_component__WEBPACK_IMPORTED_MODULE_14__["InterFacilityRefferalReportComponent"],
                _modules_providers_report_providers_refferal_report_providers_refferal_report_component__WEBPACK_IMPORTED_MODULE_15__["ProvidersRefferalReportComponent"],
                _modules_reports_reports_component__WEBPACK_IMPORTED_MODULE_16__["ReportsComponent"],
                _modules_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
                _modules_settings_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_18__["IndicatorsComponent"],
                _modules_settings_service_service_component__WEBPACK_IMPORTED_MODULE_19__["ServiceComponent"],
                _modules_settings_reffereal_type_reffereal_type_component__WEBPACK_IMPORTED_MODULE_20__["RefferealTypeComponent"],
                _modules_settings_reffereal_feedback_reffereal_feedback_component__WEBPACK_IMPORTED_MODULE_21__["RefferealFeedbackComponent"],
                _modules_settings_registration_reason_registration_reason_component__WEBPACK_IMPORTED_MODULE_22__["RegistrationReasonComponent"],
                _modules_dashboard_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_23__["CardFilterComponent"],
                _modules_settings_service_service_indicator_service_indicator_component__WEBPACK_IMPORTED_MODULE_24__["ServiceIndicatorComponent"],
                _modules_reports_total_registered_clients_total_registered_clients_component__WEBPACK_IMPORTED_MODULE_25__["TotalRegisteredClientsComponent"],
                _modules_reports_total_referrals_issued_total_referrals_issued_component__WEBPACK_IMPORTED_MODULE_26__["TotalReferralsIssuedComponent"],
                _modules_reports_total_successful_total_successful_component__WEBPACK_IMPORTED_MODULE_27__["TotalSuccessfulComponent"],
                _modules_reports_total_issued_lost_followup_total_issued_lost_followup_component__WEBPACK_IMPORTED_MODULE_28__["TotalIssuedLostFollowupComponent"],
                _modules_reports_total_lost_followup_total_lost_followup_component__WEBPACK_IMPORTED_MODULE_29__["TotalLostFollowupComponent"],
                _modules_reports_total_failed_referrals_total_failed_referrals_component__WEBPACK_IMPORTED_MODULE_30__["TotalFailedReferralsComponent"],
                _modules_reports_successful_maralia_referals_successful_maralia_referals_component__WEBPACK_IMPORTED_MODULE_31__["SuccessfulMaraliaReferalsComponent"],
                _modules_locations_locations_component__WEBPACK_IMPORTED_MODULE_32__["LocationsComponent"],
                _modules_locations_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_33__["AddLocationComponent"],
                _modules_users_users_component__WEBPACK_IMPORTED_MODULE_34__["UsersComponent"],
                _modules_users_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_35__["AddMemberComponent"],
                _modules_users_team_info_team_info_component__WEBPACK_IMPORTED_MODULE_36__["TeamInfoComponent"],
                _modules_users_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_37__["AddTeamComponent"],
                _modules_users_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_38__["UpdateMemberComponent"],
                _modules_superset_superset_component__WEBPACK_IMPORTED_MODULE_39__["SupersetComponent"],
                _modules_fp_reports_issued_referrals_by_location_issued_referrals_by_location_component__WEBPACK_IMPORTED_MODULE_40__["IssuedReferralsByLocationComponent"],
                _modules_fp_reports_issued_referrals_issued_referrals_component__WEBPACK_IMPORTED_MODULE_41__["IssuedReferralsComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_42__["ChangePasswordComponent"],
                _modules_fp_reports_total_family_planning_methods_issued_total_family_planning_methods_issued_component__WEBPACK_IMPORTED_MODULE_43__["TotalFamilyPlanningMethodsIssuedComponent"],
                _modules_fp_reports_citizen_card_report_citizen_card_report_component__WEBPACK_IMPORTED_MODULE_44__["CitizenCardReportComponent"],
                _modules_geomaps_geomaps_component__WEBPACK_IMPORTED_MODULE_45__["GeomapsComponent"],
                _modules_geomaps_map_filter_map_filter_component__WEBPACK_IMPORTED_MODULE_46__["MapFilterComponent"],
                _modules_dashboard_dashboard_summary_referrals_referrals_component__WEBPACK_IMPORTED_MODULE_47__["ReferralsComponent"],
                _modules_dashboard_dashboard_summary_clients_clients_component__WEBPACK_IMPORTED_MODULE_48__["ClientsComponent"],
                _modules_dashboard_dashboard_summary_initiations_initiations_component__WEBPACK_IMPORTED_MODULE_49__["InitiationsComponent"],
                _modules_dashboard_dashboard_summary_discontinuations_discontinuations_component__WEBPACK_IMPORTED_MODULE_50__["DiscontinuationsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_51__["NgbModule"]
            ],
            entryComponents: [_modules_users_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_38__["UpdateMemberComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZH7t":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CitizenCardReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitizenCardReportComponent", function() { return CitizenCardReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_citizen_card_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./citizen-card-report.component.html */ "IrhX");
/* harmony import */ var _citizen_card_report_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./citizen-card-report.component.scss */ "gYaO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/dashboard/dashboard.component */ "M95H");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/location.service */ "yHma");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/settings.service */ "6nr9");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/excel-download.service */ "KQVd");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_15__);
















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
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_11__["ROUTE_ANIMATIONS_ELEMENTS"];
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
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_15__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_15__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_15__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_15__["writeFile"](wb, fileName);
    };
    CitizenCardReportComponent.prototype.getData = function () {
        var _this = this;
        this.data_loading = true;
        this.detailed_loading = true;
        var chw_uuid = this.selected_providers.map(function (provider) { return provider.id; });
        var start_date = new Date(this.start_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.end_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var starting_location = localStorage.getItem('htmr-starting-location');
        var dashboard = new _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"](this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
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
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { service_provider_name: chw ? chw.name : '' });
                });
            });
        });
    };
    CitizenCardReportComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"] },
        { type: _services_excel_download_service__WEBPACK_IMPORTED_MODULE_14__["ExcelDownloadService"] }
    ]; };
    CitizenCardReportComponent.propDecorators = {
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    CitizenCardReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-citizen-card-report',
            template: _raw_loader_citizen_card_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_citizen_card_report_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["Title"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"],
            _services_excel_download_service__WEBPACK_IMPORTED_MODULE_14__["ExcelDownloadService"]])
    ], CitizenCardReportComponent);
    return CitizenCardReportComponent;
}());



/***/ }),

/***/ "ZIPz":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/org-unit-filter.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrgUnitFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgUnitFilterComponent", function() { return OrgUnitFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_org_unit_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./org-unit-filter.component.html */ "Tb9U");
/* harmony import */ var _org_unit_filter_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./org-unit-filter.component.css */ "Goz+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-tree-component */ "rDsv");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/location.service */ "yHma");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var OrgUnitFilterComponent = /** @class */ (function () {
    function OrgUnitFilterComponent(orgunitService, locationService) {
        this.orgunitService = orgunitService;
        this.locationService = locationService;
        // the object that will carry the output value you can send one from outside to config start values
        this.orgunit_model = {
            selection_mode: 'orgUnit',
            selected_levels: [],
            show_update_button: true,
            selected_groups: [],
            orgunit_levels: [],
            orgunit_groups: [],
            selected_orgunits: [],
            user_orgunits: [],
            type: 'report',
            selected_user_orgunit: []
        };
        this.initial_usr_orgunit = [];
        // The organisation unit configuration object This will have to come from outside.
        this.orgunit_tree_config = {
            show_search: true,
            search_text: 'Search',
            level: null,
            loading: true,
            loading_message: 'Loading Organisation units...',
            multiple: true,
            multiple_key: 'none',
            placeholder: 'Select Location'
        };
        this.showUpdate = false;
        this.pickChildren = true;
        this.onOrgUnitUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onOrgUnitChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onOrgUnitModelUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.orgUnit = {};
        this.root_url = '../../../';
        this.nodes = null;
        this.orgunit_levels = [];
        this.visit_locations = [];
        this.organisationunits = [];
        this.selected_orgunits = [];
        this.current_orgunits = [];
        // this variable controls the visibility of of the tree
        this.showOrgTree = true;
        this.user_orgunits_types = [
            { id: 'USER_ORGUNIT', name: 'User orgunit', shown: true },
            { id: 'USER_ORGUNIT_CHILDREN', name: 'User sub-units', shown: true },
            { id: 'USER_ORGUNIT_GRANDCHILDREN', name: 'User sub-x2-units', shown: true }
        ];
        this.onEvent = function ($event) { return console.log($event); };
        if (!this.orgunit_tree_config.hasOwnProperty('multiple_key')) {
            this.orgunit_tree_config.multiple_key = 'none';
        }
    }
    OrgUnitFilterComponent.prototype.updateModelOnSelect = function (data) {
        if (!this.orgunit_model.show_update_button) {
            this.onOrgUnitUpdate.emit({ name: 'ou', value: data.id });
            this.displayOrgTree();
        }
    };
    OrgUnitFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.orgunit_tree_config.multiple) {
            if (this.orgunit_tree_config.multiple_key === 'none') {
                var actionMapping = {
                    mouse: {
                        dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_EXPANDED,
                        click: function (node, tree, $event) { return angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event); }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
            else if (this.orgunit_tree_config.multiple_key === 'control') { // multselect using control key
                var actionMapping = {
                    mouse: {
                        click: function (node, tree, $event) {
                            $event.ctrlKey
                                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event);
                        }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
            else if (this.orgunit_tree_config.multiple_key === 'shift') { // multselect using shift key
                var actionMapping = {
                    mouse: {
                        click: function (node, tree, $event) {
                            $event.shiftKey
                                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event);
                        }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
        }
        else {
            var actionMapping = {
                mouse: {
                    dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_EXPANDED,
                    click: function (node, tree, $event) { return angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event); }
                }
            };
            this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
        }
        // if (this.orgunitService.nodes === null) {
        this.locationService.loadTreeLocations().subscribe((function (locations) {
            // get top level locations
            var top_locations = locations;
            // filter down to remain with only visit facilities
            var starting_location = localStorage.getItem('htmr-starting-location');
            var visit_location = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
            _this.visit_locations.push({
                //Level 1
                name: visit_location.name,
                id: visit_location.uuid,
                level: 1,
                parents: ""
            });
            visit_location = {
                name: visit_location.name,
                id: visit_location.uuid,
                level: 1,
                children: visit_location.childLocations.map(function (location) {
                    var child_loc = _this.getChildOrgunits(locations, location.uuid);
                    _this.visit_locations.push({
                        //Level 2
                        name: child_loc.name,
                        id: child_loc.uuid,
                        level: 2,
                        parents: "" + visit_location.uuid
                    });
                    return {
                        name: child_loc.name,
                        id: child_loc.uuid,
                        level: 2,
                        children: child_loc.childLocations.map(function (child) {
                            var before_last_child = _this.getChildOrgunits(locations, child.uuid);
                            _this.visit_locations.push({
                                //Level 3
                                name: before_last_child.name,
                                id: before_last_child.uuid,
                                level: 3,
                                parents: visit_location.uuid + ";" + child_loc.uuid
                            });
                            return {
                                name: before_last_child.name,
                                id: before_last_child.uuid,
                                level: 3,
                                children: before_last_child.childLocations.map(function (level3child) {
                                    var last_child = _this.getChildOrgunits(locations, level3child.uuid);
                                    _this.visit_locations.push({
                                        //Level 4
                                        name: last_child.name,
                                        id: last_child.uuid,
                                        level: 4,
                                        parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid
                                    });
                                    return {
                                        name: last_child.name,
                                        id: last_child.uuid,
                                        level: 4,
                                        // children: facility.childLocations
                                        children: last_child.childLocations.map(function (level4child) {
                                            var facility = _this.getChildOrgunits(top_locations, level4child.uuid);
                                            _this.visit_locations.push({
                                                //Level 5
                                                name: facility.name,
                                                id: facility.uuid,
                                                level: 5,
                                                parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid
                                            });
                                            return {
                                                name: facility.name,
                                                id: facility.uuid,
                                                level: 5,
                                                children: facility.childLocations.map(function (level5child) {
                                                    var village = _this.getChildOrgunits(top_locations, level5child.uuid);
                                                    _this.visit_locations.push({
                                                        //Level 6
                                                        name: village.name,
                                                        id: village.uuid,
                                                        level: 6,
                                                        parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid + facility.uuid + ";"
                                                    });
                                                    return {
                                                        name: village.name,
                                                        id: village.uuid,
                                                        level: 6
                                                    };
                                                })
                                            };
                                        })
                                    };
                                })
                            };
                        })
                    };
                })
            };
            _this.organisationunits = [visit_location];
            _this.orgunitService.nodes = [visit_location];
            _this.nodes = [visit_location];
            _this.orgunit_tree_config.loading = false;
            _this.orgunitService.visit_locations = _this.visit_locations;
            for (var _i = 0, _a = _this.current_orgunits; _i < _a.length; _i++) {
                var active_orgunit = _a[_i];
                _this.activateNode(active_orgunit, _this.orgtree, true);
            }
        }));
        // } else {
        //   this.organisationunits = this.orgunitService.nodes;
        //   this.orgunit_tree_config.loading = false;
        //   this.visit_locations = this.orgunitService.visit_locations;
        // }
        // if (this.orgunitService.nodes === null) {
        //   this.orgunitService.getOrgunitLevelsInformation()
        //     .subscribe(
        //       (data: any) => {
        //         // assign urgunit levels and groups to variables
        //         this.orgunit_model.orgunit_levels = data.organisationUnitLevels;
        //         // setting organisation groups
        //         this.orgunitService.getOrgunitGroups().subscribe( groups => {//noinspection TypeScriptUnresolvedVariable
        //           this.orgunit_model.orgunit_groups = groups;
        //         });
        //
        //         // identify currently logged in usser
        //         this.orgunitService.getUserInformation(this.orgunit_model.type).subscribe(
        //           userOrgunit => {
        //             const level = this.orgunitService.getUserHighestOrgUnitlevel( userOrgunit );
        //             this.orgunit_model.user_orgunits = this.orgunitService.getUserOrgUnits( userOrgunit );
        //             this.orgunitService.user_orgunits = this.orgunitService.getUserOrgUnits( userOrgunit );
        //             const all_levels = data.pager.total;
        //             const orgunits = this.orgunitService.getuserOrganisationUnitsWithHighestlevel( level, userOrgunit );
        //             const use_level = parseInt(all_levels) - (parseInt(level) - 1);
        //             // load inital orgiunits to speed up loading speed
        //             this.orgunitService.getInitialOrgunitsForTree(orgunits).subscribe(
        //               (initial_data) => {
        //                 this.organisationunits = initial_data;
        //                 // a hack to make sure the user orgunit is not triggered on the first time
        //                 this.initial_usr_orgunit = [{id: 'USER_ORGUNIT', name: 'User org unit'}];
        //                 // after done loading initial organisation units now load all organisation units
        //                 const fields = this.orgunitService.generateUrlBasedOnLevels(use_level);
        //                 this.orgunitService.getAllOrgunitsForTree1(fields, orgunits).subscribe(
        //                   items => {
        //                     items[0].expanded = true;
        //                     this.organisationunits = items;
        //
        //                     this.orgunit_tree_config.loading = false;
        //                     // activate organisation units
        //                     for (const active_orgunit of this.orgunit_model.selected_orgunits) {
        //                       this.activateNode(active_orgunit.id, this.orgtree, true);
        //                     }
        //                     if (this.orgunit_model.selected_user_orgunit.length !== 0) {
        //                       this.emit(false);
        //                     }
        //                     // backup to make sure that always there is default organisation unit
        //                     // if (this.orgunit_model.selected_orgunits.length === 0 && this.orgunit_model.selected_user_orgunit.length === 0) {
        //                     //   for (const active_orgunit of this.orgunit_model.user_orgunits) {
        //                     //     this.activateNode(active_orgunit.id, this.orgtree, true);
        //                     //   }
        //                     // }
        //                     this.prepareOrganisationUnitTree(this.organisationunits, 'parent');
        //                   },
        //                   error => {
        //                     console.log('something went wrong while fetching Organisation units');
        //                     this.orgunit_tree_config.loading = false;
        //                   }
        //                 );
        //               },
        //               error => {
        //                 console.log('something went wrong while fetching Organisation units');
        //                 this.orgunit_tree_config.loading = false;
        //               }
        //             );
        //
        //           }
        //         );
        //       }
        //     );
    };
    OrgUnitFilterComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["find"](orgunits, { uuid: uuid });
    };
    OrgUnitFilterComponent.prototype.updateOrgunits = function () {
        this.displayOrgTree();
        this.emit(true);
    };
    OrgUnitFilterComponent.prototype.clearAll = function () {
        for (var _i = 0, _a = this.orgunit_model.selected_orgunits; _i < _a.length; _i++) {
            var active_orgunit = _a[_i];
            this.deActivateNode(active_orgunit.id, this.orgtree, null);
        }
    };
    OrgUnitFilterComponent.prototype.setType = function (type) {
        this.orgunit_model.selection_mode = type;
        if (type !== 'orgUnit') {
            this.orgunit_model.selected_user_orgunit = [];
        }
        if (type !== 'Level') {
            this.orgunit_model.selected_levels = [];
        }
        if (type !== 'Group') {
            this.orgunit_model.selected_groups = [];
        }
    };
    // display Orgunit Tree
    OrgUnitFilterComponent.prototype.displayOrgTree = function () {
        this.showOrgTree = !this.showOrgTree;
    };
    OrgUnitFilterComponent.prototype.filterNodes = function (value, tree) {
        tree.treeModel.filterNodes(function (node) {
            return !node.data.name.startsWith(value);
        });
    };
    OrgUnitFilterComponent.prototype.activateNode = function (nodeId, nodes, first) {
        setTimeout(function () {
            var node = nodes.treeModel.getNodeById(nodeId);
            if (node) {
                node.setIsActive(true, true);
            }
            if (first) {
                node.toggleExpanded();
            }
        }, 0);
    };
    // a method to activate the model
    OrgUnitFilterComponent.prototype.deActivateNode = function (nodeId, nodes, event) {
        setTimeout(function () {
            var node = nodes.treeModel.getNodeById(nodeId);
            if (node) {
                node.setIsActive(false, true);
            }
        }, 0);
        if (event !== null) {
            event.stopPropagation();
        }
    };
    // check if orgunit already exist in the orgunit display list
    OrgUnitFilterComponent.prototype.checkOrgunitAvailabilty = function (orgunit, array) {
        var checker = false;
        array.forEach(function (value) {
            if (value.id === orgunit.id) {
                checker = true;
            }
        });
        return checker;
    };
    // action to be called when a tree item is deselected(Remove item in array of selected items
    OrgUnitFilterComponent.prototype.deactivateOrg = function ($event) {
        var _this = this;
        // this.period_selector.reset();
        if (this.orgunit_model.selection_mode === 'Usr_orgUnit') {
            this.orgunit_model.selection_mode = 'orgUnit';
            // this.period_selector.reset();
        }
        this.orgunit_model.selected_orgunits.forEach(function (item, index) {
            if ($event.node.data.id === item.id) {
                _this.orgunit_model.selected_orgunits.splice(index, 1);
            }
        });
        this.emit(false);
        // $event.node.isFocused = false;
    };
    // add item to array of selected items when item is selected
    OrgUnitFilterComponent.prototype.activateOrg = function ($event) {
        if (this.orgunit_model.selection_mode === 'Usr_orgUnit') {
            this.orgunit_model.selection_mode = 'orgUnit';
            // this.period_selector.reset();
        }
        if (!this.checkOrgunitAvailabilty($event.node.data, this.orgunit_model.selected_orgunits)) {
            this.orgunit_model.selected_orgunits.push({
                id: $event.node.data.id,
                name: $event.node.data.name,
                level: $event.node.data.level
            });
        }
        this.orgUnit = $event.node.data;
        this.emit(false);
    };
    OrgUnitFilterComponent.prototype.emit = function (showUpdate) {
        console.log({
            visit_locations: this.visit_locations,
            starting_name: this.getProperPreOrgunitName(),
            items: this.orgunit_model.selected_orgunits,
            name: 'ou',
            value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
        });
        if (showUpdate) {
            this.onOrgUnitUpdate.emit({
                visit_locations: this.visit_locations,
                starting_name: this.getProperPreOrgunitName(),
                items: this.orgunit_model.selected_orgunits,
                name: 'ou',
                value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
            });
        }
        else {
            this.onOrgUnitChange.emit({
                visit_locations: this.visit_locations,
                starting_name: this.getProperPreOrgunitName(),
                items: this.orgunit_model.selected_orgunits,
                name: 'ou',
                value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
            });
        }
    };
    // set selected groups
    OrgUnitFilterComponent.prototype.setSelectedGroups = function (selected_groups) {
        this.orgunit_model.selected_groups = selected_groups;
        this.onOrgUnitModelUpdate.emit(this.orgunit_model);
    };
    // set selected groups
    OrgUnitFilterComponent.prototype.setSelectedUserOrg = function (selected_user_orgunit) {
        this.orgunit_model.selected_user_orgunit = selected_user_orgunit;
        this.emit(false);
    };
    // set selected groups
    OrgUnitFilterComponent.prototype.setSelectedLevels = function (selected_levels) {
        this.orgunit_model.selected_levels = selected_levels;
        this.emit(false);
    };
    OrgUnitFilterComponent.prototype.prepareOrganisationUnitTree = function (organisationUnit, type) {
        var _this = this;
        if (type === void 0) { type = 'top'; }
        if (type === 'top') {
            if (organisationUnit.children) {
                organisationUnit.children.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                });
                organisationUnit.children.forEach(function (child) {
                    _this.prepareOrganisationUnitTree(child, 'top');
                });
            }
        }
        else {
            organisationUnit.forEach(function (orgunit) {
                if (orgunit.children) {
                    orgunit.children.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    });
                    orgunit.children.forEach(function (child) {
                        _this.prepareOrganisationUnitTree(child, 'top');
                    });
                }
            });
        }
    };
    // prepare a proper name for updating the organisation unit display area.
    OrgUnitFilterComponent.prototype.getProperPreOrgunitName = function () {
        var name = '';
        if (this.orgunit_model.selection_mode === 'Group') {
            name = (this.orgunit_model.selected_groups.length === 0) ? '' : this.orgunit_model.selected_groups.map(function (group) { return group.name; }).join(', ') + ' in';
        }
        else if (this.orgunit_model.selected_user_orgunit.length !== 0) {
            name = (this.orgunit_model.selected_user_orgunit.length === 0) ? '' : this.orgunit_model.selected_user_orgunit.map(function (level) { return level.name; }).join(', ');
        }
        else if (this.orgunit_model.selection_mode === 'Level') {
            name = (this.orgunit_model.selected_levels.length === 0) ? '' : this.orgunit_model.selected_levels.map(function (level) { return level.name; }).join(', ') + ' in';
        }
        else {
            name = '';
        }
        return name;
    };
    // get user organisationunit name
    OrgUnitFilterComponent.prototype.getOrgUnitName = function (id) {
        var orgunit = this.orgtree.treeModel.getNodeById(id);
        return orgunit.name;
    };
    // a function to prepare a list of organisation units for analytics
    OrgUnitFilterComponent.prototype.getOrgUnitsForAnalytics = function (orgunit_model, with_children) {
        var orgUnits = [];
        var organisation_unit_analytics_string = '';
        if (orgunit_model.selected_user_orgunit.length !== 0) {
            orgunit_model.selected_user_orgunit.forEach(function (orgunit) {
                organisation_unit_analytics_string += orgunit.id + ';';
            });
        }
        else {
            // if there is only one organisation unit selected
            if (orgunit_model.selected_orgunits.length === 1) {
                var detailed_orgunit = this.orgtree.treeModel.getNodeById(orgunit_model.selected_orgunits[0].id);
                orgUnits.push(detailed_orgunit.id);
            }
            else {
                orgunit_model.selected_orgunits.forEach(function (orgunit) {
                    orgUnits.push(orgunit.id);
                });
            }
            if (orgunit_model.selection_mode === 'orgUnit') {
            }
            if (orgunit_model.selection_mode === 'Level') {
                orgunit_model.selected_levels.forEach(function (level) {
                    organisation_unit_analytics_string += 'LEVEL-' + level.level + ';';
                });
            }
            if (orgunit_model.selection_mode === 'Group') {
                orgunit_model.selected_groups.forEach(function (group) {
                    organisation_unit_analytics_string += 'OU_GROUP-' + group.id + ';';
                });
            }
        }
        return organisation_unit_analytics_string + orgUnits.join(';');
    };
    OrgUnitFilterComponent.ctorParameters = function () { return [
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] }
    ]; };
    OrgUnitFilterComponent.propDecorators = {
        orgunit_model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        showUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        pickChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        onOrgUnitUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onOrgUnitChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onOrgUnitModelUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        orgtree: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['orgtree', { static: true },] }],
        current_orgunits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    OrgUnitFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-org-unit-filter',
            template: _raw_loader_org_unit_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_org_unit_filter_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_org_unit_service__WEBPACK_IMPORTED_MODULE_5__["OrgUnitService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]])
    ], OrgUnitFilterComponent);
    return OrgUnitFilterComponent;
}());



/***/ }),

/***/ "ZeMP":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <div class=\"container-fluid\">\n      <form [formGroup]=\"submitForm\">\n        <!--         English Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> English Name</mat-label>\n            <input\n              formControlName=\"desc\"\n              matInput\n              required\n              placeholder=\"English Name\">\n            <mat-error *ngIf=\"!submitForm.get('desc').valid && submitForm.get('desc').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Swahili Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Swahili Name</mat-label>\n            <input\n              formControlName=\"descSw\"\n              matInput\n              required\n              placeholder=\"Swahili Name\">\n            <mat-error *ngIf=\"!submitForm.get('descSw').valid && submitForm.get('descSw').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--    Refereal type-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Referral Type</mat-label>\n            <mat-select formControlName=\"referralType\" placeholder=\"Referral Type\">\n              <mat-option *ngFor=\"let item of referral_types\" [value]=\"item.referralTypeId\">\n                {{ item.referralTypeName }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"!submitForm.get('referralType').valid && submitForm.get('referralType').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <div class=\"col-sm-12\">\n          <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n          <app-save-area\n            *ngIf=\"!loading\"\n            @fadeIn\n            [saveDisabled]=\"submitForm.invalid || saving_data\"\n            (save)=\"save(submitForm.value)\"\n            (cancel)=\"closeForm()\"\n            [confirmFirst]=\"true\"\n            [confirmText]=\"'Confirm Saving Information?'\"\n          ></app-save-area>\n        </div>\n      </form>\n    </div>\n\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "Zhtk":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnAtcmVwb3J0cy90b3RhbC1mYW1pbHktcGxhbm5pbmctbWV0aG9kcy1pc3N1ZWQvdG90YWwtZmFtaWx5LXBsYW5uaW5nLW1ldGhvZHMtaXNzdWVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Zzfw":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n        title=\"Family Planning Discontinuations\"\n        image=\"fa fa-user\"\n        [viewDetails]=\"false\"\n        [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n        <app-loader [message]=\"'Loading Discontinuation Report...'\"></app-loader>\n      </div>\n    </div>\n\n\n    <div class=\"grid-container\">\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                      id=\"card1Chart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <!--      <mat-grid-list cols=\"1\" rowHeight=\"1000px\">-->\n      <!--        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">-->\n      <!--          <mat-card class=\"dashboard-card\">-->\n      <!--            <mat-card-content class=\"dashboard-card-content\">-->\n      <!--              <div class=\"col\">-->\n      <!--                <h4>Registered Users from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>-->\n\n      <!--                <button (click)=\"exportexcel('summary-table', 'Registered Clients.xlsx')\" mat-raised-button class=\"pull-right no-print\">-->\n      <!--                  <img src=\"assets/img/csv.png\" style=\"height: 26px\">-->\n      <!--                </button>-->\n      <!--                <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">-->\n      <!--                  <img src=\"assets/img/print.png\" style=\"height: 26px\">-->\n      <!--                </button>-->\n\n      <!--                <table class=\"table table-bordered\" id='summary-table'>-->\n      <!--                  <tr>-->\n      <!--                    <th>Full Name</th>-->\n      <!--                    <th>Gender</th>-->\n      <!--                    <th>Birth Date</th>-->\n      <!--                    <th>Phone Number</th>-->\n      <!--                  </tr>-->\n      <!--                  <tr *ngFor=\"let data of values\">-->\n      <!--                    <td>{{ data.first_name }} {{ data.middle_name }} {{data.last_name }}</td>-->\n      <!--                    <td>{{ data.gender }}</td>-->\n      <!--                    <td>{{ data.birth_date }}</td>-->\n      <!--                    <td>{{ data.phone_number }}</td>-->\n      <!--                  </tr>-->\n      <!--                </table>-->\n      <!--              </div>-->\n      <!--              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"16\"></app-placeholder>-->\n\n      <!--            </mat-card-content>-->\n      <!--          </mat-card>-->\n\n      <!--        </mat-grid-tile>-->\n      <!--      </mat-grid-list>-->\n    </div>\n  </ng-container>\n</app-table-form>\n\n");

/***/ }),

/***/ "adsu":
/*!*****************************************************************!*\
  !*** ./src/app/modules/settings/service/service.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3Mvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "b3UF":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvcmVmZmVyZWFsLWZlZWRiYWNrL3JlZmZlcmVhbC1mZWVkYmFjay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "b831":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/chw-locations/chw-locations.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tree-node-active > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n}\n\n.toggle-children {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.tree-node-expanded > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg) !important;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=);\n}\n\n.tree-node-collapsed > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n}\n\n.tree-node-active.tree-node-focused > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n  font-weight: bold;\n}\n\n.tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover {\n  box-shadow: none !important;\n}\n\n.show_items {\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: left;\n  cursor: pointer;\n  border: 1px solid #c6c6c6;\n  padding: 14px 8px;\n  font-size: 14px;\n  min-height: 45px !important;\n  border-radius: 7px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: rgba(45, 105, 165, 0.1);\n  background-image: linear-gradient(rgba(45, 105, 165, 0.1), rgba(45, 105, 165, 0.2));\n  width: 100%;\n  height: 45px;\n}\n\n.show_items span,\n.show_items small {\n  cursor: pointer;\n}\n\n.show_tops {\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  /*cursor: pointer;*/\n  border: 1px solid #c6c6c6;\n  /*padding: 8px 8px;*/\n  font-size: 14px;\n  min-height: 38px !important;\n  border-radius: 4px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: #fff;\n  background-image: linear-gradient(#fff, #f7f7f7);\n  width: 7%;\n  height: 34px;\n}\n\n.arrows:hover {\n  transform: scale(1.001, 1.001);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.tree-view {\n  text-align: left;\n  background-color: #d7e3f7;\n  position: absolute;\n  z-index: 9999;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  min-width: 370px;\n  margin-right: 30px;\n  max-height: 360px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 45px;\n}\n\n.additional-options {\n  text-align: left;\n  background-color: #fff;\n  position: absolute;\n  z-index: 999;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  min-width: 420px;\n  margin-right: 13px;\n  max-height: 400px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 38px;\n  right: 0px;\n}\n\n.scorecard_table {\n  margin-bottom: 3px;\n  font-size: 9px;\n  border: 1px solid #ddd;\n  border-spacing: 0;\n  border-collapse: collapse;\n  display: table;\n}\n\n.pointer label {\n  cursor: pointer;\n}\n\n.tree-area {\n  max-height: 250px;\n  min-height: 250px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area {\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area {\n  overflow: auto;\n}\n\n.tree-area1 {\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area1:hover {\n  overflow: auto;\n}\n\n.hiddenTree {\n  display: none;\n}\n\n.tree-area::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-area::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\n.tree-area::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n}\n\n.tree-area1::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-area1::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\n.tree-area1::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n}\n\n.tree-view::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-view::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\n.tree-view::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n}\n\n.tree-view input {\n  border-radius: 2px;\n  border: 1px solid #ccc;\n  height: 26px;\n  font-size: 14px;\n  width: 100%;\n  padding-left: 7px;\n  box-sizing: border-box;\n  color: #888;\n  margin: 0 0 8px;\n}\n\nspan.selected-item {\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 1px;\n  padding: 3px 5px 3px 5px;\n  margin-right: 2px;\n  cursor: text;\n  font-size: 11px;\n}\n\n.selected-item-close {\n  width: 20px;\n  cursor: pointer;\n  font-weight: 700;\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  font-size: xx-small;\n}\n\n/* dhis2 Styling structure*/\n\n#tree_view .tree-node-active > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n}\n\n#tree_view .toggle-children {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#tree_view .tree-node-expanded > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg) !important;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=);\n}\n\n#tree_view .tree-node-collapsed > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n}\n\n#tree_view .tree-node-active.tree-node-focused > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n  font-weight: bold;\n}\n\n#tree_view .tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover {\n  box-shadow: none !important;\n}\n\n.close-area {\n  border-top: 1px solid blanchedalmond;\n  padding-top: 5px;\n}\n\n@media print {\n  .no-print * {\n    display: none;\n  }\n  .no-print {\n    display: none;\n  }\n  .orgUnitName {\n    min-width: 130px;\n    height: 35px;\n    max-height: 35px;\n    font-size: 9px;\n  }\n  .table-bordered td {\n    /*border-top: 0.1em;*/\n  }\n  .legendItem {\n    width: 200px;\n    float: left;\n  }\n}\n\n/*scorecard indicator details*/\n\n.indicator_details {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  /*display: none;*/\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: opacity .15s linear;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.indicator_dialog {\n  width: 86%;\n  margin: 100px 7% auto 7%;\n}\n\n.indicator-content {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  outline: 0;\n  min-height: 200px;\n  padding: 10px;\n}\n\n.hide_no_group {\n  display: none;\n}\n\ntable * {\n  line-height: 80%;\n}\n\n.subtotal {\n  width: 90px;\n  max-width: 90px;\n}\n\n.indicator_title {\n  font-size: 10px;\n  width: 90px;\n  max-width: 90px;\n  overflow-wrap: break-word;\n  cursor: pointer;\n  line-height: 140%;\n}\n\n.list-group-item {\n  padding: 5px 15px;\n}\n\n.removeorgunit {\n  cursor: pointer;\n  border: 1px solid rgba(95, 158, 160, 0.1);\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.someclass {\n  color: rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.node-content-wrapper-focused {\n  background-color: white !important;\n}\n\n.group-image {\n  height: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2h3LWxvY2F0aW9ucy9jaHctbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFRQUFxUTtFQUNyUSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMseVBBQXlQO0FBQzNQOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFRQUFxUTtBQUN2UTs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsMkJBQTJCO0FBRTdCOztBQUtBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBRXRCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlDQUFzQztFQUN0QyxtRkFBNEU7RUFDNUUsV0FBVztFQUNYLFlBQVk7QUFGZDs7QUFLQTs7RUFFRSxlQUFlO0FBRmpCOztBQUtBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLG9CQUFBO0VBQ0EsZUFBZTtFQUNmLDJCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFFdEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdEQUErQztFQUMvQyxTQUFTO0VBQ1QsWUFBWTtBQUZkOztBQUtBO0VBQ0UsOEJBQThCO0VBRTlCLHVDQUFvQztFQUNwQyxxQ0FBa0M7QUFGcEM7O0FBS0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUNBQW9DO0VBQ3BDLGtCQUFrQjtFQUVsQiwyQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFGbEI7O0FBS0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUNBQW9DO0VBQ3BDLGtCQUFrQjtFQUVsQiwyQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUZaOztBQUtBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0FBRmhCOztBQUtBO0VBQ0UsZUFBZTtBQUZqQjs7QUFLQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFGYjs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQURiOztBQUdBO0VBQ0UsY0FBYztBQUFoQjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUFiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7QUFFZjs7QUFDQTtFQUNFLFVBQVU7QUFFWjs7QUFDQTtFQUNFLG9EQUFpRDtFQUNqRCxtQkFBbUI7QUFFckI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0RBQWlEO0FBRW5EOztBQUNBO0VBQ0UsVUFBVTtBQUVaOztBQUNBO0VBQ0Usb0RBQWlEO0VBQ2pELG1CQUFtQjtBQUVyQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvREFBaUQ7QUFFbkQ7O0FBQ0E7RUFDRSxVQUFVO0FBRVo7O0FBQ0E7RUFDRSxvREFBaUQ7RUFDakQsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9EQUFpRDtBQUVuRDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBR2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUVqQjs7QUFBQTtFQUNFLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7QUFHakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFFckI7O0FBRUEsMkJBQUE7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscVFBQXFRO0VBQ3JRLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5UEFBeVA7QUFDM1A7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscVFBQXFRO0FBQ3ZROztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFFN0I7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBRWxCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztFQUFoQjtFQUVBO0lBQ0UscUJBQUE7RUFBRjtFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFBYjtBQUNGOztBQUlBLDhCQUFBOztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsaUJBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLFVBQVU7RUFHViwrQkFBK0I7RUFDL0Isb0NBQWdDO0FBRGxDOztBQUlBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUQxQjs7QUFHQTtFQUVFLHlDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLG9DQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0FBQWY7O0FBR0E7RUFDRSxhQUFhO0FBQWY7O0FBR0E7RUFDRSxnQkFBZ0I7QUFBbEI7O0FBR0E7RUFDRSxXQUFVO0VBQUMsZUFBZTtBQUM1Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFVO0VBQ1YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQ0Y7QUFDQTs7QUFDQTtFQUNFLGlCQUNGO0FBQ0E7O0FBQUE7RUFDRSxlQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFHcEI7O0FBREE7RUFDRSx5QkFBc0I7RUFDdEIsb0NBQWlDO0FBSW5DOztBQUZBO0VBQ0Usa0NBQWlDO0FBS25DOztBQUZBO0VBQ0UsWUFBWTtBQUtkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2h3LWxvY2F0aW9ucy9jaHctbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyZWUtbm9kZS1hY3RpdmUgPiAubm9kZS1jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZS1jaGlsZHJlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQUlBQUFCdjg1RkhBQUFBQjNSSlRVVUgxQWdGRnlzZm9NUUtBd0FBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFFRkpSRUZVZU5wamJHaG9ZTUFCV0lDNHZyNGVVNkt4c1pFSm1jL0l5SWpNWldMQURWalFkRUFZLy8vL1I4aEJPRUFKQ0lPd21TaHl5SnFnWmdLZGkxVWZBRTFaRWgwMktNN09BQUFBQUVsRlRrU3VRbUNDKTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnRyZWUtbm9kZS1leHBhbmRlZCA+IC50b2dnbGUtY2hpbGRyZW4td3JhcHBlciA+IC50b2dnbGUtY2hpbGRyZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFKQ0FJQUFBQnY4NUZIQUFBQUIzUkpUVVVIMUFnRkZ5c1RxWEpHS0FBQUFBbHdTRmx6QUFBTEVnQUFDeElCMHQxKy9BQUFBRGRKUkVGVWVOcGpiR2hvWU1BQldJQzR2cjRlVTZLeHNaR0pBVGZBSjhjQ29SZ1pHWkZGLy8vL2o1Q0RjRWd3azVCOVFPZGlsUU1BcngwTUdyWEpxQzhBQUFBQVNVVk9SSzVDWUlJPSk7XG5cbn1cbi50cmVlLW5vZGUtY29sbGFwc2VkID4gLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyID4gLnRvZ2dsZS1jaGlsZHJlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFKQ0FJQUFBQnY4NUZIQUFBQUIzUkpUVVVIMUFnRkZ5c2ZvTVFLQXdBQUFBbHdTRmx6QUFBTEVnQUFDeElCMHQxKy9BQUFBRUZKUkVGVWVOcGpiR2hvWU1BQldJQzR2cjRlVTZLeHNaRUptYy9JeUlqTVpXTEFEVmpRZEVBWS8vLy9SOGhCT0VBSkNJT3dtU2h5eUpxZ1pnS2RpMVVmQUUxWkVoMDJLTTdPQUFBQUFFbEZUa1N1UW1DQyk7XG5cbn1cbi50cmVlLW5vZGUtYWN0aXZlLnRyZWUtbm9kZS1mb2N1c2VkID4gLm5vZGUtY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRyZWUtbm9kZS1hY3RpdmUgPiAubm9kZS1jb250ZW50LXdyYXBwZXIsIC50cmVlLW5vZGUtZm9jdXNlZCA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciwgLm5vZGUtY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udHJlZS1pbnB1dCB7XG5cbn1cblxuLnNob3dfaXRlbXN7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2O1xuICBwYWRkaW5nOiAxNHB4IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtaW4taGVpZ2h0OiA0NXB4IWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBjb2xvcjogIzU1NTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsMTA1LDE2NSwwLjEpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg0NSwxMDUsMTY1LDAuMSkscmdiYSg0NSwxMDUsMTY1LDAuMikpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uc2hvd19pdGVtcyBzcGFuLFxuLnNob3dfaXRlbXMgc21hbGwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaG93X3RvcHN7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKmN1cnNvcjogcG9pbnRlcjsqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2O1xuICAvKnBhZGRpbmc6IDhweCA4cHg7Ki9cbiAgZm9udC1zaXplOiAxNHB4O1xuICBtaW4taGVpZ2h0OiAzOHB4IWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzU1NTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZmLCNmN2Y3ZjcpO1xuICB3aWR0aDogNyU7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLmFycm93czpob3ZlcntcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSwgMS4wMDEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDUpO1xufVxuXG4udHJlZS12aWV3IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTNmNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbiAgbWluLXdpZHRoOiAzNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4uYWRkaXRpb25hbC1vcHRpb25zIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xuICBtaW4td2lkdGg6IDQyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5zY29yZWNhcmRfdGFibGV7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnBvaW50ZXIgbGFiZWx7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRyZWUtYXJlYXtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi50cmVlLWFyZWF7XG4gIG1heC1oZWlnaHQ6IDIxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi50cmVlLWFyZWF7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udHJlZS1hcmVhMXtcbiAgbWF4LWhlaWdodDogMjEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRyZWUtYXJlYTE6aG92ZXJ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmhpZGRlblRyZWV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50cmVlLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLnRyZWUtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udHJlZS1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi50cmVlLWFyZWExOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi50cmVlLWFyZWExOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50cmVlLWFyZWExOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi50cmVlLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLnRyZWUtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udHJlZS12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi50cmVlLXZpZXcgaW5wdXR7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAyNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjODg4O1xuICBtYXJnaW46IDAgMCA4cHg7XG59XG5zcGFuLnNlbGVjdGVkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgcGFkZGluZzogM3B4IDVweCAzcHggNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBmb250LXNpemU6IDExcHg7XG5cbn1cblxuLnNlbGVjdGVkLWl0ZW0tY2xvc2Uge1xuICB3aWR0aDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHh4LXNtYWxsO1xufVxuXG5cbi8qIGRoaXMyIFN0eWxpbmcgc3RydWN0dXJlKi9cbiN0cmVlX3ZpZXcgLnRyZWUtbm9kZS1hY3RpdmUgPiAubm9kZS1jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuI3RyZWVfdmlldyAudG9nZ2xlLWNoaWxkcmVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNmb01RS0F3QUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQUVGSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkVKbWMvSXlJak1aV0xBRFZqUWRFQVkvLy8vUjhoQk9FQUpDSU93bVNoeXlKcWdaZ0tkaTFVZkFFMVpFaDAyS003T0FBQUFBRWxGVGtTdVFtQ0MpO1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDlweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4jdHJlZV92aWV3IC50cmVlLW5vZGUtZXhwYW5kZWQgPiAudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXIgPiAudG9nZ2xlLWNoaWxkcmVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNUcVhKR0tBQUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQURkSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkdKQVRmQUo4Y0NvUmdaR1pGRi8vLy9qNUNEY0Vnd2s1QjlRT2RpbFFNQXJ4ME1HclhKcUM4QUFBQUFTVVZPUks1Q1lJST0pO1xuXG59XG4jdHJlZV92aWV3IC50cmVlLW5vZGUtY29sbGFwc2VkID4gLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyID4gLnRvZ2dsZS1jaGlsZHJlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFKQ0FJQUFBQnY4NUZIQUFBQUIzUkpUVVVIMUFnRkZ5c2ZvTVFLQXdBQUFBbHdTRmx6QUFBTEVnQUFDeElCMHQxKy9BQUFBRUZKUkVGVWVOcGpiR2hvWU1BQldJQzR2cjRlVTZLeHNaRUptYy9JeUlqTVpXTEFEVmpRZEVBWS8vLy9SOGhCT0VBSkNJT3dtU2h5eUpxZ1pnS2RpMVVmQUUxWkVoMDJLTTdPQUFBQUFFbEZUa1N1UW1DQyk7XG5cbn1cbiN0cmVlX3ZpZXcgLnRyZWUtbm9kZS1hY3RpdmUudHJlZS1ub2RlLWZvY3VzZWQgPiAubm9kZS1jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jdHJlZV92aWV3IC50cmVlLW5vZGUtYWN0aXZlID4gLm5vZGUtY29udGVudC13cmFwcGVyLCAudHJlZS1ub2RlLWZvY3VzZWQgPiAubm9kZS1jb250ZW50LXdyYXBwZXIsIC5ub2RlLWNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNsb3NlLWFyZWF7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFuY2hlZGFsbW9uZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuXG5AbWVkaWEgcHJpbnQge1xuICAubm8tcHJpbnQgKntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5uby1wcmludHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm9yZ1VuaXROYW1le1xuICAgIG1pbi13aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1heC1oZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbiAgLnRhYmxlLWJvcmRlcmVkIHRke1xuICAgIC8qYm9yZGVyLXRvcDogMC4xZW07Ki9cbiAgfVxuICAubGVnZW5kSXRlbXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxufVxuXG4vKnNjb3JlY2FyZCBpbmRpY2F0b3IgZGV0YWlscyovXG4uaW5kaWNhdG9yX2RldGFpbHN7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICAvKmRpc3BsYXk6IG5vbmU7Ki9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xufVxuXG4uaW5kaWNhdG9yX2RpYWxvZ3tcbiAgd2lkdGg6IDg2JTtcbiAgbWFyZ2luOiAxMDBweCA3JSBhdXRvIDclO1xufVxuLmluZGljYXRvci1jb250ZW50IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsLjUpO1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsLjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3V0bGluZTogMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5oaWRlX25vX2dyb3Vwe1xuICBkaXNwbGF5OiBub25lO1xufVxuXG50YWJsZSAqIHtcbiAgbGluZS1oZWlnaHQ6IDgwJTtcbn1cblxuLnN1YnRvdGFse1xuICB3aWR0aDo5MHB4O21heC13aWR0aDogOTBweDtcbn1cbi5pbmRpY2F0b3JfdGl0bGV7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6OTBweDtcbiAgbWF4LXdpZHRoOiA5MHB4O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlXG59XG5cbi5saXN0LWdyb3VwLWl0ZW17XG4gIHBhZGRpbmc6IDVweCAxNXB4XG59XG4ucmVtb3Zlb3JndW5pdHtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTUsIDE1OCwgMTYwLCAwLjEpO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuLnNvbWVjbGFzc3tcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xufVxuLm5vZGUtY29udGVudC13cmFwcGVyLWZvY3VzZWR7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbn1cblxuLmdyb3VwLWltYWdle1xuICBoZWlnaHQ6IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "b99G":
/*!******************************************************!*\
  !*** ./src/app/modules/geomaps/geomaps.component.ts ***!
  \******************************************************/
/*! exports provided: GeomapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeomapsComponent", function() { return GeomapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_geomaps_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./geomaps.component.html */ "vu+Z");
/* harmony import */ var _geomaps_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geomaps.component.scss */ "zn6E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/location.service */ "yHma");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/org-unit.service */ "n3tq");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/settings.service */ "6nr9");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_11__);












highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_11___default()(highcharts__WEBPACK_IMPORTED_MODULE_9__);
var GeomapsComponent = /** @class */ (function () {
    function GeomapsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.markersLayer = new leaflet__WEBPACK_IMPORTED_MODULE_4__["LayerGroup"]();
        this.card1DataLoading = false;
        this.data_loading = false;
    }
    GeomapsComponent.prototype.ngAfterViewInit = function () {
        this.initMap();
    };
    GeomapsComponent.prototype.initMap = function () {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_4__["map"]('map', {
            zoom: 7
        });
        this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_4__["LatLng"](-6.3690, 35.7516));
        var tiles = leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    };
    GeomapsComponent.prototype.updateMap = function (filter) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var reportUrl;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.data_loading = true;
                this.markersLayer.clearLayers();
                reportUrl = 'map_summary/';
                this.http.postDJANGOURL(reportUrl, filter)
                    .subscribe(function (data) {
                    if (data) {
                        _this.data_loading = false;
                        var icon = new leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]();
                        var blueIcon = new leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]({
                            iconUrl: 'assets/img/blue.png',
                            iconSize: [40, 40]
                        });
                        // var redMarker = L.AwesomeMarkers.icon({
                        //   icon: 'coffee',
                        //   markerColor: 'red',
                        //   prefix: 'fa'
                        // });
                        var redIcon = new leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]({
                            iconUrl: 'assets/img/red.png',
                            iconSize: [40, 40]
                        });
                        var greenIcon = new leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]({
                            iconUrl: 'assets/img/green.png',
                            iconSize: [40, 40]
                        });
                        var blackIcon = new leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"]({
                            iconUrl: 'assets/img/black.png',
                            iconSize: [40, 40]
                        });
                        var coordinates = {
                            Latitude: {
                                'Ugalla Ward': -5.4707,
                                'Tongwe Ward': -5.3331,
                                'Bitale Ward': -4.7667,
                                'Kagunga Ward': -4.4907,
                                'Kalinzi Ward': -4.6058,
                                'Mkigo Ward': -4.4941,
                                'Mkongoro Ward': -1.3308,
                                'Mwamgongo Ward': -4.6243,
                                'Mwandiga Ward': -4.8254,
                                'Nyarubanda Ward': -4.5677,
                                'Simbo Ward': -4.8944,
                                'Ziwani Ward': -4.3799,
                                'Ilagala Ward': -5.1925,
                                'Sunuka Ward': -5.3489,
                            },
                            Longitude: {
                                'Ugalla Ward': 31.0954,
                                'Tongwe Ward': 31.9529,
                                'Bitale Ward': 29.6833,
                                'Kagunga Ward': 29.6833,
                                'Kalinzi Ward': 29.7292,
                                'Mkigo Ward': 29.7562,
                                'Mkongoro Ward': 33.8760,
                                'Mwamgongo Ward': 29.6398,
                                'Mwandiga Ward': 29.6586,
                                'Nyarubanda Ward': 29.7485,
                                'Simbo Ward': 29.7455,
                                'Ziwani Ward': 29.7886,
                                'Ilagala Ward': 29.8381,
                                'Sunuka Ward': 29.7878,
                            },
                        };
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var village = data_1[_i];
                            var villageName = village["village_name"];
                            var villageValue = village["value"];
                            var villageCoordinateCheck = coordinates.Latitude["" + villageName + ""];
                            if (villageValue < 10) {
                                icon = redIcon;
                            }
                            if (villageValue > 10 && villageValue <= 50) {
                                icon = blueIcon;
                            }
                            if (villageValue > 50) {
                                icon = greenIcon;
                            }
                            if (villageCoordinateCheck != undefined) {
                                _this.marker = leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"]([
                                    coordinates.Latitude["" + villageName + ""],
                                    coordinates.Longitude["" + villageName + ""]
                                ], { title: "" + villageName + " : " + villageValue + " ", icon: leaflet__WEBPACK_IMPORTED_MODULE_4__["Icon"].Default, alt: "Village Value", draggable: false });
                                _this.markersLayer.addLayer(_this.marker);
                                _this.markersLayer.addTo(_this.map);
                            }
                        }
                    }
                    _this.card1DataLoading = false;
                }, function (error1) { return _this.card1DataLoading = false; });
                return [2 /*return*/];
            });
        });
    };
    GeomapsComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] },
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"] },
        { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"] }
    ]; };
    GeomapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-map',
            template: _raw_loader_geomaps_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_geomaps_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_8__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"]])
    ], GeomapsComponent);
    return GeomapsComponent;
}());



/***/ }),

/***/ "bKwC":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy90b3RhbC1mYWlsZWQtcmVmZXJyYWxzL3RvdGFsLWZhaWxlZC1yZWZlcnJhbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.main-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n\nmat-nav-list img {\n  height: 20px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n}\n\nmat-nav-list {\n  padding-top: 1px;\n}\n\n.active-menu {\n  border-radius: 0px !important;\n  background-color: rgba(0, 0, 0, 0.08) !important;\n  color: black !important;\n  border-right: 2px solid #3F997B !important;\n}\n\n.active-menu img {\n  height: 26px;\n}\n\n.sidenav {\n  width: 240px;\n  box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.14);\n}\n\n.sidenav .mat-toolbar {\n  background: #3F997B;\n}\n\n.mat-toolbar .mat-primary {\n  position: absolute;\n  top: 0;\n  z-index: 1;\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.mat-drawer-side {\n  border: 0px !important;\n}\n\n.mat-list-base .mat-list-item, .mat-list-base .mat-list-option {\n  display: block;\n  height: 60px !important;\n  width: 100%;\n  padding: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n\n.mat-list-base .mat-list-item:hover, .mat-list-base .mat-list-option:hover {\n  transform: scale(1.03);\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: black !important;\n  border-right: 4px solid #3F997B !important;\n}\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 80px !important;\n}\n\n.smt {\n  font-size: 20px !important;\n}\n\n.item {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: rgba(45, 105, 165, 0.1);\n  padding-top: 20px;\n  padding-bottom: 20px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFHQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQXBCOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQWxCOztBQUdBO0VBQ0UsNkJBQTRCO0VBQzVCLGdEQUE0QztFQUM1Qyx1QkFBc0I7RUFDdEIsMENBQXlDO0FBQTNDOztBQUpBO0VBT0ksWUFBWTtBQUNoQjs7QUFHQTtFQUNFLFlBQVk7RUFDWiwyQ0FBMkM7QUFBN0M7O0FBR0E7RUFFRSxtQkFBbUI7QUFEckI7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7QUFEWjs7QUFJQTtFQUNFO21EQURpRDtFQUdqRCxjQUFjO0FBRGhCOztBQUlBO0VBQ0Usc0JBQXNCO0FBRHhCOztBQUlBO0VBQ0UsY0FBYztFQUNkLHVCQUFzQjtFQUN0QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGdFQUE2RDtBQUQvRDs7QUFJQTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBeUI7RUFDekIsMkJBQTBCO0VBQzFCLHVCQUFzQjtFQUN0QiwwQ0FBeUM7QUFEM0M7O0FBSUE7RUFDRSx1QkFBc0I7QUFEeEI7O0FBSUE7RUFDRSwwQkFBeUI7QUFEM0I7O0FBS0E7RUFDRSwyQ0FBd0M7RUFDeEMseUNBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtBQUZqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1haW4tbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG5cbm1hdC1uYXYtbGlzdCBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5tYXQtbmF2LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uYWN0aXZlLW1lbnUge1xuICBib3JkZXItcmFkaXVzOiAwcHghaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDgpIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzNGOTk3QiFpbXBvcnRhbnQ7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDI2cHg7XG59XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDI0MHB4O1xuICBib3gtc2hhZG93OiAxcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpXG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIC8vIGJhY2tncm91bmQ6ICMwMjc3YmQ7XG4gIGJhY2tncm91bmQ6ICMzRjk5N0I7XG59XG5cbi5tYXQtdG9vbGJhciAubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0sIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA2MHB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtOmhvdmVyLCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMzRjk5N0IhaW1wb3J0YW50O1xufVxuXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogODBweCFpbXBvcnRhbnQ7XG59XG5cbi5zbXQge1xuICBmb250LXNpemU6IDIwcHghaW1wb3J0YW50O1xufVxuXG5cbi5pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwxMDUsMTY1LDAuMSk7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dKvg":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-registered-clients/total-registered-clients.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy90b3RhbC1yZWdpc3RlcmVkLWNsaWVudHMvdG90YWwtcmVnaXN0ZXJlZC1jbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "dO0u":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n<h5>{{ message || \"Updating Information...\" }}</h5>\n");

/***/ }),

/***/ "e4+3":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TotalFailedReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalFailedReferralsComponent", function() { return TotalFailedReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_total_failed_referrals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./total-failed-referrals.component.html */ "wHzu");
/* harmony import */ var _total_failed_referrals_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-failed-referrals.component.scss */ "bKwC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TotalFailedReferralsComponent = /** @class */ (function () {
    function TotalFailedReferralsComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalFailedReferralsComponent.prototype.ngOnInit = function () {
    };
    TotalFailedReferralsComponent.ctorParameters = function () { return []; };
    TotalFailedReferralsComponent.propDecorators = {
        jsonData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgUnitName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        report: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    TotalFailedReferralsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-total-failed-referrals',
            template: _raw_loader_total_failed_referrals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_total_failed_referrals_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TotalFailedReferralsComponent);
    return TotalFailedReferralsComponent;
}());



/***/ }),

/***/ "eaUc":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-registered-clients/total-registered-clients.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TotalRegisteredClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalRegisteredClientsComponent", function() { return TotalRegisteredClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_total_registered_clients_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./total-registered-clients.component.html */ "OCw3");
/* harmony import */ var _total_registered_clients_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-registered-clients.component.scss */ "dKvg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/excel-download.service */ "KQVd");






var TotalRegisteredClientsComponent = /** @class */ (function () {
    function TotalRegisteredClientsComponent(excelService) {
        this.excelService = excelService;
        this.jsonData = [];
        this.startDate = '';
        this.orgUnitName = '';
        this.rows = [];
        this.visibleRows = [];
        this.visibleColumns = [];
        this.searchRows = '';
        this.searchColumns = '';
        this.hiddenColumns = [];
        this.hiddenRows = [];
        this.columns = [
            'JUMLA ME',
            'JUMLA KE',
            'CHINI YA MWAKA MMOJA ME',
            'CHINI YA MWAKA MMOJA KE',
            'MIAKA 1-5 ME',
            'MIAKA 1-5 KE',
            'MIAKA 6 - 9 ME',
            'MIAKA 6 - 9 KE',
            'MIAKA 10 - 14 ME',
            'MIAKA 10 - 14 KE',
            'MIAKA 15 - 19 ME',
            'MIAKA 15 - 19 KE',
            'MIAKA 20 - 24 ME',
            'MIAKA 20 - 24 KE',
            'MIAKA 25 - 49 ME',
            'MIAKA 25 - 49 KE',
            'MIAKA 50 - 59 ME',
            'MIAKA 50 - 59 KE',
            'MIAKA 60+ ME',
            'MIAKA 60+ KE',
        ];
        this.totals = {};
    }
    TotalRegisteredClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rows = this.jsonData.map(function (item) { return item.itemName; });
        this.jsonData.forEach(function (item) {
            _this.totals.totalMale = _this.addToNUmber(_this.totals.totalMale, item.totalMale);
            _this.totals.totalFemale = _this.addToNUmber(_this.totals.totalFemale, item.totalFemale);
            _this.totals.lessThan1Male = _this.addToNUmber(_this.totals.lessThan1Male, item.lessThan1Male);
            _this.totals.lessThan1Female = _this.addToNUmber(_this.totals.lessThan1Female, item.lessThan1Female);
            _this.totals.oneTofiveMale = _this.addToNUmber(_this.totals.oneTofiveMale, item.oneTofiveMale);
            _this.totals.oneTofiveFemale = _this.addToNUmber(_this.totals.oneTofiveFemale, item.oneTofiveFemale);
            _this.totals.sixToNineMale = _this.addToNUmber(_this.totals.sixToNineMale, item.sixToNineMale);
            _this.totals.sixToNineFemale = _this.addToNUmber(_this.totals.sixToNineFemale, item.sixToNineFemale);
            _this.totals.tenToFourteenMale = _this.addToNUmber(_this.totals.tenToFourteenMale, item.tenToFourteenMale);
            _this.totals.tenToFourteenFemale = _this.addToNUmber(_this.totals.tenToFourteenFemale, item.tenToFourteenFemale);
            _this.totals.fifteenToNineteenMale = _this.addToNUmber(_this.totals.fifteenToNineteenMale, item.fifteenToNineteenMale);
            _this.totals.fifteenToNineteenFemale = _this.addToNUmber(_this.totals.fifteenToNineteenFemale, item.fifteenToNineteenFemale);
            _this.totals.twentyToTwentyFourMale = _this.addToNUmber(_this.totals.twentyToTwentyFourMale, item.twentyToTwentyFourMale);
            _this.totals.twentyToTwentyFourFemale = _this.addToNUmber(_this.totals.twentyToTwentyFourFemale, item.twentyToTwentyFourFemale);
            _this.totals.twentyFiveToFourtyNineMale = _this.addToNUmber(_this.totals.twentyFiveToFourtyNineMale, item.twentyFiveToFourtyNineMale);
            _this.totals.twentyFiveToFourtyNineFemale = _this.addToNUmber(_this.totals.twentyFiveToFourtyNineFemale, item.twentyFiveToFourtyNineFemale);
            _this.totals.fiftyToFiftyNineMale = _this.addToNUmber(_this.totals.fiftyToFiftyNineMale, item.fiftyToFiftyNineMale);
            _this.totals.fiftyToFiftyNineFemale = _this.addToNUmber(_this.totals.fiftyToFiftyNineFemale, item.fiftyToFiftyNineFemale);
            _this.totals.aboveSixtyMale = _this.addToNUmber(_this.totals.aboveSixtyMale, item.aboveSixtyMale);
            _this.totals.aboveSixtyFemale = _this.addToNUmber(_this.totals.aboveSixtyFemale, item.aboveSixtyFemale);
        });
        this.visibleColumns = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.columns);
        this.visibleRows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
    };
    TotalRegisteredClientsComponent.prototype.addToNUmber = function (prev, next) {
        var sum = 0;
        if (prev) {
            if (next) {
                sum = parseInt(prev + '', 10) + parseInt(next + '', 10);
            }
            else {
                sum = parseInt(prev + '', 10);
            }
        }
        else if (next) {
            sum = next;
        }
        return sum;
    };
    TotalRegisteredClientsComponent.prototype.changeRows = function (event) {
        var _this = this;
        this.hiddenRows = this.rows.filter(function (item) { return !_this.visibleRows.includes(item); });
    };
    TotalRegisteredClientsComponent.prototype.changeColumn = function (event) {
        var _this = this;
        this.hiddenColumns = this.columns.filter(function (item) { return !_this.visibleColumns.includes(item); });
    };
    TotalRegisteredClientsComponent.prototype.print = function () {
        window.print();
    };
    TotalRegisteredClientsComponent.prototype.downloadExcel = function () {
        var startDate = new Date(this.startDate).toISOString().substr(0, 10);
        var endDate = new Date(this.endDate).toISOString().substr(0, 10);
        this.excelService.download1(this.report.name + " from " + startDate + " to " + endDate + " for " + this.orgUnitName, this.dataTable.nativeElement);
    };
    TotalRegisteredClientsComponent.ctorParameters = function () { return [
        { type: _services_excel_download_service__WEBPACK_IMPORTED_MODULE_5__["ExcelDownloadService"] }
    ]; };
    TotalRegisteredClientsComponent.propDecorators = {
        jsonData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgUnitName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        report: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        main_title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        dataTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dataTable', { static: true },] }]
    };
    TotalRegisteredClientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-total-registered-clients',
            template: _raw_loader_total_registered_clients_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"], _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeOut"]],
            styles: [_total_registered_clients_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_excel_download_service__WEBPACK_IMPORTED_MODULE_5__["ExcelDownloadService"]])
    ], TotalRegisteredClientsComponent);
    return TotalRegisteredClientsComponent;
}());



/***/ }),

/***/ "ekQ/":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/providers-report/providers-report.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n image=\"pie-chart\"\n [title]=\"title\"\n [hideAdd]=\"true\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link\n         *ngFor=\"let link of navLinks\"\n         [routerLink]=\"link.link\"\n         (click)=\"title = link.label\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{link.label}}\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "eoDt":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/team-info/team-info.component.ts ***!
  \****************************************************************/
/*! exports provided: TeamInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamInfoComponent", function() { return TeamInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_team_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./team-info.component.html */ "rAJv");
/* harmony import */ var _team_info_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-info.component.scss */ "EUrl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/team.service */ "GDbA");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _update_member_update_member_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../update-member/update-member.component */ "0xG3");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");









var TeamInfoComponent = /** @class */ (function () {
    function TeamInfoComponent(teamService, http, dialog, userService) {
        this.teamService = teamService;
        this.http = http;
        this.dialog = dialog;
        this.userService = userService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.tableConfigurations = {
            tableColumns: [
                { name: 'identifier', label: 'Identifier' },
                { name: 'display', label: 'Name' },
                { name: 'age', label: 'Age' },
                { name: 'gender', label: 'Gender' },
                { name: 'teamRole', label: 'Team Role' },
                { name: 'locationNames', label: 'Location' },
            ],
            tableCaption: '',
            tableNotifications: '',
            showSearch: true,
            showBorder: true,
            allowPagination: true,
            actionIcons: { edit: false, delete: false, more: false, print: false },
            doneLoading: false,
            deleting: {},
            active: {},
            empty_msg: 'No Members for '
        };
        this.members = [];
    }
    TeamInfoComponent.prototype.ngOnInit = function () {
        if (this.team && this.team.teamMembers) {
            this.tableConfigurations.empty_msg = "No members for " + this.team.display;
            this.members = this.team.teamMembers.map(function (member) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, member), { id: member.uuid, gender: member.person ? member.person.gender : '', age: member.person ? member.person.age : '', teamRole: member.teamRole ? member.teamRole.display : '', locationNames: member.locations && member.locations.length > 0
                        ? member.locations.map(function (location) { return location.display; }).join(', ')
                        : '' });
            });
        }
    };
    TeamInfoComponent.prototype.onUpdate = function (event) {
        var dialogRef = this.dialog.open(_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_7__["UpdateMemberComponent"], {
            width: '70%',
            data: {
                member: event,
                team: this.team,
                teamRoles: this.teamRoles
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    TeamInfoComponent.prototype.onDelete = function (item) {
        var _this = this;
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
        this.teamService.deleteTeamMember(item).subscribe(function (resut) {
            _this.tableConfigurations.deleting = {};
            _this.http.showSuccess('Deleted Successful');
            _this.userService.deletePerson(item.person).subscribe();
            _this.saved.emit();
            _this.members = _this.members.filter(function (member) { return member.uuid !== item.uuid; });
        }, function (error1) {
            _this.tableConfigurations.deleting = {};
            _this.http.showError('Something went wrong while deleting');
        });
    };
    TeamInfoComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    TeamInfoComponent.ctorParameters = function () { return [
        { type: _services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
    ]; };
    TeamInfoComponent.propDecorators = {
        team: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        teamRoles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        saved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    TeamInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-team-info',
            template: _raw_loader_team_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_team_info_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
    ], TeamInfoComponent);
    return TeamInfoComponent;
}());



/***/ }),

/***/ "ewzc":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/users/users.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  [animationSize]=\"animationSize\"\n  [smallForm]=\"smallForm\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [formTitle]=\"formTitle\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [loadingMessage]=\"loadingMessage\"\n      [tableList]=\"teams\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n      (rowCustomPrimary)=\"addMember($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <app-add-team\n      (close)=\"closeForm()\"\n      [team]=\"currentTeam\"\n      *ngIf=\"view_data == 'addData'\"\n    ></app-add-team>\n    <app-team-info\n      [teamRoles]=\"teamRoles\"\n      [team]=\"currentTeam\"\n      (saved)=\"prepareTeamWithMembers()\"\n      (close)=\"closeForm()\"\n      *ngIf=\"view_data == 'moreDetails'\"\n    ></app-team-info>\n    <app-add-member\n      [roles]=\"roles\"\n      (close)=\"closeForm()\"\n      (saved)=\"prepareTeamWithMembers()\"\n      [teamRoles]=\"teamRoles\"\n      [team]=\"currentTeam\"\n      *ngIf=\"view_data == 'addMember'\"\n    ></app-add-member>\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "fNEv":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard-summary/clients/clients.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n        title=\"Registered Clients\"\n        image=\"fa fa-user\"\n        [viewDetails]=\"false\"\n        [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n        <app-loader [message]=\"'Loading Client Report...'\"></app-loader>\n      </div>\n    </div>\n\n\n    <div class=\"grid-container\">\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                      id=\"cardClientsChart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <mat-grid-list cols=\"1\" rowHeight=\"1000px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n              <div class=\"col\">\n                <h4>Registered Users from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>\n\n                <button (click)=\"exportexcel('summary-table', 'Registered Clients.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n                  <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n                </button>\n                <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n                  <img src=\"assets/img/print.png\" style=\"height: 26px\">\n                </button>\n\n                <table class=\"table table-bordered\" id='summary-table'>\n                  <tr>\n                    <th>Full Name</th>\n                    <th>Gender</th>\n                    <th>Birth Date</th>\n                    <th>Phone Number</th>\n                  </tr>\n                  <tr *ngFor=\"let data of values\">\n                    <td>{{ data.first_name }} {{ data.middle_name }} {{data.last_name }}</td>\n                    <td>{{ data.gender }}</td>\n                    <td>{{ data.birth_date }}</td>\n                    <td>{{ data.phone_number }}</td>\n                  </tr>\n                </table>\n              </div>\n              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n\n            </mat-card-content>\n          </mat-card>\n\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </ng-container>\n</app-table-form>\n\n");

/***/ }),

/***/ "fS4Z":
/*!**************************************************************************!*\
  !*** ./src/app/modules/users/update-member/update-member.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvdXBkYXRlLW1lbWJlci91cGRhdGUtbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "fT3M":
/*!*******************************************************!*\
  !*** ./src/app/shared/animations/router-animation.ts ***!
  \*******************************************************/
/*! exports provided: ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, isRouteAnimationsAll, isRouteAnimationsNone, isRouteAnimationsPage, isRouteAnimationsElements, fadeIn, fadeSmooth, fadeOut, fadeInOut, listStateTrigger, listState, listAnimation, itemAnimation, tableSize, formSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_ANIMATIONS_ELEMENTS", function() { return ROUTE_ANIMATIONS_ELEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return routeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsAll", function() { return isRouteAnimationsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsNone", function() { return isRouteAnimationsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsPage", function() { return isRouteAnimationsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsElements", function() { return isRouteAnimationsElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeSmooth", function() { return fadeSmooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listStateTrigger", function() { return listStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listState", function() { return listState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAnimation", function() { return listAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemAnimation", function() { return itemAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableSize", function() { return tableSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSize", function() { return formSize; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations.service */ "Emfe");


var ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';
var STEPS_ALL = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter > *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, position: 'fixed' }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-3%)', opacity: 0 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
        ], { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
    ]), { optional: true })
];
var STEPS_NONE = [];
var STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
var STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
var routeAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsAll, STEPS_ALL),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsNone, STEPS_NONE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsPage, STEPS_PAGE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsElements, STEPS_ELEMENTS)
]);
function isRouteAnimationsAll() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('ALL');
}
function isRouteAnimationsNone() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('NONE');
}
function isRouteAnimationsPage() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('PAGE');
}
function isRouteAnimationsElements() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('ELEMENTS');
}
var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)', opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 })))
]);
var fadeSmooth = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeSmooth', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.3 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ])
]);
var fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
]);
var fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
]);
var listStateTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateY(15%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        offset: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translateY(0)'
                    }))
                ])
            ])
        ], { optional: true })
    ])
]);
var listState = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateY(15%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        offset: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translateY(0)'
                    }))
                ])
            ])
        ], { optional: true })
    ])
]);
var listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 })], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '*' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 }))
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                offset: 1
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0)'
            }))
        ])
    ]), { optional: true })
], { params: { time: '.6s ease' } });
var itemAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.item', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.item', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(300, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    offset: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateY(0)'
                }))
            ])
        ])
    ], { optional: true })
], { params: { time: '.6s ease' } });
var tableSize = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('tableSize', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('eighty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '62%',
        'margin-right': '2%',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('sixty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '42%',
        'margin-right': '2%',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('largeForm', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '23%',
        'margin-right': '2%',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '0%',
        'margin-right': '0%',
        opacity: '0',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '100%',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('eighty <=> hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('sixty <=> hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('largeForm <=> hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('full <=> hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
]);
var formSize = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('formSize', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('twenty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '36%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('sixty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '56%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('largeForm', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '75%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '100%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '0px',
        float: 'left',
        display: 'none',
        transform: 'scale(0, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('twenty => zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0, 0)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('zero => twenty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '36%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1, 1)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('sixty => zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0, 0)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('zero => sixty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '56%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1, 1)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('largeForm => zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0, 0)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('zero => largeForm', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '75%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1, 1)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('full => zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0, 0)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('zero => full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1, 1)' }))
    ]))
]);


/***/ }),

/***/ "fr54":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/reports.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n image=\"pie-chart\"\n [title]=\"title\"\n [hideAdd]=\"true\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link\n         *ngFor=\"let link of navLinks\"\n         [routerLink]=\"link.link\"\n         (click)=\"title = link.label\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{link.label}}\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "gYaO":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnAtcmVwb3J0cy9jaXRpemVuLWNhcmQtcmVwb3J0L2NpdGl6ZW4tY2FyZC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gkM4":
/*!*************************************************!*\
  !*** ./src/app/services/http-client.service.ts ***!
  \*************************************************/
/*! exports provided: HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




var HttpClientService = /** @class */ (function () {
    function HttpClientService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.DHISAPIURL = '../../../dhis/api/';
        // Dev Environment conf
        this.OPENSRPAPIURL = '../opensrp/';
        this.OPENMRSURL = '../openmrs/ws/rest/v1/';
        this.DJANGOURL = '/api_';
    }
    HttpClientService.prototype.prepareToken = function (credentials) {
        var username = credentials.username;
        var password = credentials.password;
        var token = btoa(username + ':' + password);
        localStorage.setItem('htmr-web-token', token);
        if (typeof (Storage) !== undefined) {
            window.sessionStorage.setItem('htmr-web-token', token);
        }
        else {
            // TODO: execute block of codes if there is not local storage support
        }
        return token;
    };
    HttpClientService.prototype.getToken = function () {
        var token = localStorage.getItem('htmr-web-token');
        console.log("generated token is here", token);
        return token;
    };
    HttpClientService.prototype.deleteToken = function () {
        localStorage.removeItem('htmr-web-token');
        localStorage.removeItem('htmr-starting-location');
        window.sessionStorage.removeItem("htmr-web-token");
        if (typeof (Storage) !== undefined) {
            window.sessionStorage.removeItem('AuthToken');
        }
        else {
            // TODO: execute block of codes if there is not local storage support
        }
    };
    HttpClientService.prototype.createDHISAuthorizationHeader = function () {
        var username = 'admin';
        var password = 'district';
        var token = btoa(username + ':' + password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + token });
        return headers;
    };
    HttpClientService.prototype.createOpenMRSAuthorizationHeader = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Authorization', 'Basic ' + token);
        return 'Basic ' + token;
    };
    HttpClientService.prototype.createDjangoAuthorizationHeader = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Authorization', 'Basic' + token);
        return 'Basic ' + token;
    };
    HttpClientService.prototype.createOPENSRPAuthorizationHeader = function () {
        var token = this.getToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Authorization', 'Basic ' + token);
        return headers;
    };
    HttpClientService.prototype.get = function (url) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.get(this.DHISAPIURL + url, { headers: headers });
    };
    HttpClientService.prototype.getOpenMRS = function (url) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.get(this.OPENMRSURL + url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.getOpenMRSLocation = function (url) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.get('../../../openmrs/q/' + url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.getDHIS = function (url) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.get(this.DHISAPIURL + url, {
            headers: headers
        });
    };
    HttpClientService.prototype.postOpenMRS = function (url, data, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.post(this.OPENMRSURL + url, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.postDHIS = function (url, data, options) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.post(this.DHISAPIURL + url, data, { headers: headers });
    };
    HttpClientService.prototype.putDHIS = function (url, data, options) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.put(this.DHISAPIURL + url, data, { headers: headers });
    };
    HttpClientService.prototype.login1 = function (loginCredentials) {
        return this.getOpenSRP('security/authenticate');
    };
    HttpClientService.prototype.postOpenSRP = function (url, data, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.post(this.OPENSRPAPIURL + url, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.postOpenSRP1 = function (url, data, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        var postOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', headers),
            responseType: 'text'
        };
        return this.http.post(this.OPENSRPAPIURL + url, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', headers), responseType: 'text' });
    };
    HttpClientService.prototype.getOpenSRP = function (url) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        // const headers: HttpHeaders = this.createOPENSRPAuthorizationHeader();
        return this.http.get(this.OPENSRPAPIURL + url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.postDJANGOURL = function (url, data, options) {
        return this.http.post(this.DJANGOURL + url, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
        });
    };
    HttpClientService.prototype.getDJANGOURL = function (url) {
        return this.http.get(this.DJANGOURL + url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
        });
    };
    HttpClientService.prototype.getDJANGOURL1 = function (url, data, options) {
        return this.http.get(this.DJANGOURL + url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
        });
    };
    HttpClientService.prototype.deleteOpenSRP = function (url, id) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.delete(this.OPENSRPAPIURL + url + '/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.updateOpenSRP = function (url, data, id) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.put(this.OPENSRPAPIURL + url + '/' + id, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.deleteDHIS = function (url, options) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.delete(this.DHISAPIURL + url, { headers: headers });
    };
    HttpClientService.prototype.putOpenMRS = function (url, data, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.post(this.OPENMRSURL + url, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.deleteOpenMRS = function (url, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.delete(this.OPENMRSURL + url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.showSuccess = function (message) {
        if (message === void 0) { message = 'Success'; }
        this.snackBar.open(message, 'Ok', {
            duration: 2500,
            panelClass: 'success'
        });
    };
    HttpClientService.prototype.showError = function (message, duration) {
        if (message === void 0) { message = 'Operation Failed'; }
        if (duration === void 0) { duration = 2500; }
        this.snackBar.open(message, 'Ok', { duration: duration, panelClass: 'error' });
    };
    HttpClientService.prototype.showWarning = function (message, duration) {
        if (message === void 0) { message = 'Something went wrong'; }
        if (duration === void 0) { duration = 2500; }
        this.snackBar.open(message, 'Ok', { duration: duration, panelClass: 'warning' });
    };
    HttpClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    HttpClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "gmCK":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/summary-card/summary-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: SummaryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryCardComponent", function() { return SummaryCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_summary_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./summary-card.component.html */ "0FF5");
/* harmony import */ var _summary_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary-card.component.scss */ "XspS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");





var SummaryCardComponent = /** @class */ (function () {
    function SummaryCardComponent() {
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["ROUTE_ANIMATIONS_ELEMENTS"];
    }
    SummaryCardComponent.prototype.ngOnInit = function () {
    };
    SummaryCardComponent.prototype.goTo = function () { };
    SummaryCardComponent.ctorParameters = function () { return []; };
    SummaryCardComponent.propDecorators = {
        top_title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        low_title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        additional_information: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        route: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    SummaryCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-summary-card',
            template: _raw_loader_summary_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_summary_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SummaryCardComponent);
    return SummaryCardComponent;
}());



/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_30__["LayoutModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"]
            ],
            declarations: [],
            entryComponents: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_30__["LayoutModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "hefW":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/reffereal-type/reffereal-type.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <div class=\"container-fluid\">\n      <form [formGroup]=\"submitForm\">\n        <!--         English Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Name</mat-label>\n            <input\n              formControlName=\"referralTypeName\"\n              matInput\n              required\n              placeholder=\"Name\">\n            <mat-error *ngIf=\"!submitForm.get('referralTypeName').valid && submitForm.get('referralTypeName').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Is Active-->\n        <p class=\"clearfix\">\n          <mat-checkbox formControlName=\"isActive\">\n            Is Active\n          </mat-checkbox>\n        </p>\n\n        <div class=\"col-sm-12\">\n          <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n          <app-save-area\n            *ngIf=\"!loading\"\n            @fadeIn\n            [saveDisabled]=\"submitForm.invalid || saving_data\"\n            (save)=\"save(submitForm.value)\"\n            (cancel)=\"closeForm()\"\n            [confirmFirst]=\"true\"\n            [confirmText]=\"'Confirm Saving Information?'\"\n          ></app-save-area>\n        </div>\n      </form>\n    </div>\n\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "il9S":
/*!**************************************************************************!*\
  !*** ./src/app/modules/locations/add-location/add-location.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function() { return AddLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_location_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-location.component.html */ "E+N0");
/* harmony import */ var _add_location_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-location.component.css */ "oLTA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http-client.service */ "gkM4");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/location.service */ "yHma");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "fT3M");








var AddLocationComponent = /** @class */ (function () {
    function AddLocationComponent(locationService, formBuilder, http) {
        this.locationService = locationService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.locations = [];
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loading = false;
        this.tags = {
            tagOne: '15d11935-e183-43da-9c42-d0ced1efd872',
            tagTwo: '8d4626ca-7abd-42ad-be48-56767bbcf272'
        };
        this.editing = false;
    }
    AddLocationComponent.prototype.ngOnInit = function () {
        this.locationForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: '',
            parentLocation: '',
            hfrCode: '',
            tagOne: '',
            tagTwo: '',
            search: ''
        });
        if (this.currentLocation) {
            this.editing = true;
            this.locationForm.patchValue({
                name: this.currentLocation.name,
                description: this.currentLocation.description,
                tagOne: this.getAppropriateTag('tagOne', this.currentLocation.tags),
                tagTwo: this.getAppropriateTag('tagTwo', this.currentLocation.tags),
                parentLocation: this.currentLocation.parentLocation.uuid
            });
        }
    };
    AddLocationComponent.prototype.getAppropriateTag = function (formTagName, tagsArray) {
        console.log(tagsArray);
        return formTagName === 'tagOne' ? true : false;
    };
    Object.defineProperty(AddLocationComponent.prototype, "name", {
        get: function () {
            return this.locationForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddLocationComponent.prototype, "search", {
        get: function () {
            return this.locationForm.get('search');
        },
        enumerable: false,
        configurable: true
    });
    AddLocationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var locationForm = this.locationForm;
        var dataObject = {
            name: '',
            display: '',
            parentLocation: '',
            description: '',
            tags: []
        };
        if (locationForm.valid && locationForm.touched) {
            var formData_1 = locationForm.value;
            this.loading = true;
            dataObject.name = formData_1.name;
            dataObject.display = formData_1.name;
            dataObject.parentLocation = formData_1.parentLocation;
            dataObject.description = formData_1.description;
            !formData_1.tagOne ? dataObject.tags.push({ uuid: this.tags.tagTwo, name: 'Transfer Location' }) :
                !formData_1.tagTwo ? dataObject.tags.push({ uuid: this.tags.tagOne, name: 'CHW Location' }) :
                    dataObject.tags = [{ uuid: this.tags.tagOne, name: 'CHW Location' }, { uuid: this.tags.tagTwo, name: 'Transfer Location' }];
            var dataRes = null;
            if (this.currentLocation) {
                dataRes = this.locationService.updateLocation(dataObject, this.currentLocation.uuid);
            }
            else {
                dataRes = this.locationService.createLocation(dataObject);
            }
            dataRes.subscribe(function (success) {
                _this.locationForm.reset();
                _this.loading = false;
                _this.saved.emit();
                _this.http.showSuccess('Location Created successful');
                if (!_this.currentLocation) {
                    _this.locationService.sendHRFDetails([
                        {
                            facilityName: formData_1.name,
                            openmrsUIID: success.uuid ? success.uuid : '',
                            parentOpenmrsUIID: formData_1.parentLocation,
                            hfrCode: formData_1.hfrCode
                        }
                    ]).subscribe(function (openSRPSuccess) {
                        console.log(openSRPSuccess);
                    });
                }
            }, function (error) {
                _this.loading = false;
                _this.http.showError('Something went wrong while saving location');
            });
        }
    };
    AddLocationComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    AddLocationComponent.ctorParameters = function () { return [
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"] }
    ]; };
    AddLocationComponent.propDecorators = {
        locations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        saved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        currentLocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    AddLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-location',
            template: _raw_loader_add_location_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_7__["fadeIn"]],
            styles: [_add_location_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"]])
    ], AddLocationComponent);
    return AddLocationComponent;
}());



/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer bgimage\">\n  <div class=\"outer bgcolor\">\n\n  </div>\n</div>\n<!--<div class=\"logos\">-->\n<!-- <img src=\"assets/partners/rsz_tanzania_logo.jpg\"> -->\n<!-- <img src=\"assets/partners/rsz_usaid_logo.png\"> -->\n<!--</div>-->\n\n<div class=\"title\">\n  <table>\n    <tr>\n      <td style=\"vertical-align: top\">\n    <!--  <img src=\"assets/img/logo.png\" style=\"height: 70px\"> -->\n        &nbsp;&nbsp;&nbsp;\n      </td>\n      <td style=\"color: white\">\n        <h1 style=\"font-weight: bolder;\">Family Planning</h1>\n        <h5>Provision Of Quality Reproductive Health</h5>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<div class=\"login\">\n  <div class=\"logintop\">\n    <img src=\"assets/img/lock.png\" style=\"height: 50px; padding-top: 10px;margin-left: 20px;\">\n  </div>\n  <div class=\"loginbottom\" style=\"padding: 20px;\">\n    <h2 style=\"font-weight: bold;margin-bottom: 0px; color: #2D69A5\">Login</h2>\n    <p class=\"lead\" style=\"margin: 0px\">Enter Username and Password</p>\n\n    <div class=\"loginform\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\" validate>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"username\" matInput placeholder=\"Username\" type=\"text\" autocomplete=\"off\">\n            <mat-icon matSuffix>email</mat-icon>\n            <mat-error *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\" >Please Enter Username\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"password\" matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please Enter Password\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n<!--        <div class=\"col-md-12\">-->\n<!--          <button class=\"pull-right\" mat-flat-button color=\"primary\" type=\"submit\">-->\n<!--            <i class=\"fa fa-login\"></i> Login-->\n<!--          </button>-->\n<!--        </div>-->\n\n<!--        <div class=\"form-group\">-->\n<!--          <input type=\"text\" formControlName=\"username\" class=\"form-control\"  placeholder=\"Enter username\">-->\n<!--          <small *ngIf=\"loginForm.controls.username.invalid&&customeUsernameNotifier\" class=\"form-text  important-field\">Username-->\n<!--            is important-->\n<!--          </small>-->\n<!--        </div>-->\n<!--        <div class=\"form-group\">-->\n<!--          <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">-->\n<!--          <small *ngIf=\"loginForm.controls.password.invalid&&(customePasswordNotifier)\" class=\"form-text  important-field\">Password-->\n<!--            is important-->\n<!--          </small>-->\n<!--        </div>-->\n\n        <div class=\"col-md-12 mb-5\">\n          <button style=\"border-radius: 5px\" mat-raised-button color=\"primary\" type=\"submit\" class=\"cursor btn-block\" >Login</button>\n          <div *ngIf=\"!loginNotification.isError&&loginNotification.attempted\"  style=\"padding:.35rem 0.25rem!important;color: forestgreen!important;font-weight: bolder;font-size: 14px\" class=\"\" role=\"alert\">\n            {{loginNotification.message}}\n            <button type=\"button\" class=\"close\" style=\"padding-top: 0px!important;margin-top: 0px!important;\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div>\n            <img *ngIf=\"loginNotification.loading\" src=\"assets/img/loading.gif\">\n          </div>\n          <div class=\"\" style=\"padding:.35rem 0.25rem!important;color: orangered!important;font-weight: bolder;font-size: 14px\" *ngIf=\"loginNotification.isError&&loginNotification.attempted\" role=\"alert\">\n            {{loginNotification.message}}\n            <button type=\"button\" class=\"close\" (click)=\"closeNotification()\"  style=\"padding-top: 0px!important;margin-top: 0px!important;\"  data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "jC1y":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n      <!--      Start Date-->\n      <div class=\"col-3\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n\n      <!--      End Date-->\n      <div class=\"col-3\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-4 mt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getProviders()\"\n        >Get Report</button>\n      </div>\n    </div>\n    <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a list of providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a Data for providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Inter Facility Referral Summary {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n        <table class=\"table table-bordered\">\n          <ng-container *ngFor=\"let data of values\">\n            <tr *ngIf=\"data.summaryDTOS.length != 0\">\n              <td><h3>{{ data.facilityName }}</h3></td>\n            </tr>\n            <tr  *ngIf=\"data.summaryDTOS.length != 0\">\n              <td>\n                <table>\n                  <tr>\n                    <th>To Facility</th>\n                    <th>Status</th>\n                    <th>Referrals</th>\n                  </tr>\n                  <tr *ngFor=\"let pr of data.summaryDTOS\">\n                    <td>{{ pr.toFacilityName }}</td>\n                    <td>{{ pr.status }}</td>\n                    <td>{{ pr.count }}</td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </ng-container>\n\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "jYWo":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/click-outside.directive.ts ***!
  \**************************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(true);
        }
    };
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    ClickOutsideDirective.propDecorators = {
        clickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:click', ['$event.target'],] }]
    };
    ClickOutsideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appClickOutside]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "juDX":
/*!***********************************************************************!*\
  !*** ./src/app/modules/settings/indicators/indicators.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZ3MvaW5kaWNhdG9ycy9pbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "k9gR":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/table-form/table-form.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ks-on-off {\n  width: 84px;\n  min-width: 84px;\n}\n\n.ks-checkbox-slider.ks-on-off.ks-solid input[type=checkbox]:checked + .ks-indicator {\n  left: 62px;\n}\n\n.nopadding {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.mat-divider-title {\n  color: #8e8e8e;\n}\n\n.mat-divider {\n  border-top-color: #949494;\n  margin-bottom: 15px;\n  margin-top: 14px;\n}\n\n.cursor {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUtZm9ybS90YWJsZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBSUE7RUFDRSxjQUFjO0FBRGhCOztBQUlBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxlQUFlO0FBRGpCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUtZm9ybS90YWJsZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtzLW9uLW9mZiB7XG4gIHdpZHRoOiA4NHB4O1xuICBtaW4td2lkdGg6IDg0cHg7XG59XG5cbi5rcy1jaGVja2JveC1zbGlkZXIua3Mtb24tb2ZmLmtzLXNvbGlkIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAua3MtaW5kaWNhdG9yIHtcbiAgbGVmdDogNjJweDtcbn1cblxuLm5vcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuXG5cbi5tYXQtZGl2aWRlci10aXRsZXtcbiAgY29sb3I6ICM4ZThlOGU7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6ICM5NDk0OTQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "lb2d":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/without.pipe.ts ***!
  \**********************************************/
/*! exports provided: WithoutPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutPipe", function() { return WithoutPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var WithoutPipe = /** @class */ (function () {
    function WithoutPipe() {
    }
    WithoutPipe.prototype.transform = function (value, property, val) {
        console.log({ value: value }, { property: property }, { val: val });
        if (!property) {
            return value;
        }
        if (!value) {
            return value;
        }
        if (!val) {
            return value;
        }
        console.log(val);
        return value.filter(function (v) { return !(val.includes(v[property])); });
    };
    WithoutPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'without'
        })
    ], WithoutPipe);
    return WithoutPipe;
}());



/***/ }),

/***/ "lwQ8":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnAtcmVwb3J0cy9pc3N1ZWQtcmVmZXJyYWxzLWJ5LWxvY2F0aW9uL2lzc3VlZC1yZWZlcnJhbHMtYnktbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "mA3v":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MultiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectComponent", function() { return MultiselectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_multiselect_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./multiselect.component.html */ "VG5S");
/* harmony import */ var _multiselect_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiselect.component.css */ "8pjq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var MultiselectComponent = /** @class */ (function () {
    function MultiselectComponent() {
        this.items = [];
        this.placeholder = 'Select';
        this.starting_items = [];
        this.selected_items = [];
        this.prefix = '';
        this.prefix_multiple = '';
        this.hideOptions = true;
        this.filterText = '';
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    MultiselectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.starting_items.length !== 0) {
            if (this.selected_items.length === 0) {
                this.selected_items = this.starting_items;
            }
            else {
                this.starting_items.forEach(function (val) {
                    _this.selected_items.push(val);
                });
            }
            this.onSelected.emit(this.selected_items);
        }
    };
    MultiselectComponent.prototype.displayPerTree = function () {
        this.hideOptions = !this.hideOptions;
    };
    MultiselectComponent.prototype.reset = function () {
        this.selected_items = [];
        this.onSelected.emit(this.selected_items);
    };
    MultiselectComponent.prototype.checkItemAvailabilty = function (item, array) {
        var checker = false;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var per = array_1[_i];
            if (per.id === item.id) {
                checker = true;
            }
        }
        return checker;
    };
    MultiselectComponent.prototype.selectItem = function (item) {
        if (this.checkItemAvailabilty(item, this.selected_items)) {
            this.selected_items.splice(this.selected_items.indexOf(item), 1);
        }
        else {
            this.selected_items.push(item);
        }
        this.onSelected.emit(this.selected_items);
    };
    MultiselectComponent.prototype.deActivateNode = function (event) {
        this.selected_items = [];
        event.stopPropagation();
    };
    MultiselectComponent.ctorParameters = function () { return []; };
    MultiselectComponent.propDecorators = {
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        starting_items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        selected_items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        prefix_multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        onSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    MultiselectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-multiselect',
            template: _raw_loader_multiselect_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_multiselect_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MultiselectComponent);
    return MultiselectComponent;
}());



/***/ }),

/***/ "n3tq":
/*!**********************************************!*\
  !*** ./src/app/services/org-unit.service.ts ***!
  \**********************************************/
/*! exports provided: OrgUnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgUnitService", function() { return OrgUnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client.service */ "gkM4");



var OrgUnitService = /** @class */ (function () {
    function OrgUnitService(http) {
        this.http = http;
        this.nodes = null;
        this.visit_locations = null;
    }
    OrgUnitService.prototype.getLevel4OrgunitsIds = function (orgunits, uuid) {
        var orgunitItems = orgunits
            .filter(function (ou) { return ou.parents.indexOf(uuid) !== -1; })
            .map(function (ou) { return ou.id; });
        if (orgunitItems.length === 0) {
            orgunitItems = [uuid];
        }
        return orgunitItems;
    };
    OrgUnitService.prototype.getLevel4OrgunitsNames = function (orgunits, uuid) {
        console.log({ orgunits: orgunits });
        return orgunits
            .filter(function (ou) { return ou.id === uuid; })
            .map(function (ou) { return ou.name; })
            .join(', ');
    };
    OrgUnitService.prototype.getLevel4OrgunitsId = function (orgunits, uuid) {
        return orgunits
            .filter(function (ou) { return ou.id === uuid; })
            .map(function (ou) { return ou.id; })
            .join('');
    };
    OrgUnitService.ctorParameters = function () { return [
        { type: _http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
    ]; };
    OrgUnitService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], OrgUnitService);
    return OrgUnitService;
}());



/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer{\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.title {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.login {\n  position: absolute;\n  top: 12%;\n  right: 6%;\n  background-color: transparent;\n  height: 450px;\n  width: 400px;\n  z-index: 100;\n  border-top-left-radius: 10px;\n}\n\n.logintop {\n  height: 50px;\n  background-color: yellow;\n  width: 100%;\n  border-top-left-radius: 15px!important;\n}\n\n.loginbottom {\n  height: 405px;\n  background-color: white;\n  width: 100%;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n\n.logos{\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n}\n\n.logos img{\n  padding: 10px;\n  height: 50px;\n  opacity: 0.5;\n}\n\n.bgimage {\n  background: url('bg-fp.jpg') no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bgcolor {\n  background-color: rgba(70, 107, 73, 0.8);\n}\n\n.logintop:before {\n\n  height: 50px;\n  width: 10px;\n  display: block;\n  content:\" \";\n  background-color: #FFF;\n  position: absolute;\n  right: -0px;\n  top: -0px;\n  border-top: 0px solid blue;\n  border-bottom: 0px solid blue;\n}\n\n.logintop {\n  height: 50px;\n  width: 350px;\n  border-radius: 0px 0px 0px 0px;\n  background-color: #FFF;\n  position: relative;\n  border: 0px solid blue;\n}\n\n.logintop:after {\n  display: block;\n  content:\" \";\n  width: 100px;\n  height: 50px;\n  top: -0px;\n  background-color: #FFF;\n  position: absolute;\n  right: -25.6px;\n  transform:skewX(45deg);\n  -ms-transform:skewX(45deg);\n  -webkit-transform:skewX(45deg);\n  border: 0px solid blue;\n  z-index: -1;\n}\n\n.loginform {\n  margin-top: 30px;\n}\n\n.loginform button{\n  margin-top: 30px;\n  border-radius: 0px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.loginform form{\n  border-top: 1px solid rgba(0,0,0,0.2);\n  padding-top: 20px;\n}\n\n.loginform input{\n  border-top: 0px;\n  border-left: 0px;\n  border-radius: 0px;\n  border-right: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBEQUF5RTtFQUl6RSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBR0E7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xufVxuXG4ubG9naW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIlO1xuICByaWdodDogNiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmxvZ2ludG9wIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4IWltcG9ydGFudDtcbn1cblxuLmxvZ2luYm90dG9tIHtcbiAgaGVpZ2h0OiA0MDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbn1cblxuLmxvZ29ze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiA1cHg7XG59XG5cbi5sb2dvcyBpbWd7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uYmdpbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JnLWZwLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmJnY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcwLCAxMDcsIDczLCAwLjgpO1xufVxuXG5cbi5sb2dpbnRvcDpiZWZvcmUge1xuXG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OlwiIFwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMHB4O1xuICB0b3A6IC0wcHg7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCBibHVlO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgYmx1ZTtcbn1cbi5sb2dpbnRvcCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAwcHggc29saWQgYmx1ZTtcbn1cbi5sb2dpbnRvcDphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OlwiIFwiO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdG9wOiAtMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjUuNnB4O1xuICB0cmFuc2Zvcm06c2tld1goNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOnNrZXdYKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06c2tld1goNDVkZWcpO1xuICBib3JkZXI6IDBweCBzb2xpZCBibHVlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmxvZ2luZm9ybSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5sb2dpbmZvcm0gYnV0dG9ue1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4ubG9naW5mb3JtIGZvcm17XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmxvZ2luZm9ybSBpbnB1dHtcbiAgYm9yZGVyLXRvcDogMHB4O1xuICBib3JkZXItbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "nzNI":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/main-data-table/main-data-table.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-1 {\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n\n.card-1:hover {\n  border-top: 1px solid rgba(0, 0, 0, 0.4) !important;\n  box-shadow: 0 14px 28px rgba(3, 31, 35, 0.12), 0 10px 10px rgba(3, 31, 35, 0.22) !important;\n  transform: scale(1.01) !important;\n  background-color: rgba(255, 255, 255, 0.85) !important;\n}\n\ntable {\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\ntable td {\n  padding-left: 10px !important;\n}\n\ntable th {\n  padding-left: 10px !important;\n  color: black !important;\n  font-weight: bolder !important;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n.hidden {\n  display: none;\n}\n\n.table-cover {\n  margin: 0px;\n}\n\n.top-area {\n  display: grid;\n  grid-template-columns: 10fr 2fr;\n}\n\n.top-area .search-area {\n  align-self: end;\n}\n\n.top-area .excel-button {\n  justify-self: end;\n  align-self: center;\n  margin-bottom: 8px;\n}\n\n.action-button {\n  height: 33px;\n  border-radius: 50%;\n  padding: 5px;\n  cursor: pointer !important;\n}\n\n.active {\n  background-color: rgba(0, 0, 0, 0.2) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFpbi1kYXRhLXRhYmxlL21haW4tZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzREFBc0Q7RUFDdEQsZ0VBQTZEO0FBQy9EOztBQUVBO0VBQ0UsbURBQW1EO0VBQ25ELDJGQUEyRjtFQUMzRixpQ0FBaUM7RUFDakMsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFIQTtFQUtJLDZCQUE0QjtBQUVoQzs7QUFQQTtFQVNJLDZCQUE0QjtFQUM1Qix1QkFBc0I7RUFDdEIsOEJBQTZCO0FBRWpDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtBQUVqQzs7QUFKQTtFQUtJLGVBQWU7QUFHbkI7O0FBUkE7RUFTSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUd0Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUF5QjtBQUUzQjs7QUFDQTtFQUNFLCtDQUE4QztBQUVoRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21haW4tZGF0YS10YWJsZS9tYWluLWRhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC0xIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLTE6aG92ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMywgMzEsIDM1LCAwLjEyKSwgMCAxMHB4IDEwcHggcmdiYSgzLCAzMSwgMzUsIDAuMjIpICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgdGQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XG4gIH07XG5cbiAgdGgge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDs7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciFpbXBvcnRhbnQ7XG4gIH1cbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YWJsZS1jb3ZlciB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnRvcC1hcmVhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMGZyIDJmcjtcblxuICAuc2VhcmNoLWFyZWEge1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbiAgfVxuXG4gIC5leGNlbC1idXR0b24ge1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXIhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "oD/F":
/*!************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/clients/clients.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  margin: 5px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important;\n}\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLXN1bW1hcnkvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixzQkFBQTtFQUNBLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzREFBc0Q7RUFDdEQsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxzQkFBQTtFQUNBLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQ0FBMkM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQtc3VtbWFyeS9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQtY29udGFpbmVyMSB7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgZ3JpZC1nYXA6IDE1cHggMTVweCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLTEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXN0YXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyNXB4O1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIzMHB4LCAxZnIpKVxufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuIl19 */");

/***/ }),

/***/ "oLTA":
/*!***************************************************************************!*\
  !*** ./src/app/modules/locations/add-location/add-location.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9jYXRpb25zL2FkZC1sb2NhdGlvbi9hZGQtbG9jYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "or7i":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/mat-select-search/mat-select-search.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-select-search-hidden {\n  visibility: hidden;\n}\n\n.mat-select-search-inner {\n  position: absolute;\n  top: 0;\n  width: calc(100% + 15px);\n  border-bottom: 1px solid #cccccc;\n  background: white;\n  z-index: 100;\n}\n\n.mat-select-search-inner.mat-select-search-inner-multiple {\n  width: calc(100% + 48px);\n}\n\n/deep/ .mat-select-search-panel {\n  /* allow absolute positioning relative to outer options container */\n  transform: none !important;\n  max-height: 350px;\n}\n\n.mat-select-search-input {\n  padding: 16px;\n  padding-right: 36px;\n  box-sizing: border-box;\n}\n\n.mat-select-search-no-entries-found {\n  padding: 16px;\n}\n\n.mat-select-search-clear {\n  position: absolute;\n  right: 0;\n  top: 4px;\n}\n\n/deep/ .cdk-overlay-pane-select-search {\n  /* correct offsetY so that the selected option is at the position of the select box when opening */\n  margin-top: -50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWF0LXNlbGVjdC1zZWFyY2gvbWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxrQkFBa0I7QUFMcEI7O0FBT0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLHdCQUFvRTtFQUNwRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLFlBQVk7QUFKZDs7QUFGQTtFQVNJLHdCQUE0RjtBQUhoRzs7QUFPQTtFQUNFLG1FQUFBO0VBQ0EsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUpuQjs7QUFPQTtFQUNFLGFBNUIwQjtFQTZCMUIsbUJBQTJEO0VBQzNELHNCQUFzQjtBQUp4Qjs7QUFPQTtFQUNFLGFBbEMwQjtBQThCNUI7O0FBTUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7QUFIVjs7QUFLQTtFQUNFLGtHQUFBO0VBQ0EsaUJBQWlCO0FBRm5CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWF0LXNlbGVjdC1zZWFyY2gvbWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiRtYXQtbWVudS1zaWRlLXBhZGRpbmc6IDE2cHggIWRlZmF1bHQ7XG4kc2Nyb2xsYmFyLXdpZHRoOiAxN3B4O1xuJGNsZWFyLWJ1dHRvbi13aWR0aDogMjBweDtcbiRtdWx0aXBsZS1jaGVjay13aWR0aDogMzNweDtcblxuLm1hdC1zZWxlY3Qtc2VhcmNoLWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5tYXQtc2VsZWN0LXNlYXJjaC1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogY2FsYygxMDAlICsgI3syICogJG1hdC1tZW51LXNpZGUtcGFkZGluZyAtICRzY3JvbGxiYXItd2lkdGh9KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDA7XG4gICYubWF0LXNlbGVjdC1zZWFyY2gtaW5uZXItbXVsdGlwbGUge1xuXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArICN7MiAqICRtYXQtbWVudS1zaWRlLXBhZGRpbmcgLSAkc2Nyb2xsYmFyLXdpZHRoICsgJG11bHRpcGxlLWNoZWNrLXdpZHRofSk7XG4gIH1cbn1cblxuL2RlZXAvIC5tYXQtc2VsZWN0LXNlYXJjaC1wYW5lbCB7XG4gIC8qIGFsbG93IGFic29sdXRlIHBvc2l0aW9uaW5nIHJlbGF0aXZlIHRvIG91dGVyIG9wdGlvbnMgY29udGFpbmVyICovXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbn1cblxuLm1hdC1zZWxlY3Qtc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZzogJG1hdC1tZW51LXNpZGUtcGFkZGluZztcbiAgcGFkZGluZy1yaWdodDogJG1hdC1tZW51LXNpZGUtcGFkZGluZyArICRjbGVhci1idXR0b24td2lkdGg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbn1cbi5tYXQtc2VsZWN0LXNlYXJjaC1uby1lbnRyaWVzLWZvdW5kIHtcbiAgcGFkZGluZzogJG1hdC1tZW51LXNpZGUtcGFkZGluZztcbn1cbi5tYXQtc2VsZWN0LXNlYXJjaC1jbGVhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNHB4O1xufVxuL2RlZXAvIC5jZGstb3ZlcmxheS1wYW5lLXNlbGVjdC1zZWFyY2gge1xuICAvKiBjb3JyZWN0IG9mZnNldFkgc28gdGhhdCB0aGUgc2VsZWN0ZWQgb3B0aW9uIGlzIGF0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2VsZWN0IGJveCB3aGVuIG9wZW5pbmcgKi9cbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "ozM8":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/placeholder/placeholder.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"placeholder-container\" [ngClass]=\"{'grid-contaner': useGrid}\">\n  <div class=\"line\" *ngIf=\"numberOfLines >=1\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=2\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=3\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=4\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=5\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=6\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=7\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=8\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=9\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=10\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=11\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=12\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=13\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=14\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=15\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=16\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=17\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=18\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=19\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=20\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=21\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=22\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=23\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=24\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=25\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=25\"></div>\n</div>\n");

/***/ }),

/***/ "p1Xg":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/main-data-table/show-button.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: ShowButtonPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowButtonPipe", function() { return ShowButtonPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ShowButtonPipe = /** @class */ (function () {
    function ShowButtonPipe() {
    }
    ShowButtonPipe.prototype.transform = function (value, property) {
        var show = true;
        if (value.hasOwnProperty('actionButtons')) {
            if (value.actionButtons.hasOwnProperty(property)) {
                return value.actionButtons[property];
            }
        }
        return show;
    };
    ShowButtonPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'showButton'
        })
    ], ShowButtonPipe);
    return ShowButtonPipe;
}());



/***/ }),

/***/ "p68Z":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: TotalFamilyPlanningMethodsIssuedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalFamilyPlanningMethodsIssuedComponent", function() { return TotalFamilyPlanningMethodsIssuedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_total_family_planning_methods_issued_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./total-family-planning-methods-issued.component.html */ "Jczc");
/* harmony import */ var _total_family_planning_methods_issued_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./total-family-planning-methods-issued.component.scss */ "Zhtk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TotalFamilyPlanningMethodsIssuedComponent = /** @class */ (function () {
    function TotalFamilyPlanningMethodsIssuedComponent() {
    }
    TotalFamilyPlanningMethodsIssuedComponent.prototype.ngOnInit = function () {
    };
    TotalFamilyPlanningMethodsIssuedComponent.ctorParameters = function () { return []; };
    TotalFamilyPlanningMethodsIssuedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-total-family-planning-methods-issued',
            template: _raw_loader_total_family_planning_methods_issued_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_total_family_planning_methods_issued_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TotalFamilyPlanningMethodsIssuedComponent);
    return TotalFamilyPlanningMethodsIssuedComponent;
}());



/***/ }),

/***/ "pBI0":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  margin: 5px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important;\n}\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;\n}\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLXN1bW1hcnkvZGlzY29udGludWF0aW9ucy9kaXNjb250aW51YXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixzQkFBQTtFQUNBLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzREFBc0Q7RUFDdEQsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxzQkFBQTtFQUNBLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQ0FBMkM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQtc3VtbWFyeS9kaXNjb250aW51YXRpb25zL2Rpc2NvbnRpbnVhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQtY29udGFpbmVyMSB7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgZ3JpZC1nYXA6IDE1cHggMTVweCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLTEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXN0YXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyNXB4O1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIzMHB4LCAxZnIpKVxufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuIl19 */");

/***/ }),

/***/ "pbsO":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/geomaps/map-filter/map-filter.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"padding-top: 10px\">\n  <div class=\"row\">\n    <!--      Start Date-->\n    <div class=\"col-sm-2\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Start Date</mat-label>\n        <input\n          [(ngModel)]=\"start_date\"\n          [matDatepicker]=\"dw\"\n          matInput\n          placeholder=\"From\"\n          [max]=\"end_date\"\n          required/>\n        <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n        <mat-datepicker #dw></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <!--      End Date-->\n    <div class=\"col-sm-2\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>End Date</mat-label>\n        <input\n          [(ngModel)]=\"end_date\"\n          [matDatepicker]=\"dw1\"\n          matInput\n          placeholder=\"To\"\n          [min]=\"start_date\"\n          required/>\n        <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n        <mat-datepicker #dw1></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n\n    <div class=\"col-sm-3 mt-1\">\n        <mat-form-field>\n      <mat-select *ngIf=\"services\" [value]=\"selectedService\" (selectionChange)=\"onChangeService($event.value)\" id=\"ddService\">\n        <mat-option [value]=\"0\" disabled>Select Service</mat-option>\n        <mat-option *ngFor=\"let service of services\" [value]=\"service.id\">{{service.name}}</mat-option>\n      </mat-select>\n      </mat-form-field>\n    </div>\n    \n    <div class=\"col-sm-3 mt-1\">\n      <app-org-unit-filter\n        (onOrgUnitChange)=\"changeOrgUnit($event)\"\n        [orgunit_tree_config]=\"orgunit_tree_config\">\n      </app-org-unit-filter>\n    </div>\n    <div class=\"col-sm-2\">\n      <button\n        style=\"margin-top: 5px; height: 46px;\"\n        [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n        class=\"btn btn-block btn-outline-primary\"\n        (click)=\"getReport()\"\n      >Load Map</button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "qNiJ":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/settings.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  image=\"cogs\"\n  [title]=\"title\"\n  [hideAdd]=\"true\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link\n         *ngFor=\"let link of navLinks\"\n         [routerLink]=\"link.link\"\n         (click)=\"title = link.label\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{link.label}}\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  </ng-container>\n</app-table-form>\n");

/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client.service */ "gkM4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.loadingMessage = 'Loading Users';
        this.loggedIn = false;
        this.navigations = [
            {
                name: 'Dashboard',
                links: ['', 'dashboard'],
                icon: 'fa fa-dashboard',
                roles: ['all'],
                accessibility: false
            },
            {
                name: 'GeoMaps',
                links: ['', 'geomaps'],
                icon: 'fa fa-map',
                roles: ['all'],
                accessibility: false
            },
            // {
            //   name: 'Data Entry',
            //   links: ['/home', 'data_entry'],
            //   icon: 'fa fa-edit',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            // {
            //   name: 'Basic Reports',
            //   links: ['/home', 'basic_reports'],
            //   icon: 'fa fa-bar-chart',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            // {
            //   name: 'Custom Reports',
            //   links: ['/home', 'reports'],
            //   icon: 'fa fa-bar-chart',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            {
                name: 'Reports',
                links: ['', 'providers_report'],
                icon: 'fa fa-pie-chart',
                roles: ['System Developer'],
                accessibility: false
            },
            // {
            //   name: 'More Reports',
            //   links: ['', 'more_reports'],
            //   icon: 'fa fa-bar-chart',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            // {
            //   name: 'Settings',
            //   links: ['', 'settings', 'services'],
            //   icon: 'fa fa-cogs',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            {
                name: 'Team Management',
                links: ['', 'users'],
                icon: 'fa fa-user',
                roles: ['System Developer'],
                accessibility: false
            },
            // {
            //   name: 'Form Management',
            //   links: ['/home', 'forms'],
            //   icon: 'fa fa-file-text',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            {
                name: 'Location Management',
                links: ['', 'location'],
                icon: 'fa fa-map-signs',
                roles: ['System Developer'],
                accessibility: false
            }
        ];
        if (this.http.getToken()) {
            this.loggedIn = true;
        }
    }
    UserService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    UserService.prototype.getNavigation = function () {
        if (this._getLocalStorageNavigation()) {
            return this._getLocalStorageNavigation();
        }
        else {
            return lodash__WEBPACK_IMPORTED_MODULE_4__["compact"](this.navigations.map(function (nav) {
                return nav.accessibility ? nav : undefined;
            }));
        }
    };
    UserService.prototype.setNavigation = function (user) {
        var loggedInUser = user.results[0];
        var roles = loggedInUser.allRoles;
        var navigations = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.navigations);
        this.navigations = navigations.map(function (navigation) {
            var exist = false;
            if (navigation.roles.indexOf('all') > -1) {
                navigation.accessibility = true;
                return navigation;
            }
            else {
                roles.forEach(function (roleItem) {
                    if (navigation.roles.indexOf(roleItem.name) > -1) {
                        exist = true;
                    }
                });
            }
            if (exist) {
                navigation.accessibility = true;
            }
            return navigation;
        });
        this._setLocalStorageNavigation(this.navigations);
    };
    UserService.prototype._setLocalStorageNavigation = function (navigations) {
        localStorage.setItem('_report_navigation', JSON.stringify(navigations));
    };
    UserService.prototype._getLocalStorageNavigation = function () {
        return eval(localStorage.getItem('_report_navigation'));
    };
    UserService.prototype.removeLocalStorageNavigation = function () {
        localStorage.removeItem('_report_navigation');
    };
    UserService.prototype.deleteToken = function () {
        this.http.deleteToken();
    };
    UserService.prototype.login = function (loginCredentials) {
        this.http.prepareToken(loginCredentials);
        return this.http.getOpenMRS('user?v=full&username=' + loginCredentials.username);
    };
    UserService.prototype.login1 = function (loginCredentials) {
        this.http.prepareToken(loginCredentials);
        return this.http.getOpenSRP('security/authenticate');
    };
    UserService.prototype.changePassword = function (loginCredentials) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var payload = {
                "oldPassword": "" + loginCredentials.oldpassword + "",
                "newPassword": "" + loginCredentials.newpassword + ""
            };
            console.log(payload);
            _this.http.postOpenMRS("password", payload)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'password changed successfully';
                observer.next(personResponse);
                observer.complete();
                console.log("successful");
            }, function (error) {
                console.log(error);
                _this.loadingMessage = 'password change  failed';
                observer.error('some error occurrd.');
            });
        });
    };
    UserService.prototype.sessionCheck = function () {
    };
    UserService.prototype.listPersons = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.getOpenMRS("person?v=full")
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.listRoles = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.getOpenMRS("role?v=default")
                .subscribe(function (personResponse) {
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.createPerson = function (person) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenMRS("person", person)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'person created successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'person creation  failed';
                observer.error('some error occurred.');
            });
        });
    };
    UserService.prototype.updatePerson = function (person, uuid) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.putOpenMRS("person/" + uuid, person)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.deletePerson = function (person) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.deleteOpenMRS("person/" + person.uuid)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.listUsers = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.getOpenMRS("user?v=full")
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.createUser = function (user) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenMRS("user", user)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.updateUser = function (user, uuid) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.putOpenMRS("user/" + uuid, user)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.deleteOpenMRS("user/" + user.uuid + '?purge=true')
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.ctorParameters = function () { return [
        { type: _http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "qp0b":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/reports/total-lost-followup/total-lost-followup.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy90b3RhbC1sb3N0LWZvbGxvd3VwL3RvdGFsLWxvc3QtZm9sbG93dXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "rAJv":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/users/team-info/team-info.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\">\n  <mat-list *ngIf=\"team\">\n    <mat-list-item>\n      <p>Name:\n        <b>{{team.teamName}}</b>\n      </p>\n    </mat-list-item>\n    <mat-list-item>\n      <p>Supervisor:\n        <b>{{team.supervisor}}</b>\n      </p>\n    </mat-list-item>\n    <mat-list-item>\n      <p>Location:\n        <b>{{team.locationName}}</b>\n      </p>\n    </mat-list-item>\n  </mat-list>\n\n  <div class=\"col-sm-12\">\n    <h5>Members</h5>\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns && team.teamMembers\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"false\"\n      [tableList]=\"members\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "rZPN":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-4 pt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getProviders()\"\n        >Get Team List</button>\n      </div>\n    </div>\n    <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting list of teams...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <app-multiselect\n          *ngIf=\"providers.length != 0\"\n          [items]=\"providers\"\n          [placeholder]=\"'Select data items to see in the report'\"\n          (onSelected)=\"setSelectedData($event)\"\n        ></app-multiselect>\n      </div>\n\n      <div class=\"col-7\" *ngIf=\"selected_providers.length != 0\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"getData()\">Get Report</button> &nbsp;\n        <button *ngIf=\"done_loading && !show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = true\">Get Detailed</button>\n        <button *ngIf=\"done_loading && show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = false\">Get Summary</button>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting Data for providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\" *ngIf=\"!show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Services Provided by {{ selected_provider_names }} for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n\n\n        <button (click)=\"exportexcel('summary-table', 'Summary Issued Services By Teams.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n\n        <table class=\"table table-bordered\" id='summary-table'>\n          <tr>\n            <th>Service Type</th>\n            <th>Number of Issued Service</th>\n          </tr>\n          <tr *ngFor=\"let data of values\">\n            <td>{{ data.event_type }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"col\" *ngIf=\"show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Detailed Service Provided by {{ selected_providers_names }} for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n\n\n        <button (click)=\"exportexcel('detailled-table','Detailled Services Issued By Teams.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n\n        <table class=\"table table-bordered\" id=\"detailled-table\">\n          <tr>\n            <th>Service Provider</th>\n            <th>Service Type</th>\n            <th>Event Date</th>\n            <th>Team</th>\n          </tr>\n          <tr *ngFor=\"let data of detailed_values\">\n            <td>{{ data.provider_id }}</td>\n            <td>{{ data.event_type }}</td>\n            <td>{{ data.event_date }}</td>\n            <td>{{ data.team }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "rcqn":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/total-lost-followup/total-lost-followup.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "rwKw":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/users/update-member/update-member.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<form [formGroup]=\"teamMemberForm\">-->\n\n<!--  <div class=\"row\">-->\n<!--    <div class=\"col-md-6\">-->\n<!--      &lt;!&ndash;<div *ngIf=\"showNewPersonForm\" class=\"bordered-form\">&ndash;&gt;-->\n<!--      <div class=\"bordered-form\">-->\n<!--        <div class=\"form-group\">-->\n<!--          <label>Given Name <span class=\"important-field\">*</span></label>-->\n<!--          <input type=\"text\" class=\"form-control form-control-sm\" id=\"first_name\" formControlName=\"firstName\"-->\n<!--                 placeholder=\"Given Name\">-->\n<!--        </div>-->\n<!--        <div class=\"form-group\">-->\n<!--          <label for=\"familyName\">Family Name <span class=\"important-field\">*</span></label>-->\n<!--          <input type=\"text\" class=\"form-control form-control-sm\" id=\"familyName\" formControlName=\"familyName\"-->\n<!--                 placeholder=\"Family Name \">-->\n<!--        </div>-->\n<!--        <div class=\"form-group\">-->\n<!--          <label>Gender</label>-->\n<!--          <div class=\"row\">-->\n<!--            <div class=\"col-md-6\">-->\n<!--              <div class=\"form-check\">-->\n<!--                <label class=\"form-check-label\">-->\n<!--                  <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\"-->\n<!--                         value=\"M\">-->\n<!--                  Male-->\n<!--                </label>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-6\">-->\n<!--              <div class=\"form-check\">-->\n<!--                <label class=\"form-check-label\">-->\n<!--                  <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\"-->\n<!--                         value=\"F\">-->\n<!--                  Female-->\n<!--                </label>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--        </div>-->\n<!--        <div class=\"form-group\">-->\n<!--          <label>Age</label>-->\n<!--          <input type=\"text\" class=\"form-control form-control-sm\" id=\"age\" formControlName=\"age\"-->\n<!--                 placeholder=\"Age\">-->\n<!--        </div>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--    <div class=\"col-md-6\">-->\n<!--      <div class=\"bordered-form\">-->\n<!--        &lt;!&ndash; User Name&ndash;&gt;-->\n<!--        <p class=\"clearfix\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> User Name</mat-label>-->\n<!--            <input-->\n<!--              formControlName=\"username\"-->\n<!--              matInput-->\n<!--              required-->\n<!--              placeholder=\"User Name\">-->\n<!--            <mat-error *ngIf=\"teamMemberForm.get('username').invalid && teamMemberForm.get('username').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--        &lt;!&ndash; Password&ndash;&gt;-->\n<!--        <p class=\"clearfix\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> Password</mat-label>-->\n<!--            <input-->\n<!--              formControlName=\"password\"-->\n<!--              matInput-->\n<!--              type=\"password\"-->\n<!--              required>-->\n<!--            <mat-error *ngIf=\"teamMemberForm.get('password').invalid && teamMemberForm.get('password').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--        &lt;!&ndash; Re Password&ndash;&gt;-->\n<!--        <p class=\"clearfix\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> Confirm Password</mat-label>-->\n<!--            <input-->\n<!--              formControlName=\"confirmPassword\"-->\n<!--              matInput-->\n<!--              type=\"password\"-->\n<!--              required>-->\n<!--            <mat-error-->\n<!--              *ngIf=\"teamMemberForm.get('confirmPassword').invalid && teamMemberForm.get('confirmPassword').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n<!--  <br/>-->\n<!--  <div class=\"row mb-3\">-->\n<!--    <div class=\"col-md-12\">-->\n<!--      <div class=\"bordered-form\">-->\n<!--        &lt;!&ndash;  User Roles&ndash;&gt;-->\n<!--        <p class=\"clearfix\" *ngIf=\"roles\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> Role</mat-label>-->\n<!--            <mat-select multiple formControlName=\"roles\" placeholder=\"Role\">-->\n<!--              <mat-option *ngFor=\"let item of roles\" [value]=\"item.uuid\">-->\n<!--                {{ item.name }}-->\n<!--              </mat-option>-->\n<!--            </mat-select>-->\n<!--            <mat-error *ngIf=\"!teamMemberForm.get('roles').valid && teamMemberForm.get('roles').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--        &lt;!&ndash;  Team Roles&ndash;&gt;-->\n<!--        <p class=\"clearfix\" *ngIf=\"teamRoles\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> Team Roles</mat-label>-->\n<!--            <mat-select formControlName=\"teamRole\" placeholder=\"Team Roles\">-->\n<!--              <mat-option *ngFor=\"let item of teamRoles\" [value]=\"item.uuid\">-->\n<!--                {{ item.name }}-->\n<!--              </mat-option>-->\n<!--            </mat-select>-->\n<!--            <mat-error *ngIf=\"!teamMemberForm.get('teamRole').valid && teamMemberForm.get('teamRole').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--        <p class=\"clearfix\">-->\n<!--          <app-chw-locations-->\n<!--            (onOrgUnitChange)=\"changeOrgUnit($event)\"-->\n<!--            [orgunit_tree_config]=\"orgunit_tree_config\"-->\n<!--          ></app-chw-locations>-->\n<!--        </p>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n\n<!--  <div class=\"col-sm-12\">-->\n<!--    <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"loading\"></app-loader>-->\n<!--    <app-save-area-->\n<!--      *ngIf=\"!loading\"-->\n<!--      @fadeIn-->\n<!--      [saveDisabled]=\"teamMemberForm.invalid || loading\"-->\n<!--      (save)=\"save()\"-->\n<!--      (cancel)=\"closeForm()\"-->\n<!--      [confirmFirst]=\"true\"-->\n<!--      [confirmText]=\"'Confirm Saving Information?'\"-->\n<!--    ></app-save-area>-->\n<!--  </div>-->\n<!--</form>-->\n");

/***/ }),

/***/ "stBI":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n<!--      Start Date-->\n      <div class=\"col-3\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n\n<!--      End Date-->\n      <div class=\"col-3\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-4 mt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getProviders()\"\n        >Get Report</button>\n      </div>\n    </div>\n    <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a list of providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a Data for providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Facility Providers Referral Report {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n        <table class=\"table table-bordered\">\n          <ng-container *ngFor=\"let data of values\">\n            <tr *ngIf=\"data.summaryDTOS.length != 0\">\n              <td><h3>{{ data.facilityName }}</h3></td>\n            </tr>\n            <tr  *ngIf=\"data.summaryDTOS.length != 0\">\n              <td>\n                <table>\n                  <tr>\n                    <th>Department Name</th>\n                    <th>Status</th>\n                    <th>Referrals</th>\n                  </tr>\n                  <tr *ngFor=\"let pr of data.summaryDTOS\">\n                    <td>{{ pr.departmentName }}</td>\n                    <td>{{ pr.status }}</td>\n                    <td>{{ pr.count }}</td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </ng-container>\n\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "su5n":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/superset/superset.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table-form\n  title=\"Superset Analytics\"\n  image=\"line-chart\"\n  [viewDetails]=\"false\"\n  [hideAdd]=\"true\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n<p>Apache Superset (incubating) is a modern, enterprise-ready business intelligence web application.</p>\n<ul>\n<li>A rich set of data visualizations</li>\n<li>An easy-to-use interface for exploring and visualizing data</li>\n<li>Create and share dashboards</li>\n<li>Enterprise-ready authentication with integration with major authentication providers (database, OpenID, LDAP, OAuth & REMOTE_USER through Flask AppBuilder)</li>\n<li>An extensible, high-granularity security/permission model allowing intricate rules on who can access individual features and the dataset</li>\n<li>A simple semantic layer, allowing users to control how data sources are displayed in the UI by defining which fields should show up in which drop-down \nand which aggregation and function metrics are made available to the user</li>\n<li>Integration with most SQL-speaking RDBMS through SQLAlchemy</li>\n<li>Deep integration with Druid.io</li>\n</ul>\n\n<p><u>Check the next tab to use Superset</u></p>\n\n  </ng-container>\n</app-table-form>");

/***/ }),

/***/ "uxBz":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9zdWNjZXNzZnVsLW1hcmFsaWEtcmVmZXJhbHMvc3VjY2Vzc2Z1bC1tYXJhbGlhLXJlZmVyYWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "M95H");
/* harmony import */ var _modules_providers_report_providers_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/providers-report/providers-report.component */ "20vP");
/* harmony import */ var _modules_providers_report_providers_refferal_report_providers_refferal_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/providers-report/providers-refferal-report/providers-refferal-report.component */ "XwFo");
/* harmony import */ var _modules_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/settings/settings.component */ "I7x6");
/* harmony import */ var _modules_settings_service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/settings/service/service.component */ "7SI1");
/* harmony import */ var _modules_settings_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/settings/indicators/indicators.component */ "B+bl");
/* harmony import */ var _modules_settings_reffereal_feedback_reffereal_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/settings/reffereal-feedback/reffereal-feedback.component */ "FfVP");
/* harmony import */ var _modules_settings_reffereal_type_reffereal_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/settings/reffereal-type/reffereal-type.component */ "PCfH");
/* harmony import */ var _modules_settings_registration_reason_registration_reason_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/settings/registration-reason/registration-reason.component */ "+dyC");
/* harmony import */ var _modules_locations_locations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/locations/locations.component */ "CeFl");
/* harmony import */ var _modules_users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/users/users.component */ "5xsu");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-password/change-password.component */ "0riC");
/* harmony import */ var _modules_fp_reports_issued_referrals_by_location_issued_referrals_by_location_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component */ "SdCi");
/* harmony import */ var _modules_fp_reports_citizen_card_report_citizen_card_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/fp-reports/citizen-card-report/citizen-card-report.component */ "ZH7t");
/* harmony import */ var _modules_geomaps_geomaps_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/geomaps/geomaps.component */ "b99G");
/* harmony import */ var _modules_dashboard_dashboard_summary_referrals_referrals_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/referrals/referrals.component */ "KVCe");
/* harmony import */ var _modules_dashboard_dashboard_summary_clients_clients_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/clients/clients.component */ "/IrT");
/* harmony import */ var _modules_dashboard_dashboard_summary_initiations_initiations_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/initiations/initiations.component */ "VvU+");
/* harmony import */ var _modules_dashboard_dashboard_summary_discontinuations_discontinuations_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/discontinuations/discontinuations.component */ "WDiv");
























var externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('externalUrlRedirectResolver');
var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [
            {
                path: 'dashboard',
                component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                data: { state: 'dashboard' }
            },
            {
                path: 'geomaps',
                component: _modules_geomaps_geomaps_component__WEBPACK_IMPORTED_MODULE_19__["GeomapsComponent"],
                data: { state: 'geomaps' }
            },
            {
                path: 'location',
                component: _modules_locations_locations_component__WEBPACK_IMPORTED_MODULE_14__["LocationsComponent"],
                data: { state: 'location' }
            },
            {
                path: 'users',
                component: _modules_users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
                data: { state: 'user_management' }
            },
            {
                path: 'providers_report',
                component: _modules_providers_report_providers_report_component__WEBPACK_IMPORTED_MODULE_6__["ProvidersReportComponent"],
                data: { state: 'providers-report' },
                children: [
                    {
                        path: 'issued-referrals-by-location-report',
                        component: _modules_fp_reports_issued_referrals_by_location_issued_referrals_by_location_component__WEBPACK_IMPORTED_MODULE_17__["IssuedReferralsByLocationComponent"],
                        data: { state: 'providers-report' }
                    },
                    {
                        path: 'citizens-report',
                        component: _modules_fp_reports_citizen_card_report_citizen_card_report_component__WEBPACK_IMPORTED_MODULE_18__["CitizenCardReportComponent"],
                        data: { state: 'providers-report' }
                    },
                    {
                        path: 'total-clients-enrolled-to-beach-management-report',
                        component: _modules_providers_report_providers_refferal_report_providers_refferal_report_component__WEBPACK_IMPORTED_MODULE_7__["ProvidersRefferalReportComponent"],
                        data: { state: 'more-reports' }
                    },
                    {
                        path: 'total-clients-enrolled-to-bee-keeping-report',
                        component: _modules_providers_report_providers_refferal_report_providers_refferal_report_component__WEBPACK_IMPORTED_MODULE_7__["ProvidersRefferalReportComponent"],
                        data: { state: 'more-reports' }
                    },
                    {
                        path: 'total-clients-enrolled-to-loan-units-report',
                        component: _modules_providers_report_providers_refferal_report_providers_refferal_report_component__WEBPACK_IMPORTED_MODULE_7__["ProvidersRefferalReportComponent"],
                        data: { state: 'more-reports' }
                    },
                ]
            },
            {
                path: 'settings',
                component: _modules_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
                data: { state: 'settings' },
                children: [
                    {
                        path: 'services',
                        component: _modules_settings_service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"],
                        data: { state: 'services' }
                    },
                    {
                        path: 'indicators',
                        component: _modules_settings_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_10__["IndicatorsComponent"],
                        data: { state: 'indicators' }
                    },
                    {
                        path: 'reffereal-feedback',
                        component: _modules_settings_reffereal_feedback_reffereal_feedback_component__WEBPACK_IMPORTED_MODULE_11__["RefferealFeedbackComponent"],
                        data: { state: 'reffereal-feedback' }
                    },
                    {
                        path: 'reffereal-type',
                        component: _modules_settings_reffereal_type_reffereal_type_component__WEBPACK_IMPORTED_MODULE_12__["RefferealTypeComponent"],
                        data: { state: 'reffereal-type' }
                    },
                    {
                        path: 'registration-reason',
                        component: _modules_settings_registration_reason_registration_reason_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationReasonComponent"],
                        data: { state: 'registration-reason' }
                    },
                ]
            },
            {
                path: 'referral-summary',
                component: _modules_dashboard_dashboard_summary_referrals_referrals_component__WEBPACK_IMPORTED_MODULE_20__["ReferralsComponent"],
                data: { state: 'referral-summary' }
            },
            {
                path: 'client',
                component: _modules_dashboard_dashboard_summary_clients_clients_component__WEBPACK_IMPORTED_MODULE_21__["ClientsComponent"],
                data: { state: 'client' }
            },
            {
                path: 'initiation',
                component: _modules_dashboard_dashboard_summary_initiations_initiations_component__WEBPACK_IMPORTED_MODULE_22__["InitiationsComponent"],
                data: { state: 'initiation' }
            },
            {
                path: 'discontinuation',
                component: _modules_dashboard_dashboard_summary_discontinuations_discontinuations_component__WEBPACK_IMPORTED_MODULE_23__["DiscontinuationsComponent"],
                data: { state: 'discontinuation' }
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: { state: 'login' }
    },
    {
        path: 'change-password',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
        data: { state: 'change-password' }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                {
                    provide: externalUrlProvider,
                    useValue: function (route) {
                        var externalUrl = route.paramMap.get('superset');
                        window.open('http://45.56.117.65', 'Superset');
                    },
                },
            ],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginNotification = { isError: false, message: 'Login successful', attempted: false, loading: false };
        this.customeUsernameNotifier = false;
        this.customePasswordNotifier = false;
        this.hide = true;
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('htmr-web-token');
        var location = localStorage.getItem('htmr-starting-location');
        if (token && location) {
            this.router.navigate(['', 'dashboard']);
        }
    };
    LoginComponent.prototype.login = function (loginCredentials) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var openMrsResult, openSrpResult, location_1, starting_location, e_1, starting_location, username, e_2;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.loginForm.valid) return [3 /*break*/, 10];
                        this.loginNotification.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, this.userService.login(loginCredentials).toPromise()];
                    case 2:
                        openMrsResult = _a.sent();
                        if (!(openMrsResult.results.length > 0)) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.userService.login1(loginCredentials).toPromise()];
                    case 4:
                        openSrpResult = _a.sent();
                        if (openSrpResult) {
                            if (openSrpResult.team && openSrpResult.team.team) {
                                if (openSrpResult.team.team.location) {
                                    location_1 = openSrpResult.team.team.location;
                                    starting_location = location_1 ? location_1.uuid : 't4f60f022-9390-41e1-8803-7a68f3a7fe98';
                                    localStorage.setItem('htmr-starting-location', starting_location);
                                }
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (e_1.status = 500) {
                            starting_location = '4f60f022-9390-41e1-8803-7a68f3a7fe98';
                            localStorage.setItem('htmr-starting-location', starting_location);
                        }
                        return [3 /*break*/, 6];
                    case 6:
                        username = openMrsResult.results[0].display;
                        localStorage.setItem('trcmis-user', username);
                        this.userService.setNavigation(openMrsResult);
                        this.loginNotification.isError = false;
                        this.loginNotification.message = 'Login successful';
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = true;
                        setTimeout(function () {
                            _this.router.navigate(['', 'dashboard']);
                        }, 2000);
                        return [3 /*break*/, 8];
                    case 7:
                        this.loginNotification.isError = true;
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = false;
                        this.loginNotification.message = 'Login failure, wrong username or password';
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_2 = _a.sent();
                        // tslint:disable-next-line: triple-equals
                        if (e_2.status == 401) {
                            this.loginNotification.message = 'Unauthorized Access.';
                            // tslint:disable-next-line: no-conditional-assignment
                        }
                        if (e_2.status == 403) {
                            this.loginNotification.message = 'Something went wrong, please try again.';
                            // tslint:disable-next-line: no-conditional-assignment
                        }
                        console.log(e_2);
                        this.loginNotification.isError = true;
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = false;
                        localStorage.removeItem('htmr-web-token');
                        setTimeout(function () {
                            _this.closeNotification();
                        }, 6000);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.closeNotification = function () {
        this.loginNotification.isError = false;
        this.loginNotification.attempted = false;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "vu+Z":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/geomaps/geomaps.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <ng-container ngProjectAs=\"table\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-map-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateMap($event)\"></app-map-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n     <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n        <app-loader [message]=\"'Loading map...'\"></app-loader>\n      </div>\n    </div>\n\n<div class=\"map-container\">\n  <div class=\"map-frame\">\n    <div id=\"map\"></div>\n  </div>\n</div>\n  </ng-container>\n\n");

/***/ }),

/***/ "wHzu":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  total-failed-referrals works!\n</p>\n");

/***/ }),

/***/ "xHJT":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "yBwf":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/chw-locations/chw-locations.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChwLocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChwLocationsComponent", function() { return ChwLocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chw_locations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chw-locations.component.html */ "/IIO");
/* harmony import */ var _chw_locations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chw-locations.component.scss */ "b831");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-tree-component */ "rDsv");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/location.service */ "yHma");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/org-unit.service */ "n3tq");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








var ChwLocationsComponent = /** @class */ (function () {
    function ChwLocationsComponent(orgunitService, locationService) {
        this.orgunitService = orgunitService;
        this.locationService = locationService;
        // the object that will carry the output value you can send one from outside to config start values
        this.orgunit_model = {
            selection_mode: 'orgUnit',
            selected_levels: [],
            show_update_button: true,
            selected_groups: [],
            orgunit_levels: [],
            orgunit_groups: [],
            selected_orgunits: [],
            user_orgunits: [],
            type: 'report',
            selected_user_orgunit: []
        };
        this.initial_usr_orgunit = [];
        // The organisation unit configuration object This will have to come from outside.
        this.orgunit_tree_config = {
            show_search: true,
            search_text: 'Search',
            level: null,
            loading: true,
            loading_message: 'Loading Organisation units...',
            multiple: true,
            multiple_key: 'none',
            placeholder: 'Select Location'
        };
        this.showUpdate = false;
        this.pickChildren = true;
        this.onOrgUnitUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onOrgUnitChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onOrgUnitModelUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.orgUnit = {};
        this.root_url = '../../../';
        this.nodes = null;
        this.orgunit_levels = [];
        this.visit_locations = [];
        this.organisationunits = [];
        this.selected_orgunits = [];
        // this variable controls the visibility of of the tree
        this.showOrgTree = true;
        this.user_orgunits_types = [
            { id: 'USER_ORGUNIT', name: 'User orgunit', shown: true },
            { id: 'USER_ORGUNIT_CHILDREN', name: 'User sub-units', shown: true },
            { id: 'USER_ORGUNIT_GRANDCHILDREN', name: 'User sub-x2-units', shown: true }
        ];
        this.onEvent = function ($event) { return console.log($event); };
        if (!this.orgunit_tree_config.hasOwnProperty('multiple_key')) {
            this.orgunit_tree_config.multiple_key = 'none';
        }
    }
    ChwLocationsComponent.prototype.updateModelOnSelect = function (data) {
        if (!this.orgunit_model.show_update_button) {
            this.onOrgUnitUpdate.emit({ name: 'ou', value: data.id });
            this.displayOrgTree();
        }
    };
    ChwLocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.orgunit_tree_config.multiple) {
            if (this.orgunit_tree_config.multiple_key === 'none') {
                var actionMapping = {
                    mouse: {
                        dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_EXPANDED,
                        click: function (node, tree, $event) { return angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event); }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
            else if (this.orgunit_tree_config.multiple_key === 'control') { // multselect using control key
                var actionMapping = {
                    mouse: {
                        click: function (node, tree, $event) {
                            $event.ctrlKey
                                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event);
                        }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
            else if (this.orgunit_tree_config.multiple_key === 'shift') { // multselect using shift key
                var actionMapping = {
                    mouse: {
                        click: function (node, tree, $event) {
                            $event.shiftKey
                                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event);
                        }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
        }
        else {
            var actionMapping = {
                mouse: {
                    dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_EXPANDED,
                    click: function (node, tree, $event) { return angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event); }
                }
            };
            this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
        }
        if (this.orgunitService.nodes === null) {
            this.locationService.loadTreeLocations().subscribe((function (locations) {
                // get top level locations
                var top_locations = locations;
                // filter down to remain with only visit facilities
                var visit_location = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](top_locations, { uuid: 'fd51b7a6-d770-11e8-ba9c-f23c917bb7ec' });
                _this.visit_locations.push({
                    name: visit_location.display,
                    id: visit_location.uuid,
                    level: 1,
                    parents: ""
                });
                visit_location = {
                    name: visit_location.display,
                    id: visit_location.uuid,
                    level: 1,
                    children: visit_location.childLocations
                        .filter(function (location) { return _this.getChildOrgunits(locations, location.uuid); })
                        .map(function (location) {
                        var child_loc = _this.getChildOrgunits(locations, location.uuid);
                        if (child_loc) {
                            _this.visit_locations.push({
                                name: child_loc.display,
                                id: child_loc.uuid,
                                level: 2,
                                parents: "" + visit_location.uuid
                            });
                            return {
                                name: child_loc.display,
                                id: child_loc.uuid,
                                level: 2,
                                children: child_loc.childLocations
                                    .filter(function (child) { return _this.getChildOrgunits(locations, child.uuid); })
                                    .map(function (child) {
                                    var last_child = _this.getChildOrgunits(locations, child.uuid);
                                    if (last_child) {
                                        _this.visit_locations.push({
                                            name: last_child.display,
                                            id: last_child.uuid,
                                            level: 3,
                                            parents: visit_location.uuid + ";" + child_loc.uuid
                                        });
                                        return {
                                            name: last_child.display,
                                            id: last_child.uuid,
                                            level: 3,
                                            children: last_child.childLocations
                                                .filter(function (level3child) { return _this.getChildOrgunits(locations, level3child.uuid); })
                                                .map(function (level3child) {
                                                var facility = _this.getChildOrgunits(locations, level3child.uuid);
                                                if (facility) {
                                                    _this.visit_locations.push({
                                                        name: facility.display,
                                                        id: facility.uuid,
                                                        level: 4,
                                                        parents: visit_location.uuid + ";" + child_loc.uuid + ";" + last_child.uuid
                                                    });
                                                    return {
                                                        name: facility.display,
                                                        id: facility.uuid,
                                                        level: 4,
                                                        children: facility.childLocations
                                                    };
                                                }
                                            })
                                        };
                                    }
                                })
                            };
                        }
                    })
                };
                _this.organisationunits = [visit_location];
                _this.orgunitService.nodes = [visit_location];
                _this.nodes = [visit_location];
                _this.orgunit_tree_config.loading = false;
            }));
        }
        else {
            this.organisationunits = this.orgunitService.nodes;
            this.orgunit_tree_config.loading = false;
        }
        // if (this.orgunitService.nodes === null) {
        //   this.orgunitService.getOrgunitLevelsInformation()
        //     .subscribe(
        //       (data: any) => {
        //         // assign urgunit levels and groups to variables
        //         this.orgunit_model.orgunit_levels = data.organisationUnitLevels;
        //         // setting organisation groups
        //         this.orgunitService.getOrgunitGroups().subscribe( groups => {//noinspection TypeScriptUnresolvedVariable
        //           this.orgunit_model.orgunit_groups = groups;
        //         });
        //
        //         // identify currently logged in usser
        //         this.orgunitService.getUserInformation(this.orgunit_model.type).subscribe(
        //           userOrgunit => {
        //             const level = this.orgunitService.getUserHighestOrgUnitlevel( userOrgunit );
        //             this.orgunit_model.user_orgunits = this.orgunitService.getUserOrgUnits( userOrgunit );
        //             this.orgunitService.user_orgunits = this.orgunitService.getUserOrgUnits( userOrgunit );
        //             const all_levels = data.pager.total;
        //             const orgunits = this.orgunitService.getuserOrganisationUnitsWithHighestlevel( level, userOrgunit );
        //             const use_level = parseInt(all_levels) - (parseInt(level) - 1);
        //             // load inital orgiunits to speed up loading speed
        //             this.orgunitService.getInitialOrgunitsForTree(orgunits).subscribe(
        //               (initial_data) => {
        //                 this.organisationunits = initial_data;
        //                 // a hack to make sure the user orgunit is not triggered on the first time
        //                 this.initial_usr_orgunit = [{id: 'USER_ORGUNIT', name: 'User org unit'}];
        //                 // after done loading initial organisation units now load all organisation units
        //                 const fields = this.orgunitService.generateUrlBasedOnLevels(use_level);
        //                 this.orgunitService.getAllOrgunitsForTree1(fields, orgunits).subscribe(
        //                   items => {
        //                     items[0].expanded = true;
        //                     this.organisationunits = items;
        //
        //                     this.orgunit_tree_config.loading = false;
        //                     // activate organisation units
        //                     for (const active_orgunit of this.orgunit_model.selected_orgunits) {
        //                       this.activateNode(active_orgunit.id, this.orgtree, true);
        //                     }
        //                     if (this.orgunit_model.selected_user_orgunit.length !== 0) {
        //                       this.emit(false);
        //                     }
        //                     // backup to make sure that always there is default organisation unit
        //                     // if (this.orgunit_model.selected_orgunits.length === 0 && this.orgunit_model.selected_user_orgunit.length === 0) {
        //                     //   for (const active_orgunit of this.orgunit_model.user_orgunits) {
        //                     //     this.activateNode(active_orgunit.id, this.orgtree, true);
        //                     //   }
        //                     // }
        //                     this.prepareOrganisationUnitTree(this.organisationunits, 'parent');
        //                   },
        //                   error => {
        //                     console.log('something went wrong while fetching Organisation units');
        //                     this.orgunit_tree_config.loading = false;
        //                   }
        //                 );
        //               },
        //               error => {
        //                 console.log('something went wrong while fetching Organisation units');
        //                 this.orgunit_tree_config.loading = false;
        //               }
        //             );
        //
        //           }
        //         );
        //       }
        //     );
    };
    ChwLocationsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["find"](orgunits, { uuid: uuid });
    };
    ChwLocationsComponent.prototype.updateOrgunits = function () {
        this.displayOrgTree();
        this.emit(true);
    };
    ChwLocationsComponent.prototype.clearAll = function () {
        for (var _i = 0, _a = this.orgunit_model.selected_orgunits; _i < _a.length; _i++) {
            var active_orgunit = _a[_i];
            this.deActivateNode(active_orgunit.id, this.orgtree, null);
        }
    };
    ChwLocationsComponent.prototype.setType = function (type) {
        this.orgunit_model.selection_mode = type;
        if (type !== 'orgUnit') {
            this.orgunit_model.selected_user_orgunit = [];
        }
        if (type !== 'Level') {
            this.orgunit_model.selected_levels = [];
        }
        if (type !== 'Group') {
            this.orgunit_model.selected_groups = [];
        }
    };
    // display Orgunit Tree
    ChwLocationsComponent.prototype.displayOrgTree = function () {
        this.showOrgTree = !this.showOrgTree;
    };
    ChwLocationsComponent.prototype.filterNodes = function (value, tree) {
        tree.treeModel.filterNodes(function (node) {
            return !node.data.name.startsWith(value);
        });
    };
    ChwLocationsComponent.prototype.activateNode = function (nodeId, nodes, first) {
        setTimeout(function () {
            var node = nodes.treeModel.getNodeById(nodeId);
            if (node) {
                node.setIsActive(true, true);
            }
            if (first) {
                node.toggleExpanded();
            }
        }, 0);
    };
    // a method to activate the model
    ChwLocationsComponent.prototype.deActivateNode = function (nodeId, nodes, event) {
        setTimeout(function () {
            var node = nodes.treeModel.getNodeById(nodeId);
            if (node) {
                node.setIsActive(false, true);
            }
        }, 0);
        if (event !== null) {
            event.stopPropagation();
        }
    };
    // check if orgunit already exist in the orgunit display list
    ChwLocationsComponent.prototype.checkOrgunitAvailabilty = function (orgunit, array) {
        var checker = false;
        array.forEach(function (value) {
            if (value.id === orgunit.id) {
                checker = true;
            }
        });
        return checker;
    };
    // action to be called when a tree item is deselected(Remove item in array of selected items
    ChwLocationsComponent.prototype.deactivateOrg = function ($event) {
        var _this = this;
        // this.period_selector.reset();
        if (this.orgunit_model.selection_mode === 'Usr_orgUnit') {
            this.orgunit_model.selection_mode = 'orgUnit';
            // this.period_selector.reset();
        }
        this.orgunit_model.selected_orgunits.forEach(function (item, index) {
            if ($event.node.data.id === item.id) {
                _this.orgunit_model.selected_orgunits.splice(index, 1);
            }
        });
        this.emit(false);
        // $event.node.isFocused = false;
    };
    // add item to array of selected items when item is selected
    ChwLocationsComponent.prototype.activateOrg = function ($event) {
        console.log('nafika');
        if (this.orgunit_model.selection_mode === 'Usr_orgUnit') {
            this.orgunit_model.selection_mode = 'orgUnit';
            // this.period_selector.reset();
        }
        if (!this.checkOrgunitAvailabilty($event.node.data, this.orgunit_model.selected_orgunits)) {
            this.orgunit_model.selected_orgunits.push({
                id: $event.node.data.id,
                name: $event.node.data.name,
                level: $event.node.data.level
            });
        }
        this.orgUnit = $event.node.data;
        this.emit(false);
    };
    ChwLocationsComponent.prototype.emit = function (showUpdate) {
        console.log({
            visit_locations: this.visit_locations,
            starting_name: this.getProperPreOrgunitName(),
            items: this.orgunit_model.selected_orgunits,
            name: 'ou',
            value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
        });
        if (showUpdate) {
            this.onOrgUnitUpdate.emit({
                visit_locations: this.visit_locations,
                starting_name: this.getProperPreOrgunitName(),
                items: this.orgunit_model.selected_orgunits,
                name: 'ou',
                value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
            });
        }
        else {
            this.onOrgUnitChange.emit({
                visit_locations: this.visit_locations,
                starting_name: this.getProperPreOrgunitName(),
                items: this.orgunit_model.selected_orgunits,
                name: 'ou',
                value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
            });
        }
    };
    // set selected groups
    ChwLocationsComponent.prototype.setSelectedGroups = function (selected_groups) {
        this.orgunit_model.selected_groups = selected_groups;
        this.onOrgUnitModelUpdate.emit(this.orgunit_model);
    };
    // set selected groups
    ChwLocationsComponent.prototype.setSelectedUserOrg = function (selected_user_orgunit) {
        this.orgunit_model.selected_user_orgunit = selected_user_orgunit;
        this.emit(false);
    };
    // set selected groups
    ChwLocationsComponent.prototype.setSelectedLevels = function (selected_levels) {
        this.orgunit_model.selected_levels = selected_levels;
        this.emit(false);
    };
    ChwLocationsComponent.prototype.prepareOrganisationUnitTree = function (organisationUnit, type) {
        var _this = this;
        if (type === void 0) { type = 'top'; }
        if (type === 'top') {
            if (organisationUnit.children) {
                organisationUnit.children.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                });
                organisationUnit.children.forEach(function (child) {
                    _this.prepareOrganisationUnitTree(child, 'top');
                });
            }
        }
        else {
            organisationUnit.forEach(function (orgunit) {
                if (orgunit.children) {
                    orgunit.children.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    });
                    orgunit.children.forEach(function (child) {
                        _this.prepareOrganisationUnitTree(child, 'top');
                    });
                }
            });
        }
    };
    // prepare a proper name for updating the organisation unit display area.
    ChwLocationsComponent.prototype.getProperPreOrgunitName = function () {
        var name = '';
        if (this.orgunit_model.selection_mode === 'Group') {
            name = (this.orgunit_model.selected_groups.length === 0) ? '' : this.orgunit_model.selected_groups.map(function (group) { return group.name; }).join(', ') + ' in';
        }
        else if (this.orgunit_model.selected_user_orgunit.length !== 0) {
            name = (this.orgunit_model.selected_user_orgunit.length === 0) ? '' : this.orgunit_model.selected_user_orgunit.map(function (level) { return level.name; }).join(', ');
        }
        else if (this.orgunit_model.selection_mode === 'Level') {
            name = (this.orgunit_model.selected_levels.length === 0) ? '' : this.orgunit_model.selected_levels.map(function (level) { return level.name; }).join(', ') + ' in';
        }
        else {
            name = '';
        }
        return name;
    };
    // get user organisationunit name
    ChwLocationsComponent.prototype.getOrgUnitName = function (id) {
        var orgunit = this.orgtree.treeModel.getNodeById(id);
        return orgunit.name;
    };
    // a function to prepare a list of organisation units for analytics
    ChwLocationsComponent.prototype.getOrgUnitsForAnalytics = function (orgunit_model, with_children) {
        var orgUnits = [];
        var organisation_unit_analytics_string = '';
        if (orgunit_model.selected_user_orgunit.length !== 0) {
            orgunit_model.selected_user_orgunit.forEach(function (orgunit) {
                organisation_unit_analytics_string += orgunit.id + ';';
            });
        }
        else {
            // if there is only one organisation unit selected
            if (orgunit_model.selected_orgunits.length === 1) {
                var detailed_orgunit = this.orgtree.treeModel.getNodeById(orgunit_model.selected_orgunits[0].id);
                orgUnits.push(detailed_orgunit.id);
            }
            else {
                orgunit_model.selected_orgunits.forEach(function (orgunit) {
                    orgUnits.push(orgunit.id);
                });
            }
            if (orgunit_model.selection_mode === 'orgUnit') {
            }
            if (orgunit_model.selection_mode === 'Level') {
                orgunit_model.selected_levels.forEach(function (level) {
                    organisation_unit_analytics_string += 'LEVEL-' + level.level + ';';
                });
            }
            if (orgunit_model.selection_mode === 'Group') {
                orgunit_model.selected_groups.forEach(function (group) {
                    organisation_unit_analytics_string += 'OU_GROUP-' + group.id + ';';
                });
            }
        }
        return organisation_unit_analytics_string + orgUnits.join(';');
    };
    ChwLocationsComponent.ctorParameters = function () { return [
        { type: _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"] },
        { type: _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] }
    ]; };
    ChwLocationsComponent.propDecorators = {
        orgunit_model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        orgunit_tree_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        showUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        pickChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        onOrgUnitUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onOrgUnitChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onOrgUnitModelUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        orgtree: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['orgtree', { static: true },] }]
    };
    ChwLocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-chw-locations',
            template: _raw_loader_chw_locations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_chw_locations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"]])
    ], ChwLocationsComponent);
    return ChwLocationsComponent;
}());



/***/ }),

/***/ "yHma":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client.service */ "gkM4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
        this.locations = [];
        this.loadingMessage = 'Loading locations';
    }
    // get all data element group
    LocationService.prototype.loadLocations = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.getOpenMRS("location?v=full&limit=8000")
                .subscribe(function (locationResponse) {
                _this.locations = locationResponse.results.map(function (location) {
                    return {
                        uuid: location.uuid,
                        name: location.name,
                        display: location.display,
                        links: location.links,
                        tags: location.tags,
                        parentLocation: location.parentLocation,
                        childLocations: location.childLocations,
                        confirmDelete: false
                    };
                });
                _this.loadingMessage = 'loaded successfully';
                observer.next(_this.locations);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    // get all data element group
    LocationService.prototype.loadTreeLocations = function (freshCopy) {
        var _this = this;
        if (freshCopy === void 0) { freshCopy = false; }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            if (_this.locations.length > 0 && !freshCopy) {
                observer.next(_this.locations);
                observer.complete();
            }
            else {
                _this.http.getOpenMRS("location?v=default&limit=8000")
                    .subscribe(function (locationResponse) {
                    _this.locations = locationResponse.results
                        .map(function (location) {
                        return {
                            uuid: location.uuid,
                            id: location.id,
                            name: location.name,
                            display: location.display,
                            links: location.links,
                            tags: location.tags,
                            parentLocation: location.parentLocation,
                            childLocations: location.childLocations,
                            confirmDelete: false
                        };
                    });
                    _this.loadingMessage = 'loaded successfully';
                    observer.next(_this.locations);
                    observer.complete();
                }, function (error) {
                    _this.loadingMessage = 'loading failed';
                    observer.error('some error occur');
                });
            }
        });
    };
    LocationService.prototype.sendHRFDetails = function (data) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenSRP('save-health-facilities', data)
                .subscribe(function (locationResponse) {
                console.log({ locationResponse: locationResponse });
                observer.next(_this.locations);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    LocationService.prototype.createLocation = function (dataObject) {
        var _this = this;
        this.loadingMessage = 'Creating new  location';
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenMRS("location", dataObject)
                .subscribe(function (locationResponse) {
                _this.loadingMessage = 'Created successfully';
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'Creation failed';
                observer.error('some error occur');
            });
        });
    };
    LocationService.prototype.updateLocation = function (dataObject, uuid) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.postOpenMRS("location/" + uuid, dataObject)
                .subscribe(function (locationResponse) {
                _this.loadingMessage = 'Created successfully';
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'Creation failed';
                observer.error('some error occur');
            });
        });
    };
    LocationService.prototype.deleteLocation = function (location) {
        var _this = this;
        this.loadingMessage = 'Deleting ' + location.name + ' location';
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.http.deleteOpenMRS("location/" + location.uuid)
                .subscribe(function (locationResponse) {
                _this.loadingMessage = ' Deleted successfully';
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'Deletion failed';
                observer.error('some error occur');
            });
        });
    };
    LocationService.ctorParameters = function () { return [
        { type: _http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
    ]; };
    LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ywvp":
/*!********************************************************!*\
  !*** ./src/app/modules/superset/superset.component.ts ***!
  \********************************************************/
/*! exports provided: SupersetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupersetComponent", function() { return SupersetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_superset_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./superset.component.html */ "su5n");
/* harmony import */ var _superset_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./superset.component.scss */ "FNkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var SupersetComponent = /** @class */ (function () {
    function SupersetComponent() {
    }
    SupersetComponent.prototype.ngOnInit = function () {
    };
    SupersetComponent.ctorParameters = function () { return []; };
    SupersetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-superset',
            template: _raw_loader_superset_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_superset_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SupersetComponent);
    return SupersetComponent;
}());



/***/ }),

/***/ "zM26":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/save-area/save-area.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 p-0\">\n      <p @fadeIn *ngIf=\"showConfirm\" class=\"text-right\">\n        {{ confirmText }}\n        <button mat-mini-fab style=\"color: white; background-color: red; border-radius: 50%!important;\" @fadeIn (click)=\"showConfirm = false\">\n          <mat-icon>clear</mat-icon>\n        </button> &nbsp;\n        <button mat-mini-fab style=\"color: white; background-color: green; border-radius: 50%!important;\" @fadeIn (click)=\"onSave(false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </p>\n      <button\n        @fadeIn\n        type=\"button\"\n        *ngIf=\"!showConfirm\"\n        class=\"fa-pull-right\"\n        [disabled]=\"saveDisabled\"\n        mat-raised-button color=\"primary\"\n        (click)=\"onSave(true)\">\n        <mat-icon>{{saveIcon}}</mat-icon> {{ saveText }}\n      </button>\n      <button\n        type=\"button\"\n        @fadeIn\n        *ngIf=\"!showConfirm && showCancel\"\n        class=\"fa-pull-right\"\n        mat-button color=\"warn\"\n        (click)=\"onClose()\">\n        <mat-icon>close</mat-icon> {{ cancelText }}\n      </button>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn6E":
/*!********************************************************!*\
  !*** ./src/app/modules/geomaps/geomaps.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-container {\n  position: absolute;\n  top: 200px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 30px;\n}\n\n.map-frame {\n  border: 2px solid black;\n  height: 100%;\n}\n\n#map {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW9tYXBzL2dlb21hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlb21hcHMvZ2VvbWFwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi5tYXAtZnJhbWUge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map