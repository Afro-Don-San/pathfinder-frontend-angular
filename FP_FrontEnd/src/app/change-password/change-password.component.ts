import {Component, OnInit, NgModule} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  loginNotification = {isError: false, message: '', attempted: false, loading: false};
  loginForm: FormGroup;
  customeUsernameNotifier: boolean = false;
  customePasswordNotifier: boolean = false;
  hide = true;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group(
      {
        oldpassword: ['', Validators.required],
        newpassword: ['', Validators.required],
        confirmpassword: ['', Validators.required]
      });
  }

  ngOnInit() {
    const token = localStorage.getItem('htmr-web-token');
    const location = localStorage.getItem('htmr-starting-location');
   
  }

  async changePassword(loginCredentials) {
    if (this.loginForm.valid) {
      this.loginNotification.loading = true;

      if (this.loginForm.value.newpassword == this.loginForm.value.confirmpassword )
      {
        try {
        
          const openMrsResult: any = await this.userService.changePassword(loginCredentials).toPromise();
  
          if (openMrsResult)
          {
            this.loginNotification.isError = false;
            this.loginNotification.attempted = true;
            this.loginNotification.loading = false;
            this.loginNotification.message = 'Password changed successfully';
  
          }
  
        } catch (e) {
    
          console.log(e);
          this.loginNotification.isError = true;
          this.loginNotification.message = "Password changing failed."
          this.loginNotification.attempted = true;
          this.loginNotification.loading = false;
          this.userService.loggedIn = false;
          localStorage.removeItem('htmr-web-token');
          setTimeout(() => {
            this.closeNotification();
          }, 6000);
        }  
      }
      else
      {    
        this.loginNotification.isError = true;
        this.loginNotification.attempted = true;
        this.loginNotification.loading = false;
        this.loginNotification.message = "Passwords do not match."; 
      }
      
    }
  }

  closeNotification() {
    this.loginNotification.isError = false;
    this.loginNotification.attempted = false;
  }
}
