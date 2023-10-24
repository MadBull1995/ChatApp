import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './core/app.service';
import { SidebarEvents } from './core/types';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { UserService } from './core/api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') sidebar!: MatDrawer;
  title = 'Chatters';
  hideSidebar = true;
  constructor(
    private _app: AppService,
    private user: UserService
  ) {
    this._app.sidebarEvents$.subscribe(sidebarEvent => {
      console.log(sidebarEvent)
      switch(sidebarEvent) {
        case SidebarEvents.Close:
          this.sidebar.close();
          this.hideSidebar = false;
          break;
        case SidebarEvents.Open:
          this.sidebar.open();
          this.hideSidebar = false;
          break;
        case SidebarEvents.Hide:
          this.sidebar.close();
          this.hideSidebar = true;
          break;
        default:
          this.sidebar.open();
          break;
      }
    });
  }


  ngOnInit(): void {
    this._app.loggedIn$.subscribe(e => {
      this._app.userId = e.userId;
      this._app.userInfo = e;
    })
    if(this._app.isAuthenticated && this._app.userId) {
      this.hideSidebar = false;
      this.user.userInfo(this._app.userId)
        .then(res => {
          console.log('*****\nlogged in\n*****')
          this._app.userId = res.userId;
          this._app.userInfo = res;
          this._app.sidebarEvents$.next(SidebarEvents.Open)
        }).catch(err => {
          console.log(err)
        })
    }
    
  }
}
