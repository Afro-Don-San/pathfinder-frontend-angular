import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        this.onSelected = new EventEmitter();
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], MultiselectComponent.prototype, "items", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MultiselectComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], MultiselectComponent.prototype, "starting_items", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], MultiselectComponent.prototype, "selected_items", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MultiselectComponent.prototype, "prefix", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MultiselectComponent.prototype, "prefix_multiple", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], MultiselectComponent.prototype, "onSelected", void 0);
    MultiselectComponent = tslib_1.__decorate([
        Component({
            selector: 'app-multiselect',
            templateUrl: 'multiselect.component.html',
            styleUrls: ['multiselect.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MultiselectComponent);
    return MultiselectComponent;
}());
export { MultiselectComponent };
//# sourceMappingURL=multiselect.component.js.map