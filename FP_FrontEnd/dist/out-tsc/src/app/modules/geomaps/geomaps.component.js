import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as L from 'leaflet';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClientService } from '../../services/http-client.service';
import { LocationService } from '../../services/location.service';
import { OrgUnitService } from '../../services/org-unit.service';
import * as Highcharts from 'highcharts';
import { SettingsService } from '../../services/settings.service';
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);
var GeomapsComponent = /** @class */ (function () {
    function GeomapsComponent(breakpointObserver, http, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.markersLayer = new L.LayerGroup();
        this.card1DataLoading = false;
        this.data_loading = false;
    }
    GeomapsComponent.prototype.ngAfterViewInit = function () {
        this.initMap();
    };
    GeomapsComponent.prototype.initMap = function () {
        this.map = L.map('map', {
            zoom: 7
        });
        this.map.panTo(new L.LatLng(-6.3690, 35.7516));
        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    };
    GeomapsComponent.prototype.updateMap = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var reportUrl;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.data_loading = true;
                this.markersLayer.clearLayers();
                reportUrl = 'map_summary/';
                this.http.postDJANGOURL(reportUrl, filter)
                    .subscribe(function (data) {
                    if (data) {
                        _this.data_loading = false;
                        var icon = new L.icon();
                        var blueIcon = new L.icon({
                            iconUrl: 'assets/img/blue.png',
                            iconSize: [40, 40]
                        });
                        var redIcon = new L.icon({
                            iconUrl: 'assets/img/red.png',
                            iconSize: [40, 40]
                        });
                        var greenIcon = new L.icon({
                            iconUrl: 'assets/img/green.png',
                            iconSize: [40, 40]
                        });
                        var blackIcon = new L.icon({
                            iconUrl: 'assets/img/black.png',
                            iconSize: [40, 40]
                        });
                        var coordinates = {
                            Latitude: {
                                'Ugalla Ward': -5.4707,
                                'Tongwe Ward': -5.3331,
                                'Bitale Ward': -4.7667,
                                'Kagunga Ward': -4.4907,
                                'Kalinzi Ward': -4.6058,
                                'Mkigo Ward': -4.4941,
                                'Mkongoro Ward': -1.3308,
                                'Mwamgongo Ward': -4.6243,
                                'Mwandiga Ward': -4.8254,
                                'Nyarubanda Ward': -4.5677,
                                'Simbo Ward': -4.8944,
                                'Ziwani Ward': -4.3799,
                                'Ilagala Ward': -5.1925,
                                'Sunuka Ward': -5.3489,
                            },
                            Longitude: {
                                'Ugalla Ward': 31.0954,
                                'Tongwe Ward': 31.9529,
                                'Bitale Ward': 29.6833,
                                'Kagunga Ward': 29.6833,
                                'Kalinzi Ward': 29.7292,
                                'Mkigo Ward': 29.7562,
                                'Mkongoro Ward': 33.8760,
                                'Mwamgongo Ward': 29.6398,
                                'Mwandiga Ward': 29.6586,
                                'Nyarubanda Ward': 29.7485,
                                'Simbo Ward': 29.7455,
                                'Ziwani Ward': 29.7886,
                                'Ilagala Ward': 29.8381,
                                'Sunuka Ward': 29.7878,
                            },
                        };
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var village = data_1[_i];
                            var villageName = village["village_name"];
                            var villageValue = village["value"];
                            var villageCoordinateCheck = coordinates.Latitude["" + villageName + ""];
                            if (villageValue < 100) {
                                icon = redIcon;
                            }
                            if (villageValue > 100 && villageValue <= 500) {
                                icon = blueIcon;
                            }
                            if (villageValue > 500) {
                                icon = greenIcon;
                            }
                            if (villageCoordinateCheck != undefined) {
                                _this.marker = L.marker([
                                    coordinates.Latitude["" + villageName + ""],
                                    coordinates.Longitude["" + villageName + ""]
                                ], { title: "" + villageName + " : " + villageValue + " ", icon: icon, alt: "Village Value", draggable: false });
                                _this.markersLayer.addLayer(_this.marker);
                                // this.marker.myData = { id: coordinates.Longitude[""+villageName+""] };
                                _this.markersLayer.addTo(_this.map);
                            }
                        }
                    }
                    _this.card1DataLoading = false;
                }, function (error1) { return _this.card1DataLoading = false; });
                return [2 /*return*/];
            });
        });
    };
    GeomapsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-map',
            templateUrl: './geomaps.component.html',
            styleUrls: ['./geomaps.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BreakpointObserver,
            HttpClientService,
            LocationService,
            OrgUnitService,
            SettingsService])
    ], GeomapsComponent);
    return GeomapsComponent;
}());
export { GeomapsComponent };
//# sourceMappingURL=geomaps.component.js.map