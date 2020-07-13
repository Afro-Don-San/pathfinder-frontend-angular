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
  selector: 'app-providers-refferal-report',
  templateUrl: './issued-referrals-by-location.component.html',
  styleUrls: ['./issued-referrals-by-location.component.scss'],
  animations: [fadeIn]
})
export class IssuedReferralsByLocationComponent implements OnInit {

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
  values: any[] = [];
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


  checkDate() {  }

  getProviders() {
    this.loading = true;
    this.loading_failed = false;
    this.done_loading = false;
    const from_date = new Date(this.start_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
    const to_date = new Date(this.end_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
    const starting_location = localStorage.getItem('htmr-starting-location');

    let dashboard = new DashboardComponent(this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);
    const facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);

    this.httpClient.postDJANGOURL('events_summary/', {from_date, to_date, facilities})
      .subscribe(( data: any[]) => {
        if ( data && data.length !== 0) {
          console.log(data); 
          this.providers = data["query_service_providers"].map(d => {
            return {
              // id: d.id,
              name: d.team
            };
          });
          console.log('providers', this.providers);
        }
        this.loading = false;
        this.loading_failed = false;
      }, (error) => {
        this.loading_failed = true;
        this.loading = false;
      });

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

  getData() {
    this.data_loading = true;
    this.detailed_loading = true;
    const chw_uuid = this.selected_providers.map(provider => provider.id);
    const from_date = new Date(this.start_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
    const to_date = new Date(this.end_date).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
    const starting_location = localStorage.getItem('htmr-starting-location');
    console.log("selected providers in get data are",this.selected_providers);

    let dashboard = new DashboardComponent(this.breakpointObserver, this.http, this.locationService, this.orgunitService, this.settingsService);

    dashboard.getLocation(starting_location).then(locations => {
      const facilities = this.orgunitService.getLevel4OrgunitsIds(this.orgunit.visit_locations, this.orgunit.value);

    this.httpClient.postDJANGOURL('events_summary/', { from_date, to_date, facilities })
      .subscribe((data: any) => {
        this.done_loading = true;
        this.data_loading = false;
        this.values = data["total_services_aggregate"];
      });

    this.httpClient.postDJANGOURL('events_summary/', { from_date, to_date, facilities })
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

