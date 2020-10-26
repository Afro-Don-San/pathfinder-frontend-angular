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
  ChangePasswordForm: FormGroup;
  customeUsernameNotifier: boolean = false;
  customePasswordNotifier: boolean = false;
  hide = true;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.ChangePasswordForm = this.formBuilder.group(
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
    if (this.ChangePasswordForm.valid) {
      this.loginNotification.loading = true;

      if (this.ChangePasswordForm.value.newpassword == this.ChangePasswordForm.value.confirmpassword )
      {
        try {
        
          // const openMrsResult: any = await this.userService.changePassword(loginCredentials).toPromise();

          // console.log(openMrsResult);
  
          // if (openMrsResult)

         await this.userService.changePassword(loginCredentials).toPromise();

          {
            this.loginNotification.isError = false;
            this.loginNotification.message = "Password change successful."
            this.loginNotification.attempted = true;
            this.loginNotification.loading = false;
            setTimeout(() => {
              this.closeNotification();
            }, 6000);
            
            this.userService.deleteToken();
            this.router.navigate( ['', 'login']);
  
          }
          // else
          // {
          //   this.loginNotification.isError = true;
          //   this.loginNotification.message = "Old password is incorrect."
          //   this.loginNotification.attempted = true;
          //   this.loginNotification.loading = false;
          //   setTimeout(() => {
          //     this.closeNotification();
          //   }, 6000);
          // }
  
        } catch (e) {
    
          console.log(e);
          this.loginNotification.isError = true;
          this.loginNotification.message = "Operation failed, please check password and try again."
          this.loginNotification.attempted = true;
          this.loginNotification.loading = false;
          this.userService.loggedIn = false;
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
