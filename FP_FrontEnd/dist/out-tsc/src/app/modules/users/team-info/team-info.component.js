import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { HttpClientService } from '../../../services/http-client.service';
import { MatDialog } from '@angular/material';
import { UpdateMemberComponent } from '../update-member/update-member.component';
import { UserService } from '../../../services/user.service';
var TeamInfoComponent = /** @class */ (function () {
    function TeamInfoComponent(teamService, http, dialog, userService) {
        this.teamService = teamService;
        this.http = http;
        this.dialog = dialog;
        this.userService = userService;
        this.close = new EventEmitter();
        this.saved = new EventEmitter();
        this.tableConfigurations = {
            tableColumns: [
                { name: 'identifier', label: 'Identifier' },
                { name: 'display', label: 'Name' },
                { name: 'age', label: 'Age' },
                { name: 'gender', label: 'Gender' },
                { name: 'teamRole', label: 'Team Role' },
                { name: 'locationNames', label: 'Location' },
            ],
            tableCaption: '',
            tableNotifications: '',
            showSearch: true,
            showBorder: true,
            allowPagination: true,
            actionIcons: { edit: false, delete: false, more: false, print: false },
            doneLoading: false,
            deleting: {},
            active: {},
            empty_msg: 'No Members for '
        };
        this.members = [];
    }
    TeamInfoComponent.prototype.ngOnInit = function () {
        if (this.team && this.team.teamMembers) {
            this.tableConfigurations.empty_msg = "No members for " + this.team.display;
            this.members = this.team.teamMembers.map(function (member) {
                return tslib_1.__assign({}, member, { id: member.uuid, gender: member.person ? member.person.gender : '', age: member.person ? member.person.age : '', teamRole: member.teamRole ? member.teamRole.display : '', locationNames: member.locations && member.locations.length > 0
                        ? member.locations.map(function (location) { return location.display; }).join(', ')
                        : '' });
            });
        }
    };
    TeamInfoComponent.prototype.onUpdate = function (event) {
        var dialogRef = this.dialog.open(UpdateMemberComponent, {
            width: '70%',
            data: {
                member: event,
                team: this.team,
                teamRoles: this.teamRoles
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    TeamInfoComponent.prototype.onDelete = function (item) {
        var _this = this;
        this.tableConfigurations.deleting = {};
        this.tableConfigurations.deleting[item.id] = true;
        this.teamService.deleteTeamMember(item).subscribe(function (resut) {
            _this.tableConfigurations.deleting = {};
            _this.http.showSuccess('Deleted Successful');
            _this.userService.deletePerson(item.person).subscribe();
            _this.saved.emit();
            _this.members = _this.members.filter(function (member) { return member.uuid !== item.uuid; });
        }, function (error1) {
            _this.tableConfigurations.deleting = {};
            _this.http.showError('Something went wrong while deleting');
        });
    };
    TeamInfoComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], TeamInfoComponent.prototype, "team", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TeamInfoComponent.prototype, "teamRoles", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TeamInfoComponent.prototype, "close", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TeamInfoComponent.prototype, "saved", void 0);
    TeamInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-team-info',
            templateUrl: './team-info.component.html',
            styleUrls: ['./team-info.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [TeamService,
            HttpClientService,
            MatDialog,
            UserService])
    ], TeamInfoComponent);
    return TeamInfoComponent;
}());
export { TeamInfoComponent };
//# sourceMappingURL=team-info.component.js.map