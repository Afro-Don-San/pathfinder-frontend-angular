import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {HttpClientService} from '../services/http-client.service';
import {LocationService} from '../services/location.service';
import {OrgUnitService} from '../services/org-unit.service';
import {filter, map, mergeMap} from 'rxjs/operators';
import {routeAnimations} from '../shared/animations/router-animation';
import {ActivatedRoute, NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {load} from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimations]
})
export class HomeComponent implements OnInit, AfterViewInit {
  locations: any[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  isOpen = true;
  loading$: Observable<boolean>;

  total_clients = 0;
  total_initiations = 0;
  total_discontinuations = 0;
  total_services = 0;

  navigation = [];
  username = '';

  loading: boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private http: HttpClientService,
    private activatedRoute: ActivatedRoute,
    private  userService: UserService,
    private titleService: Title,
    private locationService: LocationService,
    private orgunitService: OrgUnitService,
  ) {
    this.navigation = userService.getNavigation();
  }

  ngOnInit() {
    const token = localStorage.getItem('htmr-web-token');
    const starting_location = localStorage.getItem('htmr-starting-location');
    this.username = localStorage.getItem('trcmis-user');
    if (!token || !location) {
      this.router.navigate( ['', 'login']);
    }

    this.getTotalClients({location});
    this.getTotalInitiations({location});
    this.getTotalDiscontinuations({location});
    this.getTotalServices({location});


    // this.getLocation(starting_location).then(locations => {
    //   const facilities = this.orgunitService.getLevel4OrgunitsIds(locations, starting_location);
    //   this.getTotalClients({facilities});
    // });
  }

  async getTotalClients(facilities) {
    
    const data = await this.http.postDJANGOURL(
      'dashboard_summary/',filter
    ).toPromise();
    if (data) {
      this.total_clients = data['total_clients'];
    }
  }

  async getTotalInitiations(facilities) {
    
    const data = await this.http.postDJANGOURL(
      'dashboard_summary/',filter
    ).toPromise();
    if (data) {
      this.total_initiations = data['total_family_planning_initiations'];
    }
  }


  async getTotalDiscontinuations(facilities) {
    
    const data = await this.http.postDJANGOURL(
      'dashboard_summary/',filter
    ).toPromise();
    if (data) {
      this.total_discontinuations = data['total_family_planning_discontinuations'];

    }
  }


  async getTotalServices(facilities) {
    
    const data = await this.http.postDJANGOURL(
      'dashboard_summary/',filter
    ).toPromise();
    if (data) {
      this.total_services = data['total_services'];

    }
  }



  goToChangePass() {
    this.router.navigate( ['', 'change_password']);
  }

  goTo(path) {
    this.router.navigate(path);
  }

  logout() {
    this.userService.removeLocalStorageNavigation();
    this.userService.deleteToken();
    this.userService.loggedIn = false;
    this.locationService.locations = [];
    this.router.navigate( ['', 'login']);
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: any) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event: any) => this.titleService.setTitle(event.title));
  }

}
