import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClientService } from '../services/http-client.service';
import { LocationService } from '../services/location.service';
import { OrgUnitService } from '../services/org-unit.service';
import { SettingsService } from '../services/settings.service';
import { filter, map, mergeMap } from 'rxjs/operators';
import { routeAnimations } from '../shared/animations/router-animation';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver, router, http, activatedRoute, userService, titleService, locationService, orgunitService, settingsService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.titleService = titleService;
        this.locationService = locationService;
        this.orgunitService = orgunitService;
        this.settingsService = settingsService;
        this.locations = [];
        this.isHandset$ = this.breakpointObserver
            .observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
        this.isOpen = true;
        this.location_loading = false;
        this.total_clients = 0;
        this.total_families = 0;
        this.total_initiations = 0;
        this.total_discontinuations = 0;
        this.total_services = 0;
        this.total_referrals = 0;
        this.total_citizen_reports = 0;
        this.navigation = [];
        this.username = '';
        this.location = [];
        this.loading = false;
        this.navigation = userService.getNavigation();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = localStorage.getItem('htmr-web-token');
        var starting_location = localStorage.getItem('htmr-starting-location');
        this.username = localStorage.getItem('trcmis-user');
        if (!token || !location) {
            this.router.navigate(['', 'login']);
        }
        var dashboard = new DashboardComponent(this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
        dashboard.getLocation(starting_location).then(function (locations) {
            var facilities = _this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
            _this.orgunitName = _this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
            _this.getTotalClients({ facilities: facilities });
            _this.getTotalClientFamilies({ facilities: facilities });
            _this.getTotalServices({ facilities: facilities });
            _this.getTotalInitiations({ facilities: facilities });
            _this.getTotalDiscontinuations({ facilities: facilities });
            _this.getTotalReferrals({ facilities: facilities });
            _this.getTotalCitizenReports({ facilities: facilities });
        });
        // this.getLocation(starting_location).then(locations => {
        //   const facilities = this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
        //   this.getTotalClients({facilities});
        // });
    };
    HomeComponent.prototype.getTotalClients = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_clients = data['total_clients'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalClientFamilies = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_families = data['total_clients_families'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalInitiations = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_initiations = data['total_family_planning_initiations'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalDiscontinuations = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_discontinuations = data['total_family_planning_discontinuations'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalServices = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_services = data['total_services'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalReferrals = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_referrals = data['total_referrals'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getTotalCitizenReports = function (filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.postDJANGOURL('dashboard_summary/', filter).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            this.total_citizen_reports = data['total_citizen_reports'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.goToChangePass = function () {
        //  this.userService.removeLocalStorageNavigation();
        // this.userService.deleteToken();
        this.userService.loggedIn = false;
        this.locationService.locations = [];
        this.router.navigate(['', 'change-password']);
    };
    HomeComponent.prototype.goTo = function (path) {
        this.router.navigate(path);
    };
    HomeComponent.prototype.logout = function () {
        this.userService.removeLocalStorageNavigation();
        this.userService.deleteToken();
        this.userService.loggedIn = false;
        this.locationService.locations = [];
        this.router.navigate(['', 'login']);
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                _this.loading = true;
            }
            else if (event instanceof NavigationEnd ||
                event instanceof NavigationCancel) {
                _this.loading = false;
            }
        });
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; }), map(function () { return _this.activatedRoute; }), map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), filter(function (route) { return route.outlet === 'primary'; }), mergeMap(function (route) { return route.data; })).subscribe(function (event) { return _this.titleService.setTitle(event.title); });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss'],
            animations: [routeAnimations]
        }),
        tslib_1.__metadata("design:paramtypes", [BreakpointObserver,
            Router,
            HttpClientService,
            ActivatedRoute,
            UserService,
            Title,
            LocationService,
            OrgUnitService,
            SettingsService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map