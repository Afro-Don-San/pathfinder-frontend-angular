import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeIn } from '../../../shared/animations/router-animation';
import { TeamService } from '../../../services/team.service';
import { HttpClientService } from '../../../services/http-client.service';
var AddTeamComponent = /** @class */ (function () {
    function AddTeamComponent(teamService, http) {
        this.teamService = teamService;
        this.http = http;
        this.orgunit = null;
        this.orgunitnames = '';
        this.close = new EventEmitter();
        this.saved = new EventEmitter();
        this.current_orgunits = [];
        this.orgunit_tree_config = {
            show_search: true,
            search_text: 'Search',
            level: null,
            loading: true,
            loading_message: 'Loading Organisation units...',
            multiple: true,
            multiple_key: 'control',
            placeholder: 'Select Location'
        };
        this.loading = false;
    }
    AddTeamComponent.prototype.ngOnInit = function () {
        if (this.team) {
            this.teamName = this.team.teamName;
            this.teamIdentifier = this.team.teamIdentifier;
            this.startingLocation = this.team.location.uuid;
            this.current_orgunits = [this.startingLocation];
        }
    };
    AddTeamComponent.prototype.changeOrgUnit = function (orgunit) {
        this.orgunit = orgunit;
        this.orgunitnames = orgunit.items.map(function (d) { return d.name; }).join(', ');
    };
    AddTeamComponent.prototype.closeForm = function () {
        this.close.emit();
    };
    AddTeamComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        var team = {
            teamName: this.teamName,
            teamIdentifier: this.teamIdentifier,
            location: this.orgunit.value
        };
        var resItems$;
        if (this.team) {
            resItems$ = this.teamService.updateTeam(team, this.team.uuid);
        }
        else {
            resItems$ = this.teamService.createTeam(team);
        }
        resItems$.subscribe(function (success) {
            _this.loading = false;
            _this.saved.emit();
            _this.closeForm();
            _this.http.showSuccess('Team Created Successful');
        }, function (error) {
            _this.loading = false;
            _this.http.showError('Failed to Create Team please try again');
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AddTeamComponent.prototype, "team", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddTeamComponent.prototype, "close", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddTeamComponent.prototype, "saved", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AddTeamComponent.prototype, "orgunit_tree_config", void 0);
    AddTeamComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-team',
            templateUrl: './add-team.component.html',
            styleUrls: ['./add-team.component.scss'],
            animations: [fadeIn]
        }),
        tslib_1.__metadata("design:paramtypes", [TeamService,
            HttpClientService])
    ], AddTeamComponent);
    return AddTeamComponent;
}());
export { AddTeamComponent };
//# sourceMappingURL=add-team.component.js.map