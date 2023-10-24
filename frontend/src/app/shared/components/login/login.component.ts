import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/api/auth.service';
import { UserService } from 'src/app/core/api/user.service';
import { AppService } from 'src/app/core/app.service';
import { SidebarEvents } from 'src/app/core/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _loading = false;
  mode: 'login' | 'signup' = 'login';
  loginForm = this.formBuilder.group({
    email: ['', Validators.email],
    password: [''],
  })
  constructor(
    private _app: AppService,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
  ) {
    if(localStorage.getItem('chatters_token')) {
      this._app.isAuthenticated = true;
    }
    this._app.sidebarEvents$.next(SidebarEvents.Hide);
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  ngOnInit(): void {
    if(this._app.isAuthenticated) {
      this.router.navigate(["chat"]);
    }
  }

  login() {
    this._loading = true;
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password)
      .then(loginResponse => {
        console.log(loginResponse)
        localStorage.setItem('chatters_token', loginResponse.jwt);
        localStorage.setItem('chatters_id', loginResponse.user?.userId||'');
        
        this._app.isAuthenticated = true;
        this._app.sidebarEvents$.next(SidebarEvents.Open);
        this._app.userId = loginResponse.user?.userId;
        this._app.token = loginResponse.jwt;
        this._app.metadata.set('Authorization', `Bearer ${this._app.token}`);

        // if(loginResponse.user)
        // this._app.loggedIn$.next(loginResponse.user);
      })
      .catch(err => {
        this._app.openSnackBar(err)
      })
      .finally(() => {
        this.router.navigate(["chat"]);
        this._loading = false;
      });
  }

  signup() {
    // Implement your signup logic here
    console.log('Signup clicked');
    this._loading = true;
  }

}
