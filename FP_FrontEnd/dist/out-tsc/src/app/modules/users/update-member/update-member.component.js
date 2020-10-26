import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { TeamService } from '../../../services/team.service';
import { HttpClientService } from '../../../services/http-client.service';
var UpdateMemberComponent = /** @class */ (function () {
    function UpdateMemberComponent(formBuilder, teamService, dialogRef, data, http) {
        this.formBuilder = formBuilder;
        this.teamService = teamService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.orgunit = null;
        this.orgunitnames = '';
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
        this.startingOu = [];
    }
    UpdateMemberComponent.prototype.ngOnInit = function () {
        this.teamMemberForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            familyName: [''],
            gender: ['', Validators.required],
            age: [''],
            team: [''],
            teamRole: [''],
            assignedLocation: [''],
            isProvider: ['']
        });
        if (this.data.team) {
            this.teamMemberForm.patchValue({
                team: this.data.team.uuid
            });
        }
        if (this.data.member) {
            this.teamMemberForm.patchValue({
                firstName: this.data.member.person.names
            });
        }
    };
    UpdateMemberComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.teamMemberForm.patchValue({
            assignedLocation: orgunit.value
        });
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    UpdateMemberComponent.prototype.save = function () {
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
        this.loading = true;
        var teamMember = {
            person: { uuid: this.data.member.person.uuid },
            teamRole: formData.teamRole,
            locations: [
                { uuid: formData.assignedLocation }
            ],
            team: { uuid: this.data.team.uuid },
            isDataProvider: true,
            identifier: this.data.member.identifier
        };
        this.teamService.createTeamMember(teamMember).subscribe(function (teamMemberResponse) {
            console.log(teamMemberResponse);
            _this.loading = false;
            _this.http.showSuccess('Team member has been updated successful');
        }, function (teamMemberError) {
        });
    };
    UpdateMemberComponent = tslib_1.__decorate([
        Component({
            selector: 'app-update-member',
            templateUrl: './update-member.component.html',
            styleUrls: ['./update-member.component.scss']
        }),
        tslib_1.__param(3, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            TeamService,
            MatDialogRef, Object, HttpClientService])
    ], UpdateMemberComponent);
    return UpdateMemberComponent;
}());
export { UpdateMemberComponent };
//# sourceMappingURL=update-member.component.js.map