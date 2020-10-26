import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ExcelDownloadService } from '../../../services/excel-download.service';
import { fadeIn, fadeOut } from '../../../shared/animations/router-animation';
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "jsonData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "startDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "endDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], TotalLostFollowupComponent.prototype, "orgUnitName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "report", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TotalLostFollowupComponent.prototype, "main_title", void 0);
    tslib_1.__decorate([
        ViewChild('dataTable'),
        tslib_1.__metadata("design:type", ElementRef)
    ], TotalLostFollowupComponent.prototype, "dataTable", void 0);
    TotalLostFollowupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-total-lost-followup',
            templateUrl: './total-lost-followup.component.html',
            styleUrls: ['./total-lost-followup.component.scss'],
            animations: [fadeOut, fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [ExcelDownloadService])
    ], TotalLostFollowupComponent);
    return TotalLostFollowupComponent;
}());
export { TotalLostFollowupComponent };
//# sourceMappingURL=total-lost-followup.component.js.map