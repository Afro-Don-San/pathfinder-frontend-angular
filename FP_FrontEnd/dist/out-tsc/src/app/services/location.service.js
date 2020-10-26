import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
        this.locations = [];
        this.loadingMessage = 'Loading locations';
    }
    // get all data element group
    LocationService.prototype.loadLocations = function () {
        var _this = this;
        return Observable.create(function (observer) {
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
        return Observable.create(function (observer) {
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
        return Observable.create(function (observer) {
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
        return Observable.create(function (observer) {
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
        return Observable.create(function (observer) {
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
        return Observable.create(function (observer) {
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
    LocationService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService])
    ], LocationService);
    return LocationService;
}());
export { LocationService };
//# sourceMappingURL=location.service.js.map