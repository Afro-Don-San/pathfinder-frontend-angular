import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrgUnitService} from '../../../services/org-unit.service';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.scss']
})
export class MapFilterComponent implements OnInit {

  @Input() start_date: any = '';
  @Input() end_date: any = '';
  @Output() reportFilter = new EventEmitter<{from_date: string, to_date: string, orgUnits: String[], facilities: string[],service: number, ouName?: string, ouId?: string}>();
  orgunit: any = null;
  orgunitnames: string = '';

  services = [
    { id: 1, name: 'Family Planning Registration' },
    { id: 2, name: 'Family Planning Follow Up Visit' },
    { id: 3, name: 'Introduction to Family Planning' },
    { id: 4, name: 'Family Planning Pregnancy Screening' },
    { id: 5, name: 'Family Planning Method Issued' },
    { id: 6, name: 'Family Planning Discontinuation' },
    { id: 7, name: 'ANC Referral' },
    { id: 8, name: 'Family Planning Referral' },
    { id: 9, name: 'Family Planning Referral Followup' },
 ];

 selectedService: number = 0;

  @Input() orgunit_tree_config: any = {
    show_search : true,
    search_text : 'Search',
    level: null,
    loading: true,
    loading_message: 'Loading Organisation units...',
    multiple: true,
    multiple_key: 'control', // can be control or shift
    placeholder: 'Select Location'
  };
  constructor(
    private orgunitService: OrgUnitService
  ) { }

  ngOnInit() {
  }

  changeOrgUnit(orgunit) {
    this.orgunit = orgunit;
    this.orgunitnames = orgunit.items.map(d => d.name).join(', ');
  }

  getReport() {
    const start_date = new Date(this.start_date).toISOString().substr(0, 10);
    const end_date = new Date(this.end_date).toISOString().substr(0, 10);
    const facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);
    const ouName = this.orgunitService.getLevel4OrgunitsNames(this.orgunit.visit_locations, this.orgunit.value);
    const ouId = this.orgunitService.getLevel4OrgunitsId(this.orgunit.visit_locations, this.orgunit.value);
    const from_date = start_date.replace('-', '/').replace('-', '/');
    const to_date = end_date.replace('-', '/').replace('-', '/');
    const service = this.selectedService;   
    const orgUnits = this.orgunit.visit_locations;

    console.log("visit locations are", this.orgunit.visit_locations);
                       
    this.reportFilter.emit({
      from_date,
      to_date,
      orgUnits,
      facilities,
      service,
      ouName,
      ouId
    });
  }
  
  onChangeService(selectedServiceId: number) {
    this.selectedService = selectedServiceId;
 }

}
