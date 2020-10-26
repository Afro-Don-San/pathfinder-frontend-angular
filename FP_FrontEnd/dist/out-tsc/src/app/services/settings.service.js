import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.listReferalIndicators = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenSRP('get-indicators')
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.listReferalServices = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenSRP('get-referral-services')
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.addReferalIndicators = function (data) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenSRP('add-referral-indicators', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error("Some error occurred: " + error.statusText);
            });
        });
    };
    SettingsService.prototype.addReferalServices = function (data) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenSRP('add-referral-services', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.editReferalIndicators = function (data, id) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenSRP('edit-referral-services', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.editReferalServices = function (data, id) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenSRP('', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.deleteReferalIndicators = function (data, id) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.deleteOpenSRP('', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.deleteReferalServices = function (data, id) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.deleteOpenSRP('', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.listServiceIndicatorMerge = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenSRP('boresha-afya-services')
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.createServiceIndicatorMerge = function (data) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenSRP('add-referral-service-indicators', data)
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.deleteServiceIndicatorMerge = function (id) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.deleteOpenSRP('', '')
                .subscribe(function (locationResponse) {
                observer.next(locationResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    SettingsService.prototype.drawChart = function (categories, series, yAxisLabel, title, subtitle, type) {
        if (title === void 0) { title = ''; }
        if (subtitle === void 0) { subtitle = ''; }
        if (type === void 0) { type = 'column'; }
        return {
            credits: {
                enabled: false
            },
            chart: {
                type: type
            },
            events: {
                load: function (chart) {
                    setTimeout(function () {
                        chart.target.reflow();
                    }, 0);
                }
            },
            title: {
                text: title
            },
            subtitle: {
                text: subtitle
            },
            xAxis: {
                categories: categories,
                crosshair: true,
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: yAxisLabel
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} ' +
                    yAxisLabel +
                    ' </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: series
        };
    };
    SettingsService.prototype.drawPieChart = function (data, title, tooltipLabel) {
        if (tooltipLabel === void 0) { tooltipLabel = ''; }
        return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: title
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b>'
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: tooltipLabel,
                    colorByPoint: true,
                    data: data
                }]
        };
    };
    SettingsService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService])
    ], SettingsService);
    return SettingsService;
}());
export { SettingsService };
//# sourceMappingURL=settings.service.js.map