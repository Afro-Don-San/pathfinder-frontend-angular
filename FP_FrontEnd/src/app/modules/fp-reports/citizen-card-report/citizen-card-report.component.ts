import {Component, Input, OnInit} from '@angular/core';
import {HttpClientService} from '../../../services/http-client.service';
import {OrgUnitService} from '../../../services/org-unit.service';
import {fadeIn} from '../../../shared/animations/router-animation';
import {DashboardComponent} from '../../../modules/dashboard/dashboard.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {LocationService} from '../../../services/location.service';
import {SettingsService} from '../../../services/settings.service';
import {routeAnimations} from '../../../shared/animations/router-animation';
import {UserService} from '../../../services/user.service';
import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../shared/animations/router-animation';
import {ActivatedRoute, NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {ExcelDownloadService} from '../../../services/excel-download.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-citizen-card-report',
  templateUrl: './citizen-card-report.component.html',
  styleUrls: ['./citizen-card-report.component.scss']
})
export class CitizenCardReportComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  loading: boolean = false;
  loading_failed: boolean = false;
  locations: any[] = [];
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
  orgunit: any = null;
  start_date: any = '';
  end_date: any = '';
  providers: any = [];
  selected_providers: any[] = [];

  willing_to_participate_in_survey: any[] = [];
  residence: any[] = [];
  education: any[] = [];
  occupation: any[] = [];
  marital_status: any[] = [];
  religion: any[] = [];
  reasons_for_people_not_going_to_health_facilities: any[] = [];
  means_of_transport_to_facility: any[] = [];
  time_to_reach_closest_facility: any[] = [];
  is_this_the_nearest_facility_from_home: any[] = [];
  was_the_facility_open_when_you_arrived: any[] = [];
  did_you_get_family_planning_information_at_the_reception: any[] = [];
  how_long_it_took_to_be_attended_by_service_provider: any[] = [];
  did_the_service_provider_make_you_feel_welcome: any[] = [];
  did_the_service_provider_assure_confidentiality: any[] = [];
  did_you_meet_the_service_providers_in_a_private_room: any[] = [];
  did_the_service_providers_provide_clear_information_about_various_fp_services_and_methods: any[] = [];
  did_the_service_providers_use_visual_aids_to_demo_fp_methods: any[] = [];
  did_the_service_providers_ask_if_you_had_any_concerns_about_previously_used_methods: any[] = [];
  were_you_given_info_on_dual_protection: any[] = [];
  methods_not_wanted: any[] = [];

  orgunitnames: string = '';
  done_loading: boolean = false;
  data_loading: boolean = false;
  selected_providers_names: string = '';
  detailed_values: any[] = [];
  detailed_loading: boolean = false;
  show_detailed: boolean = false;
  constructor(
    private httpClient: HttpClientService,
    private orgunitService: OrgUnitService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private http: HttpClientService,
    private activatedRoute: ActivatedRoute,
    private  userService: UserService,
    private titleService: Title,
    private locationService: LocationService,
    private settingsService: SettingsService,
    private excelService: ExcelDownloadService
  ) { }

  ngOnInit() {
  }

  changeOrgUnit(orgunit) {
    this.orgunit = orgunit;
    this.orgunitnames = orgunit.items.map(d => d.name).join(', ');
  }

  setSelectedData(data) {
    console.log("team data: ",data);
    this.selected_providers = data;
    const team_name = this.selected_providers.map(d => d.name );
    console.log("team name is:", team_name);
    if (team_name.length > 3) {
      const extra_length = team_name.length - 3;
      this.selected_providers_names = team_name.slice(0, 3).join(', ') + ' and ' + extra_length + ' more ';
    }
  }


  print() {
    window.print();
  }

  downloadExcel() {
    const startDate = new Date(this.start_date).toISOString().substr(0, 10);
    const endDate = new Date(this.end_date).toISOString().substr(0, 10);
    // this.excelService.download1(
    //   `${this.report.name} from ${startDate} to ${endDate} for ${this.orgUnitName}`,
    //   this.dataTable.nativeElement
    // );
  }


  exportexcel(table, fileName): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById(''+table+''); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, fileName);
			
    }

  getData() {
    this.data_loading = true;
    this.detailed_loading = true;
    const chw_uuid = this.selected_providers.map(provider => provider.id);
    const start_date = new Date(this.start_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
    const end_date = new Date(this.end_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
    const starting_location = localStorage.getItem('htmr-starting-location');

    let dashboard = new DashboardComponent(this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);

    dashboard.getLocation(starting_location).then(locations => {
      const facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);

      console.log(facilities);

      this.httpClient.postDJANGOURL('citizen_report_card/', {start_date, end_date, facilities })
      .subscribe((data: any) => {

        console.log(data);
        this.done_loading = true;
        this.data_loading = false;
        this.willing_to_participate_in_survey = data["willing_to_participate_in_survey_summary"];
        this.residence = data["residence_summary"];
        this.education = data["education_summary"];
        this.occupation = data["occupation_summary"];
        this.marital_status = data["marital_status_summary"];
        this.religion = data["religion_summary"];
        this.reasons_for_people_not_going_to_health_facilities = data["reasons_for_people_not_going_to_health_facilities_summary"];
        this.means_of_transport_to_facility = data["means_of_transport_to_facility_summary"];
        this.is_this_the_nearest_facility_from_home = data["is_this_the_nearest_facility_from_home_summary"];
        this.was_the_facility_open_when_you_arrived = data["was_the_facility_open_when_you_arrived_summary"];
        this.did_you_get_family_planning_information_at_the_reception = data["did_you_get_family_planning_information_at_the_reception_summary"];
        this.how_long_it_took_to_be_attended_by_service_provider = data["how_long_it_took_to_be_attended_by_service_provider_summary"];
        this.did_the_service_provider_make_you_feel_welcome = data["did_the_service_provider_make_you_feel_welcome_summary"];
        this.did_the_service_provider_assure_confidentiality = data["did_the_service_provider_assure_confidentiality_summary"];
        this.did_you_meet_the_service_providers_in_a_private_room = data["did_you_meet_the_service_providers_in_a_private_room_summary"];
        this.did_the_service_providers_provide_clear_information_about_various_fp_services_and_methods = data["did_the_service_providers_provide_clear_information_about_various_fp_services_and_methods_summary"];
        this.did_the_service_providers_use_visual_aids_to_demo_fp_methods = data["did_the_service_providers_use_visual_aids_to_demo_fp_methods_summary"];
        this.did_the_service_providers_ask_if_you_had_any_concerns_about_previously_used_methods = data["did_the_service_providers_ask_if_you_had_any_concerns_about_previously_used_methods_summary"];
        this.were_you_given_info_on_dual_protection = data["were_you_given_info_on_dual_protection_summary"];
        // this.methods_not_wanted = data["methods_not_wanted_summary"];
      });

    this.httpClient.postDJANGOURL('citizen_report_card/', { start_date, end_date, facilities })
      .subscribe((data: any) => {
        this.detailed_loading = false;
        this.detailed_values = data["records"].map(item => {
          const chw = this.selected_providers.find(i => i.id === item.team);
          return {
            ...item,
            service_provider_name: chw ? chw.name : ''
          };
        });
      });
    });
    

  }

}

