import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../core/api/user.service';
import { AppService } from '../core/app.service';
import { SidebarEvents } from '../core/types';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private app: AppService,
    private router: Router,
    private user: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Retrieve the token from local storage
    const token = localStorage.getItem('chatters_token');
    const chatters_id: string = localStorage.getItem('chatters_id') || 'UNNOWN_ID';
    if (token && chatters_id) {
      if(!this.app.isAuthenticated) {
        this.user.userInfo(this.app.userId ?? chatters_id)
          .then(res => {
            this.app.token = token;
            this.app.userId = chatters_id;
            this.app.userInfo = res;
            this.app.metadata.set('Authorization', `Bearer ${token}`);
            this.app.loggedIn$.next(res)
            
          }).catch(err => {
            console.log(err)
          })
      }
      this.app.isAuthenticated = true;
      // TODO: Optionally validate the token structure here
      // or defer to a backend API call for more secure validation.
      return true;
    } else {
      // Navigate to the login page
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
