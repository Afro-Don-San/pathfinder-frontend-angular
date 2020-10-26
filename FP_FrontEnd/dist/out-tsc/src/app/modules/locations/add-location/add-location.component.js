import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from '../../../services/http-client.service';
import { LocationService } from '../../../services/location.service';
import { fadeIn } from '../../../shared/animations/router-animation';
var AddLocationComponent = /** @class */ (function () {
    function AddLocationComponent(locationService, formBuilder, http) {
        this.locationService = locationService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.locations = [];
        this.saved = new EventEmitter();
        this.close = new EventEmitter();
        this.loading = false;
        this.tags = {
            tagOne: '15d11935-e183-43da-9c42-d0ced1efd872',
            tagTwo: '8d4626ca-7abd-42ad-be48-56767bbcf272'
        };
        this.editing = false;
    }
    AddLocationComponent.prototype.ngOnInit = function () {
        this.locationForm = this.formBuilder.group({
            name: ['', Validators.required],
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], AddLocationComponent.prototype, "locations", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddLocationComponent.prototype, "saved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddLocationComponent.prototype, "close", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AddLocationComponent.prototype, "currentLocation", void 0);
    AddLocationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-location',
            templateUrl: './add-location.component.html',
            styleUrls: ['./add-location.component.css'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [LocationService,
            FormBuilder,
            HttpClientService])
    ], AddLocationComponent);
    return AddLocationComponent;
}());
export { AddLocationComponent };
//# sourceMappingURL=add-location.component.js.map