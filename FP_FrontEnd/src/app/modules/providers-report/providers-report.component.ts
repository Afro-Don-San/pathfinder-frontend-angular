import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-providers-report',
  templateUrl: './providers-report.component.html',
  styleUrls: ['./providers-report.component.scss']
})
export class ProvidersReportComponent implements OnInit {
  activeLinkIndex = -1;
  title = 'Family Planning Reports';
  navLinks = [
    {
      label: 'Issued Services',
      link: ['', 'providers_report', 'issued-referrals-by-location-report'],
      index: 0
    }, {
      label: 'Family Planning Registrations',
      link: ['', 'providers_report', 'facility-report'],
      index: 1
    }, {
      label: 'Total Issued Referrals',
      link: ['', 'providers_report', 'inter-facility-report'],
      index: 2
    },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks
        .find(tab => tab.link[1] === '.' + this.router.url));
    });
  }

}
