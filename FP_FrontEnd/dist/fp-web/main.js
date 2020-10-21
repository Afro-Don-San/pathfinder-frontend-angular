(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_providers_report_providers_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/providers-report/providers-report.component */ "./src/app/modules/providers-report/providers-report.component.ts");
/* harmony import */ var _modules_providers_report_providers_refferal_report_providers_refferal_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/providers-report/providers-refferal-report/providers-refferal-report.component */ "./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.ts");
/* harmony import */ var _modules_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/settings/settings.component */ "./src/app/modules/settings/settings.component.ts");
/* harmony import */ var _modules_settings_service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/settings/service/service.component */ "./src/app/modules/settings/service/service.component.ts");
/* harmony import */ var _modules_settings_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/settings/indicators/indicators.component */ "./src/app/modules/settings/indicators/indicators.component.ts");
/* harmony import */ var _modules_settings_reffereal_feedback_reffereal_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/settings/reffereal-feedback/reffereal-feedback.component */ "./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.ts");
/* harmony import */ var _modules_settings_reffereal_type_reffereal_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/settings/reffereal-type/reffereal-type.component */ "./src/app/modules/settings/reffereal-type/reffereal-type.component.ts");
/* harmony import */ var _modules_settings_registration_reason_registration_reason_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/settings/registration-reason/registration-reason.component */ "./src/app/modules/settings/registration-reason/registration-reason.component.ts");
/* harmony import */ var _modules_locations_locations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/locations/locations.component */ "./src/app/modules/locations/locations.component.ts");
/* harmony import */ var _modules_users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/users/users.component */ "./src/app/modules/users/users.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _modules_fp_reports_issued_referrals_by_location_issued_referrals_by_location_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component */ "./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.ts");
/* harmony import */ var _modules_fp_reports_citizen_card_report_citizen_card_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/fp-reports/citizen-card-report/citizen-card-report.component */ "./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.ts");
/* harmony import */ var _modules_geomaps_geomaps_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/geomaps/geomaps.component */ "./src/app/modules/geomaps/geomaps.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_summary_referrals_referrals_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/referrals/referrals.component */ "./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_summary_clients_clients_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/clients/clients.component */ "./src/app/modules/dashboard/dashboard-summary/clients/clients.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_summary_initiations_initiations_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/initiations/initiations.component */ "./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_summary_discontinuations_discontinuations_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/discontinuations/discontinuations.component */ "./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.ts");
























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
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'htmr-web';
        this.links = ['link1', 'link1', 'link1'];
    }
    AppComponent.prototype.showInfo = function (link) { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _modules_dashboard_summary_card_summary_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/dashboard/summary-card/summary-card.component */ "./src/app/modules/dashboard/summary-card/summary-card.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_providers_report_providers_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/providers-report/providers-report.component */ "./src/app/modules/providers-report/providers-report.component.ts");
/* harmony import */ var _modules_providers_report_facility_referral_report_facility_refferal_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/providers-report/facility-referral-report/facility-refferal-report.component */ "./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.ts");
/* harmony import */ var _modules_providers_report_inter_facility_refferal_report_inter_facility_refferal_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component */ "./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.ts");
/* harmony import */ var _modules_providers_report_providers_refferal_report_providers_refferal_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/providers-report/providers-refferal-report/providers-refferal-report.component */ "./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.ts");
/* harmony import */ var _modules_reports_reports_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/reports/reports.component */ "./src/app/modules/reports/reports.component.ts");
/* harmony import */ var _modules_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/settings/settings.component */ "./src/app/modules/settings/settings.component.ts");
/* harmony import */ var _modules_settings_indicators_indicators_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/settings/indicators/indicators.component */ "./src/app/modules/settings/indicators/indicators.component.ts");
/* harmony import */ var _modules_settings_service_service_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/settings/service/service.component */ "./src/app/modules/settings/service/service.component.ts");
/* harmony import */ var _modules_settings_reffereal_type_reffereal_type_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/settings/reffereal-type/reffereal-type.component */ "./src/app/modules/settings/reffereal-type/reffereal-type.component.ts");
/* harmony import */ var _modules_settings_reffereal_feedback_reffereal_feedback_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/settings/reffereal-feedback/reffereal-feedback.component */ "./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.ts");
/* harmony import */ var _modules_settings_registration_reason_registration_reason_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/settings/registration-reason/registration-reason.component */ "./src/app/modules/settings/registration-reason/registration-reason.component.ts");
/* harmony import */ var _modules_dashboard_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/dashboard/card-filter/card-filter.component */ "./src/app/modules/dashboard/card-filter/card-filter.component.ts");
/* harmony import */ var _modules_settings_service_service_indicator_service_indicator_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/settings/service/service-indicator/service-indicator.component */ "./src/app/modules/settings/service/service-indicator/service-indicator.component.ts");
/* harmony import */ var _modules_reports_total_registered_clients_total_registered_clients_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/reports/total-registered-clients/total-registered-clients.component */ "./src/app/modules/reports/total-registered-clients/total-registered-clients.component.ts");
/* harmony import */ var _modules_reports_total_referrals_issued_total_referrals_issued_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/reports/total-referrals-issued/total-referrals-issued.component */ "./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.ts");
/* harmony import */ var _modules_reports_total_successful_total_successful_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/reports/total-successful/total-successful.component */ "./src/app/modules/reports/total-successful/total-successful.component.ts");
/* harmony import */ var _modules_reports_total_issued_lost_followup_total_issued_lost_followup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/reports/total-issued-lost-followup/total-issued-lost-followup.component */ "./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.ts");
/* harmony import */ var _modules_reports_total_lost_followup_total_lost_followup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/reports/total-lost-followup/total-lost-followup.component */ "./src/app/modules/reports/total-lost-followup/total-lost-followup.component.ts");
/* harmony import */ var _modules_reports_total_failed_referrals_total_failed_referrals_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/reports/total-failed-referrals/total-failed-referrals.component */ "./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.ts");
/* harmony import */ var _modules_reports_successful_maralia_referals_successful_maralia_referals_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/reports/successful-maralia-referals/successful-maralia-referals.component */ "./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.ts");
/* harmony import */ var _modules_locations_locations_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modules/locations/locations.component */ "./src/app/modules/locations/locations.component.ts");
/* harmony import */ var _modules_locations_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modules/locations/add-location/add-location.component */ "./src/app/modules/locations/add-location/add-location.component.ts");
/* harmony import */ var _modules_users_users_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modules/users/users.component */ "./src/app/modules/users/users.component.ts");
/* harmony import */ var _modules_users_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modules/users/add-member/add-member.component */ "./src/app/modules/users/add-member/add-member.component.ts");
/* harmony import */ var _modules_users_team_info_team_info_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modules/users/team-info/team-info.component */ "./src/app/modules/users/team-info/team-info.component.ts");
/* harmony import */ var _modules_users_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/users/add-team/add-team.component */ "./src/app/modules/users/add-team/add-team.component.ts");
/* harmony import */ var _modules_users_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/users/update-member/update-member.component */ "./src/app/modules/users/update-member/update-member.component.ts");
/* harmony import */ var _modules_superset_superset_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/superset/superset.component */ "./src/app/modules/superset/superset.component.ts");
/* harmony import */ var _modules_fp_reports_issued_referrals_by_location_issued_referrals_by_location_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component */ "./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.ts");
/* harmony import */ var _modules_fp_reports_issued_referrals_issued_referrals_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modules/fp-reports/issued-referrals/issued-referrals.component */ "./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _modules_fp_reports_total_family_planning_methods_issued_total_family_planning_methods_issued_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component */ "./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.ts");
/* harmony import */ var _modules_fp_reports_citizen_card_report_citizen_card_report_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./modules/fp-reports/citizen-card-report/citizen-card-report.component */ "./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.ts");
/* harmony import */ var _modules_geomaps_geomaps_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./modules/geomaps/geomaps.component */ "./src/app/modules/geomaps/geomaps.component.ts");
/* harmony import */ var _modules_geomaps_map_filter_map_filter_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./modules/geomaps/map-filter/map-filter.component */ "./src/app/modules/geomaps/map-filter/map-filter.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_summary_referrals_referrals_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/referrals/referrals.component */ "./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_summary_clients_clients_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/clients/clients.component */ "./src/app/modules/dashboard/dashboard-summary/clients/clients.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_summary_initiations_initiations_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/initiations/initiations.component */ "./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_summary_discontinuations_discontinuations_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./modules/dashboard/dashboard-summary/discontinuations/discontinuations.component */ "./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.ts");



















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            entryComponents: [_modules_users_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_38__["UpdateMemberComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer bgimage\">\n  <div class=\"outer bgcolor\">\n\n  </div>\n</div>\n<div class=\"logos\">\n <img src=\"assets/partners/rsz_tanzania_logo.jpg\"> \n <img src=\"assets/partners/rsz_usaid_logo.png\"> \n</div>\n\n<div class=\"title\">\n  <table>\n    <tr>\n      <td style=\"vertical-align: top\">\n    <!--  <img src=\"assets/img/logo.png\" style=\"height: 70px\"> -->\n        &nbsp;&nbsp;&nbsp;\n      </td>\n      <td style=\"color: white\">\n        <h1 style=\"font-weight: bolder;\">Family Planning</h1>\n        <h5>Provision Of Quality Reproductive Health</h5>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<div class=\"login\">\n  <div class=\"logintop\">\n    <img src=\"assets/img/lock.png\" style=\"height: 50px; padding-top: 10px;margin-left: 20px;\">\n  </div>\n  <div class=\"loginbottom\" style=\"padding: 20px;\">\n    <h2 style=\"font-weight: bold;margin-bottom: 0px; color: #2D69A5\">Change Password</h2>\n\n    <div class=\"loginform\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"changePassword(loginForm.value)\" validate>\n\n         <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"oldpassword\" matInput placeholder=\"Old Password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error *ngIf=\"!loginForm.get('oldpassword').valid && loginForm.get('oldpassword').touched\">Please Enter New Password\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"newpassword\" matInput placeholder=\"New Password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error *ngIf=\"!loginForm.get('newpassword').valid && loginForm.get('newpassword').touched\">Please Enter New Password\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"confirmpassword\" matInput placeholder=\"Confirm Password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error *ngIf=\"!loginForm.get('confirmpassword').valid && loginForm.get('confirmpassword').touched\">Please Confirm New Password\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n\n       <div class=\"col-md-12 mb-5\">\n          <button style=\"border-radius: 5px\" mat-raised-button color=\"primary\" type=\"submit\" class=\"cursor btn-block\" >Login</button>\n          <div *ngIf=\"!loginNotification.isError&&loginNotification.attempted\"  style=\"padding:.35rem 0.25rem!important;color: forestgreen!important;font-weight: bolder;font-size: 14px\" class=\"\" role=\"alert\">\n            {{loginNotification.message}}\n            <button type=\"button\" class=\"close\" style=\"padding-top: 0px!important;margin-top: 0px!important;\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div>\n            <img *ngIf=\"loginNotification.loading\" src=\"assets/img/loading.gif\">\n          </div>\n          <div class=\"\" style=\"padding:.35rem 0.25rem!important;color: orangered!important;font-weight: bolder;font-size: 14px\" *ngIf=\"loginNotification.isError&&loginNotification.attempted\" role=\"alert\">\n            {{loginNotification.message}}\n            <button type=\"button\" class=\"close\" (click)=\"closeNotification()\"  style=\"padding-top: 0px!important;margin-top: 0px!important;\"  data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n        </div> \n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px; }\n\n.title {\n  position: absolute;\n  top: 5px;\n  left: 5px; }\n\n.login {\n  position: absolute;\n  top: 12%;\n  right: 6%;\n  background-color: transparent;\n  height: 450px;\n  width: 400px;\n  z-index: 100;\n  border-top-left-radius: 10px; }\n\n.logintop {\n  height: 50px;\n  background-color: yellow;\n  width: 100%;\n  border-top-left-radius: 15px !important; }\n\n.loginbottom {\n  height: 500px;\n  background-color: white;\n  width: 100%;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px; }\n\n.logos {\n  position: absolute;\n  bottom: 5px;\n  left: 5px; }\n\n.logos img {\n  padding: 10px;\n  height: 50px;\n  opacity: 0.5; }\n\n.bgimage {\n  background: url('bg-fp.jpg') no-repeat center center fixed;\n  background-size: cover; }\n\n.bgcolor {\n  background-color: rgba(70, 107, 73, 0.8); }\n\n.logintop:before {\n  height: 50px;\n  width: 10px;\n  display: block;\n  content: \" \";\n  background-color: #FFF;\n  position: absolute;\n  right: -0px;\n  top: -0px;\n  border-top: 0px solid blue;\n  border-bottom: 0px solid blue; }\n\n.logintop {\n  height: 50px;\n  width: 350px;\n  border-radius: 0px 0px 0px 0px;\n  background-color: #FFF;\n  position: relative;\n  border: 0px solid blue; }\n\n.logintop:after {\n  display: block;\n  content: \" \";\n  width: 100px;\n  height: 50px;\n  top: -0px;\n  background-color: #FFF;\n  position: absolute;\n  right: -25.6px;\n  transform: skewX(45deg);\n  -ms-transform: skewX(45deg);\n  -webkit-transform: skewX(45deg);\n  border: 0px solid blue;\n  z-index: -1; }\n\n.loginform {\n  margin-top: 30px; }\n\n.loginform button {\n  margin-top: 30px;\n  border-radius: 0px;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.loginform form {\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  padding-top: 20px; }\n\n.loginform input {\n  border-top: 0px;\n  border-left: 0px;\n  border-radius: 0px;\n  border-right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLHVDQUFzQyxFQUFBOztBQUd4QztFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLCtCQUErQjtFQUMvQixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsMERBQXlFO0VBSXpFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHdDQUF3QyxFQUFBOztBQUkxQztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsY0FBYztFQUNkLFlBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBc0I7RUFDdEIsMkJBQTBCO0VBQzFCLCtCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usd0NBQXFDO0VBQ3JDLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICB9XG4gIFxuICAudGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiA1cHg7XG4gIH1cbiAgXG4gIC5sb2dpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTIlO1xuICAgIHJpZ2h0OiA2JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgLmxvZ2ludG9wIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAubG9naW5ib3R0b20ge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgfVxuICBcbiAgLmxvZ29ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICBsZWZ0OiA1cHg7XG4gIH1cbiAgXG4gIC5sb2dvcyBpbWd7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIFxuICAuYmdpbWFnZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmctZnAuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAuYmdjb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MCwgMTA3LCA3MywgMC44KTtcbiAgfVxuICBcbiAgXG4gIC5sb2dpbnRvcDpiZWZvcmUge1xuICBcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDpcIiBcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTBweDtcbiAgICB0b3A6IC0wcHg7XG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGJsdWU7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsdWU7XG4gIH1cbiAgLmxvZ2ludG9wIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDBweCBzb2xpZCBibHVlO1xuICB9XG4gIC5sb2dpbnRvcDphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDpcIiBcIjtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRvcDogLTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTI1LjZweDtcbiAgICB0cmFuc2Zvcm06c2tld1goNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06c2tld1goNDVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDQ1ZGVnKTtcbiAgICBib3JkZXI6IDBweCBzb2xpZCBibHVlO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gIFxuICAubG9naW5mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIFxuICAubG9naW5mb3JtIGJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIH1cbiAgLmxvZ2luZm9ybSBmb3Jte1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLmxvZ2luZm9ybSBpbnB1dHtcbiAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginNotification = { isError: false, message: '', attempted: false, loading: false };
        this.customeUsernameNotifier = false;
        this.customePasswordNotifier = false;
        this.hide = true;
        this.loginForm = this.formBuilder.group({
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('htmr-web-token');
        var location = localStorage.getItem('htmr-starting-location');
    };
    ChangePasswordComponent.prototype.changePassword = function (loginCredentials) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var openMrsResult, e_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.loginForm.valid) return [3 /*break*/, 6];
                        this.loginNotification.loading = true;
                        if (!(this.loginForm.value.newpassword == this.loginForm.value.confirmpassword)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userService.changePassword(loginCredentials).toPromise()];
                    case 2:
                        openMrsResult = _a.sent();
                        console.log(openMrsResult);
                        if (openMrsResult) {
                            this.loginNotification.isError = false;
                            this.loginNotification.attempted = true;
                            this.loginNotification.loading = false;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.loginNotification.isError = true;
                        this.loginNotification.message = "Password changing failed.";
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = false;
                        localStorage.removeItem('htmr-web-token');
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
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-nav mat-elevation-z6\">\n  <!--<mat-toolbar class=\"toolbar no-print\" style=\"background-color: #07587f\"> -->\n  <mat-toolbar class=\"toolbar no-print\" style=\"background-color: #3F997B\">\n    <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n\n    <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"isOpen = !isOpen\"\n            title=\"Toggle Menu\"\n            *ngIf=\"!(isHandset$ | async)\">\n      <mat-icon class=\"secondary-color\" aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n    <span class=\"secondary-color\">\n      <img src=\"assets/img/logo.png\"\n           style=\"height: 75px; width: 75px; margin-left: 10px; margin-right: 21px; border-radius: 50%;\">\n    </span>\n    <span style=\"display: inline-block; margin-top: 14px; margin-left: 7px; font-size: 33px; color: #ffffff\">\n      Family Planning\n      <span *ngIf=\"isHandset$ | async\">(FP)</span>\n    </span>\n\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"example-fill-remaining-space\"></span>\n\n    <!--    user dropdown menu-->\n    <mat-menu #appMenu=\"matMenu\">\n      <!--\n        <a (click)=\"logout()\" mat-menu-item>\n          <i class=\"fa fa-user\"></i>\n          Profile\n        </a>\n        -->\n      <a (click)=\"goToChangePass()\" mat-menu-item>\n        <i class=\"fa fa-key\"></i>\n        Change Password\n      </a>\n      <mat-divider></mat-divider>\n      <a (click)=\"logout()\" mat-menu-item>\n        <i class=\"fa fa-sign-out\"></i>\n        Logout\n      </a>\n\n    </mat-menu>\n\n    <button mat-button [matMenuTriggerFor]=\"appMenu\">\n      <span class=\"secondary-color\">\n        <mat-icon fontSet=\"fa\" fontIcon=\"fa-user\" style=\"margin-top: 6px\"></mat-icon>\n        {{ username }}\n      </span>\n    </button>\n  </mat-toolbar>\n</nav>\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav no-print\" fixedInViewport=\"false\"\n               [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n               [opened]=\"!(isHandset$ | async) && isOpen\">\n    <mat-toolbar>FP</mat-toolbar>\n    <app-placeholder *ngIf=\"loading$ | async\" [numberOfLines]=\"30\"></app-placeholder>\n    <mat-nav-list>\n      <ng-container *ngFor=\"let linkItem of navigation\">\n        <!--        <div class=\"col-sm-12 item\" [routerLinkActive]=\"'active-item'\" [routerLink]=\"linkItem.links\" >-->\n        <!--          <div class=\"text-center\"><i class=\"{{linkItem.icon}}\"></i></div>-->\n        <!--          <h3>{{linkItem.name}}</h3>-->\n        <!--        </div>-->\n        <a mat-list-item [routerLink]=\"linkItem.links\" routerLinkActive=\"active-menu\">\n          <i style=\"color: #07587f\" class=\"{{linkItem.icon}}\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{linkItem.name}}</span>\n        </a>\n        <mat-divider></mat-divider>\n      </ng-container><br /><br />\n\n      <ng-container>\n        <p> &nbsp;&nbsp; Dashboard Summary</p>\n        <mat-divider></mat-divider>\n        <a mat-list-item routerLink=\"/client\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-user\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Clients</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_clients }}</span>\n        </a>\n\n        <a mat-list-item routerLink='/referral-summary'> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-arrows-alt\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Referrals</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_referrals }}</span>\n        </a>\n\n<!--        <a mat-list-item> &nbsp;&nbsp;-->\n<!--          <i style=\"color: #0DA98F\" class=\"fa fa-users\"></i> &nbsp;&nbsp;-->\n<!--          <span style=\"font-weight: 250\">Families</span> &nbsp;&nbsp;-->\n<!--          <span style=\"font-weight: 500\">{{ total_families }}</span>-->\n<!--        </a>-->\n\n        <a mat-list-item routerLink=\"/initiation\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-thumbs-up\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Initiations</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_initiations }}</span>\n        </a>\n        <a mat-list-item routerLink=\"/discontinuation\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-thumbs-down\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Discontinuations</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_discontinuations }}</span>\n        </a>\n\n<!--        <a mat-list-item> &nbsp;&nbsp;-->\n<!--          <i style=\"color: #0DA98F\" class=\"fa fa-scissors\"></i> &nbsp;&nbsp;-->\n<!--          <span style=\"font-weight: 250\">Services</span> &nbsp;&nbsp;-->\n<!--          <span style=\"font-weight: 500\">{{ total_services }}</span>-->\n<!--        </a>-->\n        <a mat-list-item routerLink=\"/providers_report/citizens-report\"> &nbsp;&nbsp;\n          <i style=\"color: #0DA98F\" class=\"fa fa-users\"></i> &nbsp;&nbsp;\n          <span style=\"font-weight: 250\">Citizen Reports</span> &nbsp;&nbsp;\n          <span style=\"font-weight: 500\">{{ total_citizen_reports }}</span>\n        </a>\n\n        <mat-divider></mat-divider>\n      </ng-container>\n\n\n    </mat-nav-list>\n\n  </mat-sidenav>\n  <mat-sidenav-content>\n\n    <!-- Add Content Here -->\n    <div class=\"content\" style=\"margin-top: 80px\"\n         [@routeAnimations]=\"o.isActivated ? o.activatedRoute : ''\">\n      <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.main-nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2; }\n\nmat-nav-list img {\n  height: 20px;\n  margin-right: 15px;\n  margin-bottom: 8px; }\n\nmat-nav-list {\n  padding-top: 1px; }\n\n.active-menu {\n  border-radius: 0px !important;\n  background-color: rgba(0, 0, 0, 0.08) !important;\n  color: black !important;\n  border-right: 2px solid #3F997B !important; }\n\n.active-menu img {\n    height: 26px; }\n\n.sidenav {\n  width: 240px;\n  box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.14); }\n\n.sidenav .mat-toolbar {\n  background: #3F997B; }\n\n.mat-toolbar .mat-primary {\n  position: absolute;\n  top: 0;\n  z-index: 1; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.mat-drawer-side {\n  border: 0px !important; }\n\n.mat-list-base .mat-list-item, .mat-list-base .mat-list-option {\n  display: block;\n  height: 60px !important;\n  width: 100%;\n  padding: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }\n\n.mat-list-base .mat-list-item:hover, .mat-list-base .mat-list-option:hover {\n  transform: scale(1.03);\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  color: black !important;\n  border-right: 4px solid #3F997B !important; }\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 80px !important; }\n\n.smt {\n  font-size: 20px !important; }\n\n.item {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: rgba(45, 105, 165, 0.1);\n  padding-top: 20px;\n  padding-bottom: 20px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVSxFQUFBOztBQUlaO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw2QkFBNEI7RUFDNUIsZ0RBQTRDO0VBQzVDLHVCQUFzQjtFQUN0QiwwQ0FBeUMsRUFBQTs7QUFKM0M7SUFPSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQyxFQUFBOztBQUc3QztFQUVFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVSxFQUFBOztBQUdaO0VBQ0U7bURDWGlEO0VEYWpELGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxjQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0VBQTZELEVBQUE7O0FBRy9EO0VBQ0Usc0JBQXNCO0VBQ3RCLDBCQUF5QjtFQUN6QiwyQkFBMEI7RUFDMUIsdUJBQXNCO0VBQ3RCLDBDQUF5QyxFQUFBOztBQUczQztFQUNFLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLDBCQUF5QixFQUFBOztBQUkzQjtFQUNFLDJDQUF3QztFQUN4Qyx5Q0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlLEVBQUEiLCJmaWxlIjoiLi4vLi4vLi4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbi1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cblxubWF0LW5hdi1saXN0IGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbm1hdC1uYXYtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5hY3RpdmUtbWVudSB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wOCkhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjM0Y5OTdCIWltcG9ydGFudDtcblxuICBpbWcge1xuICAgIGhlaWdodDogMjZweDtcbn1cbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjQwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNClcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgLy8gYmFja2dyb3VuZDogIzAyNzdiZDtcbiAgYmFja2dyb3VuZDogIzNGOTk3Qjtcbn1cblxuLm1hdC10b29sYmFyIC5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDYwcHghaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW06aG92ZXIsIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xuICBmb250LXNpemU6IDE2cHghaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzNGOTk3QiFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgaGVpZ2h0OiA4MHB4IWltcG9ydGFudDtcbn1cblxuLnNtdCB7XG4gIGZvbnQtc2l6ZTogMjBweCFpbXBvcnRhbnQ7XG59XG5cblxuLml0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LDEwNSwxNjUsMC4xKTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLm1haW4tbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyOyB9XG5cbm1hdC1uYXYtbGlzdCBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG5cbm1hdC1uYXYtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAxcHg7IH1cblxuLmFjdGl2ZS1tZW51IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMzRjk5N0IgIWltcG9ydGFudDsgfVxuICAuYWN0aXZlLW1lbnUgaW1nIHtcbiAgICBoZWlnaHQ6IDI2cHg7IH1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjQwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7IH1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogIzNGOTk3QjsgfVxuXG4ubWF0LXRvb2xiYXIgLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7IH1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvOyB9XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50OyB9XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtLCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWltcG9ydGFudDsgfVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbTpob3ZlciwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjM0Y5OTdCICFpbXBvcnRhbnQ7IH1cblxuLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDsgfVxuXG4uc210IHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7IH1cblxuLml0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCAxMDUsIDE2NSwgMC4xKTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");













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
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) { return result.matches; }));
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
        var dashboard = new _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"](this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        this.userService.removeLocalStorageNavigation();
        this.userService.deleteToken();
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
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationStart"]) {
                _this.loading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationCancel"]) {
                _this.loading = false;
            }
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (route) { return route.data; })).subscribe(function (event) { return _this.titleService.setTitle(event.title); });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_9__["routeAnimations"]],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer{\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.title {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.login {\n  position: absolute;\n  top: 12%;\n  right: 6%;\n  background-color: transparent;\n  height: 450px;\n  width: 400px;\n  z-index: 100;\n  border-top-left-radius: 10px;\n}\n\n.logintop {\n  height: 50px;\n  background-color: yellow;\n  width: 100%;\n  border-top-left-radius: 15px!important;\n}\n\n.loginbottom {\n  height: 405px;\n  background-color: white;\n  width: 100%;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n\n.logos{\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n}\n\n.logos img{\n  padding: 10px;\n  height: 50px;\n  opacity: 0.5;\n}\n\n.bgimage {\n  background: url('bg-fp.jpg') no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bgcolor {\n  background-color: rgba(70, 107, 73, 0.8);\n}\n\n.logintop:before {\n\n  height: 50px;\n  width: 10px;\n  display: block;\n  content:\" \";\n  background-color: #FFF;\n  position: absolute;\n  right: -0px;\n  top: -0px;\n  border-top: 0px solid blue;\n  border-bottom: 0px solid blue;\n}\n\n.logintop {\n  height: 50px;\n  width: 350px;\n  border-radius: 0px 0px 0px 0px;\n  background-color: #FFF;\n  position: relative;\n  border: 0px solid blue;\n}\n\n.logintop:after {\n  display: block;\n  content:\" \";\n  width: 100px;\n  height: 50px;\n  top: -0px;\n  background-color: #FFF;\n  position: absolute;\n  right: -25.6px;\n  transform:skewX(45deg);\n  -ms-transform:skewX(45deg);\n  -webkit-transform:skewX(45deg);\n  border: 0px solid blue;\n  z-index: -1;\n}\n\n.loginform {\n  margin-top: 30px;\n}\n\n.loginform button{\n  margin-top: 30px;\n  border-radius: 0px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.loginform form{\n  border-top: 1px solid rgba(0,0,0,0.2);\n  padding-top: 20px;\n}\n\n.loginform input{\n  border-top: 0px;\n  border-left: 0px;\n  border-radius: 0px;\n  border-right: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwREFBeUU7RUFJekUsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUdBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiIuLi8uLi8uLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG59XG5cbi5sb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMiU7XG4gIHJpZ2h0OiA2JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4ubG9naW50b3Age1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHghaW1wb3J0YW50O1xufVxuXG4ubG9naW5ib3R0b20ge1xuICBoZWlnaHQ6IDQwNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG4ubG9nb3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIGxlZnQ6IDVweDtcbn1cblxuLmxvZ29zIGltZ3tcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5iZ2ltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmctZnAuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYmdjb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzAsIDEwNywgNzMsIDAuOCk7XG59XG5cblxuLmxvZ2ludG9wOmJlZm9yZSB7XG5cbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6XCIgXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0wcHg7XG4gIHRvcDogLTBweDtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGJsdWU7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibHVlO1xufVxuLmxvZ2ludG9wIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDBweCBzb2xpZCBibHVlO1xufVxuLmxvZ2ludG9wOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6XCIgXCI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0b3A6IC0wcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yNS42cHg7XG4gIHRyYW5zZm9ybTpza2V3WCg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06c2tld1goNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTpza2V3WCg0NWRlZyk7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsdWU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubG9naW5mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxvZ2luZm9ybSBidXR0b257XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5sb2dpbmZvcm0gZm9ybXtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubG9naW5mb3JtIGlucHV0e1xuICBib3JkZXItdG9wOiAwcHg7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer bgimage\">\n  <div class=\"outer bgcolor\">\n\n  </div>\n</div>\n<!--<div class=\"logos\">-->\n<!-- <img src=\"assets/partners/rsz_tanzania_logo.jpg\"> -->\n<!-- <img src=\"assets/partners/rsz_usaid_logo.png\"> -->\n<!--</div>-->\n\n<div class=\"title\">\n  <table>\n    <tr>\n      <td style=\"vertical-align: top\">\n    <!--  <img src=\"assets/img/logo.png\" style=\"height: 70px\"> -->\n        &nbsp;&nbsp;&nbsp;\n      </td>\n      <td style=\"color: white\">\n        <h1 style=\"font-weight: bolder;\">Family Planning</h1>\n        <h5>Provision Of Quality Reproductive Health</h5>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<div class=\"login\">\n  <div class=\"logintop\">\n    <img src=\"assets/img/lock.png\" style=\"height: 50px; padding-top: 10px;margin-left: 20px;\">\n  </div>\n  <div class=\"loginbottom\" style=\"padding: 20px;\">\n    <h2 style=\"font-weight: bold;margin-bottom: 0px; color: #2D69A5\">Login</h2>\n    <p class=\"lead\" style=\"margin: 0px\">Enter Username and Password</p>\n\n    <div class=\"loginform\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\" validate>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"username\" matInput placeholder=\"Username\" type=\"text\" autocomplete=\"off\">\n            <mat-icon matSuffix>email</mat-icon>\n            <mat-error *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\" >Please Enter Username\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <input formControlName=\"password\" matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            <mat-error *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please Enter Password\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n<!--        <div class=\"col-md-12\">-->\n<!--          <button class=\"pull-right\" mat-flat-button color=\"primary\" type=\"submit\">-->\n<!--            <i class=\"fa fa-login\"></i> Login-->\n<!--          </button>-->\n<!--        </div>-->\n\n<!--        <div class=\"form-group\">-->\n<!--          <input type=\"text\" formControlName=\"username\" class=\"form-control\"  placeholder=\"Enter username\">-->\n<!--          <small *ngIf=\"loginForm.controls.username.invalid&&customeUsernameNotifier\" class=\"form-text  important-field\">Username-->\n<!--            is important-->\n<!--          </small>-->\n<!--        </div>-->\n<!--        <div class=\"form-group\">-->\n<!--          <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">-->\n<!--          <small *ngIf=\"loginForm.controls.password.invalid&&(customePasswordNotifier)\" class=\"form-text  important-field\">Password-->\n<!--            is important-->\n<!--          </small>-->\n<!--        </div>-->\n\n        <div class=\"col-md-12 mb-5\">\n          <button style=\"border-radius: 5px\" mat-raised-button color=\"primary\" type=\"submit\" class=\"cursor btn-block\" >Login</button>\n          <div *ngIf=\"!loginNotification.isError&&loginNotification.attempted\"  style=\"padding:.35rem 0.25rem!important;color: forestgreen!important;font-weight: bolder;font-size: 14px\" class=\"\" role=\"alert\">\n            {{loginNotification.message}}\n            <button type=\"button\" class=\"close\" style=\"padding-top: 0px!important;margin-top: 0px!important;\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div>\n            <img *ngIf=\"loginNotification.loading\" src=\"assets/img/loading.gif\">\n          </div>\n          <div class=\"\" style=\"padding:.35rem 0.25rem!important;color: orangered!important;font-weight: bolder;font-size: 14px\" *ngIf=\"loginNotification.isError&&loginNotification.attempted\" role=\"alert\">\n            {{loginNotification.message}}\n            <button type=\"button\" class=\"close\" (click)=\"closeNotification()\"  style=\"padding-top: 0px!important;margin-top: 0px!important;\"  data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





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
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var openMrsResult, openSrpResult, location_1, starting_location, e_1, starting_location, username, e_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
























var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/card-filter/card-filter.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/card-filter/card-filter.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!--      Start Date-->\n    <div class=\"col-sm-3\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Start Date</mat-label>\n        <input\n          [(ngModel)]=\"start_date\"\n          [matDatepicker]=\"dw\"\n          matInput\n          placeholder=\"From\"\n          [max]=\"end_date\"\n          required/>\n        <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n        <mat-datepicker #dw></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <!--      End Date-->\n    <div class=\"col-sm-3\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>End Date</mat-label>\n        <input\n          [(ngModel)]=\"end_date\"\n          [matDatepicker]=\"dw1\"\n          matInput\n          placeholder=\"To\"\n          [min]=\"start_date\"\n          required/>\n        <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n        <mat-datepicker #dw1></mat-datepicker>\n      </mat-form-field>\n    </div>\n    \n    <div class=\"col-sm-4 mt-1\">\n      <app-org-unit-filter\n        (onOrgUnitChange)=\"changeOrgUnit($event)\"\n        [orgunit_tree_config]=\"orgunit_tree_config\">\n      </app-org-unit-filter>\n    </div>\n    <div class=\"col-sm-2\">\n      <button\n        style=\"margin-top: 5px; height: 46px;\"\n        [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n        class=\"btn btn-block btn-outline-primary\"\n        (click)=\"getReport()\"\n      >Update Dashboard</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/card-filter/card-filter.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/card-filter/card-filter.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jYXJkLWZpbHRlci9jYXJkLWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/dashboard/card-filter/card-filter.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/dashboard/card-filter/card-filter.component.ts ***!
  \************************************************************************/
/*! exports provided: CardFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFilterComponent", function() { return CardFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");



var CardFilterComponent = /** @class */ (function () {
    function CardFilterComponent(orgunitService) {
        this.orgunitService = orgunitService;
        this.start_date = '';
        this.end_date = '';
        this.reportFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardFilterComponent.prototype, "start_date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardFilterComponent.prototype, "end_date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardFilterComponent.prototype, "reportFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardFilterComponent.prototype, "orgunit_tree_config", void 0);
    CardFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-filter',
            template: __webpack_require__(/*! ./card-filter.component.html */ "./src/app/modules/dashboard/card-filter/card-filter.component.html"),
            styles: [__webpack_require__(/*! ./card-filter.component.scss */ "./src/app/modules/dashboard/card-filter/card-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_org_unit_service__WEBPACK_IMPORTED_MODULE_2__["OrgUnitService"]])
    ], CardFilterComponent);
    return CardFilterComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/clients/clients.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/clients/clients.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n        title=\"Registered Clients\"\n        image=\"fa fa-user\"\n        [viewDetails]=\"false\"\n        [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n        <app-loader [message]=\"'Loading Client Report...'\"></app-loader>\n      </div>\n    </div>\n\n\n    <div class=\"grid-container\">\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                      id=\"cardClientsChart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <mat-grid-list cols=\"1\" rowHeight=\"1000px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n              <div class=\"col\">\n                <h4>Registered Users from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>\n\n                <button (click)=\"exportexcel('summary-table', 'Registered Clients.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n                  <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n                </button>\n                <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n                  <img src=\"assets/img/print.png\" style=\"height: 26px\">\n                </button>\n\n                <table class=\"table table-bordered\" id='summary-table'>\n                  <tr>\n                    <th>Full Name</th>\n                    <th>Gender</th>\n                    <th>Birth Date</th>\n                    <th>Phone Number</th>\n                  </tr>\n                  <tr *ngFor=\"let data of values\">\n                    <td>{{ data.first_name }} {{ data.middle_name }} {{data.last_name }}</td>\n                    <td>{{ data.gender }}</td>\n                    <td>{{ data.birth_date }}</td>\n                    <td>{{ data.phone_number }}</td>\n                  </tr>\n                </table>\n              </div>\n              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n\n            </mat-card-content>\n          </mat-card>\n\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </ng-container>\n</app-table-form>\n\n"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/clients/clients.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/clients/clients.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 5px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important; }\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQtc3VtbWFyeS9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHNCQUFBO0VBQ0EsZ0RBQWdELEVBQUE7O0FBR2xEO0VBQ0UsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCxnRUFBZ0UsRUFBQTs7QUFHbEU7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFBO0VBQ0EsMkRBQTJELEVBQUE7O0FBRzdEO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQyxFQUFBIiwiZmlsZSI6ImNsaWVudHMvY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZC1jb250YWluZXIxIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBncmlkLWdhcDogMTVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcikgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtMSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWltcG9ydGFudDtcbn1cblxuLm1haW4tc3RhdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDI1cHg7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjMwcHgsIDFmcikpXG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDUxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/clients/clients.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/clients/clients.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_11__);












highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default()(highcharts__WEBPACK_IMPORTED_MODULE_8__);
var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('cardClientsChart', chartConfig);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
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
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_11__["writeFile"](wb, fileName);
    };
    ClientsComponent.prototype.print = function () {
        window.print();
    };
    ClientsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["find"](orgunits, { uuid: uuid });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientsComponent.prototype, "el1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientsComponent.prototype, "el2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientsComponent.prototype, "el3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ClientsComponent.prototype, "el4", void 0);
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/modules/dashboard/dashboard-summary/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/modules/dashboard/dashboard-summary/clients/clients.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n        title=\"Family Planning Discontinuations\"\n        image=\"fa fa-user\"\n        [viewDetails]=\"false\"\n        [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n        <app-loader [message]=\"'Loading Discontinuation Report...'\"></app-loader>\n      </div>\n    </div>\n\n\n    <div class=\"grid-container\">\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                      id=\"card1Chart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <!--      <mat-grid-list cols=\"1\" rowHeight=\"1000px\">-->\n      <!--        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">-->\n      <!--          <mat-card class=\"dashboard-card\">-->\n      <!--            <mat-card-content class=\"dashboard-card-content\">-->\n      <!--              <div class=\"col\">-->\n      <!--                <h4>Registered Users from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>-->\n\n      <!--                <button (click)=\"exportexcel('summary-table', 'Registered Clients.xlsx')\" mat-raised-button class=\"pull-right no-print\">-->\n      <!--                  <img src=\"assets/img/csv.png\" style=\"height: 26px\">-->\n      <!--                </button>-->\n      <!--                <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">-->\n      <!--                  <img src=\"assets/img/print.png\" style=\"height: 26px\">-->\n      <!--                </button>-->\n\n      <!--                <table class=\"table table-bordered\" id='summary-table'>-->\n      <!--                  <tr>-->\n      <!--                    <th>Full Name</th>-->\n      <!--                    <th>Gender</th>-->\n      <!--                    <th>Birth Date</th>-->\n      <!--                    <th>Phone Number</th>-->\n      <!--                  </tr>-->\n      <!--                  <tr *ngFor=\"let data of values\">-->\n      <!--                    <td>{{ data.first_name }} {{ data.middle_name }} {{data.last_name }}</td>-->\n      <!--                    <td>{{ data.gender }}</td>-->\n      <!--                    <td>{{ data.birth_date }}</td>-->\n      <!--                    <td>{{ data.phone_number }}</td>-->\n      <!--                  </tr>-->\n      <!--                </table>-->\n      <!--              </div>-->\n      <!--              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"16\"></app-placeholder>-->\n\n      <!--            </mat-card-content>-->\n      <!--          </mat-card>-->\n\n      <!--        </mat-grid-tile>-->\n      <!--      </mat-grid-list>-->\n    </div>\n  </ng-container>\n</app-table-form>\n\n"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 5px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important; }\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQtc3VtbWFyeS9kaXNjb250aW51YXRpb25zL2Rpc2NvbnRpbnVhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHNCQUFBO0VBQ0EsZ0RBQWdELEVBQUE7O0FBR2xEO0VBQ0UsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCxnRUFBZ0UsRUFBQTs7QUFHbEU7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFBO0VBQ0EsMkRBQTJELEVBQUE7O0FBRzdEO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQyxFQUFBIiwiZmlsZSI6ImRpc2NvbnRpbnVhdGlvbnMvZGlzY29udGludWF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZC1jb250YWluZXIxIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBncmlkLWdhcDogMTVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcikgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtMSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWltcG9ydGFudDtcbn1cblxuLm1haW4tc3RhdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDI1cHg7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjMwcHgsIDFmcikpXG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDUxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DiscontinuationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscontinuationsComponent", function() { return DiscontinuationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_11__);












highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default()(highcharts__WEBPACK_IMPORTED_MODULE_8__);
var DiscontinuationsComponent = /** @class */ (function () {
    function DiscontinuationsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card1Chart', chartConfig);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
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
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_11__["writeFile"](wb, fileName);
    };
    DiscontinuationsComponent.prototype.print = function () {
        window.print();
    };
    DiscontinuationsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["find"](orgunits, { uuid: uuid });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DiscontinuationsComponent.prototype, "el1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DiscontinuationsComponent.prototype, "el2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DiscontinuationsComponent.prototype, "el3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DiscontinuationsComponent.prototype, "el4", void 0);
    DiscontinuationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discontinuations',
            template: __webpack_require__(/*! ./discontinuations.component.html */ "./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.html"),
            styles: [__webpack_require__(/*! ./discontinuations.component.scss */ "./src/app/modules/dashboard/dashboard-summary/discontinuations/discontinuations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]])
    ], DiscontinuationsComponent);
    return DiscontinuationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n        title=\"Family Planning Initiations\"\n        image=\"fa fa-user\"\n        [viewDetails]=\"false\"\n        [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n        <app-loader [message]=\"'Loading Initiation Report...'\"></app-loader>\n      </div>\n    </div>\n\n\n    <div class=\"grid-container\">\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                      id=\"card1Chart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n<!--      <mat-grid-list cols=\"1\" rowHeight=\"1000px\">-->\n<!--        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">-->\n<!--          <mat-card class=\"dashboard-card\">-->\n<!--            <mat-card-content class=\"dashboard-card-content\">-->\n<!--              <div class=\"col\">-->\n<!--                <h4>Registered Users from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>-->\n\n<!--                <button (click)=\"exportexcel('summary-table', 'Registered Clients.xlsx')\" mat-raised-button class=\"pull-right no-print\">-->\n<!--                  <img src=\"assets/img/csv.png\" style=\"height: 26px\">-->\n<!--                </button>-->\n<!--                <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">-->\n<!--                  <img src=\"assets/img/print.png\" style=\"height: 26px\">-->\n<!--                </button>-->\n\n<!--                <table class=\"table table-bordered\" id='summary-table'>-->\n<!--                  <tr>-->\n<!--                    <th>Full Name</th>-->\n<!--                    <th>Gender</th>-->\n<!--                    <th>Birth Date</th>-->\n<!--                    <th>Phone Number</th>-->\n<!--                  </tr>-->\n<!--                  <tr *ngFor=\"let data of values\">-->\n<!--                    <td>{{ data.first_name }} {{ data.middle_name }} {{data.last_name }}</td>-->\n<!--                    <td>{{ data.gender }}</td>-->\n<!--                    <td>{{ data.birth_date }}</td>-->\n<!--                    <td>{{ data.phone_number }}</td>-->\n<!--                  </tr>-->\n<!--                </table>-->\n<!--              </div>-->\n<!--              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"16\"></app-placeholder>-->\n\n<!--            </mat-card-content>-->\n<!--          </mat-card>-->\n\n<!--        </mat-grid-tile>-->\n<!--      </mat-grid-list>-->\n    </div>\n  </ng-container>\n</app-table-form>\n\n"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 5px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important; }\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQtc3VtbWFyeS9pbml0aWF0aW9ucy9pbml0aWF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsc0JBQUE7RUFDQSxnREFBZ0QsRUFBQTs7QUFHbEQ7RUFDRSxtQkFBbUI7RUFDbkIsc0RBQXNEO0VBQ3RELGdFQUFnRSxFQUFBOztBQUdsRTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQUE7RUFDQSwyREFBMkQsRUFBQTs7QUFHN0Q7RUFDRSxZQUFZO0VBQ1osMkNBQTJDLEVBQUEiLCJmaWxlIjoiaW5pdGlhdGlvbnMvaW5pdGlhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQtY29udGFpbmVyMSB7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgZ3JpZC1nYXA6IDE1cHggMTVweCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLTEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXN0YXRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyNXB4O1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIzMHB4LCAxZnIpKVxufVxuXG4uaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InitiationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiationsComponent", function() { return InitiationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_11__);












highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default()(highcharts__WEBPACK_IMPORTED_MODULE_8__);
var InitiationsComponent = /** @class */ (function () {
    function InitiationsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card1Chart', chartConfig);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
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
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_11__["writeFile"](wb, fileName);
    };
    InitiationsComponent.prototype.print = function () {
        window.print();
    };
    InitiationsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["find"](orgunits, { uuid: uuid });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InitiationsComponent.prototype, "el1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InitiationsComponent.prototype, "el2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InitiationsComponent.prototype, "el3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InitiationsComponent.prototype, "el4", void 0);
    InitiationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initiations',
            template: __webpack_require__(/*! ./initiations.component.html */ "./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.html"),
            styles: [__webpack_require__(/*! ./initiations.component.scss */ "./src/app/modules/dashboard/dashboard-summary/initiations/initiations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]])
    ], InitiationsComponent);
    return InitiationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n        title=\"Referrals\"\n        image=\"fa fa-arrows-alt\"\n        [viewDetails]=\"false\"\n        [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"grid-container\">\n      <mat-grid-list cols=\"2\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard2($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card2DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card2DataLoading}\"\n                      id=\"card1Chart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n              <!--              <div-->\n              <!--                #reportArea2-->\n              <!--                [ngClass]=\"{'hidden': !card2Data || location_loading || card2DataLoading}\"-->\n              <!--                [innerHtml]=\"card2Data | safeHtml\"-->\n              <!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n              <!--              <div *ngIf=\"!location_loading\">-->\n              <!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n              <!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                      [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                      id=\"card2Chart\"\n                      class=\"chart-block\"\n                      style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <mat-grid-list cols=\"1\" rowHeight=\"600px\">\n\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n              <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n                <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n                  <app-loader [message]=\"'Loading Referral Report...'\"></app-loader>\n                </div>\n              </div>\n\n\n              <div class=\"col\">\n                <h4>Referral Count by CHW from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>\n\n                <button (click)=\"exportexcel('summary-table', 'Referral Count By CHW.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n                  <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n                </button>\n                <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n                  <img src=\"assets/img/print.png\" style=\"height: 26px\">\n                </button>\n\n                <table class=\"table table-bordered\" id='summary-table'>\n                  <tr>\n                    <th>Chw Name</th>\n                    <th>Number of Referrals Issued</th>\n                  </tr>\n                  <tr *ngFor=\"let data of values\">\n                    <td>{{ data.chw_name }}</td>\n                    <td>{{ data.value }}</td>\n                  </tr>\n                </table>\n              </div>\n              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n\n            </mat-card-content>\n          </mat-card>\n\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <!--      <mat-grid-list cols=\"1\" rowHeight=\"470px\">-->\n      <!--        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">-->\n      <!--          <div class=\"col\">-->\n      <!--            <h4>Referral Count by CHW from {{start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }} </h4>-->\n\n      <!--            <button (click)=\"exportexcel('summary-table', 'Summary Issued Services By Teams.xlsx')\" mat-raised-button class=\"pull-right no-print\">-->\n      <!--              <img src=\"assets/img/csv.png\" style=\"height: 26px\">-->\n      <!--            </button>-->\n      <!--            <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">-->\n      <!--              <img src=\"assets/img/print.png\" style=\"height: 26px\">-->\n      <!--            </button>-->\n\n      <!--            <table class=\"table table-bordered\" id='summary-table'>-->\n      <!--              <tr>-->\n      <!--                <th>Chw Name</th>-->\n      <!--                <th>Number of Referrals Issued</th>-->\n      <!--              </tr>-->\n      <!--              <tr *ngFor=\"let data of values\">-->\n      <!--                <td>{{ data.chw_name }}</td>-->\n      <!--                <td>{{ data.value }}</td>-->\n      <!--              </tr>-->\n      <!--            </table>-->\n      <!--          </div>-->\n      <!--        </mat-grid-tile>-->\n      <!--      </mat-grid-list>-->\n\n\n\n    </div>\n  </ng-container>\n</app-table-form>\n\n"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 5px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important; }\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQtc3VtbWFyeS9yZWZlcnJhbHMvcmVmZXJyYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixzQkFBQTtFQUNBLGdEQUFnRCxFQUFBOztBQUdsRDtFQUNFLG1CQUFtQjtFQUNuQixzREFBc0Q7RUFDdEQsZ0VBQWdFLEVBQUE7O0FBR2xFO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxzQkFBQTtFQUNBLDJEQUEyRCxFQUFBOztBQUc3RDtFQUNFLFlBQVk7RUFDWiwyQ0FBMkMsRUFBQSIsImZpbGUiOiJyZWZlcnJhbHMvcmVmZXJyYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmlkLWNvbnRhaW5lcjEge1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG4gIGdyaWQtZ2FwOiAxNXB4IDE1cHggIWltcG9ydGFudDtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC0xIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjVweDtcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMzBweCwgMWZyKSlcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralsComponent", function() { return ReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_11__);












highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default()(highcharts__WEBPACK_IMPORTED_MODULE_8__);
var ReferralsComponent = /** @class */ (function () {
    function ReferralsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card1Chart', chartConfig);
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card2Chart', chartConfig);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
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
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_11__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_11__["writeFile"](wb, fileName);
    };
    ReferralsComponent.prototype.print = function () {
        window.print();
    };
    ReferralsComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["find"](orgunits, { uuid: uuid });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ReferralsComponent.prototype, "el1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ReferralsComponent.prototype, "el2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ReferralsComponent.prototype, "el3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ReferralsComponent.prototype, "el4", void 0);
    ReferralsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referrals',
            template: __webpack_require__(/*! ./referrals.component.html */ "./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.html"),
            styles: [__webpack_require__(/*! ./referrals.component.scss */ "./src/app/modules/dashboard/dashboard-summary/referrals/referrals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]])
    ], ReferralsComponent);
    return ReferralsComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  title=\"Dashboard\"\n  image=\"dashboard\"\n  [viewDetails]=\"false\"\n  [hideAdd]=\"true\"\n>\n  <ng-container ngProjectAs=\"table\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCards($event)\"></app-card-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"main-stats-container p-3\" style=\"margin-bottom: 25px\">\n      <app-summary-card\n        image=\"registration\"\n        [value]=\"total_anc_referrals || 0\"\n        [loading]=\"location_loading || label3DataLoading\"\n        [route]=\"['report']\"\n        [additional_information]=\"start_date + ' to ' + end_date + ' ' + orgunitName\"\n        top_title=\"ANC\"\n        low_title=\"Referrals\">\n      </app-summary-card>\n\n      <app-summary-card\n        image=\"icons8-send-job-list-80\"\n        [route]=\"['report']\"\n        [loading]=\"location_loading || label1DataLoading\"\n        [value]=\"total_services || 0\"\n        [additional_information]=\"start_date + ' to ' + end_date + ' ' + orgunitName\"\n        top_title=\"Family Planning\"\n        low_title=\"Referrals\">\n      </app-summary-card>\n\n      <app-summary-card\n        image=\"ltf\"\n        [route]=\"['report']\"\n        [value]=\"total_fp_initiations || 0\"\n        [loading]=\"location_loading || label2DataLoading\"\n        [additional_information]=\"start_date + ' to ' + end_date + ' ' + orgunitName\"\n        top_title=\"Family Planning\"\n        low_title=\"Initiations\">\n      </app-summary-card>\n\n      <app-summary-card\n        image=\"chw\"\n        [route]=\"['report']\"\n        [value]=\"total_fp_discontinuations || 0\"\n        [loading]=\"location_loading || label2DataLoading\"\n        [additional_information]=\"start_date + ' to ' + end_date + ' ' + orgunitName\"\n        top_title=\"Family Planning\"\n        low_title=\"Discontinuations\">\n      </app-summary-card>\n\n    </div>\n    <div class=\"grid-container\">\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"600px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card- content\">\n<!--              <div *ngIf=\"!location_loading\">-->\n<!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard1($event)\"></app-card-filter>-->\n<!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card1DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n<!--              <div-->\n<!--                #reportArea1-->\n<!--                [ngClass]=\"{'hidden': !card1Data || location_loading || card1DataLoading}\"-->\n<!--                [innerHtml]=\"card1Data | safeHtml\"-->\n<!--              ></div>-->\n              <div\n                [ngClass]=\"{'hidden': location_loading || card1DataLoading}\"\n                id=\"card1Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n<!--              <div *ngIf=\"!location_loading\">-->\n<!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard2($event)\"></app-card-filter>-->\n<!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card2DataLoading\" [numberOfLines]=\"16\"></app-placeholder>\n              <div\n                [ngClass]=\"{'hidden': location_loading || card2DataLoading}\"\n                id=\"card2Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n<!--              <div-->\n<!--                #reportArea2-->\n<!--                [ngClass]=\"{'hidden': !card2Data || location_loading || card2DataLoading}\"-->\n<!--                [innerHtml]=\"card2Data | safeHtml\"-->\n<!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n            <mat-card-content class=\"dashboard-card-content\">\n<!--              <div *ngIf=\"!location_loading\">-->\n<!--                <app-card-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateCard3($event)\"></app-card-filter>-->\n<!--              </div>-->\n              <app-placeholder *ngIf=\"location_loading || card3DataLoading\" [numberOfLines]=\"10\"></app-placeholder>\n              <div\n                [ngClass]=\"{'hidden': location_loading || card3DataLoading}\"\n                id=\"card3Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n<!--              <div-->\n<!--                #reportArea3-->\n<!--                [ngClass]=\"{'hidden': !card3Data || location_loading || card3DataLoading}\"-->\n<!--                [innerHtml]=\"card3Data | safeHtml\"-->\n<!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n\n      <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n\n            <mat-card-content class=\"dashboard-card-content\">\n\n              <app-placeholder *ngIf=\"location_loading || card4DataLoading\" [numberOfLines]=\"10\"></app-placeholder>\n              <div\n                [ngClass]=\"{'hidden': location_loading || card4DataLoading}\"\n                id=\"card4Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n<!--              <div-->\n<!--                #reportArea4-->\n<!--                [ngClass]=\"{'hidden': !card4Data || location_loading || card4DataLoading}\"-->\n<!--                [innerHtml]=\"card4Data | safeHtml\"-->\n<!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n          <mat-grid-list cols=\"1\" rowHeight=\"470px\">\n        <mat-grid-tile [ngClass]=\"routeAnimationsElements\" [colspan]=\"1\" [rowspan]=\"1\">\n          <mat-card class=\"dashboard-card\">\n\n            <mat-card-content class=\"dashboard-card-content\">\n\n              <app-placeholder *ngIf=\"location_loading || card5DataLoading\" [numberOfLines]=\"10\"></app-placeholder>\n              <div\n                [ngClass]=\"{'hidden': location_loading || card5DataLoading}\"\n                id=\"card5Chart\"\n                class=\"chart-block\"\n                style=\"width: 100%; height: 400px\"></div>\n<!--              <div-->\n<!--                #reportArea4-->\n<!--                [ngClass]=\"{'hidden': !card4Data || location_loading || card4DataLoading}\"-->\n<!--                [innerHtml]=\"card4Data | safeHtml\"-->\n<!--              ></div>-->\n            </mat-card-content>\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </ng-container>\n</app-table-form>\n\n"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 5px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 10px;\n  bottom: 10px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.grid-container1 {\n  display: grid !important;\n  grid-gap: 15px 15px !important;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(1, 1fr) !important; }\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }\n\n.main-stats-container {\n  display: grid;\n  grid-gap: 25px;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHNCQUFBO0VBQ0EsZ0RBQWdELEVBQUE7O0FBR2xEO0VBQ0UsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCxnRUFBZ0UsRUFBQTs7QUFHbEU7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFBO0VBQ0EsMkRBQTJELEVBQUE7O0FBRzdEO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQyxFQUFBIiwiZmlsZSI6Ii4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZC1jb250YWluZXIxIHtcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICBncmlkLWdhcDogMTVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcikgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtMSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWltcG9ydGFudDtcbn1cblxuLm1haW4tc3RhdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDI1cHg7XG4gIC8qIGF1dG9wcmVmaXhlcjogb2ZmICovXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjMwcHgsIDFmcikpXG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDUxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10__);











highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_10___default()(highcharts__WEBPACK_IMPORTED_MODULE_8__);
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reportUrl, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card1Chart', chartConfig);
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card2Chart', chartConfig);
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card3Chart', chartConfig);
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card4Chart', chartConfig);
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
                highcharts__WEBPACK_IMPORTED_MODULE_8__["chart"]('card5Chart', chartConfig);
            }
            _this.card5DataLoading = false;
        }, function (error1) { return _this.card5DataLoading = false; });
    };
    // this method was coppied form the orguni component and is to be moved to service letter
    DashboardComponent.prototype.getLocation = function (starting_location) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var top_locations, visit_location, visit_locations;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.location_loading = true;
                        return [4 /*yield*/, this.locationService.loadTreeLocations().toPromise()];
                    case 1:
                        top_locations = _a.sent();
                        visit_location = lodash__WEBPACK_IMPORTED_MODULE_7__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
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
    DashboardComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["find"](orgunits, { uuid: uuid });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DashboardComponent.prototype, "el1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DashboardComponent.prototype, "el2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DashboardComponent.prototype, "el3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reportArea4'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DashboardComponent.prototype, "el4", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/summary-card/summary-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/summary-card/summary-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card\n  class=\"card-1 cursor\"\n  [ngClass]=\"routeAnimationsElements\">\n  <mat-card-content>\n    <app-placeholder *ngIf=\"loading\" [useGrid]=\"true\" [numberOfLines]=\"12\"></app-placeholder>\n    <div class=\"container-fluid\" *ngIf=\"!loading\" (click)=\"goTo()\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <img style=\"height: 64px!important;\" src=\"assets/img/{{image}}.png\" alt=\"image\">\n        </div>\n        <div class=\"col-sm-8\">\n          <p class=\"text-right\">{{ top_title }} <br> {{ low_title }}</p>\n          <h3 class=\"text-right\">{{ value | number }}</h3>\n        </div>\n      </div>\n      <hr>\n      <p class=\"text-muted\" style=\"font-size: 10px\">{{ additional_information }}</p>\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/dashboard/summary-card/summary-card.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/summary-card/summary-card.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-stats-container img {\n  height: 45px;\n  margin-top: 15px; }\n\n.main-stats-container mat-card {\n  border-radius: 10px; }\n\n.header {\n  height: 51px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n.card-1 {\n  border-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }\n\n.card-1:hover {\n  transform: scale(1.01);\n  border-radius: 20px;\n  box-shadow: 0 5px 21px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9zdW1tYXJ5LWNhcmQvc3VtbWFyeS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUNGLEVBQUE7O0FBRUE7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxZQUFZO0VBQ1osMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0UsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCxnRUFBZ0UsRUFBQTs7QUFHbEU7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdIQUFvRyxFQUFBIiwiZmlsZSI6Ii4uL3N1bW1hcnktY2FyZC9zdW1tYXJ5LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYWluLXN0YXRzLWNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHhcbn1cblxuLm1haW4tc3RhdHMtY29udGFpbmVyIG1hdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmhlYWRlciB7XG4gIGhlaWdodDogNTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQtMSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtMTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDIxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/summary-card/summary-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/summary-card/summary-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: SummaryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryCardComponent", function() { return SummaryCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");



var SummaryCardComponent = /** @class */ (function () {
    function SummaryCardComponent() {
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["ROUTE_ANIMATIONS_ELEMENTS"];
    }
    SummaryCardComponent.prototype.ngOnInit = function () {
    };
    SummaryCardComponent.prototype.goTo = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SummaryCardComponent.prototype, "top_title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SummaryCardComponent.prototype, "low_title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SummaryCardComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SummaryCardComponent.prototype, "additional_information", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SummaryCardComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SummaryCardComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SummaryCardComponent.prototype, "route", void 0);
    SummaryCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary-card',
            template: __webpack_require__(/*! ./summary-card.component.html */ "./src/app/modules/dashboard/summary-card/summary-card.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./summary-card.component.scss */ "./src/app/modules/dashboard/summary-card/summary-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SummaryCardComponent);
    return SummaryCardComponent;
}());



/***/ }),

/***/ "./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n\n      <div class=\"col-4 pt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n   \n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getData()\"\n        >View Report</button>\n      </div>\n    </div>\n  <!--  <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a list of providers...'\"></app-loader>\n      </div>\n    </div>\n    -->\n\n\n    <div class=\"row\">\n      \n      <!--<div class=\"col-5\">\n        <app-multiselect\n          *ngIf=\"providers.length != 0\"\n          [items]=\"providers\"\n          [placeholder]=\"'Select data items to see in the report'\"\n          (onSelected)=\"setSelectedData($event)\"\n        ></app-multiselect>\n      </div>\n      -->\n      <div class=\"col-7\">\n       <!-- <button class=\"btn btn-outline-secondary\" (click)=\"getData()\">Get Report</button> &nbsp;-->\n        <button *ngIf=\"done_loading && !show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = true\">Get Detailed</button>\n        <button *ngIf=\"done_loading && show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = false\">Get Summary</button>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting Citizen Card Report'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\" *ngIf=\"!show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Citizen Card Report for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n\n        <button (click)=\"exportexcel('summary-citizen-card', 'Summarized Citizen Card Report.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n\n        <table class=\"table table-bordered\" id=\"summary-citizen-card\">\n      \n          <h1><u>Survey Information</u></h1>\n        <tr><h4>Willingness To Participate in the Survey</h4></tr>\n          <tr *ngFor=\"let data of willing_to_participate_in_survey\">\n            <td>{{ data.values_1 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n          <td bgcolor=\"#FFFFFF\" style=\"line-height:10px;\" colspan=3>&nbsp;</td>\n\n          <tr><h1><u>Demographics</u></h1></tr>\n\n          <tr><h4>Residence</h4></tr>\n          <tr *ngFor=\"let data of residence\">\n            <td>{{ data.values_3 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n           <tr><h4>Education</h4></tr>\n          <tr *ngFor=\"let data of education\">\n            <td>{{ data.values_4 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n            <tr><h4>Occupation</h4></tr>\n          <tr *ngFor=\"let data of occupation\">\n            <td>{{ data.values_5 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n              <tr><h4>Marital Status</h4></tr>\n          <tr *ngFor=\"let data of marital_status\">\n            <td>{{ data.values_6 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                <tr><h4>Religion Summary</h4></tr>\n          <tr *ngFor=\"let data of religion\">\n            <td>{{ data.values_7 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n       <td bgcolor=\"#FFFFFF\" style=\"line-height:10px;\" colspan=3>&nbsp;</td>\n\n         <tr> <h1><u>Visit Information</u></h1> </tr>\n                <tr><h4>Reasons for people not going to Health FAcilities</h4></tr>\n          <tr *ngFor=\"let data of reasons_for_people_not_going_to_health_facilities\">\n            <td>{{ data.values_8 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                    <tr><h4>Means of Transport to the Facility</h4></tr>\n          <tr *ngFor=\"let data of means_of_transport_to_facility\">\n            <td>{{ data.values_9 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n            <tr><h4>Time to reach closest facility</h4></tr>\n          <tr *ngFor=\"let data of time_to_reach_closest_facility\">\n            <td>{{ data.values_10 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n    \n               <tr><h4>Is this the nearest facility from home?</h4></tr>\n          <tr *ngFor=\"let data of is_this_the_nearest_facility_from_home\">\n            <td>{{ data.values_11 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                   <tr><h4>Was the facility open when you arrived</h4></tr>\n          <tr *ngFor=\"let data of was_the_facility_open_when_you_arrived\">\n            <td>{{ data.values_12 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                   <tr><h4>Did you get Family Planning Information at the Reception?</h4></tr>\n          <tr *ngFor=\"let data of did_you_get_family_planning_information_at_the_reception\">\n            <td>{{ data.values_13 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                   <tr><h4>How long did it take to be attended by the Service Provider?</h4></tr>\n          <tr *ngFor=\"let data of how_long_it_took_to_be_attended_by_service_provider\">\n            <td>{{ data.values_14 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                   <tr><h4>Did the Service Provider make you feel welcome?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_provider_make_you_feel_welcome\">\n            <td>{{ data.values_15 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did the Service Provider assure confidentiality?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_provider_assure_confidentiality\">\n            <td>{{ data.values_16 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did you meet the Service Provider in a private room?</h4></tr>\n          <tr *ngFor=\"let data of did_you_meet_the_service_providers_in_a_private_room\">\n            <td>{{ data.values_17 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did the Service Providers provide clear information about varous fp services and methods?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_providers_provide_clear_information_about_various_fp_services_and_methods\">\n            <td>{{ data.values_18 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did the Service Providers use visual aids to demo fp methods?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_providers_use_visual_aids_to_demo_fp_methods\">\n            <td>{{ data.values_19 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Did the Service Providers ask if you had any concerns about previous used methods?</h4></tr>\n          <tr *ngFor=\"let data of did_the_service_providers_ask_if_you_had_any_concerns_about_previously_used_methods\">\n            <td>{{ data.values_20 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Were you given info on Dual Protection?</h4></tr>\n          <tr *ngFor=\"let data of were_you_given_info_on_dual_protection\">\n            <td>{{ data.values_21 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n                         <tr><h4>Methods not wanted.</h4></tr>\n          <tr *ngFor=\"let data of methods_not_wanted\">\n            <td>{{ data.values_22 }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n\n        </table>\n      </div>\n\n\n      <div class=\"col\" *ngIf=\"show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Detailed Citizen Card Report for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n\n        <button (click)=\"exportexcel('detailled-summary-card-report', 'Detailled Citizen Card Report.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n\n        <table class=\"table table-bordered\" id=\"detailled-summary-card-report\">\n          <tr>\n            <th>Willingness to Participate</th>\n            <th>Residencee</th>\n            <th>Education</th>\n            <th>Occupation</th>\n            <th>Marital Status</th>\n            <th>Religion</th>\n            <th>Means of Transport to Facility</th>\n            <th>Time to reach closest Facility</th>\n          </tr>\n          <tr *ngFor=\"let data of detailed_values\">\n            <td>{{ data.willing_to_participate_in_survey }}</td>\n            <td>{{ data.residence }}</td>\n            <td>{{ data.education }}</td>\n            <td>{{ data.occupation }}</td>\n            <td>{{ data.marital_status }}</td>\n            <td>{{ data.religion }}</td>\n            <td>{{ data.means_of_transport_to_facility }}</td>\n            <td>{{ data.time_to_reach_closest_facility }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9mcC1yZXBvcnRzL2NpdGl6ZW4tY2FyZC1yZXBvcnQvY2l0aXplbi1jYXJkLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CitizenCardReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitizenCardReportComponent", function() { return CitizenCardReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/excel-download.service */ "./src/app/services/excel-download.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);














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
        this.routeAnimationsElements = _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_9__["ROUTE_ANIMATIONS_ELEMENTS"];
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
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_13__["writeFile"](wb, fileName);
    };
    CitizenCardReportComponent.prototype.getData = function () {
        var _this = this;
        this.data_loading = true;
        this.detailed_loading = true;
        var chw_uuid = this.selected_providers.map(function (provider) { return provider.id; });
        var start_date = new Date(this.start_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var end_date = new Date(this.end_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
        var starting_location = localStorage.getItem('htmr-starting-location');
        var dashboard = new _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"](this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
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
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { service_provider_name: chw ? chw.name : '' });
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CitizenCardReportComponent.prototype, "orgunit_tree_config", void 0);
    CitizenCardReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-citizen-card-report',
            template: __webpack_require__(/*! ./citizen-card-report.component.html */ "./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.html"),
            styles: [__webpack_require__(/*! ./citizen-card-report.component.scss */ "./src/app/modules/fp-reports/citizen-card-report/citizen-card-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__["OrgUnitService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"],
            _services_excel_download_service__WEBPACK_IMPORTED_MODULE_12__["ExcelDownloadService"]])
    ], CitizenCardReportComponent);
    return CitizenCardReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-4 pt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getProviders()\"\n        >Get Team List</button>\n      </div>\n    </div>\n    <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting list of teams...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <app-multiselect\n          *ngIf=\"providers.length != 0\"\n          [items]=\"providers\"\n          [placeholder]=\"'Select data items to see in the report'\"\n          (onSelected)=\"setSelectedData($event)\"\n        ></app-multiselect>\n      </div>\n\n      <div class=\"col-7\" *ngIf=\"selected_providers.length != 0\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"getData()\">Get Report</button> &nbsp;\n        <button *ngIf=\"done_loading && !show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = true\">Get Detailed</button>\n        <button *ngIf=\"done_loading && show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = false\">Get Summary</button>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting Data for providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\" *ngIf=\"!show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Services Provided by {{ selected_provider_names }} for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n\n\n        <button (click)=\"exportexcel('summary-table', 'Summary Issued Services By Teams.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n\n        <table class=\"table table-bordered\" id='summary-table'>\n          <tr>\n            <th>Service Type</th>\n            <th>Number of Issued Service</th>\n          </tr>\n          <tr *ngFor=\"let data of values\">\n            <td>{{ data.event_type }}</td>\n            <td>{{ data.value }}</td>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"col\" *ngIf=\"show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Detailed Service Provided by {{ selected_providers_names }} for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n\n\n        <button (click)=\"exportexcel('detailled-table','Detailled Services Issued By Teams.xlsx')\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n\n        <table class=\"table table-bordered\" id=\"detailled-table\">\n          <tr>\n            <th>Service Provider</th>\n            <th>Service Type</th>\n            <th>Event Date</th>\n            <th>Team</th>\n          </tr>\n          <tr *ngFor=\"let data of detailed_values\">\n            <td>{{ data.provider_id }}</td>\n            <td>{{ data.event_type }}</td>\n            <td>{{ data.event_date }}</td>\n            <td>{{ data.team }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9mcC1yZXBvcnRzL2lzc3VlZC1yZWZlcnJhbHMtYnktbG9jYXRpb24vaXNzdWVkLXJlZmVycmFscy1ieS1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: IssuedReferralsByLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuedReferralsByLocationComponent", function() { return IssuedReferralsByLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/excel-download.service */ "./src/app/services/excel-download.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_13__);














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
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_13__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_13__["writeFile"](wb, fileName);
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
        var dashboard = new _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"](this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
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
        var dashboard = new _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"](this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
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
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { service_provider_name: chw ? chw.name : '' });
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IssuedReferralsByLocationComponent.prototype, "orgunit_tree_config", void 0);
    IssuedReferralsByLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-providers-refferal-report',
            template: __webpack_require__(/*! ./issued-referrals-by-location.component.html */ "./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            styles: [__webpack_require__(/*! ./issued-referrals-by-location.component.scss */ "./src/app/modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__["OrgUnitService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"],
            _services_excel_download_service__WEBPACK_IMPORTED_MODULE_12__["ExcelDownloadService"]])
    ], IssuedReferralsByLocationComponent);
    return IssuedReferralsByLocationComponent;
}());



/***/ }),

/***/ "./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  issued-referrals works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9mcC1yZXBvcnRzL2lzc3VlZC1yZWZlcnJhbHMvaXNzdWVkLXJlZmVycmFscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IssuedReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuedReferralsComponent", function() { return IssuedReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IssuedReferralsComponent = /** @class */ (function () {
    function IssuedReferralsComponent() {
    }
    IssuedReferralsComponent.prototype.ngOnInit = function () {
    };
    IssuedReferralsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issued-referrals',
            template: __webpack_require__(/*! ./issued-referrals.component.html */ "./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.html"),
            styles: [__webpack_require__(/*! ./issued-referrals.component.scss */ "./src/app/modules/fp-reports/issued-referrals/issued-referrals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IssuedReferralsComponent);
    return IssuedReferralsComponent;
}());



/***/ }),

/***/ "./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  total-family-planning-methods-issued works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9mcC1yZXBvcnRzL3RvdGFsLWZhbWlseS1wbGFubmluZy1tZXRob2RzLWlzc3VlZC90b3RhbC1mYW1pbHktcGxhbm5pbmctbWV0aG9kcy1pc3N1ZWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: TotalFamilyPlanningMethodsIssuedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalFamilyPlanningMethodsIssuedComponent", function() { return TotalFamilyPlanningMethodsIssuedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TotalFamilyPlanningMethodsIssuedComponent = /** @class */ (function () {
    function TotalFamilyPlanningMethodsIssuedComponent() {
    }
    TotalFamilyPlanningMethodsIssuedComponent.prototype.ngOnInit = function () {
    };
    TotalFamilyPlanningMethodsIssuedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total-family-planning-methods-issued',
            template: __webpack_require__(/*! ./total-family-planning-methods-issued.component.html */ "./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.html"),
            styles: [__webpack_require__(/*! ./total-family-planning-methods-issued.component.scss */ "./src/app/modules/fp-reports/total-family-planning-methods-issued/total-family-planning-methods-issued.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TotalFamilyPlanningMethodsIssuedComponent);
    return TotalFamilyPlanningMethodsIssuedComponent;
}());



/***/ }),

/***/ "./src/app/modules/geomaps/geomaps.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/geomaps/geomaps.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <ng-container ngProjectAs=\"table\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div *ngIf=\"!location_loading\">\n            <app-map-filter [start_date]=\"startDate\" [end_date]=\"endDate\" (reportFilter)=\"updateMap($event)\"></app-map-filter>\n          </div>\n        </div>\n      </div>\n    </div>\n\n     <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding-left: 50px\">\n        <app-loader [message]=\"'Loading map...'\"></app-loader>\n      </div>\n    </div>\n\n<div class=\"map-container\">\n  <div class=\"map-frame\">\n    <div id=\"map\"></div>\n  </div>\n</div>\n  </ng-container>\n"

/***/ }),

/***/ "./src/app/modules/geomaps/geomaps.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/geomaps/geomaps.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\n  position: absolute;\n  top: 200px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 30px; }\n\n.map-frame {\n  border: 2px solid black;\n  height: 100%; }\n\n#map {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9tb2R1bGVzL2dlb21hcHMvZ2VvbWFwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQUdkO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiIuLi8uLi9nZW9tYXBzL2dlb21hcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG4ubWFwLWZyYW1lIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/geomaps/geomaps.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/geomaps/geomaps.component.ts ***!
  \******************************************************/
/*! exports provided: GeomapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeomapsComponent", function() { return GeomapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_9__);










highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_9___default()(highcharts__WEBPACK_IMPORTED_MODULE_7__);
var GeomapsComponent = /** @class */ (function () {
    function GeomapsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.markersLayer = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LayerGroup"]();
        this.card1DataLoading = false;
        this.data_loading = false;
    }
    GeomapsComponent.prototype.ngAfterViewInit = function () {
        this.initMap();
    };
    GeomapsComponent.prototype.initMap = function () {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map', {
            zoom: 7
        });
        this.map.panTo(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](-6.3690, 35.7516));
        var tiles = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    };
    GeomapsComponent.prototype.updateMap = function (filter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reportUrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.data_loading = true;
                this.markersLayer.clearLayers();
                reportUrl = 'map_summary/';
                this.http.postDJANGOURL(reportUrl, filter)
                    .subscribe(function (data) {
                    if (data) {
                        _this.data_loading = false;
                        var icon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]();
                        var blueIcon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
                            iconUrl: 'assets/img/blue.png',
                            iconSize: [40, 40]
                        });
                        var redIcon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
                            iconUrl: 'assets/img/red.png',
                            iconSize: [40, 40]
                        });
                        var greenIcon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
                            iconUrl: 'assets/img/green.png',
                            iconSize: [40, 40]
                        });
                        var blackIcon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
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
                            if (villageValue < 100) {
                                icon = redIcon;
                            }
                            if (villageValue > 100 && villageValue <= 500) {
                                icon = blueIcon;
                            }
                            if (villageValue > 500) {
                                icon = greenIcon;
                            }
                            if (villageCoordinateCheck != undefined) {
                                _this.marker = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([
                                    coordinates.Latitude["" + villageName + ""],
                                    coordinates.Longitude["" + villageName + ""]
                                ], { title: "" + villageName + " : " + villageValue + " ", icon: icon, alt: "Village Value", draggable: false });
                                _this.markersLayer.addLayer(_this.marker);
                                // this.marker.myData = { id: coordinates.Longitude[""+villageName+""] };
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
    GeomapsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./geomaps.component.html */ "./src/app/modules/geomaps/geomaps.component.html"),
            styles: [__webpack_require__(/*! ./geomaps.component.scss */ "./src/app/modules/geomaps/geomaps.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_6__["OrgUnitService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]])
    ], GeomapsComponent);
    return GeomapsComponent;
}());



/***/ }),

/***/ "./src/app/modules/geomaps/map-filter/map-filter.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/geomaps/map-filter/map-filter.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 10px\">\n  <div class=\"row\">\n    <!--      Start Date-->\n    <div class=\"col-sm-2\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Start Date</mat-label>\n        <input\n          [(ngModel)]=\"start_date\"\n          [matDatepicker]=\"dw\"\n          matInput\n          placeholder=\"From\"\n          [max]=\"end_date\"\n          required/>\n        <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n        <mat-datepicker #dw></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <!--      End Date-->\n    <div class=\"col-sm-2\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>End Date</mat-label>\n        <input\n          [(ngModel)]=\"end_date\"\n          [matDatepicker]=\"dw1\"\n          matInput\n          placeholder=\"To\"\n          [min]=\"start_date\"\n          required/>\n        <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n        <mat-datepicker #dw1></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n\n    <div class=\"col-sm-3 mt-1\">\n        <mat-form-field>\n      <mat-select *ngIf=\"services\" [value]=\"selectedService\" (selectionChange)=\"onChangeService($event.value)\" id=\"ddService\">\n        <mat-option [value]=\"0\" disabled>Select Service</mat-option>\n        <mat-option *ngFor=\"let service of services\" [value]=\"service.id\">{{service.name}}</mat-option>\n      </mat-select>\n      </mat-form-field>\n    </div>\n    \n    <div class=\"col-sm-3 mt-1\">\n      <app-org-unit-filter\n        (onOrgUnitChange)=\"changeOrgUnit($event)\"\n        [orgunit_tree_config]=\"orgunit_tree_config\">\n      </app-org-unit-filter>\n    </div>\n    <div class=\"col-sm-2\">\n      <button\n        style=\"margin-top: 5px; height: 46px;\"\n        [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n        class=\"btn btn-block btn-outline-primary\"\n        (click)=\"getReport()\"\n      >Load Map</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/geomaps/map-filter/map-filter.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/geomaps/map-filter/map-filter.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9nZW9tYXBzL21hcC1maWx0ZXIvbWFwLWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/geomaps/map-filter/map-filter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/geomaps/map-filter/map-filter.component.ts ***!
  \********************************************************************/
/*! exports provided: MapFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapFilterComponent", function() { return MapFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");



var MapFilterComponent = /** @class */ (function () {
    function MapFilterComponent(orgunitService) {
        this.orgunitService = orgunitService;
        this.start_date = '';
        this.end_date = '';
        this.reportFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapFilterComponent.prototype, "start_date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapFilterComponent.prototype, "end_date", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapFilterComponent.prototype, "reportFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapFilterComponent.prototype, "orgunit_tree_config", void 0);
    MapFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-filter',
            template: __webpack_require__(/*! ./map-filter.component.html */ "./src/app/modules/geomaps/map-filter/map-filter.component.html"),
            styles: [__webpack_require__(/*! ./map-filter.component.scss */ "./src/app/modules/geomaps/map-filter/map-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_org_unit_service__WEBPACK_IMPORTED_MODULE_2__["OrgUnitService"]])
    ], MapFilterComponent);
    return MapFilterComponent;
}());



/***/ }),

/***/ "./src/app/modules/locations/add-location/add-location.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/locations/add-location/add-location.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9sb2NhdGlvbnMvYWRkLWxvY2F0aW9uL2FkZC1sb2NhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/locations/add-location/add-location.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/locations/add-location/add-location.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n</div>\n\n\n<form [formGroup]=\"locationForm\" (ngSubmit)=\"onSubmit()\">\n  <!-- Location Name-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Location Name</mat-label>\n      <input\n        formControlName=\"name\"\n        matInput\n        required\n        placeholder=\"Location Name\">\n      <mat-error *ngIf=\"name.invalid && name.touched\">\n        This field is required\n      </mat-error>\n    </mat-form-field>\n  </p>\n\n  <!-- Location Name-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Description</mat-label>\n      <textarea\n        formControlName=\"description\"\n        matInput\n        placeholder=\"Description\"\n      ></textarea>\n      <mat-error *ngIf=\"name.invalid && name.touched\">\n        This field is required\n      </mat-error>\n    </mat-form-field>\n  </p>\n\n  <!-- Parent-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Parent Location</mat-label>\n      <mat-select formControlName=\"parentLocation\" placeholder=\"Parent Location\">\n        <app-mat-select-search formControlName=\"search\"></app-mat-select-search>\n        <mat-option *ngFor=\"let item of locations | search:'display':locationForm.get('search').value\" [value]=\"item.uuid\">\n          {{ item.display }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </p>\n\n  <!-- HFR Code-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> HFR Code</mat-label>\n      <input\n        formControlName=\"hfrCode\"\n        matInput\n        placeholder=\"HFR Code\">\n    </mat-form-field>\n  </p>\n  <div class=\"form-group\">\n    <label>Tags</label>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <mat-checkbox  formControlName=\"tagOne\" [value]=\"tags.tagOne\">\n          CHW Locations\n        </mat-checkbox>\n      </div>\n      <div class=\"col-md-6\">\n        <mat-checkbox  formControlName=\"tagTwo\" [value]=\"tags.tagTwo\">\n          Transfer Location\n        </mat-checkbox>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"loading\"></app-loader>\n    <app-save-area\n      *ngIf=\"!loading\"\n      @fadeIn\n      [saveDisabled]=\"locationForm.invalid || loading\"\n      (save)=\"onSubmit()\"\n      (cancel)=\"closeForm()\"\n      [confirmFirst]=\"true\"\n      [confirmText]=\"'Confirm Saving Information?'\"\n    ></app-save-area>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/locations/add-location/add-location.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/locations/add-location/add-location.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function() { return AddLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");






var AddLocationComponent = /** @class */ (function () {
    function AddLocationComponent(locationService, formBuilder, http) {
        this.locationService = locationService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.locations = [];
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = false;
        this.tags = {
            tagOne: '15d11935-e183-43da-9c42-d0ced1efd872',
            tagTwo: '8d4626ca-7abd-42ad-be48-56767bbcf272'
        };
        this.editing = false;
    }
    AddLocationComponent.prototype.ngOnInit = function () {
        this.locationForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddLocationComponent.prototype, "search", {
        get: function () {
            return this.locationForm.get('search');
        },
        enumerable: true,
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AddLocationComponent.prototype, "locations", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddLocationComponent.prototype, "saved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddLocationComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddLocationComponent.prototype, "currentLocation", void 0);
    AddLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-location',
            template: __webpack_require__(/*! ./add-location.component.html */ "./src/app/modules/locations/add-location/add-location.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]],
            styles: [__webpack_require__(/*! ./add-location.component.css */ "./src/app/modules/locations/add-location/add-location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]])
    ], AddLocationComponent);
    return AddLocationComponent;
}());



/***/ }),

/***/ "./src/app/modules/locations/locations.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/locations/locations.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n     <app-add-location\n       [locations]=\"items\"\n       (saved)=\"loadLocations1()\"\n       (close)=\"closeForm()\"\n       [currentLocation]=\"currentLocation\"\n       *ngIf=\"view_type == 'addData'\"\n     ></app-add-location>\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/locations/locations.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/locations/locations.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9sb2NhdGlvbnMvbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/locations/locations.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/locations/locations.component.ts ***!
  \**********************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http-client.service */ "./src/app/services/http-client.service.ts");





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
            _this.items = locations.map(function (location) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, location, { id: location.uuid, tags: location.tags.map(function (item) { return item.display; }).join(', '), parent: location.parentLocation ? location.parentLocation.display : '' })); });
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
    LocationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/modules/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.scss */ "./src/app/modules/locations/locations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n      <!--      Start Date-->\n      <div class=\"col-3\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n\n      <!--      End Date-->\n      <div class=\"col-3\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-4 mt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getProviders()\"\n        >Get Report</button>\n      </div>\n    </div>\n    <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a list of providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a Data for providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Inter Facility Referral Summary {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n        <table class=\"table table-bordered\">\n          <ng-container *ngFor=\"let data of values\">\n            <tr *ngIf=\"data.summaryDTOS.length != 0\">\n              <td><h3>{{ data.facilityName }}</h3></td>\n            </tr>\n            <tr  *ngIf=\"data.summaryDTOS.length != 0\">\n              <td>\n                <table>\n                  <tr>\n                    <th>To Facility</th>\n                    <th>Status</th>\n                    <th>Referrals</th>\n                  </tr>\n                  <tr *ngFor=\"let pr of data.summaryDTOS\">\n                    <td>{{ pr.toFacilityName }}</td>\n                    <td>{{ pr.status }}</td>\n                    <td>{{ pr.count }}</td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </ng-container>\n\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm92aWRlcnMtcmVwb3J0L2ZhY2lsaXR5LXJlZmVycmFsLXJlcG9ydC9mYWNpbGl0eS1yZWZmZXJhbC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FacilityRefferalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityRefferalReportComponent", function() { return FacilityRefferalReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");




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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FacilityRefferalReportComponent.prototype, "orgunit_tree_config", void 0);
    FacilityRefferalReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facility-refferal-report',
            template: __webpack_require__(/*! ./facility-refferal-report.component.html */ "./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.html"),
            styles: [__webpack_require__(/*! ./facility-refferal-report.component.scss */ "./src/app/modules/providers-report/facility-referral-report/facility-refferal-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__["OrgUnitService"]])
    ], FacilityRefferalReportComponent);
    return FacilityRefferalReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n<!--      Start Date-->\n      <div class=\"col-3\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n\n<!--      End Date-->\n      <div class=\"col-3\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-4 mt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getProviders()\"\n        >Get Report</button>\n      </div>\n    </div>\n    <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a list of providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a Data for providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Facility Providers Referral Report {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n        <table class=\"table table-bordered\">\n          <ng-container *ngFor=\"let data of values\">\n            <tr *ngIf=\"data.summaryDTOS.length != 0\">\n              <td><h3>{{ data.facilityName }}</h3></td>\n            </tr>\n            <tr  *ngIf=\"data.summaryDTOS.length != 0\">\n              <td>\n                <table>\n                  <tr>\n                    <th>Department Name</th>\n                    <th>Status</th>\n                    <th>Referrals</th>\n                  </tr>\n                  <tr *ngFor=\"let pr of data.summaryDTOS\">\n                    <td>{{ pr.departmentName }}</td>\n                    <td>{{ pr.status }}</td>\n                    <td>{{ pr.count }}</td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n          </ng-container>\n\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm92aWRlcnMtcmVwb3J0L2ludGVyLWZhY2lsaXR5LXJlZmZlcmFsLXJlcG9ydC9pbnRlci1mYWNpbGl0eS1yZWZmZXJhbC1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: InterFacilityRefferalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterFacilityRefferalReportComponent", function() { return InterFacilityRefferalReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");




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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InterFacilityRefferalReportComponent.prototype, "orgunit_tree_config", void 0);
    InterFacilityRefferalReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inter-facility-refferal-report',
            template: __webpack_require__(/*! ./inter-facility-refferal-report.component.html */ "./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.html"),
            styles: [__webpack_require__(/*! ./inter-facility-refferal-report.component.scss */ "./src/app/modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__["OrgUnitService"]])
    ], InterFacilityRefferalReportComponent);
    return InterFacilityRefferalReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 15px\">\n  <!--Loading message-->\n\n  <!--Error message in case something doesnt load-->\n  <div class=\"row no-print\" *ngIf=\"loading_failed\">\n    <div class=\"col-sm-12 text-center text-danger\">\n      Loading Failed\n    </div>\n  </div>\n  <!--data selections-->\n  <div>\n    <!--data entry-->\n    <div class=\"row\">\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Start Date</mat-label>\n          <input\n            [(ngModel)]=\"start_date\"\n            [matDatepicker]=\"dw\"\n            matInput\n            placeholder=\"From\"\n            [max]=\"end_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw\"></mat-datepicker-toggle>\n          <mat-datepicker #dw></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-3\">\n\n        <mat-form-field appearance=\"outline\">\n          <mat-label>End Date</mat-label>\n          <input\n            [(ngModel)]=\"end_date\"\n            [matDatepicker]=\"dw1\"\n            matInput\n            placeholder=\"To\"\n            [min]=\"start_date\"\n            required/>\n          <mat-datepicker-toggle matSuffix [for]=\"dw1\"></mat-datepicker-toggle>\n          <mat-datepicker #dw1></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-4 pt-1\">\n        <app-org-unit-filter\n          (onOrgUnitChange)=\"changeOrgUnit($event)\"\n          [orgunit_tree_config]=\"orgunit_tree_config\">\n        </app-org-unit-filter>\n      </div>\n      <div class=\"col-2\">\n        <button\n          style=\"margin-top: 5px; height: 46px;\"\n          [disabled]=\"start_date == '' || end_date == '' || orgunit == null\"\n          class=\"btn btn-block btn-outline-primary\"\n          (click)=\"getProviders()\"\n        >Get Providers List</button>\n      </div>\n    </div>\n    <div class=\"row no-print mt-4\" *ngIf=\"loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a list of providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <app-multiselect\n          *ngIf=\"providers.length != 0\"\n          [items]=\"providers\"\n          [placeholder]=\"'Select data items to see in the report'\"\n          (onSelected)=\"setSelectedData($event)\"\n        ></app-multiselect>\n      </div>\n      <div class=\"col-7\" *ngIf=\"selected_providers.length != 0\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"getData()\">Get Report</button> &nbsp;\n        <button *ngIf=\"done_loading && !show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = true\">Get Detailed</button>\n        <button *ngIf=\"done_loading && show_detailed\" class=\"btn btn-outline-secondary\" (click)=\"show_detailed = false\">Get Summary</button>\n      </div>\n    </div>\n\n    <div class=\"row no-print mt-4\" *ngIf=\"data_loading\">\n      <div class=\"col-sm-12\" style=\"padding: 0px\">\n        <app-loader [message]=\"'Getting a Data for providers...'\"></app-loader>\n      </div>\n    </div>\n\n    <div class=\"row mt-5\" *ngIf=\"done_loading\">\n      <div class=\"col\" *ngIf=\"!show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Service Provided by {{ selected_providers_names }} for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n        <table class=\"table table-bordered\">\n          <tr>\n            <th>Referral Type</th>\n            <th>Number of Referals</th>\n          </tr>\n          <tr *ngFor=\"let data of values\">\n            <td>{{ data.serviceName }}</td>\n            <td>{{ data.count }}</td>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"col\" *ngIf=\"show_detailed\" @fadeIn>\n        <h4 class=\"text-center\">Detailed Service Provided by {{ selected_providers_names }} for {{ orgunitnames }} from {{\n          start_date | date:'mediumDate' }} to {{ end_date | date:'mediumDate' }}</h4>\n        <table class=\"table table-bordered\">\n          <tr>\n            <th>Service Provider</th>\n            <th>Client</th>\n            <th>Facility</th>\n            <th>Refferal Status</th>\n          </tr>\n          <tr *ngFor=\"let data of detailed_values\">\n            <td>{{ data.service_provider_name }}</td>\n            <td>{{ data.client_name }}</td>\n            <td>{{ data.facility_name }}</td>\n            <td>{{ data.referral_status }}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm92aWRlcnMtcmVwb3J0L3Byb3ZpZGVycy1yZWZmZXJhbC1yZXBvcnQvcHJvdmlkZXJzLXJlZmZlcmFsLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProvidersRefferalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersRefferalReportComponent", function() { return ProvidersRefferalReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");





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
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { service_provider_name: chw ? chw.name : '' });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProvidersRefferalReportComponent.prototype, "orgunit_tree_config", void 0);
    ProvidersRefferalReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-providers-refferal-report',
            template: __webpack_require__(/*! ./providers-refferal-report.component.html */ "./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            styles: [__webpack_require__(/*! ./providers-refferal-report.component.scss */ "./src/app/modules/providers-report/providers-refferal-report/providers-refferal-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__["OrgUnitService"]])
    ], ProvidersRefferalReportComponent);
    return ProvidersRefferalReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/providers-report/providers-report.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-report.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n image=\"pie-chart\"\n [title]=\"title\"\n [hideAdd]=\"true\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link\n         *ngFor=\"let link of navLinks\"\n         [routerLink]=\"link.link\"\n         (click)=\"title = link.label\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{link.label}}\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/providers-report/providers-report.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-report.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9wcm92aWRlcnMtcmVwb3J0L3Byb3ZpZGVycy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/providers-report/providers-report.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/providers-report/providers-report.component.ts ***!
  \************************************************************************/
/*! exports provided: ProvidersReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersReportComponent", function() { return ProvidersReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



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
    ProvidersReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-providers-report',
            template: __webpack_require__(/*! ./providers-report.component.html */ "./src/app/modules/providers-report/providers-report.component.html"),
            styles: [__webpack_require__(/*! ./providers-report.component.scss */ "./src/app/modules/providers-report/providers-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProvidersReportComponent);
    return ProvidersReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/reports.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modules/reports/reports.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item {\n  transition: all 0.3s cubic-bezier(.25, .8, .25, 1) !important;\n  cursor: pointer;\n}\n\n.list-group-item:hover {\n  transform: scale(1.02) !important;\n  background-color: rgba(0, 0, 0, 0.1) !important;\n  font-weight: 600;\n  border-bottom: 2px solid #0277bd;\n}\n\n.hidden {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkRBQTZEO0VBQzdELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsK0NBQStDO0VBQy9DLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiLi4vLi4vcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSkgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMjc3YmQ7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/reports/reports.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/reports/reports.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n image=\"pie-chart\"\n [title]=\"title\"\n [hideAdd]=\"true\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link\n         *ngFor=\"let link of navLinks\"\n         [routerLink]=\"link.link\"\n         (click)=\"title = link.label\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{link.label}}\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/reports/reports.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/reports/reports.component.ts ***!
  \******************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




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
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/modules/reports/reports.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/modules/reports/reports.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h5>\n        {{ report?.name}} from {{startDate | date:'mediumDate'}} to {{ endDate  | date:'mediumDate'}} for {{ orgUnitName }}\n        <button (click)=\"downloadExcel()\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n      </h5>\n    </div>\n  </div>\n  <div class=\"row mt-3 no-print\">\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Rows</mat-label>\n        <mat-select\n          (selectionChange)=\"changeRows($event)\"\n          [(ngModel)]=\"visibleRows\"\n          multiple\n          placeholder=\"Select Indicators\">\n          <app-mat-select-search [(ngModel)]=\"searchRows\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of rows | search:'indicatorName':searchRows\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenRows.length > 0\">{{hiddenRows.length}} hidden rows</mat-hint>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Columns</mat-label>\n        <mat-select\n          (selectionChange)=\"changeColumn($event)\"\n          [(ngModel)]=\"visibleColumns\"\n          multiple\n          placeholder=\"Visible Columns\">\n          <app-mat-select-search [(ngModel)]=\"searchColumns\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of columns | search:'indicatorName':searchColumns\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenColumns.length > 0\">{{hiddenColumns.length}} hidden columns</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <table #dataTable class=\"table table-bordered reportTable mt-3\">\n        <thead>\n        <tr>\n          <th colspan=\"2\"></th>\n          <th class=\"text-center\" colspan=\"2\" [attr.colspan]=\"visibleColumns.includes('JUMLA ME') && visibleColumns.includes('JUMLA KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME') || visibleColumns.includes('JUMLA KE')\">JUMLA</th>\n          <th class=\"text-center\" colspan=\"2\"  [attr.colspan]=\"visibleColumns.includes('CHINI YA MIAKA 5 ME') && visibleColumns.includes('CHINI YA MIAKA 5 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 ME') || visibleColumns.includes('CHINI YA MIAKA 5 KE')\">CHINI YA MIAKA 5</th>\n          <th class=\"text-center\" colspan=\"2\"  [attr.colspan]=\"visibleColumns.includes('JUU YA MIAKA 5 ME') && visibleColumns.includes('JUU YA MIAKA 5 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 ME') || visibleColumns.includes('JUU YA MIAKA 5 KE')\">JUU YA MIAKA 5</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th style=\"width: 10px\">SN</th>\n          <th>{{ main_title }}</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">ME</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">KE</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 ME')\">ME</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 KE')\">KE</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 ME')\">ME</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 KE')\">KE</th>\n        </tr>\n        <ng-container *ngFor=\"let row of jsonData;\">\n          <tr *ngIf=\"visibleRows.includes('RUFAA ZA MALARIA ZILIZOFANYIKA')\">\n            <td>1</td>\n            <td>RUFAA ZA MALARIA ZILIZOFANYIKA</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">{{row.totalMale || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">{{row.totalFemale || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 ME')\">{{row.lessThanFiveMale || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MIAKA 5 KE')\">{{row.lessThanFiveFemale || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 ME')\">{{row.greaterThan5Male || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUU YA MIAKA 5 KE')\">{{row.greaterThan5Female || '-'}}</td>\n          </tr>\n        </ng-container>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9yZXBvcnRzL3N1Y2Nlc3NmdWwtbWFyYWxpYS1yZWZlcmFscy9zdWNjZXNzZnVsLW1hcmFsaWEtcmVmZXJhbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SuccessfulMaraliaReferalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulMaraliaReferalsComponent", function() { return SuccessfulMaraliaReferalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/excel-download.service */ "./src/app/services/excel-download.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");




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
        this.visibleColumns = this.columns.slice();
        this.visibleRows = this.rows.slice();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "jsonData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "endDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SuccessfulMaraliaReferalsComponent.prototype, "orgUnitName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "report", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "main_title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SuccessfulMaraliaReferalsComponent.prototype, "dataTable", void 0);
    SuccessfulMaraliaReferalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successful-maralia-referals',
            template: __webpack_require__(/*! ./successful-maralia-referals.component.html */ "./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeIn"], _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeOut"]],
            styles: [__webpack_require__(/*! ./successful-maralia-referals.component.scss */ "./src/app/modules/reports/successful-maralia-referals/successful-maralia-referals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excel_download_service__WEBPACK_IMPORTED_MODULE_2__["ExcelDownloadService"]])
    ], SuccessfulMaraliaReferalsComponent);
    return SuccessfulMaraliaReferalsComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  total-failed-referrals works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9yZXBvcnRzL3RvdGFsLWZhaWxlZC1yZWZlcnJhbHMvdG90YWwtZmFpbGVkLXJlZmVycmFscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TotalFailedReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalFailedReferralsComponent", function() { return TotalFailedReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TotalFailedReferralsComponent = /** @class */ (function () {
    function TotalFailedReferralsComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalFailedReferralsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalFailedReferralsComponent.prototype, "jsonData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalFailedReferralsComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalFailedReferralsComponent.prototype, "endDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TotalFailedReferralsComponent.prototype, "orgUnitName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalFailedReferralsComponent.prototype, "report", void 0);
    TotalFailedReferralsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total-failed-referrals',
            template: __webpack_require__(/*! ./total-failed-referrals.component.html */ "./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.html"),
            styles: [__webpack_require__(/*! ./total-failed-referrals.component.scss */ "./src/app/modules/reports/total-failed-referrals/total-failed-referrals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TotalFailedReferralsComponent);
    return TotalFailedReferralsComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h5>\n        {{ report?.name}} from {{startDate | date:'mediumDate'}} to {{ endDate  | date:'mediumDate'}} for {{ orgUnitName }}\n        <button (click)=\"downloadExcel()\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n      </h5>\n    </div>\n  </div>\n  <div class=\"row mt-3 no-print\">\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Rows</mat-label>\n        <mat-select\n          (selectionChange)=\"changeRows($event)\"\n          [(ngModel)]=\"visibleRows\"\n          multiple\n          placeholder=\"Select Indicators\">\n          <app-mat-select-search [(ngModel)]=\"searchRows\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of rows | search:'indicatorName':searchRows\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenRows.length > 0\">{{hiddenRows.length}} hidden rows</mat-hint>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Columns</mat-label>\n        <mat-select\n          (selectionChange)=\"changeColumn($event)\"\n          [(ngModel)]=\"visibleColumns\"\n          multiple\n          placeholder=\"Visible Columns\">\n          <app-mat-select-search [(ngModel)]=\"searchColumns\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of columns | search:'indicatorName':searchColumns\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenColumns.length > 0\">{{hiddenColumns.length}} hidden columns</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <table #dataTable class=\"table table-bordered reportTable mt-3\">\n        <thead>\n        <tr>\n          <th colspan=\"2\"></th>\n          <th class=\"text-center\" rowspan=\"2\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA')\">JUMLA</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('WANAUME') && visibleColumns.includes('WANAWAKE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAUME') || visibleColumns.includes('WANAWAKE')\">JINSIA</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th style=\"width: 10px\">SN</th>\n          <th>{{ main_title }}</th>\n          <td @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA')\"></td>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAUME')\">ME</th>\n          <th class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAWAKE')\">KE</th>\n        </tr>\n        <ng-container *ngFor=\"let row of jsonData;\">\n          <tr *ngIf=\"visibleRows.includes(row.itemName)\">\n            <td>{{row.sn}}</td>\n            <td>{{row.itemName}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA')\">{{row.total || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAUME')\">{{row.male || '-'}}</td>\n            <td class=\"gen1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAWAKE')\">{{row.female || '-'}}</td>\n          </tr>\n        </ng-container>\n        <tr *ngIf=\"hiddenRows.length == 0 && hiddenColumns.length == 0\">\n          <td colspan=\"2\"><b>JUMLA</b></td>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA')\">{{totals.total }}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAUME')\">{{totals.male }}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('WANAWAKE')\">{{totals.female }}</th>\n        </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9yZXBvcnRzL3RvdGFsLWlzc3VlZC1sb3N0LWZvbGxvd3VwL3RvdGFsLWlzc3VlZC1sb3N0LWZvbGxvd3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TotalIssuedLostFollowupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalIssuedLostFollowupComponent", function() { return TotalIssuedLostFollowupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/excel-download.service */ "./src/app/services/excel-download.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");




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
        this.visibleColumns = this.columns.slice();
        this.visibleRows = this.rows.slice();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "jsonData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "endDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TotalIssuedLostFollowupComponent.prototype, "orgUnitName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "report", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "main_title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalIssuedLostFollowupComponent.prototype, "dataTable", void 0);
    TotalIssuedLostFollowupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total-issued-lost-followup',
            template: __webpack_require__(/*! ./total-issued-lost-followup.component.html */ "./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeOut"], _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
            styles: [__webpack_require__(/*! ./total-issued-lost-followup.component.scss */ "./src/app/modules/reports/total-issued-lost-followup/total-issued-lost-followup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excel_download_service__WEBPACK_IMPORTED_MODULE_2__["ExcelDownloadService"]])
    ], TotalIssuedLostFollowupComponent);
    return TotalIssuedLostFollowupComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/total-lost-followup/total-lost-followup.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/reports/total-lost-followup/total-lost-followup.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/reports/total-lost-followup/total-lost-followup.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/reports/total-lost-followup/total-lost-followup.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9yZXBvcnRzL3RvdGFsLWxvc3QtZm9sbG93dXAvdG90YWwtbG9zdC1mb2xsb3d1cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/reports/total-lost-followup/total-lost-followup.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/reports/total-lost-followup/total-lost-followup.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TotalLostFollowupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalLostFollowupComponent", function() { return TotalLostFollowupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/excel-download.service */ "./src/app/services/excel-download.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");




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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "jsonData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "endDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TotalLostFollowupComponent.prototype, "orgUnitName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "report", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "main_title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalLostFollowupComponent.prototype, "dataTable", void 0);
    TotalLostFollowupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total-lost-followup',
            template: __webpack_require__(/*! ./total-lost-followup.component.html */ "./src/app/modules/reports/total-lost-followup/total-lost-followup.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeOut"], _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
            styles: [__webpack_require__(/*! ./total-lost-followup.component.scss */ "./src/app/modules/reports/total-lost-followup/total-lost-followup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excel_download_service__WEBPACK_IMPORTED_MODULE_2__["ExcelDownloadService"]])
    ], TotalLostFollowupComponent);
    return TotalLostFollowupComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  total-referrals-issued works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9yZXBvcnRzL3RvdGFsLXJlZmVycmFscy1pc3N1ZWQvdG90YWwtcmVmZXJyYWxzLWlzc3VlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TotalReferralsIssuedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalReferralsIssuedComponent", function() { return TotalReferralsIssuedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TotalReferralsIssuedComponent = /** @class */ (function () {
    function TotalReferralsIssuedComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalReferralsIssuedComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalReferralsIssuedComponent.prototype, "jsonData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalReferralsIssuedComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalReferralsIssuedComponent.prototype, "endDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TotalReferralsIssuedComponent.prototype, "orgUnitName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalReferralsIssuedComponent.prototype, "report", void 0);
    TotalReferralsIssuedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total-referrals-issued',
            template: __webpack_require__(/*! ./total-referrals-issued.component.html */ "./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.html"),
            styles: [__webpack_require__(/*! ./total-referrals-issued.component.scss */ "./src/app/modules/reports/total-referrals-issued/total-referrals-issued.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TotalReferralsIssuedComponent);
    return TotalReferralsIssuedComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/total-registered-clients/total-registered-clients.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-registered-clients/total-registered-clients.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h5>\n        {{ report?.name}} from {{startDate | date:'mediumDate'}} to {{ endDate  | date:'mediumDate'}} for {{ orgUnitName }}\n        <button (click)=\"downloadExcel()\" mat-raised-button class=\"pull-right no-print\">\n          <img src=\"assets/img/csv.png\" style=\"height: 26px\">\n        </button>\n        <button (click)=\"print()\" mat-raised-button class=\"pull-right no-print\" style=\"margin-right: 5px\">\n          <img src=\"assets/img/print.png\" style=\"height: 26px\">\n        </button>\n      </h5>\n    </div>\n  </div>\n  <div class=\"row mt-3 no-print\">\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Rows</mat-label>\n        <mat-select\n          (selectionChange)=\"changeRows($event)\"\n          [(ngModel)]=\"visibleRows\"\n          multiple\n          placeholder=\"Select Indicators\">\n          <app-mat-select-search [(ngModel)]=\"searchRows\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of rows | search:'indicatorName':searchRows\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenRows.length > 0\">{{hiddenRows.length}} hidden rows</mat-hint>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Visible Columns</mat-label>\n        <mat-select\n          (selectionChange)=\"changeColumn($event)\"\n          [(ngModel)]=\"visibleColumns\"\n          multiple\n          placeholder=\"Visible Columns\">\n          <app-mat-select-search [(ngModel)]=\"searchColumns\"></app-mat-select-search>\n          <mat-option\n            *ngFor=\"let item of columns | search:'indicatorName':searchColumns\"\n            [value]=\"item\"\n          >{{ item }}</mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"hiddenColumns.length > 0\">{{hiddenColumns.length}} hidden columns</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <table #dataTable class=\"table table-bordered reportTable mt-3\">\n        <thead>\n        <tr>\n          <th colspan=\"2\"></th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('JUMLA ME') && visibleColumns.includes('JUMLA KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME') || visibleColumns.includes('JUMLA KE')\">JUMLA</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME') && visibleColumns.includes('CHINI YA MWAKA MMOJA KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME') || visibleColumns.includes('CHINI YA MWAKA MMOJA KE')\">CHINI YA MWAKA MMOJA</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 1-5 ME') && visibleColumns.includes('MIAKA 1-5 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 ME') || visibleColumns.includes('MIAKA 1-5 KE')\">MIAKA <br> 1-5</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 6 - 9 ME') && visibleColumns.includes('MIAKA 6 - 9 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 ME') || visibleColumns.includes('MIAKA 6 - 9 KE')\">MIAKA <br> 6 - 9</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 10 - 14 ME') && visibleColumns.includes('MIAKA 10 - 14 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 ME') || visibleColumns.includes('MIAKA 10 - 14 KE')\">MIAKA <br> 10 - 14</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 15 - 19 ME') && visibleColumns.includes('MIAKA 15 - 19 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 ME') || visibleColumns.includes('MIAKA 15 - 19 KE')\">MIAKA <br> 15 - 19</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 20 - 24 ME') && visibleColumns.includes('MIAKA 20 - 24 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 ME') || visibleColumns.includes('MIAKA 20 - 24 KE')\">MIAKA <br> 20 - 24</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 25 - 49 ME') && visibleColumns.includes('MIAKA 25 - 49 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 ME') || visibleColumns.includes('MIAKA 25 - 49 KE')\">MIAKA <br> 25 - 49</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 50 - 59 ME') && visibleColumns.includes('MIAKA 50 - 59 KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 ME') || visibleColumns.includes('MIAKA 50 - 59 KE')\">MIAKA <br> 50 - 59</th>\n          <th class=\"text-center\" [attr.colspan]=\"visibleColumns.includes('MIAKA 60+ ME') && visibleColumns.includes('MIAKA 60+ KE') ? 2 : 1\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ ME') || visibleColumns.includes('MIAKA 60+ KE')\">MIAKA <br> 60+</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <th style=\"width: 10px\">SN</th>\n          <th>{{ main_title }}</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 KE')\">KE</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ ME')\">ME</th>\n          <th class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ KE')\">KE</th>\n        </tr>\n        <ng-container *ngFor=\"let row of jsonData;\">\n          <tr *ngIf=\"visibleRows.includes(row.itemName)\">\n            <td>{{row.sn}}</td>\n            <td>{{row.itemName}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">{{row.totalMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">{{row.totalFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME')\">{{row.lessThan1Male || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA KE')\">{{row.lessThan1Female || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 ME')\">{{row.oneTofiveMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 KE')\">{{row.oneTofiveFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 ME')\">{{row.sixToNineMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 KE')\">{{row.sixToNineFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 ME')\">{{row.tenToFourteenMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 KE')\">{{row.tenToFourteenFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 ME')\">{{row.fifteenToNineteenMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 KE')\">{{row.fifteenToNineteenFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 ME')\">{{row.twentyToTwentyFourMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 KE')\">{{row.twentyToTwentyFourFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 ME')\">{{row.twentyFiveToFourtyNineMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 KE')\">{{row.twentyFiveToFourtyNineFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 ME')\">{{row.fiftyToFiftyNineMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 KE')\">{{row.fiftyToFiftyNineFemale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ ME')\">{{row.aboveSixtyMale || '-'}}</td>\n            <td class=\"gen\" @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ KE')\">{{row.aboveSixtyFemale || '-'}}</td>\n          </tr>\n        </ng-container>\n        <tr *ngIf=\"hiddenRows.length == 0 && hiddenColumns.length == 0\" >\n          <td colspan=\"2\"><b>JUMLA</b></td>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA ME')\">{{totals.totalMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('JUMLA KE')\">{{totals.totalFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA ME')\">{{totals.lessThan1Male}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('CHINI YA MWAKA MMOJA KE')\">{{totals.lessThan1Female}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 ME')\">{{totals.oneTofiveMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 1-5 KE')\">{{totals.oneTofiveFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 ME')\">{{totals.sixToNineMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 6 - 9 KE')\">{{totals.sixToNineFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 ME')\">{{totals.tenToFourteenMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 10 - 14 KE')\">{{totals.tenToFourteenFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 ME')\">{{totals.fifteenToNineteenMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 15 - 19 KE')\">{{totals.fifteenToNineteenFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 ME')\">{{totals.twentyToTwentyFourMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 20 - 24 KE')\">{{totals.twentyToTwentyFourFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 ME')\">{{totals.twentyFiveToFourtyNineMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 25 - 49 KE')\">{{totals.twentyFiveToFourtyNineFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 ME')\">{{totals.fiftyToFiftyNineMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 50 - 59 KE')\">{{totals.fiftyToFiftyNineFemale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ ME')\">{{totals.aboveSixtyMale}}</th>\n          <th @fadeIn @fadeOut *ngIf=\"visibleColumns.includes('MIAKA 60+ KE')\">{{totals.aboveSixtyFemale}}</th>\n        </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/reports/total-registered-clients/total-registered-clients.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-registered-clients/total-registered-clients.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9yZXBvcnRzL3RvdGFsLXJlZ2lzdGVyZWQtY2xpZW50cy90b3RhbC1yZWdpc3RlcmVkLWNsaWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/reports/total-registered-clients/total-registered-clients.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/reports/total-registered-clients/total-registered-clients.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TotalRegisteredClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalRegisteredClientsComponent", function() { return TotalRegisteredClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _services_excel_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/excel-download.service */ "./src/app/services/excel-download.service.ts");




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
        this.visibleColumns = this.columns.slice();
        this.visibleRows = this.rows.slice();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TotalRegisteredClientsComponent.prototype, "jsonData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalRegisteredClientsComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalRegisteredClientsComponent.prototype, "endDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TotalRegisteredClientsComponent.prototype, "orgUnitName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalRegisteredClientsComponent.prototype, "report", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalRegisteredClientsComponent.prototype, "main_title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TotalRegisteredClientsComponent.prototype, "dataTable", void 0);
    TotalRegisteredClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total-registered-clients',
            template: __webpack_require__(/*! ./total-registered-clients.component.html */ "./src/app/modules/reports/total-registered-clients/total-registered-clients.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["fadeOut"]],
            styles: [__webpack_require__(/*! ./total-registered-clients.component.scss */ "./src/app/modules/reports/total-registered-clients/total-registered-clients.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excel_download_service__WEBPACK_IMPORTED_MODULE_3__["ExcelDownloadService"]])
    ], TotalRegisteredClientsComponent);
    return TotalRegisteredClientsComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/total-successful/total-successful.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/reports/total-successful/total-successful.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  total-successful works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/reports/total-successful/total-successful.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/reports/total-successful/total-successful.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9yZXBvcnRzL3RvdGFsLXN1Y2Nlc3NmdWwvdG90YWwtc3VjY2Vzc2Z1bC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/reports/total-successful/total-successful.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/reports/total-successful/total-successful.component.ts ***!
  \********************************************************************************/
/*! exports provided: TotalSuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalSuccessfulComponent", function() { return TotalSuccessfulComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TotalSuccessfulComponent = /** @class */ (function () {
    function TotalSuccessfulComponent() {
        this.startDate = '';
        this.orgUnitName = '';
    }
    TotalSuccessfulComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalSuccessfulComponent.prototype, "jsonData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalSuccessfulComponent.prototype, "startDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalSuccessfulComponent.prototype, "endDate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TotalSuccessfulComponent.prototype, "orgUnitName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TotalSuccessfulComponent.prototype, "report", void 0);
    TotalSuccessfulComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total-successful',
            template: __webpack_require__(/*! ./total-successful.component.html */ "./src/app/modules/reports/total-successful/total-successful.component.html"),
            styles: [__webpack_require__(/*! ./total-successful.component.scss */ "./src/app/modules/reports/total-successful/total-successful.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TotalSuccessfulComponent);
    return TotalSuccessfulComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/indicators/indicators.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/settings/indicators/indicators.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n     <div class=\"container-fluid\">\n       <form [formGroup]=\"submitForm\">\n<!--         English Name-->\n         <p class=\"clearfix\">\n           <mat-form-field appearance=\"outline\">\n             <mat-label> English Name</mat-label>\n             <input\n               formControlName=\"indicatorName\"\n               matInput\n               required\n               placeholder=\"English Name\">\n             <mat-error *ngIf=\"!submitForm.get('indicatorName').valid && submitForm.get('indicatorName').touched\">\n               This field is required\n             </mat-error>\n           </mat-form-field>\n         </p>\n\n<!--         Swahili Name-->\n         <p class=\"clearfix\">\n           <mat-form-field appearance=\"outline\">\n             <mat-label> Swahili Name</mat-label>\n             <input\n               formControlName=\"indicatorNameSw\"\n               matInput\n               required\n               placeholder=\"Swahili Name\">\n             <mat-error *ngIf=\"!submitForm.get('indicatorNameSw').valid && submitForm.get('indicatorNameSw').touched\">\n               This field is required\n             </mat-error>\n           </mat-form-field>\n         </p>\n\n<!--         Is Active-->\n         <p class=\"clearfix\">\n           <mat-checkbox formControlName=\"isActive\">\n             Is Active\n           </mat-checkbox>\n         </p>\n\n         <div class=\"col-sm-12\">\n           <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n           <app-save-area\n             *ngIf=\"!loading\"\n             @fadeIn\n             [saveDisabled]=\"submitForm.invalid || saving_data\"\n             (save)=\"save(submitForm.value)\"\n             (cancel)=\"closeForm()\"\n             [confirmFirst]=\"true\"\n             [confirmText]=\"'Confirm Saving Information?'\"\n           ></app-save-area>\n         </div>\n       </form>\n     </div>\n\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/settings/indicators/indicators.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/settings/indicators/indicators.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy9pbmRpY2F0b3JzL2luZGljYXRvcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/settings/indicators/indicators.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/settings/indicators/indicators.component.ts ***!
  \*********************************************************************/
/*! exports provided: IndicatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function() { return IndicatorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");





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
            indicatorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            indicatorNameSw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isActive: [true]
        });
    };
    IndicatorsComponent.prototype.getItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('get-indicators').toPromise()];
                    case 1:
                        items = _a.sent();
                        this.items = items.map(function (item) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { id: item.indicatorId })); });
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, saved, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    IndicatorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indicators',
            template: __webpack_require__(/*! ./indicators.component.html */ "./src/app/modules/settings/indicators/indicators.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            styles: [__webpack_require__(/*! ./indicators.component.scss */ "./src/app/modules/settings/indicators/indicators.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], IndicatorsComponent);
    return IndicatorsComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <div class=\"container-fluid\">\n      <form [formGroup]=\"submitForm\">\n        <!--         English Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> English Name</mat-label>\n            <input\n              formControlName=\"desc\"\n              matInput\n              required\n              placeholder=\"English Name\">\n            <mat-error *ngIf=\"!submitForm.get('desc').valid && submitForm.get('desc').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Swahili Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Swahili Name</mat-label>\n            <input\n              formControlName=\"descSw\"\n              matInput\n              required\n              placeholder=\"Swahili Name\">\n            <mat-error *ngIf=\"!submitForm.get('descSw').valid && submitForm.get('descSw').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--    Refereal type-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Referral Type</mat-label>\n            <mat-select formControlName=\"referralType\" placeholder=\"Referral Type\">\n              <mat-option *ngFor=\"let item of referral_types\" [value]=\"item.referralTypeId\">\n                {{ item.referralTypeName }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"!submitForm.get('referralType').valid && submitForm.get('referralType').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <div class=\"col-sm-12\">\n          <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n          <app-save-area\n            *ngIf=\"!loading\"\n            @fadeIn\n            [saveDisabled]=\"submitForm.invalid || saving_data\"\n            (save)=\"save(submitForm.value)\"\n            (cancel)=\"closeForm()\"\n            [confirmFirst]=\"true\"\n            [confirmText]=\"'Confirm Saving Information?'\"\n          ></app-save-area>\n        </div>\n      </form>\n    </div>\n\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy9yZWZmZXJlYWwtZmVlZGJhY2svcmVmZmVyZWFsLWZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RefferealFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefferealFeedbackComponent", function() { return RefferealFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");





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
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descSw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            referralType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    RefferealFeedbackComponent.prototype.getItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, items;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
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
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { referralTypeName: referral_type ? referral_type.referralTypeName : '' });
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, url, saved, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    RefferealFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reffereal-feedback',
            template: __webpack_require__(/*! ./reffereal-feedback.component.html */ "./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            styles: [__webpack_require__(/*! ./reffereal-feedback.component.scss */ "./src/app/modules/settings/reffereal-feedback/reffereal-feedback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RefferealFeedbackComponent);
    return RefferealFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/reffereal-type/reffereal-type.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-type/reffereal-type.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <div class=\"container-fluid\">\n      <form [formGroup]=\"submitForm\">\n        <!--         English Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Name</mat-label>\n            <input\n              formControlName=\"referralTypeName\"\n              matInput\n              required\n              placeholder=\"Name\">\n            <mat-error *ngIf=\"!submitForm.get('referralTypeName').valid && submitForm.get('referralTypeName').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Is Active-->\n        <p class=\"clearfix\">\n          <mat-checkbox formControlName=\"isActive\">\n            Is Active\n          </mat-checkbox>\n        </p>\n\n        <div class=\"col-sm-12\">\n          <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n          <app-save-area\n            *ngIf=\"!loading\"\n            @fadeIn\n            [saveDisabled]=\"submitForm.invalid || saving_data\"\n            (save)=\"save(submitForm.value)\"\n            (cancel)=\"closeForm()\"\n            [confirmFirst]=\"true\"\n            [confirmText]=\"'Confirm Saving Information?'\"\n          ></app-save-area>\n        </div>\n      </form>\n    </div>\n\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/settings/reffereal-type/reffereal-type.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-type/reffereal-type.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy9yZWZmZXJlYWwtdHlwZS9yZWZmZXJlYWwtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/settings/reffereal-type/reffereal-type.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/settings/reffereal-type/reffereal-type.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RefferealTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefferealTypeComponent", function() { return RefferealTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");





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
            referralTypeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isActive: [true]
        });
    };
    RefferealTypeComponent.prototype.getItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('referral-types').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { id: item.referralTypeId })); });
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, saved, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    RefferealTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reffereal-type',
            template: __webpack_require__(/*! ./reffereal-type.component.html */ "./src/app/modules/settings/reffereal-type/reffereal-type.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            styles: [__webpack_require__(/*! ./reffereal-type.component.scss */ "./src/app/modules/settings/reffereal-type/reffereal-type.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RefferealTypeComponent);
    return RefferealTypeComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/registration-reason/registration-reason.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/settings/registration-reason/registration-reason.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <div class=\"container-fluid\">\n      <form [formGroup]=\"submitForm\">\n        <!--         English Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> English Name</mat-label>\n            <input\n              formControlName=\"descEn\"\n              matInput\n              required\n              placeholder=\"English Name\">\n            <mat-error *ngIf=\"!submitForm.get('descEn').valid && submitForm.get('descEn').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Swahili Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Swahili Name</mat-label>\n            <input\n              formControlName=\"descSw\"\n              matInput\n              required\n              placeholder=\"Swahili Name\">\n            <mat-error *ngIf=\"!submitForm.get('descSw').valid && submitForm.get('descSw').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Is Active-->\n        <p class=\"clearfix\">\n          <mat-checkbox formControlName=\"isActive\">\n            Is Active\n          </mat-checkbox>\n        </p>\n\n        <!--         Is Active-->\n        <p class=\"clearfix\">\n          <mat-checkbox formControlName=\"applicableToMen\">\n            Applicable To Men\n          </mat-checkbox>\n        </p>\n\n        <!--         Is Active-->\n        <p class=\"clearfix\">\n          <mat-checkbox formControlName=\"applicableToWomen\">\n            Applicable To Women\n          </mat-checkbox>\n        </p>\n\n        <div class=\"col-sm-12\">\n          <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n          <app-save-area\n            *ngIf=\"!loading\"\n            @fadeIn\n            [saveDisabled]=\"submitForm.invalid || saving_data\"\n            (save)=\"save(submitForm.value)\"\n            (cancel)=\"closeForm()\"\n            [confirmFirst]=\"true\"\n            [confirmText]=\"'Confirm Saving Information?'\"\n          ></app-save-area>\n        </div>\n      </form>\n    </div>\n\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/settings/registration-reason/registration-reason.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/settings/registration-reason/registration-reason.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy9yZWdpc3RyYXRpb24tcmVhc29uL3JlZ2lzdHJhdGlvbi1yZWFzb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/settings/registration-reason/registration-reason.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/settings/registration-reason/registration-reason.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RegistrationReasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationReasonComponent", function() { return RegistrationReasonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");




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
            descEn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descSw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isActive: [true],
            applicableToMen: [true],
            applicableToWomen: [true]
        });
    };
    RegistrationReasonComponent.prototype.getItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('registration-reasons').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { id: item.registrationId })); });
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, url, saved, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var saved, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    RegistrationReasonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-reason',
            template: __webpack_require__(/*! ./registration-reason.component.html */ "./src/app/modules/settings/registration-reason/registration-reason.component.html"),
            styles: [__webpack_require__(/*! ./registration-reason.component.scss */ "./src/app/modules/settings/registration-reason/registration-reason.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegistrationReasonComponent);
    return RegistrationReasonComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/service/service-indicator/service-indicator.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/settings/service/service-indicator/service-indicator.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <app-loader *ngIf=\"loadingIndicators\" message=\"Preparing Indicators\"></app-loader>\n\n  <div *ngIf=\"!loadingIndicators\">\n    <p class=\"lead\">Select Indicators to be mapped to {{serviceItem?.serviceName}}</p>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Select Indicators</mat-label>\n      <mat-select\n        [(ngModel)]=\"selectedIndicators\"\n        multiple\n        placeholder=\"Select Indicators\">\n        <app-mat-select-search [(ngModel)]=\"searchValue\"></app-mat-select-search>\n        <mat-option\n          *ngFor=\"let item of indicators | without:'indicatorId':excludeIds | search:'indicatorName':searchValue\"\n          [value]=\"item.indicatorId\"\n        >{{ item.indicatorName }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <p class=\"clearfix\">\n      <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n\n      <button\n        mat-raised-button\n        color=\"primary\"\n        class=\"btn-block\"\n        [disabled]=\"selectedIndicators.length  == 0\"\n        (click)=\"save()\"\n      >Map Indicators</button>\n    </p>\n\n  </div>\n  <div *ngIf=\"!loadingIndicators\">\n    <h5> Current Mapped Indicators</h5>\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"false\"\n      [tableList]=\"currentIndicators\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/settings/service/service-indicator/service-indicator.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/settings/service/service-indicator/service-indicator.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy9zZXJ2aWNlL3NlcnZpY2UtaW5kaWNhdG9yL3NlcnZpY2UtaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/settings/service/service-indicator/service-indicator.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/settings/service/service-indicator/service-indicator.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServiceIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceIndicatorComponent", function() { return ServiceIndicatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http-client.service */ "./src/app/services/http-client.service.ts");



var ServiceIndicatorComponent = /** @class */ (function () {
    function ServiceIndicatorComponent(httpClient) {
        this.httpClient = httpClient;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { id: item.referralServiceIndicatorId });
                });
                this.excludeIds = this.serviceItem.indicators.map(function (i) { return i.referralIndicatorId; }).join('');
            }
        }
    };
    ServiceIndicatorComponent.prototype.getIndicators = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingIndicators = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('get-indicators').toPromise()];
                    case 1:
                        items = _a.sent();
                        this.indicators = items.map(function (item) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { id: item.indicatorId })); });
                        this.loadingIndicators = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ServiceIndicatorComponent.prototype.onDelete = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var saved, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, saved, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServiceIndicatorComponent.prototype, "serviceItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServiceIndicatorComponent.prototype, "close", void 0);
    ServiceIndicatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-indicator',
            template: __webpack_require__(/*! ./service-indicator.component.html */ "./src/app/modules/settings/service/service-indicator/service-indicator.component.html"),
            styles: [__webpack_require__(/*! ./service-indicator.component.scss */ "./src/app/modules/settings/service/service-indicator/service-indicator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], ServiceIndicatorComponent);
    return ServiceIndicatorComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/service/service.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/settings/service/service.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  animationSize=\"largeForm\"\n  [smallForm]=\"true\"\n  [formTitle]=\"formTitle\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [tableList]=\"items\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowCustomPrimary)=\"setIndicators($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <div *ngIf=\"view_type == 'add'\" class=\"container-fluid\">\n      <form [formGroup]=\"submitForm\">\n        <!--         English Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> English Name</mat-label>\n            <input\n              formControlName=\"serviceName\"\n              matInput\n              required\n              placeholder=\"English Name\">\n            <mat-error *ngIf=\"!submitForm.get('serviceName').valid && submitForm.get('serviceName').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--         Swahili Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Swahili Name</mat-label>\n            <input\n              formControlName=\"serviceNameSw\"\n              matInput\n              required\n              placeholder=\"Swahili Name\">\n            <mat-error *ngIf=\"!submitForm.get('serviceNameSw').valid && submitForm.get('serviceNameSw').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n<!--         Category-->\n        <p class=\"clearfix\" *ngIf=\"itemId == null\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Category</mat-label>\n            <input\n              formControlName=\"category\"\n              matInput\n              required\n              placeholder=\"Category\">\n            <mat-error *ngIf=\"!submitForm.get('category').valid && submitForm.get('category').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <div class=\"col-sm-12\">\n          <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"saving_data\"></app-loader>\n          <app-save-area\n            *ngIf=\"!loading\"\n            @fadeIn\n            [saveDisabled]=\"submitForm.invalid || saving_data\"\n            (save)=\"save(submitForm.value)\"\n            (cancel)=\"closeForm()\"\n            [confirmFirst]=\"true\"\n            [confirmText]=\"'Confirm Saving Information?'\"\n          ></app-save-area>\n        </div>\n      </form>\n    </div>\n\n    <app-service-indicator\n      [serviceItem]=\"currentService\"\n      *ngIf=\"view_type == 'indicator'\"\n      (close)=\"doneMapping($event)\"\n    ></app-service-indicator>\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/settings/service/service.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/settings/service/service.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/settings/service/service.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/settings/service/service.component.ts ***!
  \***************************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");





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
            serviceName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            serviceNameSw: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ServiceComponent.prototype.getItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.httpClient.getOpenSRP('boresha-afya-services').toPromise()];
                    case 1:
                        items = _a.sent();
                        console.log('nafika', items);
                        this.items = items.map(function (item) {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { indicatorEn: item.indicators.map(function (i) { return i.indicatorName; }).join(', '), indicatorSw: item.indicators.map(function (i) { return i.indicatorNameSw; }).join(', ') });
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, saved, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/modules/settings/service/service.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]],
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/modules/settings/service/service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/modules/settings/settings.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  image=\"cogs\"\n  [title]=\"title\"\n  [hideAdd]=\"true\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n    <nav mat-tab-nav-bar>\n      <a mat-tab-link\n         *ngFor=\"let link of navLinks\"\n         [routerLink]=\"link.link\"\n         (click)=\"title = link.label\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rla.isActive\">\n        {{link.label}}\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/settings/settings.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/settings/settings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/modules/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/modules/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/superset/superset.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/superset/superset.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  title=\"Superset Analytics\"\n  image=\"line-chart\"\n  [viewDetails]=\"false\"\n  [hideAdd]=\"true\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n<p>Apache Superset (incubating) is a modern, enterprise-ready business intelligence web application.</p>\n<ul>\n<li>A rich set of data visualizations</li>\n<li>An easy-to-use interface for exploring and visualizing data</li>\n<li>Create and share dashboards</li>\n<li>Enterprise-ready authentication with integration with major authentication providers (database, OpenID, LDAP, OAuth & REMOTE_USER through Flask AppBuilder)</li>\n<li>An extensible, high-granularity security/permission model allowing intricate rules on who can access individual features and the dataset</li>\n<li>A simple semantic layer, allowing users to control how data sources are displayed in the UI by defining which fields should show up in which drop-down \nand which aggregation and function metrics are made available to the user</li>\n<li>Integration with most SQL-speaking RDBMS through SQLAlchemy</li>\n<li>Deep integration with Druid.io</li>\n</ul>\n\n<p><u>Check the next tab to use Superset</u></p>\n\n  </ng-container>\n</app-table-form>"

/***/ }),

/***/ "./src/app/modules/superset/superset.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/superset/superset.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zdXBlcnNldC9zdXBlcnNldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/superset/superset.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/superset/superset.component.ts ***!
  \********************************************************/
/*! exports provided: SupersetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupersetComponent", function() { return SupersetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupersetComponent = /** @class */ (function () {
    function SupersetComponent() {
    }
    SupersetComponent.prototype.ngOnInit = function () {
    };
    SupersetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-superset',
            template: __webpack_require__(/*! ./superset.component.html */ "./src/app/modules/superset/superset.component.html"),
            styles: [__webpack_require__(/*! ./superset.component.scss */ "./src/app/modules/superset/superset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupersetComponent);
    return SupersetComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/add-member/add-member.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/users/add-member/add-member.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"teamMemberForm\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <!--<div *ngIf=\"showNewPersonForm\" class=\"bordered-form\">-->\n      <div class=\"bordered-form\">\n        <div class=\"form-group\">\n          <label>Given Name <span class=\"important-field\">*</span></label>\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"first_name\" formControlName=\"firstName\"\n                 placeholder=\"Given Name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"familyName\">Family Name <span class=\"important-field\">*</span></label>\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"familyName\" formControlName=\"familyName\"\n                 placeholder=\"Family Name \">\n        </div>\n        <div class=\"form-group\">\n          <label>Gender</label>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\"\n                         value=\"M\">\n                  Male\n                </label>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\"\n                         value=\"F\">\n                  Female\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Age</label>\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"age\" formControlName=\"age\"\n                 placeholder=\"Age\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"bordered-form\">\n        <!-- User Name-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> User Name</mat-label>\n            <input\n              formControlName=\"username\"\n              matInput\n              required\n              placeholder=\"User Name\">\n            <mat-error *ngIf=\"teamMemberForm.get('username').invalid && teamMemberForm.get('username').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!-- Password-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Password</mat-label>\n            <input\n              formControlName=\"password\"\n              matInput\n              type=\"password\"\n              required>\n            <mat-error *ngIf=\"teamMemberForm.get('password').invalid && teamMemberForm.get('password').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!-- Re Password-->\n        <p class=\"clearfix\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Confirm Password</mat-label>\n            <input\n              formControlName=\"confirmPassword\"\n              matInput\n              type=\"password\"\n              required>\n            <mat-error\n              *ngIf=\"teamMemberForm.get('confirmPassword').invalid && teamMemberForm.get('confirmPassword').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n      </div>\n    </div>\n  </div>\n  <br/>\n  <div class=\"row mb-3\">\n    <div class=\"col-md-12\">\n      <div class=\"bordered-form\">\n        <!--  User Roles-->\n        <p class=\"clearfix\" *ngIf=\"roles\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Role</mat-label>\n            <mat-select multiple formControlName=\"roles\" placeholder=\"Role\">\n              <mat-option *ngFor=\"let item of roles\" [value]=\"item.uuid\">\n                {{ item.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"!teamMemberForm.get('roles').valid && teamMemberForm.get('roles').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <!--  Team Roles-->\n        <p class=\"clearfix\" *ngIf=\"teamRoles\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label> Team Roles</mat-label>\n            <mat-select formControlName=\"teamRole\" placeholder=\"Team Roles\">\n              <mat-option *ngFor=\"let item of teamRoles\" [value]=\"item.uuid\">\n                {{ item.name }}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"!teamMemberForm.get('teamRole').valid && teamMemberForm.get('teamRole').touched\">\n              This field is required\n            </mat-error>\n          </mat-form-field>\n        </p>\n\n        <p class=\"clearfix\">\n          <app-chw-locations\n            (onOrgUnitChange)=\"changeOrgUnit($event)\"\n            [orgunit_tree_config]=\"orgunit_tree_config\"\n          ></app-chw-locations>\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-12\">\n    <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"loading\"></app-loader>\n    <app-save-area\n      *ngIf=\"!loading\"\n      @fadeIn\n      [saveDisabled]=\"teamMemberForm.invalid || loading\"\n      (save)=\"save()\"\n      (cancel)=\"closeForm()\"\n      [confirmFirst]=\"true\"\n      [confirmText]=\"'Confirm Saving Information?'\"\n    ></app-save-area>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/users/add-member/add-member.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/users/add-member/add-member.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi91c2Vycy9hZGQtbWVtYmVyL2FkZC1tZW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/users/add-member/add-member.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/add-member/add-member.component.ts ***!
  \******************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");







var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(formBuilder, userService, teamService, http) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.teamService = teamService;
        this.http = http;
        this.orgunit = null;
        this.orgunitnames = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            familyName: [''],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: [''],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            roles: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AddMemberComponent.prototype, "roles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddMemberComponent.prototype, "team", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AddMemberComponent.prototype, "teamRoles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddMemberComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddMemberComponent.prototype, "saved", void 0);
    AddMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-member',
            template: __webpack_require__(/*! ./add-member.component.html */ "./src/app/modules/users/add-member/add-member.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]],
            styles: [__webpack_require__(/*! ./add-member.component.scss */ "./src/app/modules/users/add-member/add-member.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_6__["HttpClientService"]])
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/add-team/add-team.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/add-team/add-team.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <p class=\"clearfix\">\n    <!--  Identifier-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Team Identifier</mat-label>\n      <input\n        [(ngModel)]=\"teamIdentifier\"\n        matInput\n        required\n        placeholder=\"Team Identifier\">\n    </mat-form-field>\n  </p>\n  <!--         Swahili Name-->\n  <p class=\"clearfix\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label> Team Name</mat-label>\n      <input\n        [(ngModel)]=\"teamName\"\n        matInput\n        required\n        placeholder=\"Team Name\">\n    </mat-form-field>\n  </p>\n  <p class=\"clearfix\">\n    <app-org-unit-filter\n      (onOrgUnitChange)=\"changeOrgUnit($event)\"\n      [current_orgunits]=\"current_orgunits\"\n      [orgunit_tree_config]=\"orgunit_tree_config\">\n    </app-org-unit-filter>\n  </p>\n\n  <div class=\"col-sm-12\">\n    <app-loader message=\"Saving Team Information Please Wait..\" *ngIf=\"loading\"></app-loader>\n    <app-save-area\n      *ngIf=\"!loading\"\n      @fadeIn\n      [saveDisabled]=\"!teamName || !teamIdentifier || !orgunit\"\n      (save)=\"save()\"\n      (cancel)=\"closeForm()\"\n      [confirmFirst]=\"true\"\n      [confirmText]=\"'Confirm Saving Information?'\"\n    ></app-save-area>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/users/add-team/add-team.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/add-team/add-team.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi91c2Vycy9hZGQtdGVhbS9hZGQtdGVhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/users/add-team/add-team.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/users/add-team/add-team.component.ts ***!
  \**************************************************************/
/*! exports provided: AddTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return AddTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/router-animation */ "./src/app/shared/animations/router-animation.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");





var AddTeamComponent = /** @class */ (function () {
    function AddTeamComponent(teamService, http) {
        this.teamService = teamService;
        this.http = http;
        this.orgunit = null;
        this.orgunitnames = '';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTeamComponent.prototype, "team", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTeamComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTeamComponent.prototype, "saved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTeamComponent.prototype, "orgunit_tree_config", void 0);
    AddTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-team',
            template: __webpack_require__(/*! ./add-team.component.html */ "./src/app/modules/users/add-team/add-team.component.html"),
            animations: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]],
            styles: [__webpack_require__(/*! ./add-team.component.scss */ "./src/app/modules/users/add-team/add-team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"]])
    ], AddTeamComponent);
    return AddTeamComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/team-info/team-info.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/team-info/team-info.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <mat-list *ngIf=\"team\">\n    <mat-list-item>\n      <p>Name:\n        <b>{{team.teamName}}</b>\n      </p>\n    </mat-list-item>\n    <mat-list-item>\n      <p>Supervisor:\n        <b>{{team.supervisor}}</b>\n      </p>\n    </mat-list-item>\n    <mat-list-item>\n      <p>Location:\n        <b>{{team.locationName}}</b>\n      </p>\n    </mat-list-item>\n  </mat-list>\n\n  <div class=\"col-sm-12\">\n    <h5>Members</h5>\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns && team.teamMembers\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"false\"\n      [tableList]=\"members\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n    ></app-main-data-table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/users/team-info/team-info.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/users/team-info/team-info.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi91c2Vycy90ZWFtLWluZm8vdGVhbS1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/users/team-info/team-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/users/team-info/team-info.component.ts ***!
  \****************************************************************/
/*! exports provided: TeamInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamInfoComponent", function() { return TeamInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _update_member_update_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update-member/update-member.component */ "./src/app/modules/users/update-member/update-member.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");







var TeamInfoComponent = /** @class */ (function () {
    function TeamInfoComponent(teamService, http, dialog, userService) {
        this.teamService = teamService;
        this.http = http;
        this.dialog = dialog;
        this.userService = userService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, member, { id: member.uuid, gender: member.person ? member.person.gender : '', age: member.person ? member.person.age : '', teamRole: member.teamRole ? member.teamRole.display : '', locationNames: member.locations && member.locations.length > 0
                        ? member.locations.map(function (location) { return location.display; }).join(', ')
                        : '' });
            });
        }
    };
    TeamInfoComponent.prototype.onUpdate = function (event) {
        var dialogRef = this.dialog.open(_update_member_update_member_component__WEBPACK_IMPORTED_MODULE_5__["UpdateMemberComponent"], {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamInfoComponent.prototype, "team", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TeamInfoComponent.prototype, "teamRoles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamInfoComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TeamInfoComponent.prototype, "saved", void 0);
    TeamInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-info',
            template: __webpack_require__(/*! ./team-info.component.html */ "./src/app/modules/users/team-info/team-info.component.html"),
            styles: [__webpack_require__(/*! ./team-info.component.scss */ "./src/app/modules/users/team-info/team-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"],
            _services_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], TeamInfoComponent);
    return TeamInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/update-member/update-member.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/users/update-member/update-member.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form [formGroup]=\"teamMemberForm\">-->\n\n<!--  <div class=\"row\">-->\n<!--    <div class=\"col-md-6\">-->\n<!--      &lt;!&ndash;<div *ngIf=\"showNewPersonForm\" class=\"bordered-form\">&ndash;&gt;-->\n<!--      <div class=\"bordered-form\">-->\n<!--        <div class=\"form-group\">-->\n<!--          <label>Given Name <span class=\"important-field\">*</span></label>-->\n<!--          <input type=\"text\" class=\"form-control form-control-sm\" id=\"first_name\" formControlName=\"firstName\"-->\n<!--                 placeholder=\"Given Name\">-->\n<!--        </div>-->\n<!--        <div class=\"form-group\">-->\n<!--          <label for=\"familyName\">Family Name <span class=\"important-field\">*</span></label>-->\n<!--          <input type=\"text\" class=\"form-control form-control-sm\" id=\"familyName\" formControlName=\"familyName\"-->\n<!--                 placeholder=\"Family Name \">-->\n<!--        </div>-->\n<!--        <div class=\"form-group\">-->\n<!--          <label>Gender</label>-->\n<!--          <div class=\"row\">-->\n<!--            <div class=\"col-md-6\">-->\n<!--              <div class=\"form-check\">-->\n<!--                <label class=\"form-check-label\">-->\n<!--                  <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\"-->\n<!--                         value=\"M\">-->\n<!--                  Male-->\n<!--                </label>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--            <div class=\"col-md-6\">-->\n<!--              <div class=\"form-check\">-->\n<!--                <label class=\"form-check-label\">-->\n<!--                  <input class=\"form-check-input\" formControlName=\"gender\" type=\"radio\"-->\n<!--                         value=\"F\">-->\n<!--                  Female-->\n<!--                </label>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--        </div>-->\n<!--        <div class=\"form-group\">-->\n<!--          <label>Age</label>-->\n<!--          <input type=\"text\" class=\"form-control form-control-sm\" id=\"age\" formControlName=\"age\"-->\n<!--                 placeholder=\"Age\">-->\n<!--        </div>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--    <div class=\"col-md-6\">-->\n<!--      <div class=\"bordered-form\">-->\n<!--        &lt;!&ndash; User Name&ndash;&gt;-->\n<!--        <p class=\"clearfix\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> User Name</mat-label>-->\n<!--            <input-->\n<!--              formControlName=\"username\"-->\n<!--              matInput-->\n<!--              required-->\n<!--              placeholder=\"User Name\">-->\n<!--            <mat-error *ngIf=\"teamMemberForm.get('username').invalid && teamMemberForm.get('username').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--        &lt;!&ndash; Password&ndash;&gt;-->\n<!--        <p class=\"clearfix\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> Password</mat-label>-->\n<!--            <input-->\n<!--              formControlName=\"password\"-->\n<!--              matInput-->\n<!--              type=\"password\"-->\n<!--              required>-->\n<!--            <mat-error *ngIf=\"teamMemberForm.get('password').invalid && teamMemberForm.get('password').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--        &lt;!&ndash; Re Password&ndash;&gt;-->\n<!--        <p class=\"clearfix\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> Confirm Password</mat-label>-->\n<!--            <input-->\n<!--              formControlName=\"confirmPassword\"-->\n<!--              matInput-->\n<!--              type=\"password\"-->\n<!--              required>-->\n<!--            <mat-error-->\n<!--              *ngIf=\"teamMemberForm.get('confirmPassword').invalid && teamMemberForm.get('confirmPassword').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n<!--  <br/>-->\n<!--  <div class=\"row mb-3\">-->\n<!--    <div class=\"col-md-12\">-->\n<!--      <div class=\"bordered-form\">-->\n<!--        &lt;!&ndash;  User Roles&ndash;&gt;-->\n<!--        <p class=\"clearfix\" *ngIf=\"roles\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> Role</mat-label>-->\n<!--            <mat-select multiple formControlName=\"roles\" placeholder=\"Role\">-->\n<!--              <mat-option *ngFor=\"let item of roles\" [value]=\"item.uuid\">-->\n<!--                {{ item.name }}-->\n<!--              </mat-option>-->\n<!--            </mat-select>-->\n<!--            <mat-error *ngIf=\"!teamMemberForm.get('roles').valid && teamMemberForm.get('roles').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--        &lt;!&ndash;  Team Roles&ndash;&gt;-->\n<!--        <p class=\"clearfix\" *ngIf=\"teamRoles\">-->\n<!--          <mat-form-field appearance=\"outline\">-->\n<!--            <mat-label> Team Roles</mat-label>-->\n<!--            <mat-select formControlName=\"teamRole\" placeholder=\"Team Roles\">-->\n<!--              <mat-option *ngFor=\"let item of teamRoles\" [value]=\"item.uuid\">-->\n<!--                {{ item.name }}-->\n<!--              </mat-option>-->\n<!--            </mat-select>-->\n<!--            <mat-error *ngIf=\"!teamMemberForm.get('teamRole').valid && teamMemberForm.get('teamRole').touched\">-->\n<!--              This field is required-->\n<!--            </mat-error>-->\n<!--          </mat-form-field>-->\n<!--        </p>-->\n\n<!--        <p class=\"clearfix\">-->\n<!--          <app-chw-locations-->\n<!--            (onOrgUnitChange)=\"changeOrgUnit($event)\"-->\n<!--            [orgunit_tree_config]=\"orgunit_tree_config\"-->\n<!--          ></app-chw-locations>-->\n<!--        </p>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n\n<!--  <div class=\"col-sm-12\">-->\n<!--    <app-loader message=\"Saving Information Please Wait..\" *ngIf=\"loading\"></app-loader>-->\n<!--    <app-save-area-->\n<!--      *ngIf=\"!loading\"-->\n<!--      @fadeIn-->\n<!--      [saveDisabled]=\"teamMemberForm.invalid || loading\"-->\n<!--      (save)=\"save()\"-->\n<!--      (cancel)=\"closeForm()\"-->\n<!--      [confirmFirst]=\"true\"-->\n<!--      [confirmText]=\"'Confirm Saving Information?'\"-->\n<!--    ></app-save-area>-->\n<!--  </div>-->\n<!--</form>-->\n"

/***/ }),

/***/ "./src/app/modules/users/update-member/update-member.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/users/update-member/update-member.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi91c2Vycy91cGRhdGUtbWVtYmVyL3VwZGF0ZS1tZW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/users/update-member/update-member.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/users/update-member/update-member.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMemberComponent", function() { return UpdateMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/http-client.service */ "./src/app/services/http-client.service.ts");






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
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            familyName: [''],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
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
    UpdateMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-member',
            template: __webpack_require__(/*! ./update-member.component.html */ "./src/app/modules/users/update-member/update-member.component.html"),
            styles: [__webpack_require__(/*! ./update-member.component.scss */ "./src/app/modules/users/update-member/update-member.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_http_client_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"]])
    ], UpdateMemberComponent);
    return UpdateMemberComponent;
}());



/***/ }),

/***/ "./src/app/modules/users/users.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/users/users.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table-form\n  image=\"pie-chart\"\n  title=\"Indicators\"\n  [hideAdd]=\"false\"\n  [viewDetails]=\"viewDetails\"\n  [animationSize]=\"animationSize\"\n  [smallForm]=\"smallForm\"\n  (addItem)=\"add()\"\n  (close)=\"closeForm()\"\n  [formTitle]=\"formTitle\"\n  [showTopBanner]=\"false\"\n>\n\n  <ng-container ngProjectAs=\"table\">\n\n    <app-main-data-table\n      *ngIf=\"tableConfigurations.tableColumns\"\n      [tableConfigurations]=\"tableConfigurations\"\n      [loading]=\"loading\"\n      [loadingMessage]=\"loadingMessage\"\n      [tableList]=\"teams\"\n      (rowPreview)=\"viewMore($event)\"\n      (rowUpdate)=\"onUpdate($event)\"\n      (rowDelete)=\"onDelete($event)\"\n      (rowCustomPrimary)=\"addMember($event)\"\n    ></app-main-data-table>\n  </ng-container>\n  <ng-container ngProjectAs=\"form\">\n    <app-add-team\n      (close)=\"closeForm()\"\n      [team]=\"currentTeam\"\n      *ngIf=\"view_data == 'addData'\"\n    ></app-add-team>\n    <app-team-info\n      [teamRoles]=\"teamRoles\"\n      [team]=\"currentTeam\"\n      (saved)=\"prepareTeamWithMembers()\"\n      (close)=\"closeForm()\"\n      *ngIf=\"view_data == 'moreDetails'\"\n    ></app-team-info>\n    <app-add-member\n      [roles]=\"roles\"\n      (close)=\"closeForm()\"\n      (saved)=\"prepareTeamWithMembers()\"\n      [teamRoles]=\"teamRoles\"\n      [team]=\"currentTeam\"\n      *ngIf=\"view_data == 'addMember'\"\n    ></app-add-member>\n  </ng-container>\n</app-table-form>\n"

/***/ }),

/***/ "./src/app/modules/users/users.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/users/users.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/users/users.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/users/users.component.ts ***!
  \**************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");





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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var roles;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        this.tableConfigurations = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.tableConfigurations, { tableColumns: [
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
        this.tableConfigurations = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.tableConfigurations, { tableColumns: [
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
        this.tableConfigurations = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.tableConfigurations, { tableColumns: [
                { name: 'teamIdentifier', label: 'Identifier' },
                { name: 'teamName', label: 'Name' },
                { name: 'supervisor', label: 'Supervisor' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ] });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/modules/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/modules/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/excel-download.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/excel-download.service.ts ***!
  \****************************************************/
/*! exports provided: ExcelDownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelDownloadService", function() { return ExcelDownloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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
    ExcelDownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcelDownloadService);
    return ExcelDownloadService;
}());



/***/ }),

/***/ "./src/app/services/http-client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/http-client.service.ts ***!
  \*************************************************/
/*! exports provided: HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




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
    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




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
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/org-unit.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/org-unit.service.ts ***!
  \**********************************************/
/*! exports provided: OrgUnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgUnitService", function() { return OrgUnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client.service */ "./src/app/services/http-client.service.ts");



var OrgUnitService = /** @class */ (function () {
    function OrgUnitService(http) {
        this.http = http;
        this.nodes = null;
        this.visit_locations = null;
    }
    OrgUnitService.prototype.getLevel4OrgunitsIds = function (orgunits, uuid) {
        console.log("org units passed are", { orgunits: orgunits });
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
    OrgUnitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], OrgUnitService);
    return OrgUnitService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




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
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/team.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-client.service */ "./src/app/services/http-client.service.ts");




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
    TeamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client.service */ "./src/app/services/http-client.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
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
                "newPassword": "" + loginCredentials.newpassword + "",
            };
            _this.http.postOpenMRS("password", payload)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'password changed successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'password change  failed';
                observer.error('some error occur');
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
                observer.error('some error occur');
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
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/animations/animations.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/animations/animations.service.ts ***!
  \*********************************************************/
/*! exports provided: AnimationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return AnimationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    AnimationsService = AnimationsService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimationsService);
    return AnimationsService;
}());



/***/ }),

/***/ "./src/app/shared/animations/router-animation.ts":
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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations.service */ "./src/app/shared/animations/animations.service.ts");


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

/***/ "./src/app/shared/components/chw-locations/chw-locations.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/chw-locations/chw-locations.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-input\" appClickOutside (clickOutside)=\"showOrgTree = true\">\n  <div class=\"show_items\" (click)=\"displayOrgTree()\">\n              <span *ngIf=\"!orgunit_tree_config.loading\">\n                  {{  getProperPreOrgunitName() }}\n              </span>\n    <span *ngIf=\"orgunit_model.selected_orgunits.length > 3 && orgunit_model.selected_user_orgunit.length == 0\">\n                <span class=\"selected-item\">\n                  {{ orgunit_model.selected_orgunits[0].name }}\n                  <a (click)=\"deActivateNode(orgunit_model.selected_orgunits[0].id,orgtree,$event)\" class=\"removeorgunit\" >x</a>\n                </span>\n                <span class=\"selected-item\">\n                  {{ orgunit_model.selected_orgunits[1].name }}\n                  <a (click)=\"deActivateNode(orgunit_model.selected_orgunits[1].id,orgtree,$event)\" class=\"removeorgunit\">x</a>\n                </span>\n                <span class=\"selected-item\">\n                  &nbsp; and {{ orgunit_model.selected_orgunits.length - 2 }} more\n                </span>\n              </span>\n    <span *ngIf=\"orgunit_model.selected_orgunits.length <= 3 && orgunit_model.selected_user_orgunit.length == 0\">\n                 <span *ngFor=\"let item of orgunit_model.selected_orgunits\" class=\"selected-item ng-binding ng-scope\">\n                  {{ item.name }}\n                   <a (click)=\"deActivateNode(item.id,orgtree,$event)\" class=\"removeorgunit\">x</a>\n                </span>\n              </span>\n    <span class=\"no-selection\" *ngIf=\"orgunit_model.selected_orgunits.length == 0 && !orgunit_tree_config.loading && orgunit_model.selected_user_orgunit.length == 0\">\n          {{ orgunit_tree_config.placeholder }}\n        </span>\n\n    <i class=\"fa fa-caret-down pull-right\"></i>\n    <span  *ngIf=\"orgunit_model.selected_orgunits.length > 3\" class=\"pull-right\">\n            <span class=\"selected-item\" style=\"cursor: pointer\" (click)=\"clearAll()\" style=\"opacity: 0.7\" >X clear all</span>\n          </span>\n    <span *ngIf=\"orgunit_tree_config.loading\">{{ orgunit_tree_config.loading_message }}</span>\n  </div>\n  <div class=\"tree-view\" [ngClass]=\"{'hiddenTree':showOrgTree}\" id=\"tree_view\">\n    <div class=\"container-fluid\">\n      <div *ngIf=\"orgunit_tree_config.loading\">{{ orgunit_tree_config.loading_message }}</div>\n      <div class=\"tree-area\" [ngClass]=\"{'someclass': orgunit_model.selected_user_orgunit.length != 0}\">\n        <!--          <tree-root [nodes]=\"nodes\"-->\n        <!--                     #orgtree-->\n        <!--                     (toggleExpanded)=\"onEvent($event)\"-->\n        <!--                     (activate)=\"activateOrg($event)\"-->\n        <!--                     (focus)=\"onEvent($event)\"-->\n        <!--                     (blur)=\"onEvent($event)\">-->\n        <!--          </tree-root>-->\n        <tree-root\n          #orgtree\n          [nodes]=\"organisationunits\"\n          [focused]=\"true\"\n          (activate)=\"activateOrg($event)\"\n          (deactivate)=\"deactivateOrg($event)\"\n        >\n          <ng-template #treeNodeTemplate let-node>\n            <span (click)=\"updateModelOnSelect(node.data)\" style=\"font-size: 12px\">{{ node.data.name }}</span>\n          </ng-template>\n        </tree-root>\n      </div>\n      <div class=\"col-sm-12\" style=\"padding:0px;margin-top: 5px;border-top:1px solid rgba(0,0,0,0.3)\" *ngIf=\"showUpdate\">\n        <button class=\"btn btn-outline-secondary btn-sm pull-right cursor\" style=\"margin-top: 5px\" (click)=\"updateOrgunits()\">\n          <i class=\"fa fa-refresh\"></i>\n          <span>Update</span>\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/chw-locations/chw-locations.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/chw-locations/chw-locations.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-node-active > .node-content-wrapper {\n  background: none !important;\n  color: orange !important; }\n\n.toggle-children {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.tree-node-expanded > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg) !important;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=); }\n\n.tree-node-collapsed > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC); }\n\n.tree-node-active.tree-node-focused > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n  font-weight: bold; }\n\n.tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover {\n  box-shadow: none !important; }\n\n.show_items {\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: left;\n  cursor: pointer;\n  border: 1px solid #c6c6c6;\n  padding: 14px 8px;\n  font-size: 14px;\n  min-height: 45px !important;\n  border-radius: 7px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: rgba(45, 105, 165, 0.1);\n  background-image: linear-gradient(rgba(45, 105, 165, 0.1), rgba(45, 105, 165, 0.2));\n  width: 100%;\n  height: 45px; }\n\n.show_items span,\n.show_items small {\n  cursor: pointer; }\n\n.show_tops {\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  /*cursor: pointer;*/\n  border: 1px solid #c6c6c6;\n  /*padding: 8px 8px;*/\n  font-size: 14px;\n  min-height: 38px !important;\n  border-radius: 4px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: #fff;\n  background-image: linear-gradient(#fff, #f7f7f7);\n  width: 7%;\n  height: 34px; }\n\n.arrows:hover {\n  transform: scale(1.001, 1.001);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.tree-view {\n  text-align: left;\n  background-color: #d7e3f7;\n  position: absolute;\n  z-index: 9999;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  min-width: 370px;\n  margin-right: 30px;\n  max-height: 360px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 45px; }\n\n.additional-options {\n  text-align: left;\n  background-color: #fff;\n  position: absolute;\n  z-index: 999;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  min-width: 420px;\n  margin-right: 13px;\n  max-height: 400px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 38px;\n  right: 0px; }\n\n.scorecard_table {\n  margin-bottom: 3px;\n  font-size: 9px;\n  border: 1px solid #ddd;\n  border-spacing: 0;\n  border-collapse: collapse;\n  display: table; }\n\n.pointer label {\n  cursor: pointer; }\n\n.tree-area {\n  max-height: 250px;\n  min-height: 250px;\n  overflow: hidden;\n  width: 100%; }\n\n.tree-area {\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%; }\n\n.tree-area {\n  overflow: auto; }\n\n.tree-area1 {\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%; }\n\n.tree-area1:hover {\n  overflow: auto; }\n\n.hiddenTree {\n  display: none; }\n\n.tree-area::-webkit-scrollbar {\n  width: 5px; }\n\n.tree-area::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px; }\n\n.tree-area::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2); }\n\n.tree-area1::-webkit-scrollbar {\n  width: 5px; }\n\n.tree-area1::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px; }\n\n.tree-area1::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2); }\n\n.tree-view::-webkit-scrollbar {\n  width: 5px; }\n\n.tree-view::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n  border-radius: 10px; }\n\n.tree-view::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2); }\n\n.tree-view input {\n  border-radius: 2px;\n  border: 1px solid #ccc;\n  height: 26px;\n  font-size: 14px;\n  width: 100%;\n  padding-left: 7px;\n  box-sizing: border-box;\n  color: #888;\n  margin: 0 0 8px; }\n\nspan.selected-item {\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 1px;\n  padding: 3px 5px 3px 5px;\n  margin-right: 2px;\n  cursor: text;\n  font-size: 11px; }\n\n.selected-item-close {\n  width: 20px;\n  cursor: pointer;\n  font-weight: 700;\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  font-size: xx-small; }\n\n/* dhis2 Styling structure*/\n\n#tree_view .tree-node-active > .node-content-wrapper {\n  background: none !important;\n  color: orange !important; }\n\n#tree_view .toggle-children {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n#tree_view .tree-node-expanded > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg) !important;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=); }\n\n#tree_view .tree-node-collapsed > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC); }\n\n#tree_view .tree-node-active.tree-node-focused > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n  font-weight: bold; }\n\n#tree_view .tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover {\n  box-shadow: none !important; }\n\n.close-area {\n  border-top: 1px solid blanchedalmond;\n  padding-top: 5px; }\n\n@media print {\n  .no-print * {\n    display: none; }\n  .no-print {\n    display: none; }\n  .orgUnitName {\n    min-width: 130px;\n    height: 35px;\n    max-height: 35px;\n    font-size: 9px; }\n  .table-bordered td {\n    /*border-top: 0.1em;*/ }\n  .legendItem {\n    width: 200px;\n    float: left; } }\n\n/*scorecard indicator details*/\n\n.indicator_details {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  /*display: none;*/\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: opacity .15s linear;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.indicator_dialog {\n  width: 86%;\n  margin: 100px 7% auto 7%; }\n\n.indicator-content {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  outline: 0;\n  min-height: 200px;\n  padding: 10px; }\n\n.hide_no_group {\n  display: none; }\n\ntable * {\n  line-height: 80%; }\n\n.subtotal {\n  width: 90px;\n  max-width: 90px; }\n\n.indicator_title {\n  font-size: 10px;\n  width: 90px;\n  max-width: 90px;\n  overflow-wrap: break-word;\n  cursor: pointer;\n  line-height: 140%; }\n\n.list-group-item {\n  padding: 5px 15px; }\n\n.removeorgunit {\n  cursor: pointer;\n  border: 1px solid rgba(95, 158, 160, 0.1);\n  padding-left: 2px;\n  padding-right: 2px; }\n\n.someclass {\n  color: rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.node-content-wrapper-focused {\n  background-color: white !important; }\n\n.group-image {\n  height: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jaHctbG9jYXRpb25zL2Nody1sb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UscVFBQXFRO0VBQ3JRLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGtDQUFrQztFQUNsQyx5UEFBeVAsRUFBQTs7QUFHM1A7RUFDRSx1QkFBdUI7RUFDdkIscVFBQXFRLEVBQUE7O0FBR3ZRO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSwyQkFBMkIsRUFBQTs7QUFPN0I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlDQUFzQztFQUN0QyxtRkFBNEU7RUFDNUUsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDs7RUFFRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLG9CQUFBO0VBQ0EsZUFBZTtFQUNmLDJCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnREFBK0M7RUFDL0MsU0FBUztFQUNULFlBQVksRUFBQTs7QUFHZDtFQUNFLDhCQUE4QjtFQUU5Qix1Q0FBb0M7RUFDcEMscUNBQWtDLEVBQUE7O0FBR3BDO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFvQztFQUNwQyxrQkFBa0I7RUFFbEIsMkNBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFDQUFvQztFQUNwQyxrQkFBa0I7RUFFbEIsMkNBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxvREFBaUQ7RUFDakQsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsbUJBQW1CO0VBQ25CLG9EQUFpRCxFQUFBOztBQUduRDtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG9EQUFpRDtFQUNqRCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsb0RBQWlELEVBQUE7O0FBR25EO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0Usb0RBQWlEO0VBQ2pELG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixvREFBaUQsRUFBQTs7QUFHbkQ7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUdqQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBSWpCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSXJCLDJCQUFBOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLHFRQUFxUTtFQUNyUSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxrQ0FBa0M7RUFDbEMseVBBQXlQLEVBQUE7O0FBRzNQO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFRQUFxUSxFQUFBOztBQUd2UTtFQUNFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFO0lBQ0UsYUFBYSxFQUFBO0VBRWY7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQUVoQjtJQUNFLHFCQUFBLEVBQXNCO0VBRXhCO0lBQ0UsWUFBWTtJQUNaLFdBQVcsRUFBQSxFQUNaOztBQUlILDhCQUFBOztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsaUJBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLFVBQVU7RUFHViwrQkFBK0I7RUFDL0Isb0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QixFQUFBOztBQUUxQjtFQUVFLHlDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLG9DQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFVO0VBQUMsZUFBZSxFQUFBOztBQUU1QjtFQUNFLGVBQWU7RUFDZixXQUFVO0VBQ1YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQ0YsRUFBQTs7QUFFQTtFQUNFLGlCQUNGLEVBQUE7O0FBQ0E7RUFDRSxlQUFjO0VBQ2QseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSx5QkFBc0I7RUFDdEIsb0NBQWlDLEVBQUE7O0FBRW5DO0VBQ0Usa0NBQWlDLEVBQUE7O0FBR25DO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Nody1sb2NhdGlvbnMvY2h3LWxvY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlLW5vZGUtYWN0aXZlID4gLm5vZGUtY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUtY2hpbGRyZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFKQ0FJQUFBQnY4NUZIQUFBQUIzUkpUVVVIMUFnRkZ5c2ZvTVFLQXdBQUFBbHdTRmx6QUFBTEVnQUFDeElCMHQxKy9BQUFBRUZKUkVGVWVOcGpiR2hvWU1BQldJQzR2cjRlVTZLeHNaRUptYy9JeUlqTVpXTEFEVmpRZEVBWS8vLy9SOGhCT0VBSkNJT3dtU2h5eUpxZ1pnS2RpMVVmQUUxWkVoMDJLTTdPQUFBQUFFbEZUa1N1UW1DQyk7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50cmVlLW5vZGUtZXhwYW5kZWQgPiAudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXIgPiAudG9nZ2xlLWNoaWxkcmVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNUcVhKR0tBQUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQURkSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkdKQVRmQUo4Y0NvUmdaR1pGRi8vLy9qNUNEY0Vnd2s1QjlRT2RpbFFNQXJ4ME1HclhKcUM4QUFBQUFTVVZPUks1Q1lJST0pO1xuXG59XG4udHJlZS1ub2RlLWNvbGxhcHNlZCA+IC50b2dnbGUtY2hpbGRyZW4td3JhcHBlciA+IC50b2dnbGUtY2hpbGRyZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNmb01RS0F3QUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQUVGSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkVKbWMvSXlJak1aV0xBRFZqUWRFQVkvLy8vUjhoQk9FQUpDSU93bVNoeXlKcWdaZ0tkaTFVZkFFMVpFaDAyS003T0FBQUFBRWxGVGtTdVFtQ0MpO1xuXG59XG4udHJlZS1ub2RlLWFjdGl2ZS50cmVlLW5vZGUtZm9jdXNlZCA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50cmVlLW5vZGUtYWN0aXZlID4gLm5vZGUtY29udGVudC13cmFwcGVyLCAudHJlZS1ub2RlLWZvY3VzZWQgPiAubm9kZS1jb250ZW50LXdyYXBwZXIsIC5ub2RlLWNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRyZWUtaW5wdXQge1xuXG59XG5cbi5zaG93X2l0ZW1ze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgcGFkZGluZzogMTRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLWhlaWdodDogNDVweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY29sb3I6ICM1NTU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LDEwNSwxNjUsMC4xKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNDUsMTA1LDE2NSwwLjEpLHJnYmEoNDUsMTA1LDE2NSwwLjIpKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnNob3dfaXRlbXMgc3Bhbixcbi5zaG93X2l0ZW1zIHNtYWxsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hvd190b3Bze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypjdXJzb3I6IHBvaW50ZXI7Ki9cbiAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgLypwYWRkaW5nOiA4cHggOHB4OyovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLWhlaWdodDogMzhweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM1NTU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwjZjdmN2Y3KTtcbiAgd2lkdGg6IDclO1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5hcnJvd3M6aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMDEsIDEuMDAxKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcbn1cblxuLnRyZWUtdmlldyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2UzZjc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjE3NSk7XG4gIG1pbi13aWR0aDogMzcwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWF4LWhlaWdodDogMzYwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cblxuLmFkZGl0aW9uYWwtb3B0aW9ucyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbiAgbWluLXdpZHRoOiA0MjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW4tdG9wOiAzOHB4O1xuICByaWdodDogMHB4O1xufVxuXG4uc2NvcmVjYXJkX3RhYmxle1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5wb2ludGVyIGxhYmVse1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmVlLWFyZWF7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udHJlZS1hcmVhe1xuICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udHJlZS1hcmVhe1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRyZWUtYXJlYTF7XG4gIG1heC1oZWlnaHQ6IDIxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi50cmVlLWFyZWExOmhvdmVye1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5oaWRkZW5UcmVle1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJlZS1hcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi50cmVlLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRyZWUtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4udHJlZS1hcmVhMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4udHJlZS1hcmVhMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udHJlZS1hcmVhMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4udHJlZS12aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi50cmVlLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRyZWUtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4udHJlZS12aWV3IGlucHV0e1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luOiAwIDAgOHB4O1xufVxuc3Bhbi5zZWxlY3RlZC1pdGVtIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIHBhZGRpbmc6IDNweCA1cHggM3B4IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGN1cnNvcjogdGV4dDtcbiAgZm9udC1zaXplOiAxMXB4O1xuXG59XG5cbi5zZWxlY3RlZC1pdGVtLWNsb3NlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcbn1cblxuXG4vKiBkaGlzMiBTdHlsaW5nIHN0cnVjdHVyZSovXG4jdHJlZV92aWV3IC50cmVlLW5vZGUtYWN0aXZlID4gLm5vZGUtY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbiN0cmVlX3ZpZXcgLnRvZ2dsZS1jaGlsZHJlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQUlBQUFCdjg1RkhBQUFBQjNSSlRVVUgxQWdGRnlzZm9NUUtBd0FBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFFRkpSRUZVZU5wamJHaG9ZTUFCV0lDNHZyNGVVNkt4c1pFSm1jL0l5SWpNWldMQURWalFkRUFZLy8vL1I4aEJPRUFKQ0lPd21TaHl5SnFnWmdLZGkxVWZBRTFaRWgwMktNN09BQUFBQUVsRlRrU3VRbUNDKTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI3RyZWVfdmlldyAudHJlZS1ub2RlLWV4cGFuZGVkID4gLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyID4gLnRvZ2dsZS1jaGlsZHJlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQUlBQUFCdjg1RkhBQUFBQjNSSlRVVUgxQWdGRnlzVHFYSkdLQUFBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFEZEpSRUZVZU5wamJHaG9ZTUFCV0lDNHZyNGVVNkt4c1pHSkFUZkFKOGNDb1JnWkdaRkYvLy8vajVDRGNFZ3drNUI5UU9kaWxRTUFyeDBNR3JYSnFDOEFBQUFBU1VWT1JLNUNZSUk9KTtcblxufVxuI3RyZWVfdmlldyAudHJlZS1ub2RlLWNvbGxhcHNlZCA+IC50b2dnbGUtY2hpbGRyZW4td3JhcHBlciA+IC50b2dnbGUtY2hpbGRyZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNmb01RS0F3QUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQUVGSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkVKbWMvSXlJak1aV0xBRFZqUWRFQVkvLy8vUjhoQk9FQUpDSU93bVNoeXlKcWdaZ0tkaTFVZkFFMVpFaDAyS003T0FBQUFBRWxGVGtTdVFtQ0MpO1xuXG59XG4jdHJlZV92aWV3IC50cmVlLW5vZGUtYWN0aXZlLnRyZWUtbm9kZS1mb2N1c2VkID4gLm5vZGUtY29udGVudC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3RyZWVfdmlldyAudHJlZS1ub2RlLWFjdGl2ZSA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciwgLnRyZWUtbm9kZS1mb2N1c2VkID4gLm5vZGUtY29udGVudC13cmFwcGVyLCAubm9kZS1jb250ZW50LXdyYXBwZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9zZS1hcmVhe1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cblxuQG1lZGlhIHByaW50IHtcbiAgLm5vLXByaW50ICp7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubm8tcHJpbnR7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5vcmdVbml0TmFtZXtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG4gIC50YWJsZS1ib3JkZXJlZCB0ZHtcbiAgICAvKmJvcmRlci10b3A6IDAuMWVtOyovXG4gIH1cbiAgLmxlZ2VuZEl0ZW17XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbn1cblxuLypzY29yZWNhcmQgaW5kaWNhdG9yIGRldGFpbHMqL1xuLmluZGljYXRvcl9kZXRhaWxze1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA1MDtcbiAgLypkaXNwbGF5OiBub25lOyovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcbn1cblxuLmluZGljYXRvcl9kaWFsb2d7XG4gIHdpZHRoOiA4NiU7XG4gIG1hcmdpbjogMTAwcHggNyUgYXV0byA3JTtcbn1cbi5pbmRpY2F0b3ItY29udGVudCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLC41KTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLC41KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG91dGxpbmU6IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaGlkZV9ub19ncm91cHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUgKiB7XG4gIGxpbmUtaGVpZ2h0OiA4MCU7XG59XG5cbi5zdWJ0b3RhbHtcbiAgd2lkdGg6OTBweDttYXgtd2lkdGg6IDkwcHg7XG59XG4uaW5kaWNhdG9yX3RpdGxle1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOjkwcHg7XG4gIG1heC13aWR0aDogOTBweDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMTQwJVxufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuICBwYWRkaW5nOiA1cHggMTVweFxufVxuLnJlbW92ZW9yZ3VuaXR7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk1LCAxNTgsIDE2MCwgMC4xKTtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbn1cbi5zb21lY2xhc3N7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbn1cbi5ub2RlLWNvbnRlbnQtd3JhcHBlci1mb2N1c2Vke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG59XG5cbi5ncm91cC1pbWFnZXtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/chw-locations/chw-locations.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/chw-locations/chw-locations.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChwLocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChwLocationsComponent", function() { return ChwLocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






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
        this.onOrgUnitUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOrgUnitChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOrgUnitModelUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
                        dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_EXPANDED,
                        click: function (node, tree, $event) { return angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event); }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
            else if (this.orgunit_tree_config.multiple_key === 'control') { // multselect using control key
                var actionMapping = {
                    mouse: {
                        click: function (node, tree, $event) {
                            $event.ctrlKey
                                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event);
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
                                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event);
                        }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
        }
        else {
            var actionMapping = {
                mouse: {
                    dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_EXPANDED,
                    click: function (node, tree, $event) { return angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event); }
                }
            };
            this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
        }
        if (this.orgunitService.nodes === null) {
            this.locationService.loadTreeLocations().subscribe((function (locations) {
                // get top level locations
                var top_locations = locations;
                // filter down to remain with only visit facilities
                var visit_location = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](top_locations, { uuid: 'fd51b7a6-d770-11e8-ba9c-f23c917bb7ec' });
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
        return lodash__WEBPACK_IMPORTED_MODULE_5__["find"](orgunits, { uuid: uuid });
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChwLocationsComponent.prototype, "orgunit_model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChwLocationsComponent.prototype, "orgunit_tree_config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChwLocationsComponent.prototype, "showUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChwLocationsComponent.prototype, "pickChildren", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChwLocationsComponent.prototype, "onOrgUnitUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChwLocationsComponent.prototype, "onOrgUnitChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChwLocationsComponent.prototype, "onOrgUnitModelUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orgtree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TreeComponent"])
    ], ChwLocationsComponent.prototype, "orgtree", void 0);
    ChwLocationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chw-locations',
            template: __webpack_require__(/*! ./chw-locations.component.html */ "./src/app/shared/components/chw-locations/chw-locations.component.html"),
            styles: [__webpack_require__(/*! ./chw-locations.component.scss */ "./src/app/shared/components/chw-locations/chw-locations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_org_unit_service__WEBPACK_IMPORTED_MODULE_4__["OrgUnitService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]])
    ], ChwLocationsComponent);
    return ChwLocationsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n<h5>{{ message || \"Updating Information...\" }}</h5>\n"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoaderComponent.prototype, "message", void 0);
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/components/loader/loader.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/components/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/main-data-table/main-data-table.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/main-data-table/main-data-table.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-cover\">\n  <div class=\"top-area\">\n    <div class=\"search-area\">\n      <mat-form-field *ngIf=\"tableConfigurations.showSearch\">\n        <mat-label>\n          <mat-icon>search</mat-icon>\n          Search\n        </mat-label>\n        <!--<input matInput [(ngModel)]=\"searchQuery\" placeholder=\"Search\">-->\n        <input autocomplete=\"off\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n      </mat-form-field>\n    </div>\n    <div class=\"excel-button\">\n      <button mat-raised-button (click)=\"downloadToCsv()\" *ngIf=\"!tableConfigurations.hideExport\">\n        <i style=\"margin-bottom: 5px; color: green\" class=\"fa fa-file-excel-o\"></i>\n        Export\n      </button>\n    </div>\n  </div>\n\n  <app-loader @fadeIn *ngIf=\"loading\"\n                  message=\"{{ loadingMessage || 'Getting Data Please Wait...' }}\"></app-loader>\n\n  <table\n    [ngClass]=\"{'table-bordered': tableConfigurations.showBorder}\"\n    mat-table\n    [trackBy]=\"trackByFn\"\n    [dataSource]=\"dataSource\"\n    matSort class=\"mat-elevation-z2\"\n    *ngIf=\"tableList.length != 0; else noData\"\n  >\n    <!-- Number Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> No</th>\n      <td mat-cell *matCellDef=\"let element;let i = index;\" [ngClass]=\"{'active': tableConfigurations.active[element?.id]}\"> {{ i + 1 }}</td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container *ngFor=\"let column of tableConfigurations.tableColumns\" matColumnDef=\"{{ column.name }}\" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header > {{ column.label }}</th>\n      <td mat-cell *matCellDef=\"let element\"  [ngClass]=\"{'active': tableConfigurations.active[element?.id]}\" >\n        <span *ngIf=\"column.type == 'number'\">\n            {{ element[column?.name] | number }}\n          </span>\n        <span *ngIf=\"column.type == 'date'\">\n            {{ element[column?.name] | date:'mediumDate' }}\n        </span>\n        <span *ngIf=\"column.type == 'boolean'\">\n          <mat-icon *ngIf=\"element[column?.name]\" fontSet=\"fa\" fontIcon=\"fa-check\"></mat-icon>\n<!--          {{ element[column?.name] }}-->\n        </span>\n        <span *ngIf=\"column.type != 'date' && column.type != 'number' && column.type != 'boolean'\">\n            {{ element[column?.name] }}\n          </span>\n      </td>\n    </ng-container>\n\n    <!--Action Icons-->\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let tableListItem\" [ngClass]=\"{'active': tableConfigurations.active[tableListItem?.id]}\">\n        <div class=\"float-right\" role=\"group\" aria-label=\"Basic example\"\n             *ngIf=\"tableConfigurations.actionIcons.edit || tableConfigurations.actionIcons.print || tableConfigurations.actionIcons.delete || tableConfigurations.actionIcons.more || tableConfigurations.actionIcons.cancel || tableConfigurations.actionIcons.download || tableConfigurations.actionIcons.customPrimary || actionButtons.length > 0 \">\n\n          <a\n            class=\"btn btn-sm btn-primary action-button mr-1 btn-float cursor text-white\"\n            title=\"{{tableConfigurations.customPrimaryMessage}}\"\n            style=\"border-radius: 5px!important;\"\n            (click)=\"customPrimaryItem(tableListItem)\"\n            *ngIf=\"tableConfigurations?.actionIcons?.customPrimary && !showDelete[tableListItem?.id] && (tableListItem | showButton:'customPrimary')\">\n            {{tableConfigurations.customPrimaryMessage}}\n          </a>\n          <a @fadeIn class=\"cursor text-primary action-button mr-1 btn-float\" title=\"print\"\n             (click)=\"printItem(tableListItem)\"\n             style=\"border-radius: 50%\"\n             *ngIf=\"tableConfigurations?.actionIcons?.print && !showDelete[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-print\"></mat-icon>\n<!--            <i class=\"fa fa-print\"></i>-->\n          </a>\n          <a @fadeIn class=\"btn btn-sm btn-light action-button mr-1 btn-float\" title=\"view details\"\n             (click)=\"viewItemDetails(tableListItem)\"\n             style=\"border-radius: 50%\"\n             *ngIf=\"tableConfigurations?.actionIcons?.more && !showDelete[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-list\"></mat-icon>\n<!--            <i class=\"fa fa-list\"></i>-->\n          </a>\n          <a @fadeIn class=\"btn btn-sm btn-light action-button mr-1 btn-float\" title=\"edit\"\n             (click)=\"editItem(tableListItem)\"\n             style=\"border-radius: 50%\"\n             *ngIf=\"tableConfigurations?.actionIcons?.edit && !showDelete[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-edit\"></mat-icon>\n            <i class=\"fas fa-pencil-alt\"></i>\n<!--            <i class=\"fa fa-pencil\"></i>-->\n          </a>\n          <a @fadeIn class=\"btn btn-sm btn-light action-button mr-1 btn-float\" title=\"Download\"\n             (click)=\"downloadItem(tableListItem)\"\n             style=\"border-radius: 50%\"\n             *ngIf=\"tableConfigurations?.actionIcons?.download && !showDownload[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-edit\"></mat-icon>\n<!--            <i class=\"fa fa-cloud-download-alt\"></i>-->\n          </a>\n\n          <a @fadeIn class=\"btn btn-sm btn-danger action-button  btn-float\"\n             (click)=\"showDelete[tableListItem?.id] = true\"\n             style=\"border-radius: 50%\"\n             title=\"delete\" *ngIf=\"tableConfigurations?.actionIcons?.delete && !showDelete[tableListItem?.id]\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-trash\"></mat-icon>\n<!--            <i class=\"fa fa-trash-o\"></i>-->\n          </a>\n          <!--extra menu items-->\n          <button title=\"More Actions\" *ngIf=\"actionButtons.length != 0\" mat-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button\n              mat-menu-item\n              *ngFor=\"let btn of actionButtons\"\n              [title]=\"btn.title\"\n              (click)=\"submitCustomButtom(btn, tableListItem, 'first')\"\n            >\n              <img *ngIf=\"btn.image\" [src]=\"btn.image\" style=\"height: 20px\" [alt]=\"btn.title\">\n              <mat-icon *ngIf=\"btn.icon\" fontSet=\"fa\" fontIcon=\"fa-{{btn.icon}}\"></mat-icon>\n              {{btn.label}}\n            </button>\n          </mat-menu>\n          <button @fadeIn mat-flat-button (click)=\"showDelete[tableListItem?.id] = true\"\n                  title=\"Cancel\" *ngIf=\"tableConfigurations?.actionIcons?.cancel && !showDelete[tableListItem?.id]\">\n            <mat-icon>cancel</mat-icon>\n            Cancel\n          </button>\n\n          <!--delete confirmation-->\n          <p @fadeIn *ngIf=\"showDelete[tableListItem?.id] && !tableConfigurations.deleting[tableListItem?.id]\">Are You\n            sure?</p>\n          <p @fadeIn *ngIf=\"showDelete[tableListItem?.id] && tableConfigurations.deleting[tableListItem?.id]\">\n            <span *ngIf=\"tableConfigurations?.actionIcons?.cancel\">Canceling</span>\n            <span *ngIf=\"tableConfigurations?.actionIcons?.delete\">Deleting</span>\n          </p>\n          <p @fadeIn *ngIf=\"showDelete[tableListItem?.id]\">\n            <mat-progress-bar mode=\"indeterminate\" @fadeIn\n                              *ngIf=\"tableConfigurations.deleting[tableListItem?.id]\"></mat-progress-bar>\n            <button mat-mini-fab style=\"color: white; background-color: red; border-radius: 50%!important;\" @fadeIn\n                    *ngIf=\"!tableConfigurations.deleting[tableListItem?.id]\"\n                    (click)=\"showDelete = {}\">\n              <mat-icon>clear</mat-icon>\n            </button>\n            <button mat-mini-fab style=\"color: white; background-color: green; border-radius: 50%!important;\" @fadeIn\n                    *ngIf=\"!tableConfigurations.deleting[tableListItem?.id]\"\n                    (click)=\"deleteItem(tableListItem)\">\n              <mat-icon>done</mat-icon>\n            </button>\n          </p>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n        style='background-color: rgba(0, 0, 0, 0.1); opacity: 0.8;'></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"routeAnimationsElements\"\n        class=\"card-1\"></tr>\n  </table>\n\n  <!--Pagination-->\n  <mat-paginator\n    [ngClass]=\"{'hidden': !tableConfigurations.allowPagination}\"\n    [pageSizeOptions]=\"[10, 20, 25, 50, 100]\">\n  </mat-paginator>\n\n\n  <ng-template #noData>\n    <table *ngIf=\"!loading\" [ngClass]=\"{'table-bordered': tableConfigurations.showBorder}\" mat-table\n           [trackBy]=\"trackByFn\" [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z2\">\n\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> No</th>\n        <td mat-cell *matCellDef=\"let element;let i = index;\"> {{ i + 1 }}</td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container *ngFor=\"let column of tableConfigurations.tableColumns\" matColumnDef=\"{{ column.name }}\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.label }}</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element[column?.name] }}</td>\n      </ng-container>\n\n      <!--Action Icons-->\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let tableListItem\">&nbsp;</td>\n      </ng-container>\n\n      <!-- Disclaimer column -->\n      <ng-container matColumnDef=\"disclaimer\">\n        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"displayedColumns.length\">\n          <h5 class=\"text-center text-muted pt-1\">\n            {{tableConfigurations.empty_msg || \"No data\"}}\n          </h5>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n          style='background-color: rgba(0, 0, 0, 0.1); opacity: 0.8;'></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"routeAnimationsElements\"\n          class=\"card-1\"></tr>\n\n      <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\n    </table>\n\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/main-data-table/main-data-table.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/main-data-table/main-data-table.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-1 {\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.75) !important;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important; }\n\n.card-1:hover {\n  border-top: 1px solid rgba(0, 0, 0, 0.4) !important;\n  box-shadow: 0 14px 28px rgba(3, 31, 35, 0.12), 0 10px 10px rgba(3, 31, 35, 0.22) !important;\n  transform: scale(1.01) !important;\n  background-color: rgba(255, 255, 255, 0.85) !important; }\n\ntable {\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n\ntable td {\n    padding-left: 10px !important; }\n\ntable th {\n    padding-left: 10px !important;\n    color: black !important;\n    font-weight: bolder !important; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.hidden {\n  display: none; }\n\n.table-cover {\n  margin: 0px; }\n\n.top-area {\n  display: grid;\n  grid-template-columns: 10fr 2fr; }\n\n.top-area .search-area {\n    align-self: end; }\n\n.top-area .excel-button {\n    justify-self: end;\n    align-self: center;\n    margin-bottom: 8px; }\n\n.action-button {\n  height: 33px;\n  border-radius: 50%;\n  padding: 5px;\n  cursor: pointer !important; }\n\n.active {\n  background-color: rgba(0, 0, 0, 0.2) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYWluLWRhdGEtdGFibGUvbWFpbi1kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNEQUFzRDtFQUN0RCxnRUFBNkQsRUFBQTs7QUFHL0Q7RUFDRSxtREFBbUQ7RUFDbkQsMkZBQTJGO0VBQzNGLGlDQUFpQztFQUNqQyxzREFBc0QsRUFBQTs7QUFHeEQ7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DLEVBQUE7O0FBRnRDO0lBS0ksNkJBQTRCLEVBQUE7O0FBTGhDO0lBU0ksNkJBQTRCO0lBQzVCLHVCQUFzQjtJQUN0Qiw4QkFBNkIsRUFBQTs7QUFJakM7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsK0JBQStCLEVBQUE7O0FBRmpDO0lBS0ksZUFBZSxFQUFBOztBQUxuQjtJQVNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osMEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsK0NBQThDLEVBQUEiLCJmaWxlIjoiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbWFpbi1kYXRhLXRhYmxlL21haW4tZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLTEge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSkgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtMTpob3ZlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgzLCAzMSwgMzUsIDAuMTIpLCAwIDEwcHggMTBweCByZ2JhKDMsIDMxLCAzNSwgMC4yMikgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICB0ZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcbiAgfTtcblxuICB0aCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50OztcbiAgICBmb250LXdlaWdodDogYm9sZGVyIWltcG9ydGFudDtcbiAgfVxufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhYmxlLWNvdmVyIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4udG9wLWFyZWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwZnIgMmZyO1xuXG4gIC5zZWFyY2gtYXJlYSB7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICB9XG5cbiAgLmV4Y2VsLWJ1dHRvbiB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMzNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMikhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/main-data-table/main-data-table.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/main-data-table/main-data-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDataTableComponent", function() { return MainDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-csv/ngx-csv */ "./node_modules/ngx-csv/ngx-csv.js");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _animations_router_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/router-animation */ "./src/app/shared/animations/router-animation.ts");






var MainDataTableComponent = /** @class */ (function () {
    function MainDataTableComponent() {
        this.routeAnimationsElements = _animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["ROUTE_ANIMATIONS_ELEMENTS"];
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
        this.rowCustomPrimary = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowDownload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rowPrint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingMessage = null;
        // list of all the added buttons that you want to deal with separately
        this.actionButtons = [];
        this.showDelete = {};
        this.showDownload = {};
        this.showButtonConfirm = {};
        this.searchFieldControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
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
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.tableList);
        var _a = this.tableConfigurations.actionIcons, edit = _a.edit, print = _a.print, more = _a.more, cancel = _a.cancel, download = _a.download, customPrimary = _a.customPrimary;
        var colums = [
            'position'
        ].concat(this.tableConfigurations.tableColumns.map(function (column) { return column.name; }));
        if (edit ||
            print ||
            download ||
            more ||
            cancel ||
            customPrimary ||
            this.tableConfigurations.actionIcons.delete) {
            this.displayedColumns = colums.concat(['action']);
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
        var csvFile = new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_3__["ngxCsv"](data, 'My Report', {
            headers: this.tableConfigurations.tableColumns.map(function (col) { return col.label; })
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainDataTableComponent.prototype, "tableList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainDataTableComponent.prototype, "tableConfigurations", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MainDataTableComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MainDataTableComponent.prototype, "rowCustomPrimary", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MainDataTableComponent.prototype, "rowUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MainDataTableComponent.prototype, "rowDownload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MainDataTableComponent.prototype, "rowDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MainDataTableComponent.prototype, "rowPreview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MainDataTableComponent.prototype, "rowPrint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MainDataTableComponent.prototype, "customAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MainDataTableComponent.prototype, "loadingMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MainDataTableComponent.prototype, "actionButtons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], MainDataTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MainDataTableComponent.prototype, "sort", void 0);
    MainDataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-data-table',
            template: __webpack_require__(/*! ./main-data-table.component.html */ "./src/app/shared/components/main-data-table/main-data-table.component.html"),
            animations: [_animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeSmooth"], _animations_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]],
            styles: [__webpack_require__(/*! ./main-data-table.component.scss */ "./src/app/shared/components/main-data-table/main-data-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainDataTableComponent);
    return MainDataTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/main-data-table/show-button.pipe.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/main-data-table/show-button.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: ShowButtonPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowButtonPipe", function() { return ShowButtonPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    ShowButtonPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'showButton'
        })
    ], ShowButtonPipe);
    return ShowButtonPipe;
}());



/***/ }),

/***/ "./src/app/shared/components/mat-select-search/mat-select-search.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/mat-select-search/mat-select-search.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\n\n<div class=\"mat-select-search-inner\"\n     [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple}\">\n  <input matInput\n         class=\"mat-select-search-input\"\n         #searchSelectInput\n         (keydown)=\"_handleKeydown($event)\"\n         (input)=\"onInputChange($event.target.value)\"\n         (blur)=\"onBlur($event.target.value)\"\n         [placeholder]=\"placeholderLabel\"\n  />\n  <button mat-button *ngIf=\"value\"\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"_reset(true)\"\n          class=\"mat-select-search-clear\">\n    <mat-icon>close</mat-icon>\n  </button>\n</div>\n\n<div *ngIf=\"noEntriesFoundLabel && value && _options?.length === 0\"\n     class=\"mat-select-search-no-entries-found\">\n  {{noEntriesFoundLabel}}\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/mat-select-search/mat-select-search.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/mat-select-search/mat-select-search.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-select-search-hidden {\n  visibility: hidden; }\n\n.mat-select-search-inner {\n  position: absolute;\n  top: 0;\n  width: calc(100% + 15px);\n  border-bottom: 1px solid #cccccc;\n  background: white;\n  z-index: 100; }\n\n.mat-select-search-inner.mat-select-search-inner-multiple {\n    width: calc(100% + 48px); }\n\n/deep/ .mat-select-search-panel {\n  /* allow absolute positioning relative to outer options container */\n  transform: none !important;\n  max-height: 350px; }\n\n.mat-select-search-input {\n  padding: 16px;\n  padding-right: 36px;\n  box-sizing: border-box; }\n\n.mat-select-search-no-entries-found {\n  padding: 16px; }\n\n.mat-select-search-clear {\n  position: absolute;\n  right: 0;\n  top: 4px; }\n\n/deep/ .cdk-overlay-pane-select-search {\n  /* correct offsetY so that the selected option is at the position of the select box when opening */\n  margin-top: -50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYXQtc2VsZWN0LXNlYXJjaC9tYXQtc2VsZWN0LXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sd0JBQW9FO0VBQ3BFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQU5kO0lBU0ksd0JBQTRGLEVBQUE7O0FBSWhHO0VBQ0UsbUVBQUE7RUFDQSwwQkFBMEI7RUFDMUIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUE1QjBCO0VBNkIxQixtQkFBMkQ7RUFDM0Qsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsYUFsQzBCLEVBQUE7O0FBb0M1QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUSxFQUFBOztBQUVWO0VBQ0Usa0dBQUE7RUFDQSxpQkFBaUIsRUFBQSIsImZpbGUiOiIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tYXQtc2VsZWN0LXNlYXJjaC9tYXQtc2VsZWN0LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJG1hdC1tZW51LXNpZGUtcGFkZGluZzogMTZweCAhZGVmYXVsdDtcbiRzY3JvbGxiYXItd2lkdGg6IDE3cHg7XG4kY2xlYXItYnV0dG9uLXdpZHRoOiAyMHB4O1xuJG11bHRpcGxlLWNoZWNrLXdpZHRoOiAzM3B4O1xuXG4ubWF0LXNlbGVjdC1zZWFyY2gtaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm1hdC1zZWxlY3Qtc2VhcmNoLWlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAjezIgKiAkbWF0LW1lbnUtc2lkZS1wYWRkaW5nIC0gJHNjcm9sbGJhci13aWR0aH0pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgJi5tYXQtc2VsZWN0LXNlYXJjaC1pbm5lci1tdWx0aXBsZSB7XG5cbiAgICB3aWR0aDogY2FsYygxMDAlICsgI3syICogJG1hdC1tZW51LXNpZGUtcGFkZGluZyAtICRzY3JvbGxiYXItd2lkdGggKyAkbXVsdGlwbGUtY2hlY2std2lkdGh9KTtcbiAgfVxufVxuXG4vZGVlcC8gLm1hdC1zZWxlY3Qtc2VhcmNoLXBhbmVsIHtcbiAgLyogYWxsb3cgYWJzb2x1dGUgcG9zaXRpb25pbmcgcmVsYXRpdmUgdG8gb3V0ZXIgb3B0aW9ucyBjb250YWluZXIgKi9cbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xufVxuXG4ubWF0LXNlbGVjdC1zZWFyY2gtaW5wdXQge1xuICBwYWRkaW5nOiAkbWF0LW1lbnUtc2lkZS1wYWRkaW5nO1xuICBwYWRkaW5nLXJpZ2h0OiAkbWF0LW1lbnUtc2lkZS1wYWRkaW5nICsgJGNsZWFyLWJ1dHRvbi13aWR0aDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxufVxuLm1hdC1zZWxlY3Qtc2VhcmNoLW5vLWVudHJpZXMtZm91bmQge1xuICBwYWRkaW5nOiAkbWF0LW1lbnUtc2lkZS1wYWRkaW5nO1xufVxuLm1hdC1zZWxlY3Qtc2VhcmNoLWNsZWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA0cHg7XG59XG4vZGVlcC8gLmNkay1vdmVybGF5LXBhbmUtc2VsZWN0LXNlYXJjaCB7XG4gIC8qIGNvcnJlY3Qgb2Zmc2V0WSBzbyB0aGF0IHRoZSBzZWxlY3RlZCBvcHRpb24gaXMgYXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzZWxlY3QgYm94IHdoZW4gb3BlbmluZyAqL1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/mat-select-search/mat-select-search.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/mat-select-search/mat-select-search.component.ts ***!
  \************************************************************************************/
/*! exports provided: MatSelectSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectSearchComponent", function() { return MatSelectSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






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
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
    }
    MatSelectSearchComponent_1 = MatSelectSearchComponent;
    Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
        /** Current search value */
        get: function () {
            return this._value;
        },
        enumerable: true,
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this._options = _this.matSelect.options;
            _this._options.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this._onDestroy))
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy))
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchSelectInput', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
    MatSelectSearchComponent = MatSelectSearchComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-select-search',
            template: __webpack_require__(/*! ./mat-select-search.component.html */ "./src/app/shared/components/mat-select-search/mat-select-search.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MatSelectSearchComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./mat-select-search.component.scss */ "./src/app/shared/components/mat-select-search/mat-select-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelect"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelect"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MatSelectSearchComponent);
    return MatSelectSearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hiddenTree{\n  display: none;\n}\nli{\n  cursor: pointer;\n}\n.selected{\n  background-color: rgba(0,0,0,0.1);\n}\n.tree-view {\n  text-align: left;\n  background-color: #d7e3f7;\n  position: absolute;\n  z-index: 999;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n  width: 370px;\n  margin-right: 30px;\n  max-height: 360px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 45px;\n}\n.hiddenTree{\n  display: none;\n}\n.tree-area::-webkit-scrollbar {\n  width: 5px;\n}\n.tree-area::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n.tree-area::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n.tree-area{\n  max-height: 270px;\n  overflow: hidden;\n  width: 100%;\n}\n.tree-area:hover{\n  overflow: auto;\n}\n.tree-area{\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%;\n}\n.tree-area{\n  overflow: auto;\n}\n.tree-view::-webkit-scrollbar {\n  width: 5px;\n}\n.tree-view::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n.tree-view::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n.tree-view input{\n  border-radius: 0px;\n  border: 1px solid #ccc;\n  height: 26px;\n  font-size: 14px;\n  width: 100%;\n  padding-left: 7px;\n  box-sizing: border-box;\n  color: #888;\n  margin: 0 0 8px;\n}\n.show_items{\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #c6c6c6;\n  padding: 11px 8px;\n  font-size: 14px;\n  min-height: 45px!important;\n  border-radius: 0px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: rgba(45,105,165,0.1);\n  background-image: linear-gradient(rgba(45,105,165,0.1),rgba(45,105,165,0.2));\n  width: 370px;\n  height: 45px;\n}\nspan.selected-item {\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  padding: 3px 5px 3px 5px;\n  margin-right: 2px;\n  cursor: text;\n  font-size: 11px;\n\n}\n.selected-item-close {\n  width: 20px;\n  cursor: pointer;\n  font-weight: 700;\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  font-size: xx-small;\n}\n.removeitem{\n  cursor: pointer;\n}\n.removeitem:hover{\n  font-size: 1.1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL29yZy11bml0LWZpbHRlci9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBRWxCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaURBQWlEO0FBQ25EO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUdqQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLDRFQUE0RTtFQUM1RSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlOztBQUVqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvb3JnLXVuaXQtZmlsdGVyL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZGVuVHJlZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmxpe1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4udHJlZS12aWV3IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTNmNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xuICB3aWR0aDogMzcwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWF4LWhlaWdodDogMzYwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luLXRvcDogNDVweDtcbn1cblxuLmhpZGRlblRyZWV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50cmVlLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLnRyZWUtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udHJlZS1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7XG59XG5cbi50cmVlLWFyZWF7XG4gIG1heC1oZWlnaHQ6IDI3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi50cmVlLWFyZWE6aG92ZXJ7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udHJlZS1hcmVhe1xuICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50cmVlLWFyZWF7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udHJlZS12aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi50cmVlLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRyZWUtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4udHJlZS12aWV3IGlucHV0e1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGhlaWdodDogMjZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luOiAwIDAgOHB4O1xufVxuXG4uc2hvd19pdGVtc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcbiAgcGFkZGluZzogMTFweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLWhlaWdodDogNDVweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY29sb3I6ICM1NTU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LDEwNSwxNjUsMC4xKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNDUsMTA1LDE2NSwwLjEpLHJnYmEoNDUsMTA1LDE2NSwwLjIpKTtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbnNwYW4uc2VsZWN0ZWQtaXRlbSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAzcHggNXB4IDNweCA1cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjdXJzb3I6IHRleHQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcblxufVxuXG4uc2VsZWN0ZWQtaXRlbS1jbG9zZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG59XG4ucmVtb3ZlaXRlbXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlaXRlbTpob3ZlcntcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-input\" appClickOutside (clickOutside)=\"hideOptions = true\">\n  <div class=\"show_items text-left\" (click)=\"displayPerTree()\">\n    <span *ngIf=\"selected_items.length == 1\">{{ prefix }}</span>\n    <span *ngIf=\"selected_items.length > 1\">{{ prefix_multiple }}</span>\n    <span *ngIf=\"selected_items.length !== 0\">\n       <span  class=\"selected-item ng-binding ng-scope\">\n        {{ selected_items.length}} Items selected\n         <a (click)=\"deActivateNode($event)\" title=\"clear all\" class=\"removeitem\">x</a>\n      </span>\n    </span>\n    <span *ngIf=\"selected_items.length == 0\">\n      {{ placeholder }}\n    </span>\n    <span class=\"fa fa-caret-down pull-right text-muted\"></span>\n  </div>\n  <div class=\"tree-view\" [ngClass]=\"{'hiddenTree':hideOptions}\">\n    <div style=\"padding: 10px\">\n      <input class=\"form-control\" [(ngModel)]=\"filterText\">\n    </div>\n    <ul class=\"nav nav-pills flex-column\">\n      <li *ngFor=\"let item of items | filterByName: filterText \"\n          class=\"period\" (click)=\"selectItem(item)\"\n          [ngClass]=\"{'selected': checkItemAvailabilty(item,selected_items)}\"\n          title=\"Click to select\"\n          style=\"font-size: 11px; border-bottom: 1px solid rgba(0,0,0,0.1)\"\n      >\n        {{ item.name }}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MultiselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiselectComponent", function() { return MultiselectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MultiselectComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MultiselectComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MultiselectComponent.prototype, "starting_items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MultiselectComponent.prototype, "selected_items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MultiselectComponent.prototype, "prefix", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MultiselectComponent.prototype, "prefix_multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MultiselectComponent.prototype, "onSelected", void 0);
    MultiselectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multiselect',
            template: __webpack_require__(/*! ./multiselect.component.html */ "./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.html"),
            styles: [__webpack_require__(/*! ./multiselect.component.css */ "./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MultiselectComponent);
    return MultiselectComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/org-unit-filter/org-unit-filter.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/org-unit-filter.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-node-active > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n}\n\n.toggle-children {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.tree-node-expanded > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg) !important;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=);\n\n}\n\n.tree-node-collapsed > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n\n}\n\n.tree-node-active.tree-node-focused > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n  font-weight: bold;\n}\n\n.tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover {\n  box-shadow: none !important;\n}\n\n.tree-input {\n\n}\n\n.show_items{\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: left;\n  cursor: pointer;\n  border: 1px solid #c6c6c6;\n  padding: 14px 8px;\n  font-size: 14px;\n  min-height: 45px!important;\n  border-radius: 7px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: rgba(45,105,165,0.1);\n  background-image: linear-gradient(rgba(45,105,165,0.1),rgba(45,105,165,0.2));\n  width: 100%;\n  height: 45px;\n}\n\n.show_items span,\n.show_items small {\n  cursor: pointer;\n}\n\n.show_tops{\n  position: relative;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  /*cursor: pointer;*/\n  border: 1px solid #c6c6c6;\n  /*padding: 8px 8px;*/\n  font-size: 14px;\n  min-height: 38px!important;\n  border-radius: 4px;\n  color: #555;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  white-space: normal;\n  background-color: #fff;\n  background-image: linear-gradient(#fff,#f7f7f7);\n  width: 7%;\n  height: 34px;\n}\n\n.arrows:hover{\n  transform: scale(1.001, 1.001);\n  box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  background-color: rgba(0,0,0,0.05);\n}\n\n.tree-view {\n  text-align: left;\n  background-color: #d7e3f7;\n  position: absolute;\n  z-index: 9999;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n  min-width: 370px;\n  margin-right: 30px;\n  max-height: 360px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 45px;\n}\n\n.additional-options {\n  text-align: left;\n  background-color: #fff;\n  position: absolute;\n  z-index: 999;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n  min-width: 420px;\n  margin-right: 13px;\n  max-height: 400px;\n  overflow: auto;\n  padding: 10px 5px;\n  margin-top: 38px;\n  right: 0px;\n}\n\n.scorecard_table{\n  margin-bottom: 3px;\n  font-size: 9px;\n  border: 1px solid #ddd;\n  border-spacing: 0;\n  border-collapse: collapse;\n  display: table;\n}\n\n.pointer label{\n  cursor: pointer;\n}\n\n.tree-area{\n  max-height: 250px;\n  min-height: 250px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area{\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area{\n  overflow: auto;\n}\n\n.tree-area1{\n  max-height: 210px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.tree-area1:hover{\n  overflow: auto;\n}\n\n.hiddenTree{\n  display: none;\n}\n\n.tree-area::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-area::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n\n.tree-area::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n\n.tree-area1::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-area1::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n\n.tree-area1::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n\n.tree-view::-webkit-scrollbar {\n  width: 5px;\n}\n\n.tree-view::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n  border-radius: 10px;\n}\n\n.tree-view::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n}\n\n.tree-view input{\n  border-radius: 2px;\n  border: 1px solid #ccc;\n  height: 26px;\n  font-size: 14px;\n  width: 100%;\n  padding-left: 7px;\n  box-sizing: border-box;\n  color: #888;\n  margin: 0 0 8px;\n}\n\nspan.selected-item {\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 1px;\n  padding: 3px 5px 3px 5px;\n  margin-right: 2px;\n  cursor: text;\n  font-size: 11px;\n\n}\n\n.selected-item-close {\n  width: 20px;\n  cursor: pointer;\n  font-weight: 700;\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  font-size: xx-small;\n}\n\n/* dhis2 Styling structure*/\n\n#tree_view .tree-node-active > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n}\n\n#tree_view .toggle-children {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n  height: 8px;\n  width: 9px;\n  background-size: contain;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#tree_view .tree-node-expanded > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg) !important;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysTqXJGKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADdJREFUeNpjbGhoYMABWIC4vr4eU6KxsZGJATfAJ8cCoRgZGZFF////j5CDcEgwk5B9QOdilQMArx0MGrXJqC8AAAAASUVORK5CYII=);\n\n}\n\n#tree_view .tree-node-collapsed > .toggle-children-wrapper > .toggle-children {\n  transform: rotate(0deg);\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAIAAABv85FHAAAAB3RJTUUH1AgFFysfoMQKAwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAEFJREFUeNpjbGhoYMABWIC4vr4eU6KxsZEJmc/IyIjMZWLADVjQdEAY////R8hBOEAJCIOwmShyyJqgZgKdi1UfAE1ZEh02KM7OAAAAAElFTkSuQmCC);\n\n}\n\n#tree_view .tree-node-active.tree-node-focused > .node-content-wrapper {\n  background: none !important;\n  color: orange !important;\n  font-weight: bold;\n}\n\n#tree_view .tree-node-active > .node-content-wrapper, .tree-node-focused > .node-content-wrapper, .node-content-wrapper:hover {\n  box-shadow: none !important;\n}\n\n.close-area{\n  border-top: 1px solid blanchedalmond;\n  padding-top: 5px;\n}\n\n@media print {\n  .no-print *{\n    display: none;\n  }\n  .no-print{\n    display: none;\n  }\n\n  .orgUnitName{\n    min-width: 130px;\n    height: 35px;\n    max-height: 35px;\n    font-size: 9px;\n  }\n  .table-bordered td{\n    /*border-top: 0.1em;*/\n  }\n  .legendItem{\n    width: 200px;\n    float: left;\n  }\n\n}\n\n/*scorecard indicator details*/\n\n.indicator_details{\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  /*display: none;*/\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: opacity .15s linear;\n  background-color: rgba(0,0,0,.4);\n}\n\n.indicator_dialog{\n  width: 86%;\n  margin: 100px 7% auto 7%;\n}\n\n.indicator-content {\n  box-shadow: 0 5px 15px rgba(0,0,0,.5);\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0,0,0,.2);\n  border-radius: 6px;\n  outline: 0;\n  min-height: 200px;\n  padding: 10px;\n}\n\n.hide_no_group{\n  display: none;\n}\n\ntable * {\n  line-height: 80%;\n}\n\n.subtotal{\n  width:90px;max-width: 90px;\n}\n\n.indicator_title{\n  font-size: 10px;\n  width:90px;\n  max-width: 90px;\n  overflow-wrap: break-word;\n  cursor: pointer;\n  line-height: 140%\n}\n\n.list-group-item{\n  padding: 5px 15px\n}\n\n.removeorgunit{\n  cursor:pointer;\n  border: 1px solid rgba(95, 158, 160, 0.1);\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.someclass{\n  color: rgba(0,0,0,0.1);\n  background-color: rgba(0,0,0,0.1);\n}\n\n.node-content-wrapper-focused{\n  background-color: white!important;\n}\n\n.group-image{\n  height: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL29yZy11bml0LWZpbHRlci9vcmctdW5pdC1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxUUFBcVE7RUFDclEsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlQQUF5UDs7QUFFM1A7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIscVFBQXFROztBQUV2UTs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBOztBQUVBOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsNEVBQTRFO0VBQzVFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQyxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0VBRTlCLG9DQUFvQztFQUNwQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUVsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUVsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBR2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUdBLDJCQUEyQjs7QUFDM0I7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscVFBQXFRO0VBQ3JRLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5UEFBeVA7O0FBRTNQOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFRQUFxUTs7QUFFdlE7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVGOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxVQUFVO0VBR1YsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFFRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVSxDQUFDLGVBQWU7QUFDNUI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUNBO0VBQ0UsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9vcmctdW5pdC1maWx0ZXIvb3JnLXVuaXQtZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJlZS1ub2RlLWFjdGl2ZSA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlLWNoaWxkcmVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBSkNBSUFBQUJ2ODVGSEFBQUFCM1JKVFVVSDFBZ0ZGeXNmb01RS0F3QUFBQWx3U0ZsekFBQUxFZ0FBQ3hJQjB0MSsvQUFBQUVGSlJFRlVlTnBqYkdob1lNQUJXSUM0dnI0ZVU2S3hzWkVKbWMvSXlJak1aV0xBRFZqUWRFQVkvLy8vUjhoQk9FQUpDSU93bVNoeXlKcWdaZ0tkaTFVZkFFMVpFaDAyS003T0FBQUFBRWxGVGtTdVFtQ0MpO1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDlweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4udHJlZS1ub2RlLWV4cGFuZGVkID4gLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyID4gLnRvZ2dsZS1jaGlsZHJlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQUlBQUFCdjg1RkhBQUFBQjNSSlRVVUgxQWdGRnlzVHFYSkdLQUFBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFEZEpSRUZVZU5wamJHaG9ZTUFCV0lDNHZyNGVVNkt4c1pHSkFUZkFKOGNDb1JnWkdaRkYvLy8vajVDRGNFZ3drNUI5UU9kaWxRTUFyeDBNR3JYSnFDOEFBQUFBU1VWT1JLNUNZSUk9KTtcblxufVxuLnRyZWUtbm9kZS1jb2xsYXBzZWQgPiAudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXIgPiAudG9nZ2xlLWNoaWxkcmVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQUlBQUFCdjg1RkhBQUFBQjNSSlRVVUgxQWdGRnlzZm9NUUtBd0FBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFFRkpSRUZVZU5wamJHaG9ZTUFCV0lDNHZyNGVVNkt4c1pFSm1jL0l5SWpNWldMQURWalFkRUFZLy8vL1I4aEJPRUFKQ0lPd21TaHl5SnFnWmdLZGkxVWZBRTFaRWgwMktNN09BQUFBQUVsRlRrU3VRbUNDKTtcblxufVxuLnRyZWUtbm9kZS1hY3RpdmUudHJlZS1ub2RlLWZvY3VzZWQgPiAubm9kZS1jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udHJlZS1ub2RlLWFjdGl2ZSA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciwgLnRyZWUtbm9kZS1mb2N1c2VkID4gLm5vZGUtY29udGVudC13cmFwcGVyLCAubm9kZS1jb250ZW50LXdyYXBwZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50cmVlLWlucHV0IHtcblxufVxuXG4uc2hvd19pdGVtc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XG4gIHBhZGRpbmc6IDE0cHggOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1pbi1oZWlnaHQ6IDQ1cHghaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGNvbG9yOiAjNTU1O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwxMDUsMTY1LDAuMSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDQ1LDEwNSwxNjUsMC4xKSxyZ2JhKDQ1LDEwNSwxNjUsMC4yKSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5zaG93X2l0ZW1zIHNwYW4sXG4uc2hvd19pdGVtcyBzbWFsbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNob3dfdG9wc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qY3Vyc29yOiBwb2ludGVyOyovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNmM2YzY7XG4gIC8qcGFkZGluZzogOHB4IDhweDsqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1pbi1oZWlnaHQ6IDM4cHghaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNTU1O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmYsI2Y3ZjdmNyk7XG4gIHdpZHRoOiA3JTtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uYXJyb3dzOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxLCAxLjAwMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbi50cmVlLXZpZXcge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlM2Y3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAuMTc1KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xuICBtaW4td2lkdGg6IDM3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDM2MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG5cbi5hZGRpdGlvbmFsLW9wdGlvbnMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIC4xNzUpO1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgLjE3NSk7XG4gIG1pbi13aWR0aDogNDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luLXRvcDogMzhweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLnNjb3JlY2FyZF90YWJsZXtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBmb250LXNpemU6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucG9pbnRlciBsYWJlbHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJlZS1hcmVhe1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRyZWUtYXJlYXtcbiAgbWF4LWhlaWdodDogMjEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRyZWUtYXJlYXtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50cmVlLWFyZWExe1xuICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4udHJlZS1hcmVhMTpob3ZlcntcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uaGlkZGVuVHJlZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRyZWUtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4udHJlZS1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50cmVlLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnRyZWUtYXJlYTE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLnRyZWUtYXJlYTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRyZWUtYXJlYTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnRyZWUtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4udHJlZS12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50cmVlLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnRyZWUtdmlldyBpbnB1dHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDI2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICM4ODg7XG4gIG1hcmdpbjogMCAwIDhweDtcbn1cbnNwYW4uc2VsZWN0ZWQtaXRlbSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBwYWRkaW5nOiAzcHggNXB4IDNweCA1cHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBjdXJzb3I6IHRleHQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcblxufVxuXG4uc2VsZWN0ZWQtaXRlbS1jbG9zZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG59XG5cblxuLyogZGhpczIgU3R5bGluZyBzdHJ1Y3R1cmUqL1xuI3RyZWVfdmlldyAudHJlZS1ub2RlLWFjdGl2ZSA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4jdHJlZV92aWV3IC50b2dnbGUtY2hpbGRyZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFKQ0FJQUFBQnY4NUZIQUFBQUIzUkpUVVVIMUFnRkZ5c2ZvTVFLQXdBQUFBbHdTRmx6QUFBTEVnQUFDeElCMHQxKy9BQUFBRUZKUkVGVWVOcGpiR2hvWU1BQldJQzR2cjRlVTZLeHNaRUptYy9JeUlqTVpXTEFEVmpRZEVBWS8vLy9SOGhCT0VBSkNJT3dtU2h5eUpxZ1pnS2RpMVVmQUUxWkVoMDJLTTdPQUFBQUFFbEZUa1N1UW1DQyk7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbiN0cmVlX3ZpZXcgLnRyZWUtbm9kZS1leHBhbmRlZCA+IC50b2dnbGUtY2hpbGRyZW4td3JhcHBlciA+IC50b2dnbGUtY2hpbGRyZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBa0FBQUFKQ0FJQUFBQnY4NUZIQUFBQUIzUkpUVVVIMUFnRkZ5c1RxWEpHS0FBQUFBbHdTRmx6QUFBTEVnQUFDeElCMHQxKy9BQUFBRGRKUkVGVWVOcGpiR2hvWU1BQldJQzR2cjRlVTZLeHNaR0pBVGZBSjhjQ29SZ1pHWkZGLy8vL2o1Q0RjRWd3azVCOVFPZGlsUU1BcngwTUdyWEpxQzhBQUFBQVNVVk9SSzVDWUlJPSk7XG5cbn1cbiN0cmVlX3ZpZXcgLnRyZWUtbm9kZS1jb2xsYXBzZWQgPiAudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXIgPiAudG9nZ2xlLWNoaWxkcmVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFrQUFBQUpDQUlBQUFCdjg1RkhBQUFBQjNSSlRVVUgxQWdGRnlzZm9NUUtBd0FBQUFsd1NGbHpBQUFMRWdBQUN4SUIwdDErL0FBQUFFRkpSRUZVZU5wamJHaG9ZTUFCV0lDNHZyNGVVNkt4c1pFSm1jL0l5SWpNWldMQURWalFkRUFZLy8vL1I4aEJPRUFKQ0lPd21TaHl5SnFnWmdLZGkxVWZBRTFaRWgwMktNN09BQUFBQUVsRlRrU3VRbUNDKTtcblxufVxuI3RyZWVfdmlldyAudHJlZS1ub2RlLWFjdGl2ZS50cmVlLW5vZGUtZm9jdXNlZCA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IG9yYW5nZSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN0cmVlX3ZpZXcgLnRyZWUtbm9kZS1hY3RpdmUgPiAubm9kZS1jb250ZW50LXdyYXBwZXIsIC50cmVlLW5vZGUtZm9jdXNlZCA+IC5ub2RlLWNvbnRlbnQtd3JhcHBlciwgLm5vZGUtY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2xvc2UtYXJlYXtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYW5jaGVkYWxtb25kO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5cbkBtZWRpYSBwcmludCB7XG4gIC5uby1wcmludCAqe1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm5vLXByaW50e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAub3JnVW5pdE5hbWV7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWF4LWhlaWdodDogMzVweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxuICAudGFibGUtYm9yZGVyZWQgdGR7XG4gICAgLypib3JkZXItdG9wOiAwLjFlbTsqL1xuICB9XG4gIC5sZWdlbmRJdGVte1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG59XG5cbi8qc2NvcmVjYXJkIGluZGljYXRvciBkZXRhaWxzKi9cbi5pbmRpY2F0b3JfZGV0YWlsc3tcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNTA7XG4gIC8qZGlzcGxheTogbm9uZTsqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNCk7XG59XG5cbi5pbmRpY2F0b3JfZGlhbG9ne1xuICB3aWR0aDogODYlO1xuICBtYXJnaW46IDEwMHB4IDclIGF1dG8gNyU7XG59XG4uaW5kaWNhdG9yLWNvbnRlbnQge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwuNSk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwuNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdXRsaW5lOiAwO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhpZGVfbm9fZ3JvdXB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnRhYmxlICoge1xuICBsaW5lLWhlaWdodDogODAlO1xufVxuXG4uc3VidG90YWx7XG4gIHdpZHRoOjkwcHg7bWF4LXdpZHRoOiA5MHB4O1xufVxuLmluZGljYXRvcl90aXRsZXtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB3aWR0aDo5MHB4O1xuICBtYXgtd2lkdGg6IDkwcHg7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE0MCVcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbXtcbiAgcGFkZGluZzogNXB4IDE1cHhcbn1cbi5yZW1vdmVvcmd1bml0e1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5NSwgMTU4LCAxNjAsIDAuMSk7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG4uc29tZWNsYXNze1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG59XG4ubm9kZS1jb250ZW50LXdyYXBwZXItZm9jdXNlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xufVxuXG4uZ3JvdXAtaW1hZ2V7XG4gIGhlaWdodDogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/org-unit-filter/org-unit-filter.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/org-unit-filter.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-input\" appClickOutside (clickOutside)=\"showOrgTree = true\">\n    <div class=\"show_items\" (click)=\"displayOrgTree()\">\n              <span *ngIf=\"!orgunit_tree_config.loading\">\n                  {{  getProperPreOrgunitName() }}\n              </span>\n        <span *ngIf=\"orgunit_model.selected_orgunits.length > 3 && orgunit_model.selected_user_orgunit.length == 0\">\n                <span class=\"selected-item\">\n                  {{ orgunit_model.selected_orgunits[0].name }}\n                  <a (click)=\"deActivateNode(orgunit_model.selected_orgunits[0].id,orgtree,$event)\" class=\"removeorgunit\" >x</a>\n                </span>\n                <span class=\"selected-item\">\n                  {{ orgunit_model.selected_orgunits[1].name }}\n                  <a (click)=\"deActivateNode(orgunit_model.selected_orgunits[1].id,orgtree,$event)\" class=\"removeorgunit\">x</a>\n                </span>\n                <span class=\"selected-item\">\n                  &nbsp; and {{ orgunit_model.selected_orgunits.length - 2 }} more\n                </span>\n              </span>\n        <span *ngIf=\"orgunit_model.selected_orgunits.length <= 3 && orgunit_model.selected_user_orgunit.length == 0\">\n                 <span *ngFor=\"let item of orgunit_model.selected_orgunits\" class=\"selected-item ng-binding ng-scope\">\n                  {{ item.name }}\n                   <a (click)=\"deActivateNode(item.id,orgtree,$event)\" class=\"removeorgunit\">x</a>\n                </span>\n              </span>\n        <span class=\"no-selection\" *ngIf=\"orgunit_model.selected_orgunits.length == 0 && !orgunit_tree_config.loading && orgunit_model.selected_user_orgunit.length == 0\">\n          {{ orgunit_tree_config.placeholder }}\n        </span>\n\n      <i class=\"fa fa-caret-down pull-right\"></i>\n      <span  *ngIf=\"orgunit_model.selected_orgunits.length > 3\" class=\"pull-right\">\n            <span class=\"selected-item\" style=\"cursor: pointer\" (click)=\"clearAll()\" style=\"opacity: 0.7\" >X clear all</span>\n          </span>\n      <span *ngIf=\"orgunit_tree_config.loading\">{{ orgunit_tree_config.loading_message }}</span>\n    </div>\n    <div class=\"tree-view\" [ngClass]=\"{'hiddenTree':showOrgTree}\" id=\"tree_view\">\n      <div class=\"container-fluid\">\n        <div *ngIf=\"orgunit_tree_config.loading\">{{ orgunit_tree_config.loading_message }}</div>\n        <div class=\"tree-area\" [ngClass]=\"{'someclass': orgunit_model.selected_user_orgunit.length != 0}\">\n<!--          <tree-root [nodes]=\"nodes\"-->\n<!--                     #orgtree-->\n<!--                     (toggleExpanded)=\"onEvent($event)\"-->\n<!--                     (activate)=\"activateOrg($event)\"-->\n<!--                     (focus)=\"onEvent($event)\"-->\n<!--                     (blur)=\"onEvent($event)\">-->\n<!--          </tree-root>-->\n          <tree-root\n            #orgtree\n            [nodes]=\"organisationunits\"\n            [focused]=\"true\"\n            (activate)=\"activateOrg($event)\"\n            (deactivate)=\"deactivateOrg($event)\"\n          >\n            <ng-template #treeNodeTemplate let-node>\n              <span (click)=\"updateModelOnSelect(node.data)\" style=\"font-size: 12px\">{{ node.data.name }}</span>\n            </ng-template>\n          </tree-root>\n        </div>\n        <div class=\"col-sm-12\" style=\"padding:0px;margin-top: 5px;border-top:1px solid rgba(0,0,0,0.3)\" *ngIf=\"showUpdate\">\n          <button class=\"btn btn-outline-secondary btn-sm pull-right cursor\" style=\"margin-top: 5px\" (click)=\"updateOrgunits()\">\n            <i class=\"fa fa-refresh\"></i>\n            <span>Update</span>\n          </button>\n        </div>\n      </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/org-unit-filter/org-unit-filter.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/org-unit-filter/org-unit-filter.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrgUnitFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgUnitFilterComponent", function() { return OrgUnitFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/org-unit.service */ "./src/app/services/org-unit.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






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
        this.onOrgUnitUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOrgUnitChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onOrgUnitModelUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
                        dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_EXPANDED,
                        click: function (node, tree, $event) { return angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event); }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
            else if (this.orgunit_tree_config.multiple_key === 'control') { // multselect using control key
                var actionMapping = {
                    mouse: {
                        click: function (node, tree, $event) {
                            $event.ctrlKey
                                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event);
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
                                ? angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event);
                        }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
        }
        else {
            var actionMapping = {
                mouse: {
                    dblClick: angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_EXPANDED,
                    click: function (node, tree, $event) { return angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TREE_ACTIONS"].TOGGLE_SELECTED(node, tree, $event); }
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
            var visit_location = lodash__WEBPACK_IMPORTED_MODULE_5__["find"](top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
            _this.visit_locations.push({
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
        return lodash__WEBPACK_IMPORTED_MODULE_5__["find"](orgunits, { uuid: uuid });
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrgUnitFilterComponent.prototype, "orgunit_model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrgUnitFilterComponent.prototype, "orgunit_tree_config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrgUnitFilterComponent.prototype, "showUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrgUnitFilterComponent.prototype, "pickChildren", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OrgUnitFilterComponent.prototype, "onOrgUnitUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OrgUnitFilterComponent.prototype, "onOrgUnitChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OrgUnitFilterComponent.prototype, "onOrgUnitModelUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orgtree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_tree_component__WEBPACK_IMPORTED_MODULE_2__["TreeComponent"])
    ], OrgUnitFilterComponent.prototype, "orgtree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OrgUnitFilterComponent.prototype, "current_orgunits", void 0);
    OrgUnitFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-org-unit-filter',
            template: __webpack_require__(/*! ./org-unit-filter.component.html */ "./src/app/shared/components/org-unit-filter/org-unit-filter.component.html"),
            styles: [__webpack_require__(/*! ./org-unit-filter.component.css */ "./src/app/shared/components/org-unit-filter/org-unit-filter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_org_unit_service__WEBPACK_IMPORTED_MODULE_3__["OrgUnitService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]])
    ], OrgUnitFilterComponent);
    return OrgUnitFilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/placeholder/placeholder.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/placeholder/placeholder.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"placeholder-container\" [ngClass]=\"{'grid-contaner': useGrid}\">\n  <div class=\"line\" *ngIf=\"numberOfLines >=1\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=2\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=3\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=4\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=5\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=6\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=7\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=8\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=9\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=10\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=11\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=12\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=13\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=14\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=15\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=16\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=17\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=18\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=19\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=20\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=21\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=22\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=23\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=24\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=25\"></div>\n  <div class=\"line\" *ngIf=\"numberOfLines >=25\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/placeholder/placeholder.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/placeholder/placeholder.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-contaner {\n  display: grid;\n  /* autoprefixer: off */\n  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr)); }\n\n.placeholder-container {\n  width: 100%; }\n\n.placeholder-container .line {\n    height: 14px;\n    margin: 10px;\n    border-radius: 4px;\n    animation: pulse 2s infinite ease-in-out;\n    -webkit-animation: pulse 2s infinite ease-in-out; }\n\n.placeholder-container div {\n    width: 95%; }\n\n.placeholder-container div:nth-child(1) {\n    width: 95%; }\n\n.placeholder-container div:nth-child(2) {\n    width: 90%; }\n\n.placeholder-container div:nth-child(3) {\n    width: 85%; }\n\n.placeholder-container div:nth-child(4) {\n    width: 83%; }\n\n.placeholder-container div:nth-child(5) {\n    width: 80%; }\n\n.placeholder-container div:nth-child(6) {\n    width: 80%; }\n\n@keyframes pulse {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1);\n    -webkit-box-shadow: 0 0 0 0 rgba(165, 165, 165, 0.4); }\n  50% {\n    background-color: rgba(165, 165, 165, 0.3);\n    -webkit-box-shadow: 0 0 0 2px rgba(165, 165, 165, 0); }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1);\n    -webkit-box-shadow: 0 0 0 0 rgba(165, 165, 165, 0); } }\n\n@-webkit-keyframes pulse {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1);\n    -webkit-box-shadow: 0 0 0 0 rgba(165, 165, 165, 0.4); }\n  50% {\n    background-color: rgba(165, 165, 165, 0.3);\n    -webkit-box-shadow: 0 0 0 2px rgba(165, 165, 165, 0); }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1);\n    -webkit-box-shadow: 0 0 0 0 rgba(165, 165, 165, 0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBQTtFQUNBLDBEQUEwRCxFQUFBOztBQUc1RDtFQUNFLFdBQVcsRUFBQTs7QUFEYjtJQUdJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxnREFBZ0QsRUFBQTs7QUFQcEQ7SUFXSSxVQUFVLEVBQUE7O0FBWGQ7SUFlSSxVQUNGLEVBQUE7O0FBaEJGO0lBa0JJLFVBQ0YsRUFBQTs7QUFuQkY7SUFxQkksVUFDRixFQUFBOztBQXRCRjtJQXdCSSxVQUNGLEVBQUE7O0FBekJGO0lBMkJJLFVBQ0YsRUFBQTs7QUE1QkY7SUE4QkksVUFDRixFQUFBOztBQUdGO0VBQ0U7SUFDRSwwQ0FBc0M7SUFDdEMsb0RBQWtELEVBQUE7RUFFcEQ7SUFDRSwwQ0FBc0M7SUFDdEMsb0RBQWtELEVBQUE7RUFFcEQ7SUFDRSwwQ0FBc0M7SUFDdEMsa0RBQWdELEVBQUEsRUFBQTs7QUFJcEQ7RUFDRTtJQUNFLDBDQUFzQztJQUN0QyxvREFBa0QsRUFBQTtFQUVwRDtJQUNFLDBDQUFzQztJQUN0QyxvREFBa0QsRUFBQTtFQUVwRDtJQUNFLDBDQUFzQztJQUN0QyxrREFBZ0QsRUFBQSxFQUFBIiwiZmlsZSI6Ii4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFuZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICAvKiBhdXRvcHJlZml4ZXI6IG9mZiAqL1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDcwcHgsIDFmcikpO1xufVxuXG4ucGxhY2Vob2xkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC5saW5lIHtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgfVxuXG4gIGRpdiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG4gIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIHdpZHRoOiA5NSVcbiAgfVxuICBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICB3aWR0aDogOTAlXG4gIH1cbiAgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgd2lkdGg6IDg1JVxuICB9XG4gIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIHdpZHRoOiA4MyVcbiAgfVxuICBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICB3aWR0aDogODAlXG4gIH1cbiAgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgd2lkdGg6IDgwJVxuICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsMTY1LDE2NSwuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMTY1LDE2NSwxNjUsIDAuNCk7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwxNjUsMTY1LC4zKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDE2NSwxNjUsMTY1LCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwxNjUsMTY1LC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgxNjUsMTY1LDE2NSwgMCk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LDE2NSwxNjUsLjEpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDE2NSwxNjUsMTY1LCAwLjQpO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsMTY1LDE2NSwuMyk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgxNjUsMTY1LDE2NSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsMTY1LDE2NSwuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMTY1LDE2NSwxNjUsIDApO1xuICB9XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/placeholder/placeholder.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/placeholder/placeholder.component.ts ***!
  \************************************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaceholderComponent = /** @class */ (function () {
    function PlaceholderComponent() {
        this.numberOfLines = 4;
        this.useGrid = false;
    }
    PlaceholderComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaceholderComponent.prototype, "numberOfLines", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaceholderComponent.prototype, "useGrid", void 0);
    PlaceholderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-placeholder',
            template: __webpack_require__(/*! ./placeholder.component.html */ "./src/app/shared/components/placeholder/placeholder.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./placeholder.component.scss */ "./src/app/shared/components/placeholder/placeholder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlaceholderComponent);
    return PlaceholderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/save-area/save-area.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/save-area/save-area.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 p-0\">\n      <p @fadeIn *ngIf=\"showConfirm\" class=\"text-right\">\n        {{ confirmText }}\n        <button mat-mini-fab style=\"color: white; background-color: red; border-radius: 50%!important;\" @fadeIn (click)=\"showConfirm = false\">\n          <mat-icon>clear</mat-icon>\n        </button> &nbsp;\n        <button mat-mini-fab style=\"color: white; background-color: green; border-radius: 50%!important;\" @fadeIn (click)=\"onSave(false)\">\n          <mat-icon>done</mat-icon>\n        </button>\n      </p>\n      <button\n        @fadeIn\n        type=\"button\"\n        *ngIf=\"!showConfirm\"\n        class=\"fa-pull-right\"\n        [disabled]=\"saveDisabled\"\n        mat-raised-button color=\"primary\"\n        (click)=\"onSave(true)\">\n        <mat-icon>{{saveIcon}}</mat-icon> {{ saveText }}\n      </button>\n      <button\n        type=\"button\"\n        @fadeIn\n        *ngIf=\"!showConfirm && showCancel\"\n        class=\"fa-pull-right\"\n        mat-button color=\"warn\"\n        (click)=\"onClose()\">\n        <mat-icon>close</mat-icon> {{ cancelText }}\n      </button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/save-area/save-area.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/save-area/save-area.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zYXZlLWFyZWEvc2F2ZS1hcmVhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/save-area/save-area.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/save-area/save-area.component.ts ***!
  \********************************************************************/
/*! exports provided: SaveAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAreaComponent", function() { return SaveAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/router-animation */ "./src/app/shared/animations/router-animation.ts");



var SaveAreaComponent = /** @class */ (function () {
    function SaveAreaComponent() {
        this.saveDisabled = false;
        this.confirmFirst = false;
        this.saveText = 'Save';
        this.saveIcon = 'save';
        this.cancelText = 'Cancel';
        this.showCancel = true;
        this.confirmText = 'Are you sure you want to perform this action?';
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveAreaComponent.prototype, "saveDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveAreaComponent.prototype, "confirmFirst", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveAreaComponent.prototype, "saveText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveAreaComponent.prototype, "saveIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveAreaComponent.prototype, "cancelText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SaveAreaComponent.prototype, "showCancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveAreaComponent.prototype, "confirmText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveAreaComponent.prototype, "save", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SaveAreaComponent.prototype, "cancel", void 0);
    SaveAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-save-area',
            template: __webpack_require__(/*! ./save-area.component.html */ "./src/app/shared/components/save-area/save-area.component.html"),
            animations: [_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./save-area.component.scss */ "./src/app/shared/components/save-area/save-area.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SaveAreaComponent);
    return SaveAreaComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/table-form/table-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/table-form/table-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topbanner\n  [title]=\"title\"\n  [image]=\"image\"\n  [url]=\"''\"\n  *ngIf=\"showTopBanner\"\n></app-topbanner>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ng-content select=\"summary\"></ng-content>\n    </div>\n\n    <div class=\"col-md-12\">\n      <div [@tableSize]=\"!viewDetails ? 'hundred' : (smallForm ? 'eighty': animationSize)\">\n          <ng-content select=\"table\"></ng-content>\n        </div>\n\n        <div [@formSize]=\"viewDetails ? (smallForm ? 'twenty': animationSize) : 'zero'\">\n          <h5 class=\"mat-divider-title mt-3 row pl-3 pr-3\">\n\n            <span *ngIf=\"formTitle\"> {{ formTitle }} </span>\n            <!-- This fills the remaining space of the current row -->\n            <span class=\"example-fill-remaining-space\"></span>\n\n            <a title=\"Close Form\" (click)=\"closeForm()\" class=\"pull-right cursor\">\n              <mat-icon>close</mat-icon>\n            </a>\n          </h5>\n          <mat-divider></mat-divider>\n          <p *ngIf=\"loading\">Saving Data...</p>\n          <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\">\n          </mat-progress-bar>\n          <mat-card>\n            <ng-content select=\"form\"></ng-content>\n          </mat-card>\n        </div>\n      <!-- /.col-md-12 -->\n    </div>\n\n\n  </div>\n\n</div>\n\n\n<div class=\"col-md-12\" *ngIf=\"!viewDetails\">\n  <a *ngIf=\"!hideAdd\" title=\"Add\" (click)=\"add()\" mat-fab color=\"primary\" class=\"add-item\">\n    <mat-icon>add</mat-icon>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/table-form/table-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/table-form/table-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ks-on-off {\n  width: 84px;\n  min-width: 84px; }\n\n.ks-checkbox-slider.ks-on-off.ks-solid input[type=checkbox]:checked + .ks-indicator {\n  left: 62px; }\n\n.nopadding {\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.mat-divider-title {\n  color: #8e8e8e; }\n\n.mat-divider {\n  border-top-color: #949494;\n  margin-bottom: 15px;\n  margin-top: 14px; }\n\n.cursor {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0RvY3VtZW50cy9Qcm9qZWN0cy9GYW1pbHkgUGxhbm5pbmcvRlBfRnJvbnRFbmQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJsZS1mb3JtL3RhYmxlLWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90YWJsZS1mb3JtL3RhYmxlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRTttRENGaUQ7RURJakQsY0FBYyxFQUFBOztBQUtoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90YWJsZS1mb3JtL3RhYmxlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua3Mtb24tb2ZmIHtcbiAgd2lkdGg6IDg0cHg7XG4gIG1pbi13aWR0aDogODRweDtcbn1cblxuLmtzLWNoZWNrYm94LXNsaWRlci5rcy1vbi1vZmYua3Mtc29saWQgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5rcy1pbmRpY2F0b3Ige1xuICBsZWZ0OiA2MnB4O1xufVxuXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5cblxuLm1hdC1kaXZpZGVyLXRpdGxle1xuICBjb2xvcjogIzhlOGU4ZTtcbn1cblxuLm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk0OTQ5NDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi5rcy1vbi1vZmYge1xuICB3aWR0aDogODRweDtcbiAgbWluLXdpZHRoOiA4NHB4OyB9XG5cbi5rcy1jaGVja2JveC1zbGlkZXIua3Mtb24tb2ZmLmtzLXNvbGlkIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAua3MtaW5kaWNhdG9yIHtcbiAgbGVmdDogNjJweDsgfVxuXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDsgfVxuXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87IH1cblxuLm1hdC1kaXZpZGVyLXRpdGxlIHtcbiAgY29sb3I6ICM4ZThlOGU7IH1cblxuLm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk0OTQ5NDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTRweDsgfVxuXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/table-form/table-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/table-form/table-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: TableFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFormComponent", function() { return TableFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/router-animation */ "./src/app/shared/animations/router-animation.ts");



var TableFormComponent = /** @class */ (function () {
    function TableFormComponent() {
        this.loading = false;
        this.showTopBanner = true;
        this.viewDetails = false;
        this.hideAdd = false;
        this.smallForm = true;
        this.addItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableFormComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableFormComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableFormComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableFormComponent.prototype, "formTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TableFormComponent.prototype, "showTopBanner", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TableFormComponent.prototype, "viewDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TableFormComponent.prototype, "hideAdd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TableFormComponent.prototype, "smallForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableFormComponent.prototype, "addItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableFormComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableFormComponent.prototype, "animationSize", void 0);
    TableFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-form',
            template: __webpack_require__(/*! ./table-form.component.html */ "./src/app/shared/components/table-form/table-form.component.html"),
            animations: [
                _animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["formSize"], _animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["tableSize"]
            ],
            styles: [__webpack_require__(/*! ./table-form.component.scss */ "./src/app/shared/components/table-form/table-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableFormComponent);
    return TableFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/topbanner/topbanner.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/topbanner/topbanner.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"no-print\">\n  <mat-toolbar-row>\n    <h3 [routerLink]=\"'/page/'+url\" style=\"cursor: pointer\">\n      <i style=\"color: #07587f\" class=\" mr-2 fa fa-{{image}}\"></i>\n      {{ title }}\n    </h3>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\n"

/***/ }),

/***/ "./src/app/shared/components/topbanner/topbanner.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/topbanner/topbanner.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90b3BiYW5uZXIvdG9wYmFubmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/topbanner/topbanner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/topbanner/topbanner.component.ts ***!
  \********************************************************************/
/*! exports provided: TopbannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbannerComponent", function() { return TopbannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopbannerComponent = /** @class */ (function () {
    function TopbannerComponent() {
        this.title = '';
        this.image = '';
        this.url = '';
        this.loading = false;
    }
    TopbannerComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TopbannerComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TopbannerComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TopbannerComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TopbannerComponent.prototype, "loading", void 0);
    TopbannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topbanner',
            template: __webpack_require__(/*! ./topbanner.component.html */ "./src/app/shared/components/topbanner/topbanner.component.html"),
            styles: [__webpack_require__(/*! ./topbanner.component.scss */ "./src/app/shared/components/topbanner/topbanner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopbannerComponent);
    return TopbannerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/click-outside.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/click-outside.directive.ts ***!
  \**************************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appClickOutside]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/table-style.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/table-style.directive.ts ***!
  \************************************************************/
/*! exports provided: TableStyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStyleDirective", function() { return TableStyleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableStyleDirective.prototype, "color", void 0);
    TableStyleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTableStyle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TableStyleDirective);
    return TableStyleDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter-by-name.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/filter-by-name.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FilterByNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByNamePipe", function() { return FilterByNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
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
    FilterByNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterByName'
        })
    ], FilterByNamePipe);
    return FilterByNamePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/safe-html.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/safe-html.pipe.ts ***!
  \************************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/without.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/without.pipe.ts ***!
  \**********************************************/
/*! exports provided: WithoutPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutPipe", function() { return WithoutPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    WithoutPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'without'
        })
    ], WithoutPipe);
    return WithoutPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_topbanner_topbanner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/topbanner/topbanner.component */ "./src/app/shared/components/topbanner/topbanner.component.ts");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/click-outside.directive */ "./src/app/shared/directives/click-outside.directive.ts");
/* harmony import */ var _components_main_data_table_main_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-data-table/main-data-table.component */ "./src/app/shared/components/main-data-table/main-data-table.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _components_save_area_save_area_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/save-area/save-area.component */ "./src/app/shared/components/save-area/save-area.component.ts");
/* harmony import */ var _components_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/placeholder/placeholder.component */ "./src/app/shared/components/placeholder/placeholder.component.ts");
/* harmony import */ var _pipes_without_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/without.pipe */ "./src/app/shared/pipes/without.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _components_org_unit_filter_multiselect_multiselect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/org-unit-filter/multiselect/multiselect.component */ "./src/app/shared/components/org-unit-filter/multiselect/multiselect.component.ts");
/* harmony import */ var _components_org_unit_filter_org_unit_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/org-unit-filter/org-unit-filter.component */ "./src/app/shared/components/org-unit-filter/org-unit-filter.component.ts");
/* harmony import */ var _components_table_form_table_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/table-form/table-form.component */ "./src/app/shared/components/table-form/table-form.component.ts");
/* harmony import */ var _components_mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/mat-select-search/mat-select-search.component */ "./src/app/shared/components/mat-select-search/mat-select-search.component.ts");
/* harmony import */ var _components_main_data_table_show_button_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/main-data-table/show-button.pipe */ "./src/app/shared/components/main-data-table/show-button.pipe.ts");
/* harmony import */ var _pipes_filter_by_name_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/filter-by-name.pipe */ "./src/app/shared/pipes/filter-by-name.pipe.ts");
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ "./src/app/shared/pipes/safe-html.pipe.ts");
/* harmony import */ var _directives_table_style_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/table-style.directive */ "./src/app/shared/directives/table-style.directive.ts");
/* harmony import */ var _components_chw_locations_chw_locations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/chw-locations/chw-locations.component */ "./src/app/shared/components/chw-locations/chw-locations.component.ts");

























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/a/Documents/Projects/Family Planning/FP_FrontEnd/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map