import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.loadingMessage = 'Loading Users';
        this.loggedIn = false;
        this.navigations = [
            {
                name: 'Dashboard',
                links: ['', 'dashboard'],
                icon: 'fa fa-dashboard',
                roles: ['all'],
                accessibility: false
            },
            {
                name: 'GeoMaps',
                links: ['', 'geomaps'],
                icon: 'fa fa-map',
                roles: ['all'],
                accessibility: false
            },
            // {
            //   name: 'Data Entry',
            //   links: ['/home', 'data_entry'],
            //   icon: 'fa fa-edit',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            // {
            //   name: 'Basic Reports',
            //   links: ['/home', 'basic_reports'],
            //   icon: 'fa fa-bar-chart',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            // {
            //   name: 'Custom Reports',
            //   links: ['/home', 'reports'],
            //   icon: 'fa fa-bar-chart',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            {
                name: 'Reports',
                links: ['', 'providers_report'],
                icon: 'fa fa-pie-chart',
                roles: ['System Developer'],
                accessibility: false
            },
            // {
            //   name: 'More Reports',
            //   links: ['', 'more_reports'],
            //   icon: 'fa fa-bar-chart',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            // {
            //   name: 'Settings',
            //   links: ['', 'settings', 'services'],
            //   icon: 'fa fa-cogs',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            {
                name: 'Team Management',
                links: ['', 'users'],
                icon: 'fa fa-user',
                roles: ['System Developer'],
                accessibility: false
            },
            // {
            //   name: 'Form Management',
            //   links: ['/home', 'forms'],
            //   icon: 'fa fa-file-text',
            //   roles: ['System Developer'],
            //   accessibility: false
            // },
            {
                name: 'Location Management',
                links: ['', 'location'],
                icon: 'fa fa-map-signs',
                roles: ['System Developer'],
                accessibility: false
            }
        ];
        if (this.http.getToken()) {
            this.loggedIn = true;
        }
    }
    UserService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    UserService.prototype.getNavigation = function () {
        if (this._getLocalStorageNavigation()) {
            return this._getLocalStorageNavigation();
        }
        else {
            return _.compact(this.navigations.map(function (nav) {
                return nav.accessibility ? nav : undefined;
            }));
        }
    };
    UserService.prototype.setNavigation = function (user) {
        var loggedInUser = user.results[0];
        var roles = loggedInUser.allRoles;
        var navigations = _.cloneDeep(this.navigations);
        this.navigations = navigations.map(function (navigation) {
            var exist = false;
            if (navigation.roles.indexOf('all') > -1) {
                navigation.accessibility = true;
                return navigation;
            }
            else {
                roles.forEach(function (roleItem) {
                    if (navigation.roles.indexOf(roleItem.name) > -1) {
                        exist = true;
                    }
                });
            }
            if (exist) {
                navigation.accessibility = true;
            }
            return navigation;
        });
        this._setLocalStorageNavigation(this.navigations);
    };
    UserService.prototype._setLocalStorageNavigation = function (navigations) {
        localStorage.setItem('_report_navigation', JSON.stringify(navigations));
    };
    UserService.prototype._getLocalStorageNavigation = function () {
        return eval(localStorage.getItem('_report_navigation'));
    };
    UserService.prototype.removeLocalStorageNavigation = function () {
        localStorage.removeItem('_report_navigation');
    };
    UserService.prototype.deleteToken = function () {
        this.http.deleteToken();
    };
    UserService.prototype.login = function (loginCredentials) {
        this.http.prepareToken(loginCredentials);
        return this.http.getOpenMRS('user?v=full&username=' + loginCredentials.username);
    };
    UserService.prototype.login1 = function (loginCredentials) {
        this.http.prepareToken(loginCredentials);
        return this.http.getOpenSRP('security/authenticate');
    };
    UserService.prototype.changePassword = function (loginCredentials) {
        var _this = this;
        return Observable.create(function (observer) {
            var payload = {
                "oldPassword": "" + loginCredentials.oldpassword + "",
                "newPassword": "" + loginCredentials.newpassword + ""
            };
            console.log(payload);
            _this.http.postOpenMRS("password", payload)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'password changed successfully';
                observer.next(personResponse);
                observer.complete();
                console.log("successful");
            }, function (error) {
                console.log(error);
                _this.loadingMessage = 'password change  failed';
                observer.error('some error occurrd.');
            });
        });
    };
    UserService.prototype.sessionCheck = function () {
    };
    UserService.prototype.listPersons = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenMRS("person?v=full")
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.listRoles = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenMRS("role?v=default")
                .subscribe(function (personResponse) {
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.createPerson = function (person) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenMRS("person", person)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'person created successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'person creation  failed';
                observer.error('some error occurred.');
            });
        });
    };
    UserService.prototype.updatePerson = function (person, uuid) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.putOpenMRS("person/" + uuid, person)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.deletePerson = function (person) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.deleteOpenMRS("person/" + person.uuid)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.listUsers = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenMRS("user?v=full")
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.createUser = function (user) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenMRS("user", user)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.updateUser = function (user, uuid) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.putOpenMRS("user/" + uuid, user)
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.deleteOpenMRS("user/" + user.uuid + '?purge=true')
                .subscribe(function (personResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(personResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    UserService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map