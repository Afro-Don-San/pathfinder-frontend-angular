import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { fadeIn, fadeSmooth, ROUTE_ANIMATIONS_ELEMENTS } from '../../animations/router-animation';
var MainDataTableComponent = /** @class */ (function () {
    function MainDataTableComponent() {
        this.routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
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
        this.rowCustomPrimary = new EventEmitter();
        this.rowUpdate = new EventEmitter();
        this.rowDownload = new EventEmitter();
        this.rowDelete = new EventEmitter();
        this.rowPreview = new EventEmitter();
        this.rowPrint = new EventEmitter();
        this.customAction = new EventEmitter();
        this.loadingMessage = null;
        // list of all the added buttons that you want to deal with separately
        this.actionButtons = [];
        this.showDelete = {};
        this.showDownload = {};
        this.showButtonConfirm = {};
        this.searchFieldControl = new FormControl('');
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
        this.dataSource = new MatTableDataSource(this.tableList);
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
        var csvFile = new ngxCsv(data, 'My Report', {
            headers: this.tableConfigurations.tableColumns.map(function (col) { return col.label; })
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MainDataTableComponent.prototype, "tableList", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MainDataTableComponent.prototype, "tableConfigurations", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MainDataTableComponent.prototype, "loading", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MainDataTableComponent.prototype, "rowCustomPrimary", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MainDataTableComponent.prototype, "rowUpdate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MainDataTableComponent.prototype, "rowDownload", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MainDataTableComponent.prototype, "rowDelete", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MainDataTableComponent.prototype, "rowPreview", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MainDataTableComponent.prototype, "rowPrint", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MainDataTableComponent.prototype, "customAction", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MainDataTableComponent.prototype, "loadingMessage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], MainDataTableComponent.prototype, "actionButtons", void 0);
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], MainDataTableComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort),
        tslib_1.__metadata("design:type", MatSort)
    ], MainDataTableComponent.prototype, "sort", void 0);
    MainDataTableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-main-data-table',
            templateUrl: './main-data-table.component.html',
            styleUrls: ['./main-data-table.component.scss'],
            animations: [fadeSmooth, fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MainDataTableComponent);
    return MainDataTableComponent;
}());
export { MainDataTableComponent };
//# sourceMappingURL=main-data-table.component.js.map