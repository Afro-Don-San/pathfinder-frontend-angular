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
import { markParentViewsForCheck } from '@angular/core/src/view/util';
exporting(Highcharts);

@Component({
  selector: 'app-map',
  templateUrl: './geomaps.component.html',
  styleUrls: ['./geomaps.component.scss']
})
export class GeomapsComponent implements AfterViewInit {
  private map;
  private marker;
  private markersLayer = new L.LayerGroup();
  card1DataLoading = false;
  data_loading = false;
  
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

    this.data_loading = true;

    this.markersLayer.clearLayers();
    
    const reportUrl = 'map_summary/';

    this.http.postDJANGOURL(reportUrl, filter)
    .subscribe((data: any[]) => {
      if (data) {

        this.data_loading = false

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
            'Ugalla Ward': -5.4707,
            'Tongwe Ward': -5.1331,
            'Bitale Ward': -4.7667,
            'Kagunga Ward': -4.4907,
            'Kalinzi Ward': -4.6058,
            'Mkigo Ward': -4.4941,
            'Mkongoro Ward': -1.3308,
            'Mwamgongo Ward': -4.6243,
            'Mwandiga Ward': -4.8254,
            'Nyarubanda Ward': -4.5677,
            'Simbo Ward': -4.8944,
            'Ziwani Ward': -3.3799,
            'Ilagala Ward': -5.1925,
            'Sunuka Ward': -5.3489,
          },
          Longitude: {
            'Ugalla Ward': 31.0954,
            'Tongwe Ward': 38.7029,
            'Bitale Ward': 29.6833,
            'Kagunga Ward': 29.6833,
            'Kalinzi Ward': 29.7292,
            'Mkigo Ward': 29.7562,
            'Mkongoro Ward': 33.8760,
            'Mwamgongo Ward': 29.6398,
            'Mwandiga Ward': 29.6586,
            'Nyarubanda Ward': 29.7485,
            'Simbo Ward': 29.7455,
            'Ziwani Ward': 37.7886,
            'Ilagala Ward': 29.8381,
            'Sunuka Ward': 29.7878,
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
         
         this.marker = L.marker([
            coordinates.Latitude[""+villageName+""],
            coordinates.Longitude[""+villageName+""]
          ],{title: ""+villageName+" : "+villageValue+" ", icon:icon, alt:"Village Value",draggable:false} );

          this.markersLayer.addLayer(this.marker);

          // this.marker.myData = { id: coordinates.Longitude[""+villageName+""] };
    
          this.markersLayer.addTo(this.map);
        }
        
      }

      }

      this.card1DataLoading = false;
    }, error1 => this.card1DataLoading = false);
    
  }

}