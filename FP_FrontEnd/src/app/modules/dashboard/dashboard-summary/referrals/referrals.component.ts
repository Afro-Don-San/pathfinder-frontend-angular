import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ROUTE_ANIMATIONS_ELEMENTS} from '../../../../shared/animations/router-animation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BreakpointObserver} from '@angular/cdk/layout';
import {HttpClientService} from '../../../../services/http-client.service';
import {LocationService} from '../../../../services/location.service';
import {OrgUnitService} from '../../../../services/org-unit.service';
import * as _ from 'lodash';
import * as Highcharts from 'highcharts';
import {SettingsService} from '../../../../services/settings.service';
import exporting from 'highcharts/modules/exporting';
import * as XLSX from "xlsx";
exporting(Highcharts);

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  location_loading = false;
  locations: any[] = [];
  values: any[] = [];
  startDate: any;
  start_date: any;
  endDate: any;
  end_date: any;

  card1Data = null;
  card2Data = null;
  card3Data = null;
  card4Data = null;

  data_loading = false;

  card1DataLoading = false;
  card2DataLoading = false;
  card3DataLoading = false;
  card4DataLoading = false;
  card5DataLoading = false;

  label1DataLoading = false;
  label2DataLoading = false;
  label3DataLoading = false;
  label4DataLoading = false;


  @ViewChild('reportArea1') el1: ElementRef;
  @ViewChild('reportArea2') el2: ElementRef;
  @ViewChild('reportArea3') el3: ElementRef;
  @ViewChild('reportArea4') el4: ElementRef;

  orgunitName: string;

  constructor(
      private breakpointObserver: BreakpointObserver,
      private http: HttpClientService,
      private locationService: LocationService,
      private orgunitService: OrgUnitService,
      private settingsService: SettingsService
  ) { }

  ngOnInit() {

    this.startDate = new Date(new Date().setDate(new Date().getDate() - 90));
    this.endDate = new Date(new Date().setDate(new Date().getDate() + 2));
    const start_date = new Date(this.startDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
    const end_date = new Date(this.endDate).toISOString().substr(0, 10).replace('-', '/').replace('-', '/');
    this.start_date = start_date;
    this.end_date = end_date;
    const starting_location = localStorage.getItem('htmr-starting-location');

    this.getLocation(starting_location).then(locations => {
      const facilities = this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
      this.orgunitName = this.orgunitService.getLevel4OrgunitsNames(locations, starting_location);
      this.updateCard1({from_date: start_date, to_date: end_date, facilities});
      this.updateCard2({from_date: start_date, to_date: end_date, facilities});
      this.updateCard3({from_date: start_date, to_date: end_date, facilities});
    });
  }

  updateCards(filter: { from_date, to_date, facilities, ouName?, ouId? }) {
    this.orgunitName = filter.ouName;
    this.updateCard1Chart(filter);
    this.updateCard2Chart(filter);
    this.updateCard3Chart(filter);
  }

  updateCard1(filter: { from_date, to_date, facilities }) {
    this.card1DataLoading = true;
    this.updateCard1Chart(filter);
    // const reportUrl = 'reports/dashboard_total_registrations/html';
    // this.http.postOpenSRP1(reportUrl,
    //   filter)
    //   .subscribe((data: any) => {
    //     this.card2Data = data;
    //     this.card2DataLoading = false;
    //   }, error1 => this.card2DataLoading = false);
  }

  updateCard1Chart(filter: { from_date, to_date, facilities }) {
    this.card1DataLoading = true;
    const reportUrl = 'referral_summary/';
    this.http.postDJANGOURL(reportUrl, filter)
        .subscribe((data: any[]) => {
          if (data) {
            const series = data['referral_status'].map(item => ({
              name: item.businessstatus,
              y: item.value
            }));
            const chartConfig: any = this.settingsService.drawPieChart(
                series,
                'Referral Status' + ` from ${filter.from_date} to ${filter.to_date} for ${this.orgunitName}`,
                'Status'
            );
            Highcharts.chart('card1Chart', chartConfig);
          }
          this.card1DataLoading = false;
        }, error1 => this.card1DataLoading = false);
  }

  updateCard2(filter: { from_date, to_date, facilities }) {
    this.updateCard2Chart(filter);
    this.card2DataLoading = true;
    // const reportUrl = 'reports/dashboard_total_referrals_issued/html';
    // this.http.postOpenSRP1(reportUrl,
    //   filter)
    //   .subscribe((data: any) => {
    //     this.card1Data = data;
    //     this.card1DataLoading = false;
    //   }, error1 => this.card1DataLoading = false);
  }

  updateCard2Chart(filter: { from_date, to_date, facilities }) {
    this.card2DataLoading = true;

    const reportUrl = 'referral_summary/';
    this.http.postDJANGOURL(reportUrl, filter)
        .subscribe((data: any[]) => {
          if (data) {
            const series = [{
              name: 'Referral Focus',
              data: data['referral_types_focus'].map(item => item.value)
            }];
            const categories = data['referral_types_focus'].map(item => item.focus);
            const chartConfig: any = this.settingsService.drawChart(
                categories,
                series,
                'Client Count',
                'Referral Focus Areas' + ` from ${filter.from_date} to ${filter.to_date} for ${this.orgunitName}`,
                // '',
                // 'line'
            );
            Highcharts.chart('card2Chart', chartConfig);
          }
          this.card2DataLoading = false;
        }, error1 => this.card2DataLoading = false);
  }



  updateCard3(filter: { from_date, to_date, facilities }) {
    this.card3DataLoading = true;
    this.updateCard3Chart(filter);
    // const reportUrl = 'reports/dashboard_ltf_feedbacks/html';
    // this.http.postOpenSRP1(reportUrl,
    //   filter)
    //   .subscribe((data: any) => {
    //     this.card3Data = data;
    //     this.card3DataLoading = false;
    //   }, error1 => this.card3DataLoading = false);
  }

  updateCard3Chart(filter: { from_date, to_date, facilities }) {
    this.card3DataLoading = true;
    this.data_loading = true;
    const reportUrl = 'referral_summary/';
    this.http.postDJANGOURL(reportUrl, filter)
        .subscribe((data: any[]) => {
          if (data) {
            this.values = data['referral_issued_by_chw'];
          }
          this.card3DataLoading = false;
            this.data_loading = false;
        }, error1 => this.card3DataLoading = false);
  }

  // this method was coppied form the orguni component and is to be moved to service letter
  async getLocation(starting_location) {
    this.location_loading = true;
    const top_locations = await this.locationService.loadTreeLocations().toPromise();
    let visit_location: any = _.find(top_locations, {uuid: starting_location ? starting_location : 'ed787525-d770-11e8-ba9c-f23c917bb7ec'});
    const visit_locations = [];
    visit_locations.push(
        {
          name: visit_location.name,
          id: visit_location.uuid,
          level: 1,
          parents: ``
        });
    visit_location = {
      name: visit_location.name,
      id: visit_location.uuid,
      level: 1,
      children: visit_location.childLocations.map(
          (location: any) => {
            const child_loc = this.getChildOrgunits(top_locations, location.uuid);
            visit_locations.push(
                {
                  name: child_loc.name,
                  id: child_loc.uuid,
                  level: 2,
                  parents: `${visit_location.uuid}`
                });
            return {
              name: child_loc.name,
              id: child_loc.uuid,
              level: 2,
              children: child_loc.childLocations.map(
                  (child: any) => {
                    const before_last_child = this.getChildOrgunits(top_locations, child.uuid);
                    visit_locations.push(
                        {
                          name: before_last_child.name,
                          id: before_last_child.uuid,
                          level: 3,
                          parents: `${visit_location.uuid};${child_loc.uuid}`
                        });
                    return {
                      name: before_last_child.name,
                      id: before_last_child.uuid,
                      level: 3,
                      children: before_last_child.childLocations.map(
                          (level3child: any) => {
                            const last_child = this.getChildOrgunits(top_locations, level3child.uuid);
                            visit_locations.push(
                                {
                                  name: last_child.name,
                                  id: last_child.uuid,
                                  level: 4,
                                  parents: `${visit_location.uuid};${child_loc.uuid};${before_last_child.uuid}`
                                });
                            return {
                              name: last_child.name,
                              id: last_child.uuid,
                              level: 4,
                              // children: facility.childLocations
                              children: last_child.childLocations.map(
                                  (level4child: any) => {
                                    const facility = this.getChildOrgunits(top_locations, level4child.uuid);
                                    visit_locations.push({
                                      name: facility.name,
                                      id: facility.uuid,
                                      level: 5,
                                      parents: `${visit_location.uuid};${child_loc.uuid};${before_last_child.uuid};${last_child.uuid}`
                                    });
                                    return{
                                      name: facility.name,
                                      id: facility.uuid,
                                      level: 5,
                                      // children: lastest.childLocations

                                      children:facility.childLocations.map(
                                          (level5child: any) => {
                                            const village = this.getChildOrgunits(top_locations, level5child.uuid);
                                            visit_locations.push({
                                              name: village.name,
                                              id: village.uuid,
                                              level: 6,
                                              parents: `${visit_location.uuid};${child_loc.uuid};${facility.uuid};${village.uuid}`
                                            });
                                            return {
                                              name: village.name,
                                              id: village.uuid,
                                              level: 6
                                            }
                                          }
                                      )
                                    }
                                  })
                            };
                          }
                      )
                    };

                  }
              )
            };
          }
      )
    };
    this.location_loading = false;
    console.log(visit_locations);
    return visit_locations;
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

  print() {
    window.print();
  }

  getChildOrgunits(orgunits, uuid): any {
    return _.find(orgunits, {uuid});
  }

}
