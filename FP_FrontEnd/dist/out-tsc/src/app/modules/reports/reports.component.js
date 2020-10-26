import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { fadeIn } from '../../shared/animations/router-animation';
import { Router } from '@angular/router';
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
    ReportsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reports',
            templateUrl: './reports.component.html',
            styleUrls: ['./reports.component.css'],
            animations: [fadeIn],
            encapsulation: ViewEncapsulation.None,
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ReportsComponent);
    return ReportsComponent;
}());
export { ReportsComponent };
//# sourceMappingURL=reports.component.js.map