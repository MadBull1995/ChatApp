import { Injectable } from '@angular/core';
import { UsersClient } from '../chat/services/v1/users.pbsc';
import { User } from '../chat/core/v1/user.pb';
import { GrpcMetadata } from '@ngx-grpc/common';
import { AppService } from '../app.service';
import { Metadata } from '@grpc/grpc-js';
import { UserInfoRequest } from '../chat/services/v1/users.pb';
import { ContactsClient } from '../chat/services/v1/contacts.pbsc';
import { GetContactsRequest, GetContactsResponse } from '../chat/services/v1/contacts.pb';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _metadata!: GrpcMetadata;
  constructor(
    private app: AppService,
    private user: UsersClient,
    private contacts: ContactsClient,
  ) {
    // this.app.loggedIn$.subscribe(e => {
    //   const token = localStorage.getItem('chatters_token');
    //   this.app.token = token ?? '';
    //   this._metadata.set('Authorization', `Bearer ${this.app.token}`);
    // })
    this._metadata = new GrpcMetadata();
    if(this.app.token) {
      this._metadata.set('Authorization', `Bearer ${this.app.token}`);
    }
  }

  getContacts(): Promise<GetContactsResponse> {
    return new Promise((resolve, reject) => {
      this.contacts.getContacts(new GetContactsRequest({
        userId: this.app.userId
      }), this.app.metadata)
        .subscribe({
          next: (contacts) => {
            resolve(contacts);
          },
          error: (err) => {
            reject(err);
          },
        })
    })
  }

  userInfo(userId: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.user.userInfo(new UserInfoRequest({
        userId: userId
      }), this.app.metadata)
        .subscribe({
          next(value) {
            resolve(value)
          },
          error(err) {
            reject(err)
          },
        })
    });
  }
}
