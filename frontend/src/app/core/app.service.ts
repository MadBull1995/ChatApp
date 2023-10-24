import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SidebarEvents } from './types';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { User } from './chat/core/v1/user.pb';
import { Contact } from './chat/core/v1/contact.pb';
import { GrpcMetadata } from '@ngx-grpc/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public userInfo!: User;
  public sidebarEvents$: BehaviorSubject<SidebarEvents> = new BehaviorSubject(<any>SidebarEvents.Hide);
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  public isAuthenticated = false;
  private _token!: string;
  private _userId!: string | undefined;
  public contacts: Contact[] = [];
  public loggedIn$: Subject<User> = new Subject();
  public metadata: GrpcMetadata = new GrpcMetadata();
  constructor(private _snackBar: MatSnackBar, private router: Router) {
    if(localStorage.getItem('chatters_token')) {
      this.token = localStorage.getItem('chatters_token') || ""
      this.metadata.set('Authorization', `Bearer ${this.token}`);
    }
  }

  get userId(): string | undefined {
    return this._userId;
  }

  set userId(userId: string | undefined) {
    this._userId = userId;
  }

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

  logout() {
    localStorage.removeItem('chatters_token');
    localStorage.removeItem('chatters_id');
    this.router.navigate(['login'])
  }

  openSnackBar(err: any) {
    console.log(err)
    this._snackBar.open(err.statusMessage, 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['error-snackbar']
    });
  }
}
