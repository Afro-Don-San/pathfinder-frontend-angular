import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginNotification = { isError: false, message: 'Login successful', attempted: false, loading: false };
        this.customeUsernameNotifier = false;
        this.customePasswordNotifier = false;
        this.hide = true;
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('htmr-web-token');
        var location = localStorage.getItem('htmr-starting-location');
        if (token && location) {
            this.router.navigate(['', 'dashboard']);
        }
    };
    LoginComponent.prototype.login = function (loginCredentials) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var openMrsResult, openSrpResult, location_1, starting_location, e_1, starting_location, username, e_2;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.loginForm.valid) return [3 /*break*/, 10];
                        this.loginNotification.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, this.userService.login(loginCredentials).toPromise()];
                    case 2:
                        openMrsResult = _a.sent();
                        if (!(openMrsResult.results.length > 0)) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.userService.login1(loginCredentials).toPromise()];
                    case 4:
                        openSrpResult = _a.sent();
                        if (openSrpResult) {
                            if (openSrpResult.team && openSrpResult.team.team) {
                                if (openSrpResult.team.team.location) {
                                    location_1 = openSrpResult.team.team.location;
                                    starting_location = location_1 ? location_1.uuid : 't4f60f022-9390-41e1-8803-7a68f3a7fe98';
                                    localStorage.setItem('htmr-starting-location', starting_location);
                                }
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (e_1.status = 500) {
                            starting_location = '4f60f022-9390-41e1-8803-7a68f3a7fe98';
                            localStorage.setItem('htmr-starting-location', starting_location);
                        }
                        return [3 /*break*/, 6];
                    case 6:
                        username = openMrsResult.results[0].display;
                        localStorage.setItem('trcmis-user', username);
                        this.userService.setNavigation(openMrsResult);
                        this.loginNotification.isError = false;
                        this.loginNotification.message = 'Login successful';
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = true;
                        setTimeout(function () {
                            _this.router.navigate(['', 'dashboard']);
                        }, 2000);
                        return [3 /*break*/, 8];
                    case 7:
                        this.loginNotification.isError = true;
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = false;
                        this.loginNotification.message = 'Login failure, wrong username or password';
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_2 = _a.sent();
                        // tslint:disable-next-line: triple-equals
                        if (e_2.status == 401) {
                            this.loginNotification.message = 'Unauthorized Access.';
                            // tslint:disable-next-line: no-conditional-assignment
                        }
                        if (e_2.status == 403) {
                            this.loginNotification.message = 'Something went wrong, please try again.';
                            // tslint:disable-next-line: no-conditional-assignment
                        }
                        console.log(e_2);
                        this.loginNotification.isError = true;
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = false;
                        localStorage.removeItem('htmr-web-token');
                        setTimeout(function () {
                            _this.closeNotification();
                        }, 6000);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.closeNotification = function () {
        this.loginNotification.isError = false;
        this.loginNotification.attempted = false;
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            FormBuilder,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map