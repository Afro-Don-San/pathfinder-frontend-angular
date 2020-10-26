import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { TeamService } from '../../services/team.service';
import { UserService } from '../../services/user.service';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(httpClient, teamService, userService) {
        this.httpClient = httpClient;
        this.teamService = teamService;
        this.userService = userService;
        this.viewDetails = false;
        this.loading = false;
        this.saving_data = false;
        this.teams = [];
        this.teamMembers = [];
        this.tableConfigurations = {
            tableColumns: [
                { name: 'teamIdentifier', label: 'Identifier' },
                { name: 'teamName', label: 'Name' },
                { name: 'supervisor', label: 'Supervisor' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ],
            tableCaption: '',
            tableNotifications: '',
            showSearch: true,
            showBorder: true,
            allowPagination: true,
            actionIcons: { edit: true, delete: true, more: true, print: false, customPrimary: true },
            doneLoading: false,
            deleting: {},
            active: {},
            customPrimaryMessage: 'Add Member',
            empty_msg: 'No Teams'
        };
        this.smallForm = false;
        this.animationSize = 'full';
        this.view_data = '';
        this.formTitle = '';
        this.roles = [];
        this.teamRoles = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.prepareTeamWithMembers();
        this.getRoles();
        this.getTeamRoles();
    };
    UsersComponent.prototype.getItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingMessage = 'Getting Team information...';
                        _a = this;
                        return [4 /*yield*/, this.teamService.listTeams().toPromise()];
                    case 1:
                        _a.teams = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.getTeamMembers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingMessage = 'Getting Team Members information...';
                        _a = this;
                        return [4 /*yield*/, this.teamService.listTeamMembers().toPromise()];
                    case 1:
                        _a.teamMembers = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.getTeamRoles = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.teamService.listTeamRoles().toPromise()];
                    case 1:
                        _a.teamRoles = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.getRoles = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var roles;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.listRoles().toPromise()];
                    case 1:
                        roles = _a.sent();
                        console.log(roles);
                        this.roles = roles.results;
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersComponent.prototype.prepareTeamWithMembers = function () {
        var _this = this;
        this.loading = true;
        this.getItems().then(function (items) {
            _this.getTeamMembers().then(function (members) {
                _this.loading = false;
                _this.teams = _this.teams.map(function (team) { return ({
                    id: team.uuid,
                    uuid: team.uuid,
                    display: team.display,
                    teamName: team.teamName,
                    teamIdentifier: team.teamIdentifier,
                    supervisor: team.supervisor,
                    supervisorUuid: team.supervisorUuid,
                    supervisorTeam: team.supervisorTeam,
                    supervisorTeamUuid: team.supervisorTeamUuid,
                    supervisorIdentifier: team.supervisorIdentifier,
                    location: {
                        uuid: team.location ? team.location.uuid : '',
                        display: team.location ? team.location.display : '',
                        name: team.location ? team.location.name : '',
                    },
                    members: team.members,
                    locationName: team.location ? team.location.display : '',
                    teamMembers: _this.teamMembers
                        .filter(function (member) { return member.team ? member.team.uuid === team.uuid : false; })
                        .map(function (member) { return ({
                        display: member.display,
                        identifier: member.identifier,
                        id: member.uuid,
                        uuid: member.uuid,
                        isDataProvider: member.isDataProvider,
                        person: member.person,
                        teamRole: member.teamRole,
                        locations: member.locations.map(function (location) { return ({
                            uuid: location.uuid,
                            display: location.display,
                            name: location.name,
                            parentLocation: location.parentLocation ? { uuid: location.parentLocation.uuid, display: location.parentLocation.display } : null,
                            childLocations: location.childLocations.map(function (child) { return ({
                                uuid: child.uuid,
                                display: child.display
                            }); })
                        }); })
                    }); })
                }); });
            });
        });
    };
    UsersComponent.prototype.add = function () {
        this.viewDetails = true;
        this.currentTeam = null;
        this.view_data = 'addData';
        this.smallForm = true;
        this.formTitle = 'Create new Team';
        this.tableConfigurations = tslib_1.__assign({}, this.tableConfigurations, { tableColumns: [
                { name: 'teamName', label: 'Name' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ] });
    };
    UsersComponent.prototype.viewMore = function (item) {
        console.log(item);
        this.currentTeam = item;
        this.smallForm = false;
        this.viewDetails = true;
        this.view_data = 'moreDetails';
        this.formTitle = "" + item.teamName;
    };
    UsersComponent.prototype.onUpdate = function (item) {
        this.currentTeam = item;
        this.view_data = 'addData';
        this.viewDetails = true;
        this.formTitle = "Update " + item.teamName;
        this.smallForm = true;
        this.tableConfigurations = tslib_1.__assign({}, this.tableConfigurations, { tableColumns: [
                { name: 'teamName', label: 'Name' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ] });
    };
    UsersComponent.prototype.addMember = function (team) {
        this.currentTeam = team;
        this.view_data = 'addMember';
        this.viewDetails = true;
        this.smallForm = false;
        this.animationSize = 'full';
        this.formTitle = "Add Team Member to " + team.teamName;
    };
    UsersComponent.prototype.onDelete = function (item) {
        var _this = this;
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
        this.teamService.deleteTeam(item).subscribe(function (success) {
            _this.httpClient.showSuccess('Team Deleted Successful');
            _this.tableConfigurations.deleting = {};
            _this.prepareTeamWithMembers();
        }, function (error) {
            _this.tableConfigurations.deleting = {};
            _this.httpClient.showError('Failed to Delete Team Please Try again letter');
        });
    };
    UsersComponent.prototype.closeForm = function () {
        this.viewDetails = false;
        this.view_data = '';
        this.currentTeam = null;
        this.tableConfigurations = tslib_1.__assign({}, this.tableConfigurations, { tableColumns: [
                { name: 'teamIdentifier', label: 'Identifier' },
                { name: 'teamName', label: 'Name' },
                { name: 'supervisor', label: 'Supervisor' },
                { name: 'locationName', label: 'Location' },
                { name: 'members', label: 'Members', type: 'number' },
            ] });
    };
    UsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClientService,
            TeamService,
            UserService])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map