import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TreeComponent, TREE_ACTIONS } from 'angular-tree-component';
import { OrgUnitService } from '../../../services/org-unit.service';
import { LocationService } from '../../../services/location.service';
import * as _ from 'lodash';
var OrgUnitFilterComponent = /** @class */ (function () {
    function OrgUnitFilterComponent(orgunitService, locationService) {
        this.orgunitService = orgunitService;
        this.locationService = locationService;
        // the object that will carry the output value you can send one from outside to config start values
        this.orgunit_model = {
            selection_mode: 'orgUnit',
            selected_levels: [],
            show_update_button: true,
            selected_groups: [],
            orgunit_levels: [],
            orgunit_groups: [],
            selected_orgunits: [],
            user_orgunits: [],
            type: 'report',
            selected_user_orgunit: []
        };
        this.initial_usr_orgunit = [];
        // The organisation unit configuration object This will have to come from outside.
        this.orgunit_tree_config = {
            show_search: true,
            search_text: 'Search',
            level: null,
            loading: true,
            loading_message: 'Loading Organisation units...',
            multiple: true,
            multiple_key: 'none',
            placeholder: 'Select Location'
        };
        this.showUpdate = false;
        this.pickChildren = true;
        this.onOrgUnitUpdate = new EventEmitter();
        this.onOrgUnitChange = new EventEmitter();
        this.onOrgUnitModelUpdate = new EventEmitter();
        this.orgUnit = {};
        this.root_url = '../../../';
        this.nodes = null;
        this.orgunit_levels = [];
        this.visit_locations = [];
        this.organisationunits = [];
        this.selected_orgunits = [];
        this.current_orgunits = [];
        // this variable controls the visibility of of the tree
        this.showOrgTree = true;
        this.user_orgunits_types = [
            { id: 'USER_ORGUNIT', name: 'User orgunit', shown: true },
            { id: 'USER_ORGUNIT_CHILDREN', name: 'User sub-units', shown: true },
            { id: 'USER_ORGUNIT_GRANDCHILDREN', name: 'User sub-x2-units', shown: true }
        ];
        this.onEvent = function ($event) { return console.log($event); };
        if (!this.orgunit_tree_config.hasOwnProperty('multiple_key')) {
            this.orgunit_tree_config.multiple_key = 'none';
        }
    }
    OrgUnitFilterComponent.prototype.updateModelOnSelect = function (data) {
        if (!this.orgunit_model.show_update_button) {
            this.onOrgUnitUpdate.emit({ name: 'ou', value: data.id });
            this.displayOrgTree();
        }
    };
    OrgUnitFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.orgunit_tree_config.multiple) {
            if (this.orgunit_tree_config.multiple_key === 'none') {
                var actionMapping = {
                    mouse: {
                        dblClick: TREE_ACTIONS.TOGGLE_EXPANDED,
                        click: function (node, tree, $event) { return TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(node, tree, $event); }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
            else if (this.orgunit_tree_config.multiple_key === 'control') { // multselect using control key
                var actionMapping = {
                    mouse: {
                        click: function (node, tree, $event) {
                            $event.ctrlKey
                                ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : TREE_ACTIONS.TOGGLE_SELECTED(node, tree, $event);
                        }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
            else if (this.orgunit_tree_config.multiple_key === 'shift') { // multselect using shift key
                var actionMapping = {
                    mouse: {
                        click: function (node, tree, $event) {
                            $event.shiftKey
                                ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(node, tree, $event)
                                : TREE_ACTIONS.TOGGLE_SELECTED(node, tree, $event);
                        }
                    }
                };
                this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
            }
        }
        else {
            var actionMapping = {
                mouse: {
                    dblClick: TREE_ACTIONS.TOGGLE_EXPANDED,
                    click: function (node, tree, $event) { return TREE_ACTIONS.TOGGLE_SELECTED(node, tree, $event); }
                }
            };
            this.customTemplateStringOrgunitOptions = { actionMapping: actionMapping };
        }
        // if (this.orgunitService.nodes === null) {
        this.locationService.loadTreeLocations().subscribe((function (locations) {
            // get top level locations
            var top_locations = locations;
            // filter down to remain with only visit facilities
            var starting_location = localStorage.getItem('htmr-starting-location');
            var visit_location = _.find(top_locations, { uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec' });
            _this.visit_locations.push({
                //Level 1
                name: visit_location.name,
                id: visit_location.uuid,
                level: 1,
                parents: ""
            });
            visit_location = {
                name: visit_location.name,
                id: visit_location.uuid,
                level: 1,
                children: visit_location.childLocations.map(function (location) {
                    var child_loc = _this.getChildOrgunits(locations, location.uuid);
                    _this.visit_locations.push({
                        //Level 2
                        name: child_loc.name,
                        id: child_loc.uuid,
                        level: 2,
                        parents: "" + visit_location.uuid
                    });
                    return {
                        name: child_loc.name,
                        id: child_loc.uuid,
                        level: 2,
                        children: child_loc.childLocations.map(function (child) {
                            var before_last_child = _this.getChildOrgunits(locations, child.uuid);
                            _this.visit_locations.push({
                                //Level 3
                                name: before_last_child.name,
                                id: before_last_child.uuid,
                                level: 3,
                                parents: visit_location.uuid + ";" + child_loc.uuid
                            });
                            return {
                                name: before_last_child.name,
                                id: before_last_child.uuid,
                                level: 3,
                                children: before_last_child.childLocations.map(function (level3child) {
                                    var last_child = _this.getChildOrgunits(locations, level3child.uuid);
                                    _this.visit_locations.push({
                                        //Level 4
                                        name: last_child.name,
                                        id: last_child.uuid,
                                        level: 4,
                                        parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid
                                    });
                                    return {
                                        name: last_child.name,
                                        id: last_child.uuid,
                                        level: 4,
                                        // children: facility.childLocations
                                        children: last_child.childLocations.map(function (level4child) {
                                            var facility = _this.getChildOrgunits(top_locations, level4child.uuid);
                                            _this.visit_locations.push({
                                                //Level 5
                                                name: facility.name,
                                                id: facility.uuid,
                                                level: 5,
                                                parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid
                                            });
                                            return {
                                                name: facility.name,
                                                id: facility.uuid,
                                                level: 5,
                                                children: facility.childLocations.map(function (level5child) {
                                                    var village = _this.getChildOrgunits(top_locations, level5child.uuid);
                                                    _this.visit_locations.push({
                                                        //Level 6
                                                        name: village.name,
                                                        id: village.uuid,
                                                        level: 6,
                                                        parents: visit_location.uuid + ";" + child_loc.uuid + ";" + before_last_child.uuid + ";" + last_child.uuid + facility.uuid + ";"
                                                    });
                                                    return {
                                                        name: village.name,
                                                        id: village.uuid,
                                                        level: 6
                                                    };
                                                })
                                            };
                                        })
                                    };
                                })
                            };
                        })
                    };
                })
            };
            _this.organisationunits = [visit_location];
            _this.orgunitService.nodes = [visit_location];
            _this.nodes = [visit_location];
            _this.orgunit_tree_config.loading = false;
            _this.orgunitService.visit_locations = _this.visit_locations;
            for (var _i = 0, _a = _this.current_orgunits; _i < _a.length; _i++) {
                var active_orgunit = _a[_i];
                _this.activateNode(active_orgunit, _this.orgtree, true);
            }
        }));
        // } else {
        //   this.organisationunits = this.orgunitService.nodes;
        //   this.orgunit_tree_config.loading = false;
        //   this.visit_locations = this.orgunitService.visit_locations;
        // }
        // if (this.orgunitService.nodes === null) {
        //   this.orgunitService.getOrgunitLevelsInformation()
        //     .subscribe(
        //       (data: any) => {
        //         // assign urgunit levels and groups to variables
        //         this.orgunit_model.orgunit_levels = data.organisationUnitLevels;
        //         // setting organisation groups
        //         this.orgunitService.getOrgunitGroups().subscribe( groups => {//noinspection TypeScriptUnresolvedVariable
        //           this.orgunit_model.orgunit_groups = groups;
        //         });
        //
        //         // identify currently logged in usser
        //         this.orgunitService.getUserInformation(this.orgunit_model.type).subscribe(
        //           userOrgunit => {
        //             const level = this.orgunitService.getUserHighestOrgUnitlevel( userOrgunit );
        //             this.orgunit_model.user_orgunits = this.orgunitService.getUserOrgUnits( userOrgunit );
        //             this.orgunitService.user_orgunits = this.orgunitService.getUserOrgUnits( userOrgunit );
        //             const all_levels = data.pager.total;
        //             const orgunits = this.orgunitService.getuserOrganisationUnitsWithHighestlevel( level, userOrgunit );
        //             const use_level = parseInt(all_levels) - (parseInt(level) - 1);
        //             // load inital orgiunits to speed up loading speed
        //             this.orgunitService.getInitialOrgunitsForTree(orgunits).subscribe(
        //               (initial_data) => {
        //                 this.organisationunits = initial_data;
        //                 // a hack to make sure the user orgunit is not triggered on the first time
        //                 this.initial_usr_orgunit = [{id: 'USER_ORGUNIT', name: 'User org unit'}];
        //                 // after done loading initial organisation units now load all organisation units
        //                 const fields = this.orgunitService.generateUrlBasedOnLevels(use_level);
        //                 this.orgunitService.getAllOrgunitsForTree1(fields, orgunits).subscribe(
        //                   items => {
        //                     items[0].expanded = true;
        //                     this.organisationunits = items;
        //
        //                     this.orgunit_tree_config.loading = false;
        //                     // activate organisation units
        //                     for (const active_orgunit of this.orgunit_model.selected_orgunits) {
        //                       this.activateNode(active_orgunit.id, this.orgtree, true);
        //                     }
        //                     if (this.orgunit_model.selected_user_orgunit.length !== 0) {
        //                       this.emit(false);
        //                     }
        //                     // backup to make sure that always there is default organisation unit
        //                     // if (this.orgunit_model.selected_orgunits.length === 0 && this.orgunit_model.selected_user_orgunit.length === 0) {
        //                     //   for (const active_orgunit of this.orgunit_model.user_orgunits) {
        //                     //     this.activateNode(active_orgunit.id, this.orgtree, true);
        //                     //   }
        //                     // }
        //                     this.prepareOrganisationUnitTree(this.organisationunits, 'parent');
        //                   },
        //                   error => {
        //                     console.log('something went wrong while fetching Organisation units');
        //                     this.orgunit_tree_config.loading = false;
        //                   }
        //                 );
        //               },
        //               error => {
        //                 console.log('something went wrong while fetching Organisation units');
        //                 this.orgunit_tree_config.loading = false;
        //               }
        //             );
        //
        //           }
        //         );
        //       }
        //     );
    };
    OrgUnitFilterComponent.prototype.getChildOrgunits = function (orgunits, uuid) {
        return _.find(orgunits, { uuid: uuid });
    };
    OrgUnitFilterComponent.prototype.updateOrgunits = function () {
        this.displayOrgTree();
        this.emit(true);
    };
    OrgUnitFilterComponent.prototype.clearAll = function () {
        for (var _i = 0, _a = this.orgunit_model.selected_orgunits; _i < _a.length; _i++) {
            var active_orgunit = _a[_i];
            this.deActivateNode(active_orgunit.id, this.orgtree, null);
        }
    };
    OrgUnitFilterComponent.prototype.setType = function (type) {
        this.orgunit_model.selection_mode = type;
        if (type !== 'orgUnit') {
            this.orgunit_model.selected_user_orgunit = [];
        }
        if (type !== 'Level') {
            this.orgunit_model.selected_levels = [];
        }
        if (type !== 'Group') {
            this.orgunit_model.selected_groups = [];
        }
    };
    // display Orgunit Tree
    OrgUnitFilterComponent.prototype.displayOrgTree = function () {
        this.showOrgTree = !this.showOrgTree;
    };
    OrgUnitFilterComponent.prototype.filterNodes = function (value, tree) {
        tree.treeModel.filterNodes(function (node) {
            return !node.data.name.startsWith(value);
        });
    };
    OrgUnitFilterComponent.prototype.activateNode = function (nodeId, nodes, first) {
        setTimeout(function () {
            var node = nodes.treeModel.getNodeById(nodeId);
            if (node) {
                node.setIsActive(true, true);
            }
            if (first) {
                node.toggleExpanded();
            }
        }, 0);
    };
    // a method to activate the model
    OrgUnitFilterComponent.prototype.deActivateNode = function (nodeId, nodes, event) {
        setTimeout(function () {
            var node = nodes.treeModel.getNodeById(nodeId);
            if (node) {
                node.setIsActive(false, true);
            }
        }, 0);
        if (event !== null) {
            event.stopPropagation();
        }
    };
    // check if orgunit already exist in the orgunit display list
    OrgUnitFilterComponent.prototype.checkOrgunitAvailabilty = function (orgunit, array) {
        var checker = false;
        array.forEach(function (value) {
            if (value.id === orgunit.id) {
                checker = true;
            }
        });
        return checker;
    };
    // action to be called when a tree item is deselected(Remove item in array of selected items
    OrgUnitFilterComponent.prototype.deactivateOrg = function ($event) {
        var _this = this;
        // this.period_selector.reset();
        if (this.orgunit_model.selection_mode === 'Usr_orgUnit') {
            this.orgunit_model.selection_mode = 'orgUnit';
            // this.period_selector.reset();
        }
        this.orgunit_model.selected_orgunits.forEach(function (item, index) {
            if ($event.node.data.id === item.id) {
                _this.orgunit_model.selected_orgunits.splice(index, 1);
            }
        });
        this.emit(false);
        // $event.node.isFocused = false;
    };
    // add item to array of selected items when item is selected
    OrgUnitFilterComponent.prototype.activateOrg = function ($event) {
        if (this.orgunit_model.selection_mode === 'Usr_orgUnit') {
            this.orgunit_model.selection_mode = 'orgUnit';
            // this.period_selector.reset();
        }
        if (!this.checkOrgunitAvailabilty($event.node.data, this.orgunit_model.selected_orgunits)) {
            this.orgunit_model.selected_orgunits.push({
                id: $event.node.data.id,
                name: $event.node.data.name,
                level: $event.node.data.level
            });
        }
        this.orgUnit = $event.node.data;
        this.emit(false);
    };
    OrgUnitFilterComponent.prototype.emit = function (showUpdate) {
        console.log({
            visit_locations: this.visit_locations,
            starting_name: this.getProperPreOrgunitName(),
            items: this.orgunit_model.selected_orgunits,
            name: 'ou',
            value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
        });
        if (showUpdate) {
            this.onOrgUnitUpdate.emit({
                visit_locations: this.visit_locations,
                starting_name: this.getProperPreOrgunitName(),
                items: this.orgunit_model.selected_orgunits,
                name: 'ou',
                value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
            });
        }
        else {
            this.onOrgUnitChange.emit({
                visit_locations: this.visit_locations,
                starting_name: this.getProperPreOrgunitName(),
                items: this.orgunit_model.selected_orgunits,
                name: 'ou',
                value: this.getOrgUnitsForAnalytics(this.orgunit_model, this.pickChildren)
            });
        }
    };
    // set selected groups
    OrgUnitFilterComponent.prototype.setSelectedGroups = function (selected_groups) {
        this.orgunit_model.selected_groups = selected_groups;
        this.onOrgUnitModelUpdate.emit(this.orgunit_model);
    };
    // set selected groups
    OrgUnitFilterComponent.prototype.setSelectedUserOrg = function (selected_user_orgunit) {
        this.orgunit_model.selected_user_orgunit = selected_user_orgunit;
        this.emit(false);
    };
    // set selected groups
    OrgUnitFilterComponent.prototype.setSelectedLevels = function (selected_levels) {
        this.orgunit_model.selected_levels = selected_levels;
        this.emit(false);
    };
    OrgUnitFilterComponent.prototype.prepareOrganisationUnitTree = function (organisationUnit, type) {
        var _this = this;
        if (type === void 0) { type = 'top'; }
        if (type === 'top') {
            if (organisationUnit.children) {
                organisationUnit.children.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                });
                organisationUnit.children.forEach(function (child) {
                    _this.prepareOrganisationUnitTree(child, 'top');
                });
            }
        }
        else {
            organisationUnit.forEach(function (orgunit) {
                if (orgunit.children) {
                    orgunit.children.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    });
                    orgunit.children.forEach(function (child) {
                        _this.prepareOrganisationUnitTree(child, 'top');
                    });
                }
            });
        }
    };
    // prepare a proper name for updating the organisation unit display area.
    OrgUnitFilterComponent.prototype.getProperPreOrgunitName = function () {
        var name = '';
        if (this.orgunit_model.selection_mode === 'Group') {
            name = (this.orgunit_model.selected_groups.length === 0) ? '' : this.orgunit_model.selected_groups.map(function (group) { return group.name; }).join(', ') + ' in';
        }
        else if (this.orgunit_model.selected_user_orgunit.length !== 0) {
            name = (this.orgunit_model.selected_user_orgunit.length === 0) ? '' : this.orgunit_model.selected_user_orgunit.map(function (level) { return level.name; }).join(', ');
        }
        else if (this.orgunit_model.selection_mode === 'Level') {
            name = (this.orgunit_model.selected_levels.length === 0) ? '' : this.orgunit_model.selected_levels.map(function (level) { return level.name; }).join(', ') + ' in';
        }
        else {
            name = '';
        }
        return name;
    };
    // get user organisationunit name
    OrgUnitFilterComponent.prototype.getOrgUnitName = function (id) {
        var orgunit = this.orgtree.treeModel.getNodeById(id);
        return orgunit.name;
    };
    // a function to prepare a list of organisation units for analytics
    OrgUnitFilterComponent.prototype.getOrgUnitsForAnalytics = function (orgunit_model, with_children) {
        var orgUnits = [];
        var organisation_unit_analytics_string = '';
        if (orgunit_model.selected_user_orgunit.length !== 0) {
            orgunit_model.selected_user_orgunit.forEach(function (orgunit) {
                organisation_unit_analytics_string += orgunit.id + ';';
            });
        }
        else {
            // if there is only one organisation unit selected
            if (orgunit_model.selected_orgunits.length === 1) {
                var detailed_orgunit = this.orgtree.treeModel.getNodeById(orgunit_model.selected_orgunits[0].id);
                orgUnits.push(detailed_orgunit.id);
            }
            else {
                orgunit_model.selected_orgunits.forEach(function (orgunit) {
                    orgUnits.push(orgunit.id);
                });
            }
            if (orgunit_model.selection_mode === 'orgUnit') {
            }
            if (orgunit_model.selection_mode === 'Level') {
                orgunit_model.selected_levels.forEach(function (level) {
                    organisation_unit_analytics_string += 'LEVEL-' + level.level + ';';
                });
            }
            if (orgunit_model.selection_mode === 'Group') {
                orgunit_model.selected_groups.forEach(function (group) {
                    organisation_unit_analytics_string += 'OU_GROUP-' + group.id + ';';
                });
            }
        }
        return organisation_unit_analytics_string + orgUnits.join(';');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrgUnitFilterComponent.prototype, "orgunit_model", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrgUnitFilterComponent.prototype, "orgunit_tree_config", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrgUnitFilterComponent.prototype, "showUpdate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrgUnitFilterComponent.prototype, "pickChildren", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], OrgUnitFilterComponent.prototype, "onOrgUnitUpdate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], OrgUnitFilterComponent.prototype, "onOrgUnitChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], OrgUnitFilterComponent.prototype, "onOrgUnitModelUpdate", void 0);
    tslib_1.__decorate([
        ViewChild('orgtree'),
        tslib_1.__metadata("design:type", TreeComponent)
    ], OrgUnitFilterComponent.prototype, "orgtree", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], OrgUnitFilterComponent.prototype, "current_orgunits", void 0);
    OrgUnitFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-org-unit-filter',
            templateUrl: './org-unit-filter.component.html',
            styleUrls: ['./org-unit-filter.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OrgUnitService,
            LocationService])
    ], OrgUnitFilterComponent);
    return OrgUnitFilterComponent;
}());
export { OrgUnitFilterComponent };
//# sourceMappingURL=org-unit-filter.component.js.map