import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ExcelDownloadService } from '../../../services/excel-download.service';
import { fadeIn, fadeOut } from '../../../shared/animations/router-animation';
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "jsonData", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "startDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "endDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SuccessfulMaraliaReferalsComponent.prototype, "orgUnitName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "report", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SuccessfulMaraliaReferalsComponent.prototype, "main_title", void 0);
    tslib_1.__decorate([
        ViewChild('dataTable'),
        tslib_1.__metadata("design:type", ElementRef)
    ], SuccessfulMaraliaReferalsComponent.prototype, "dataTable", void 0);
    SuccessfulMaraliaReferalsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-successful-maralia-referals',
            templateUrl: './successful-maralia-referals.component.html',
            styleUrls: ['./successful-maralia-referals.component.scss'],
            animations: [fadeIn, fadeOut]
        }),
        tslib_1.__metadata("design:paramtypes", [ExcelDownloadService])
    ], SuccessfulMaraliaReferalsComponent);
    return SuccessfulMaraliaReferalsComponent;
}());
export { SuccessfulMaraliaReferalsComponent };
//# sourceMappingURL=successful-maralia-referals.component.js.map