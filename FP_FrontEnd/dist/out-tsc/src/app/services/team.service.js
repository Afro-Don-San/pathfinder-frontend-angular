import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
        this.loadingMessage = 'Loading Teams';
    }
    TeamService.prototype.listTeams = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenMRS("team/team?v=default&limit=1000")
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamResponse.results);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.createTeam = function (team) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenMRS("team/team", team)
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'Team created successfully';
                observer.next(teamResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'Team creation failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.updateTeam = function (team, uuid) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenMRS("team/team/" + uuid, team)
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.deleteTeam = function (team) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.deleteOpenMRS("team/team/" + team.uuid)
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'Deleted successfully';
                observer.next(teamResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'Deleting failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.listTeamMembers = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenMRS("team/teammember?v=default&limit=1000")
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamResponse.results);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.listTeamRoles = function () {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.getOpenMRS("team/teamrole?v=default")
                .subscribe(function (teamResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamResponse.results);
                observer.complete();
            }, function (error) {
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.createTeamMember = function (teamMember) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.postOpenMRS("team/teammember", teamMember)
                .subscribe(function (teamMemberResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamMemberResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.updateTeamMember = function (teamMember, uuid) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.putOpenMRS("/team/teammember/" + uuid, teamMember)
                .subscribe(function (teamMemberResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamMemberResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService.prototype.deleteTeamMember = function (teamMember) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.http.deleteOpenMRS("/team/teammember/" + teamMember.uuid)
                .subscribe(function (teamMemberResponse) {
                _this.loadingMessage = 'loaded successfully';
                observer.next(teamMemberResponse);
                observer.complete();
            }, function (error) {
                _this.loadingMessage = 'loading failed';
                observer.error('some error occur');
            });
        });
    };
    TeamService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService])
    ], TeamService);
    return TeamService;
}());
export { TeamService };
//# sourceMappingURL=team.service.js.map