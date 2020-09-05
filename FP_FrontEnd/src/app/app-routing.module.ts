import { NgModule, InjectionToken } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, ActivatedRouteSnapshot} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {ProvidersReportComponent} from './modules/providers-report/providers-report.component';
import {InterFacilityRefferalReportComponent} from './modules/providers-report/inter-facility-refferal-report/inter-facility-refferal-report.component';
import {FacilityRefferalReportComponent} from './modules/providers-report/facility-referral-report/facility-refferal-report.component';
import {ProvidersRefferalReportComponent} from './modules/providers-report/providers-refferal-report/providers-refferal-report.component';
import {ReportsComponent} from './modules/reports/reports.component';
import {TotalIssuedLostFollowupComponent} from './modules/reports/total-issued-lost-followup/total-issued-lost-followup.component';
import {SettingsComponent} from './modules/settings/settings.component';
import {ServiceComponent} from './modules/settings/service/service.component';
import {IndicatorsComponent} from './modules/settings/indicators/indicators.component';
import {RefferealFeedbackComponent} from './modules/settings/reffereal-feedback/reffereal-feedback.component';
import {RefferealTypeComponent} from './modules/settings/reffereal-type/reffereal-type.component';
import {RegistrationReasonComponent} from './modules/settings/registration-reason/registration-reason.component';
import {LocationsComponent} from './modules/locations/locations.component';
import {UsersComponent} from './modules/users/users.component';
import {SupersetComponent} from './modules/superset/superset.component';
import {ChangePasswordComponent} from './change-password/change-password.component'
import {IssuedReferralsByLocationComponent} from './modules/fp-reports/issued-referrals-by-location/issued-referrals-by-location.component'
import {CitizenCardReportComponent} from './modules/fp-reports/citizen-card-report/citizen-card-report.component'
import {GeomapsComponent} from './modules/geomaps/geomaps.component'
import {ReferralsComponent} from './modules/dashboard/dashboard-summary/referrals/referrals.component'
import {ClientsComponent} from './modules/dashboard/dashboard-summary/clients/clients.component'
import {HttpClient, HttpHeaders} from '@angular/common/http';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {state: 'dashboard'}
      },
      {
        path: 'geomaps',
        component: GeomapsComponent,
        data: {state: 'geomaps'}
      },
      {
        path: 'location',
        component: LocationsComponent,
        data: {state: 'location'}
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {state: 'user_management'}
      },
      {
        path: 'providers_report',
        component: ProvidersReportComponent,
        data: {state: 'providers-report'},
        children: [
          {
          path: 'issued-referrals-by-location-report',
          component: IssuedReferralsByLocationComponent,
          data: {state: 'providers-report'}
          },
          {
            path: 'citizens-report',
            component: CitizenCardReportComponent,
            data: {state: 'providers-report'}
          },
          {
            path: 'total-clients-enrolled-to-beach-management-report',
            component: ProvidersRefferalReportComponent,
            data: {state: 'more-reports'}
          },
          {
            path: 'total-clients-enrolled-to-bee-keeping-report',
            component: ProvidersRefferalReportComponent,
            data: {state: 'more-reports'}
          },
          {
            path: 'total-clients-enrolled-to-loan-units-report',
            component: ProvidersRefferalReportComponent,
            data: {state: 'more-reports'}
          },

        ]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {state: 'settings'},
        children: [
          {
            path: 'services',
            component: ServiceComponent,
            data: {state: 'services'}
          },
          {
            path: 'indicators',
            component: IndicatorsComponent,
            data: {state: 'indicators'}
          },
          {
            path: 'reffereal-feedback',
            component: RefferealFeedbackComponent,
            data: {state: 'reffereal-feedback'}
          },
          {
            path: 'reffereal-type',
            component: RefferealTypeComponent,
            data: {state: 'reffereal-type'}
          },
          {
            path: 'registration-reason',
            component: RegistrationReasonComponent,
            data: {state: 'registration-reason'}
          },
        ]
      },
      {
        path: 'referral-summary',
        component: ReferralsComponent,
        data: {state: 'referral-summary'}
      },
      {
        path: 'client',
        component: ClientsComponent,
        data: {state: 'client'}
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {state: 'login'}
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    data: {state: 'change-password'}
  }
];

@NgModule({
  providers: [
    {
        provide: externalUrlProvider,
        useValue: (route: ActivatedRouteSnapshot) => {
            const externalUrl = route.paramMap.get('superset');
            window.open('http://45.56.117.65', 'Superset');
        
        },
    },
],
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
