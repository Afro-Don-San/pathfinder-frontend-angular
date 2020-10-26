import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ExcelDownloadService } from '../../../services/excel-download.service';
import { fadeIn, fadeOut } from '../../../shared/animations/router-animation';
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "jsonData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "startDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "endDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TotalIssuedLostFollowupComponent.prototype, "orgUnitName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "report", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalIssuedLostFollowupComponent.prototype, "main_title", void 0);
    tslib_1.__decorate([
        ViewChild('dataTable'),
        tslib_1.__metadata("design:type", ElementRef)
    ], TotalIssuedLostFollowupComponent.prototype, "dataTable", void 0);
    TotalIssuedLostFollowupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-total-issued-lost-followup',
            templateUrl: './total-issued-lost-followup.component.html',
            styleUrls: ['./total-issued-lost-followup.component.scss'],
            animations: [fadeOut, fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [ExcelDownloadService])
    ], TotalIssuedLostFollowupComponent);
    return TotalIssuedLostFollowupComponent;
}());
export { TotalIssuedLostFollowupComponent };
//# sourceMappingURL=total-issued-lost-followup.component.js.map