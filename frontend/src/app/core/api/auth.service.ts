import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse, SignUpRequest } from  '../chat/services/v1/users.pb'
import { UsersClient } from  '../chat/services/v1/users.pbsc'
import { GrpcEvent, GrpcStatusEvent } from '@ngx-grpc/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private users: UsersClient) { }

  public login(
    email: string,
    password: string,
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let loginRequest = new LoginRequest({
        email,
        password,
      });
      this.users.login(loginRequest)
        .subscribe(
          {
            error(err) {
              reject(err)
            },
            next(loginResponse) {      
              resolve(loginResponse)
            },
          }
        );
    });
  }

  public signUp() {

  }
}
