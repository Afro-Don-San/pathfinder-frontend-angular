import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeIn } from '../../../shared/animations/router-animation';
import { UserService } from '../../../services/user.service';
import { TeamService } from '../../../services/team.service';
import { HttpClientService } from '../../../services/http-client.service';
var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(formBuilder, userService, teamService, http) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.teamService = teamService;
        this.http = http;
        this.orgunit = null;
        this.orgunitnames = '';
        this.close = new EventEmitter();
        this.saved = new EventEmitter();
        this.orgunit_tree_config = {
            show_search: true,
            search_text: 'Search',
            level: null,
            loading: true,
            loading_message: 'Loading Organisation units...',
            multiple: true,
            multiple_key: 'control',
            placeholder: 'Assigned Location'
        };
        this.loading = false;
    }
    AddMemberComponent.prototype.ngOnInit = function () {
        this.teamMemberForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            familyName: [''],
            gender: ['', Validators.required],
            age: [''],
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            roles: [[], Validators.required],
            team: [''],
            teamRole: [''],
            assignedLocation: [''],
            isProvider: ['']
        });
        if (this.team) {
            this.teamMemberForm.patchValue({
                team: this.team.uuid
            });
        }
    };
    AddMemberComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.teamMemberForm.patchValue({
            assignedLocation: orgunit.value
        });
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    AddMemberComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    AddMemberComponent.prototype.save = function () {
        var _this = this;
        var formData = this.teamMemberForm.value;
        var person = {
            names: [
                {
                    givenName: formData.firstName,
                    familyName: formData.familyName
                }
            ],
            gender: formData.gender,
            age: formData.age
        };
        var userObject = {
            password: formData.password,
            person: person,
            roles: this.roles.filter(function (role) { return formData.roles.indexOf(role.uuid) !== -1; }),
            username: formData.username
        };
        this.loading = true;
        this.userService.createUser(userObject).subscribe(function (userResponse) {
            _this.userObject = userResponse;
            var teamMember = {
                person: { uuid: _this.userObject.person.uuid },
                teamRole: formData.teamRole,
                locations: [
                    { uuid: formData.assignedLocation }
                ],
                team: { uuid: _this.team.uuid },
                isDataProvider: true,
                identifier: _this.userObject.person.uuid
            };
            _this.teamService.createTeamMember(teamMember).subscribe(function (teamMemberResponse) {
                console.log(teamMemberResponse);
                _this.loading = false;
                _this.saved.emit();
                _this.close.emit();
                _this.http.showSuccess('Team member has been created successful');
            }, function (teamMemberError) {
            });
        }, function (userError) {
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], AddMemberComponent.prototype, "roles", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AddMemberComponent.prototype, "team", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], AddMemberComponent.prototype, "teamRoles", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddMemberComponent.prototype, "close", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddMemberComponent.prototype, "saved", void 0);
    AddMemberComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-member',
            templateUrl: './add-member.component.html',
            styleUrls: ['./add-member.component.scss'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            UserService,
            TeamService,
            HttpClientService])
    ], AddMemberComponent);
    return AddMemberComponent;
}());
export { AddMemberComponent };
//# sourceMappingURL=add-member.component.js.map