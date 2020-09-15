import {Component, OnInit, NgModule} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginNotification = {isError: false, message: 'Login successful', attempted: false, loading: false};
  loginForm: FormGroup;
  customeUsernameNotifier: boolean = false;
  customePasswordNotifier: boolean = false;
  hide = true;
  constructor(
      private userService: UserService,
      private formBuilder: FormBuilder,
      private router: Router
  ) {
    this.loginForm = this.formBuilder.group(
        {
          username: ['', Validators.required],
          password: ['', Validators.required]
        });
  }

  ngOnInit() {
    const token = localStorage.getItem('htmr-web-token');
    const location = localStorage.getItem('htmr-starting-location');
    if (token && location) {
      this.router.navigate( ['', 'dashboard']);
    }
  }

  async login(loginCredentials) {
    if (this.loginForm.valid) {
      this.loginNotification.loading = true;
      try {
        // const openSrpResult: any = await this.userService.login1(loginCredentials).toPromise();
        const openMrsResult: any = await this.userService.login(loginCredentials).toPromise();

        if (openMrsResult.results.length > 0) {

          try {
            const openSrpResult: any = await this.userService.login1(loginCredentials).toPromise();
            if (openSrpResult) {
              if (openSrpResult.team && openSrpResult.team.team) {
                if (openSrpResult.team.team.location) {
                  const location = openSrpResult.team.team.location;
                  const starting_location = location ? location.uuid : 't4f60f022-9390-41e1-8803-7a68f3a7fe98';
                  localStorage.setItem('htmr-starting-location', starting_location);
                }
              }
            }

          }
          catch (e)
          {
            if (e.status = 500) {
              //USer has access to openmrs but not mobile, hence Country Level
              const starting_location = '4f60f022-9390-41e1-8803-7a68f3a7fe98';
              localStorage.setItem('htmr-starting-location', starting_location);
            }
          }

          const username = openMrsResult.results[0].display;
          localStorage.setItem('trcmis-user', username);
          this.userService.setNavigation(openMrsResult);

          this.loginNotification.isError = false;
          this.loginNotification.message = 'Login successful';
          this.loginNotification.attempted = true;
          this.loginNotification.loading = false;
          this.userService.loggedIn = true;
          setTimeout(() => {
            this.router.navigate(['', 'dashboard']);
          }, 2000);
        }
        else
        {
          this.loginNotification.isError = true;
          this.loginNotification.attempted = true;
          this.loginNotification.loading = false;
          this.userService.loggedIn = false;
          this.loginNotification.message = 'Login failure, wrong username or password';
        }

      } catch (e) {
        // tslint:disable-next-line: triple-equals
        if (e.status == 401) {
          this.loginNotification.message = 'Unauthorized Access.';
          // tslint:disable-next-line: no-conditional-assignment
        }
        if (e.status == 403) {
          this.loginNotification.message = 'Something went wrong, please try again.';
          // tslint:disable-next-line: no-conditional-assignment
        }

        console.log(e);
        this.loginNotification.isError = true;
        this.loginNotification.attempted = true;
        this.loginNotification.loading = false;
        this.userService.loggedIn = false;
        localStorage.removeItem('htmr-web-token');
        setTimeout(() => {
          this.closeNotification();
        }, 6000);
      }
    }
  }

  closeNotification() {
    this.loginNotification.isError = false;
    this.loginNotification.attempted = false;
  }
}
