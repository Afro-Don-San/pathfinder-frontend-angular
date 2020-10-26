import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { FormBuilder } from '@angular/forms';
import { HttpClientService } from '../../services/http-client.service';
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
            _this.items = locations.map(function (location) { return (tslib_1.__assign({}, location, { id: location.uuid, tags: location.tags.map(function (item) { return item.display; }).join(', '), parent: location.parentLocation ? location.parentLocation.display : '' })); });
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
    LocationsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-locations',
            templateUrl: './locations.component.html',
            styleUrls: ['./locations.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [LocationService,
            FormBuilder,
            HttpClientService])
    ], LocationsComponent);
    return LocationsComponent;
}());
export { LocationsComponent };
//# sourceMappingURL=locations.component.js.map