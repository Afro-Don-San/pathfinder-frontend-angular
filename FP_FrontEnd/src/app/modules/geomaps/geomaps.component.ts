import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';


import {ROUTE_ANIMATIONS_ELEMENTS} from '../../shared/animations/router-animation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BreakpointObserver} from '@angular/cdk/layout';
import {HttpClientService} from '../../services/http-client.service';
import {LocationService} from '../../services/location.service';
import {OrgUnitService} from '../../services/org-unit.service';
import * as _ from 'lodash';
import * as Highcharts from 'highcharts';
import {SettingsService} from '../../services/settings.service';
import exporting from 'highcharts/modules/exporting';
import * as Coordinates from '../../../assets/coordinates.json';
exporting(Highcharts);

@Component({
  selector: 'app-map',
  templateUrl: './geomaps.component.html',
  styleUrls: ['./geomaps.component.scss']
})
export class GeomapsComponent implements AfterViewInit {
  private map;
  card1DataLoading = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClientService,
    private locationService: LocationService,
    private orgunitService: OrgUnitService,
    private settingsService: SettingsService,
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
  }


  private initMap(): void {
    this.map = L.map('map', {
      zoom: 7
    });
    this.map.panTo(new L.LatLng(-6.3690, 35.7516));

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

  }

  async updateMap(filter: { from_date, to_date, facilities, ouName?, ouId? }) {

    const reportUrl = 'map_summary/';

    this.http.postDJANGOURL(reportUrl, filter)
    .subscribe((data: any[]) => {
      if (data) {

        var icon = new L.icon();

      var blueIcon = new L.icon({
          iconUrl: 'assets/img/blue.png',
          iconSize: [40, 40]
      })

      var redIcon = new L.icon({
        iconUrl: 'assets/img/red.png',
        iconSize: [40, 40]
      })

      var greenIcon = new L.icon({
        iconUrl: 'assets/img/green.png',
        iconSize: [40, 40]
      })

      var blackIcon = new L.icon({
        iconUrl: 'assets/img/black.png',
        iconSize: [40, 40]
      })
        
        const coordinates = {
          Latitude: {
            'Ugalla Ward': -6.3690,
            'Bitale Ward': -6.3690,
            'Kagunga Ward': -6.3690,
            'Nyarubanda Ward': -6.3690,
            'Tangi Bovu': -6.5690,
          },
          Longitude: {
            'Ugalla Ward': 35.2892612,
            'Bitale Ward': 35.4689988,
            'Kagunga Ward': 36.5009093,
            'Nyarubanda Ward': 35.5516144,
            'Tangi Bovu': 35.6516144,
          },
        };

      

      for (let village of data)
      
      {
  
        let villageName: String = village["village_name"];
        let villageValue: number = village["value"];
     
        var villageCoordinateCheck = coordinates.Latitude[""+villageName+""];

        if (villageValue < 100)
        {
          icon = redIcon;
        }

        if (villageValue > 100 && villageValue<= 500)

        {
            icon = blueIcon;
        }

        if (villageValue > 500)
        {
          icon = greenIcon;
        }

        if (villageCoordinateCheck != undefined)
        {
         
          const marker = L.marker([
            coordinates.Latitude[""+villageName+""],
            coordinates.Longitude[""+villageName+""]
          ],{title: ""+villageName+" : "+villageValue+" ", icon:icon, alt:"Village Value",draggable:false} );

          marker.myData = { id: coordinates.Longitude[""+villageName+""] };
    
          marker.addTo(this.map);
        }
        
      }

      }

      this.card1DataLoading = false;
    }, error1 => this.card1DataLoading = false);
    
  }

}