import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
var HttpClientService = /** @class */ (function () {
    function HttpClientService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.DHISAPIURL = '../../../dhis/api/';
        // Dev Environment conf
        this.OPENSRPAPIURL = '../opensrp/';
        this.OPENMRSURL = '../openmrs/ws/rest/v1/';
        this.DJANGOURL = '/api_';
    }
    HttpClientService.prototype.prepareToken = function (credentials) {
        var username = credentials.username;
        var password = credentials.password;
        var token = btoa(username + ':' + password);
        localStorage.setItem('htmr-web-token', token);
        if (typeof (Storage) !== undefined) {
            window.sessionStorage.setItem('htmr-web-token', token);
        }
        else {
            // TODO: execute block of codes if there is not local storage support
        }
        return token;
    };
    HttpClientService.prototype.getToken = function () {
        var token = localStorage.getItem('htmr-web-token');
        console.log("generated token is here", token);
        return token;
    };
    HttpClientService.prototype.deleteToken = function () {
        localStorage.removeItem('htmr-web-token');
        localStorage.removeItem('htmr-starting-location');
        window.sessionStorage.removeItem("htmr-web-token");
        if (typeof (Storage) !== undefined) {
            window.sessionStorage.removeItem('AuthToken');
        }
        else {
            // TODO: execute block of codes if there is not local storage support
        }
    };
    HttpClientService.prototype.createDHISAuthorizationHeader = function () {
        var username = 'admin';
        var password = 'district';
        var token = btoa(username + ':' + password);
        var headers = new HttpHeaders({ Authorization: 'Basic ' + token });
        return headers;
    };
    HttpClientService.prototype.createOpenMRSAuthorizationHeader = function (token) {
        var headers = new HttpHeaders();
        headers.append('Authorization', 'Basic ' + token);
        return 'Basic ' + token;
    };
    HttpClientService.prototype.createDjangoAuthorizationHeader = function (token) {
        var headers = new HttpHeaders();
        headers.append('Authorization', 'Basic' + token);
        return 'Basic ' + token;
    };
    HttpClientService.prototype.createOPENSRPAuthorizationHeader = function () {
        var token = this.getToken();
        var headers = new HttpHeaders();
        headers.append('Authorization', 'Basic ' + token);
        return headers;
    };
    HttpClientService.prototype.get = function (url) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.get(this.DHISAPIURL + url, { headers: headers });
    };
    HttpClientService.prototype.getOpenMRS = function (url) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.get(this.OPENMRSURL + url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.getOpenMRSLocation = function (url) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.get('../../../openmrs/q/' + url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.getDHIS = function (url) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.get(this.DHISAPIURL + url, {
            headers: headers
        });
    };
    HttpClientService.prototype.postOpenMRS = function (url, data, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.post(this.OPENMRSURL + url, data, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.postDHIS = function (url, data, options) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.post(this.DHISAPIURL + url, data, { headers: headers });
    };
    HttpClientService.prototype.putDHIS = function (url, data, options) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.put(this.DHISAPIURL + url, data, { headers: headers });
    };
    HttpClientService.prototype.login1 = function (loginCredentials) {
        return this.getOpenSRP('security/authenticate');
    };
    HttpClientService.prototype.postOpenSRP = function (url, data, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.post(this.OPENSRPAPIURL + url, data, {
            headers: new HttpHeaders()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.postOpenSRP1 = function (url, data, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        var postOptions = {
            headers: new HttpHeaders().set('Authorization', headers),
            responseType: 'text'
        };
        return this.http.post(this.OPENSRPAPIURL + url, data, { headers: new HttpHeaders().set('Authorization', headers), responseType: 'text' });
    };
    HttpClientService.prototype.getOpenSRP = function (url) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        // const headers: HttpHeaders = this.createOPENSRPAuthorizationHeader();
        return this.http.get(this.OPENSRPAPIURL + url, {
            headers: new HttpHeaders()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.postDJANGOURL = function (url, data, options) {
        return this.http.post(this.DJANGOURL + url, data, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });
    };
    HttpClientService.prototype.getDJANGOURL = function (url) {
        return this.http.get(this.DJANGOURL + url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });
    };
    HttpClientService.prototype.getDJANGOURL1 = function (url, data, options) {
        return this.http.get(this.DJANGOURL + url, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        });
    };
    HttpClientService.prototype.deleteOpenSRP = function (url, id) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.delete(this.OPENSRPAPIURL + url + '/' + id, {
            headers: new HttpHeaders()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.updateOpenSRP = function (url, data, id) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.put(this.OPENSRPAPIURL + url + '/' + id, data, {
            headers: new HttpHeaders()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.deleteDHIS = function (url, options) {
        var headers = this.createDHISAuthorizationHeader();
        return this.http.delete(this.DHISAPIURL + url, { headers: headers });
    };
    HttpClientService.prototype.putOpenMRS = function (url, data, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.post(this.OPENMRSURL + url, data, {
            headers: new HttpHeaders()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.deleteOpenMRS = function (url, options) {
        var headers = this.createOpenMRSAuthorizationHeader(this.getToken());
        return this.http.delete(this.OPENMRSURL + url, {
            headers: new HttpHeaders()
                .set('Authorization', headers)
        });
    };
    HttpClientService.prototype.showSuccess = function (message) {
        if (message === void 0) { message = 'Success'; }
        this.snackBar.open(message, 'Ok', {
            duration: 2500,
            panelClass: 'success'
        });
    };
    HttpClientService.prototype.showError = function (message, duration) {
        if (message === void 0) { message = 'Operation Failed'; }
        if (duration === void 0) { duration = 2500; }
        this.snackBar.open(message, 'Ok', { duration: duration, panelClass: 'error' });
    };
    HttpClientService.prototype.showWarning = function (message, duration) {
        if (message === void 0) { message = 'Something went wrong'; }
        if (duration === void 0) { duration = 2500; }
        this.snackBar.open(message, 'Ok', { duration: duration, panelClass: 'warning' });
    };
    HttpClientService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, MatSnackBar])
    ], HttpClientService);
    return HttpClientService;
}());
export { HttpClientService };
//# sourceMappingURL=http-client.service.js.map