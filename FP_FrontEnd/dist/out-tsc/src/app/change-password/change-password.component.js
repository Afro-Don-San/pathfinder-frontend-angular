import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginNotification = { isError: false, message: '', attempted: false, loading: false };
        this.customeUsernameNotifier = false;
        this.customePasswordNotifier = false;
        this.hide = true;
        this.ChangePasswordForm = this.formBuilder.group({
            oldpassword: ['', Validators.required],
            newpassword: ['', Validators.required],
            confirmpassword: ['', Validators.required]
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('htmr-web-token');
        var location = localStorage.getItem('htmr-starting-location');
    };
    ChangePasswordComponent.prototype.changePassword = function (loginCredentials) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.ChangePasswordForm.valid) return [3 /*break*/, 6];
                        this.loginNotification.loading = true;
                        if (!(this.ChangePasswordForm.value.newpassword == this.ChangePasswordForm.value.confirmpassword)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // const openMrsResult: any = await this.userService.changePassword(loginCredentials).toPromise();
                        // console.log(openMrsResult);
                        // if (openMrsResult)
                        return [4 /*yield*/, this.userService.changePassword(loginCredentials).toPromise()];
                    case 2:
                        // const openMrsResult: any = await this.userService.changePassword(loginCredentials).toPromise();
                        // console.log(openMrsResult);
                        // if (openMrsResult)
                        _a.sent();
                        {
                            this.loginNotification.isError = false;
                            this.loginNotification.message = "Password change successful.";
                            this.loginNotification.attempted = true;
                            this.loginNotification.loading = false;
                            setTimeout(function () {
                                _this.closeNotification();
                            }, 6000);
                            this.userService.deleteToken();
                            this.router.navigate(['', 'login']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.loginNotification.isError = true;
                        this.loginNotification.message = "Operation failed, please check password and try again.";
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.userService.loggedIn = false;
                        setTimeout(function () {
                            _this.closeNotification();
                        }, 6000);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.loginNotification.isError = true;
                        this.loginNotification.attempted = true;
                        this.loginNotification.loading = false;
                        this.loginNotification.message = "Passwords do not match.";
                        setTimeout(function () {
                            _this.closeNotification();
                        }, 6000);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ChangePasswordComponent.prototype.closeNotification = function () {
        this.loginNotification.isError = false;
        this.loginNotification.attempted = false;
    };
    ChangePasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            FormBuilder,
            Router])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map