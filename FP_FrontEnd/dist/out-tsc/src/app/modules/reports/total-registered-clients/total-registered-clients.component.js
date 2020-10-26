import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fadeIn, fadeOut } from '../../../shared/animations/router-animation';
import { ExcelDownloadService } from '../../../services/excel-download.service';
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TotalRegisteredClientsComponent.prototype, "jsonData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalRegisteredClientsComponent.prototype, "startDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalRegisteredClientsComponent.prototype, "endDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TotalRegisteredClientsComponent.prototype, "orgUnitName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalRegisteredClientsComponent.prototype, "report", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalRegisteredClientsComponent.prototype, "main_title", void 0);
    tslib_1.__decorate([
        ViewChild('dataTable'),
        tslib_1.__metadata("design:type", ElementRef)
    ], TotalRegisteredClientsComponent.prototype, "dataTable", void 0);
    TotalRegisteredClientsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-total-registered-clients',
            templateUrl: './total-registered-clients.component.html',
            styleUrls: ['./total-registered-clients.component.scss'],
            animations: [fadeIn, fadeOut]
        }),
        tslib_1.__metadata("design:paramtypes", [ExcelDownloadService])
    ], TotalRegisteredClientsComponent);
    return TotalRegisteredClientsComponent;
}());
export { TotalRegisteredClientsComponent };
//# sourceMappingURL=total-registered-clients.component.js.map