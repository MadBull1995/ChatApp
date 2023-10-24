/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './users.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as chatCoreV1001 from '../../../chat/core/v1/user.pb';
import * as chatCoreV1002 from '../../../chat/core/v1/message.pb';
import { GRPC_USERS_CLIENT_SETTINGS } from './users.pbconf';
/**
 * Service client implementation for chat.services.v1.Users
 */
@Injectable({ providedIn: 'any' })
export class UsersClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /chat.services.v1.Users/SignUp
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<chatCoreV1001.User>>
     */
    signUp: (
      requestData: thisProto.SignUpRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<chatCoreV1001.User>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Users/SignUp',
        requestData,
        requestMetadata,
        requestClass: thisProto.SignUpRequest,
        responseClass: chatCoreV1001.User
      });
    },
    /**
     * Unary call: /chat.services.v1.Users/Login
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LoginResponse>>
     */
    login: (
      requestData: thisProto.LoginRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LoginResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Users/Login',
        requestData,
        requestMetadata,
        requestClass: thisProto.LoginRequest,
        responseClass: thisProto.LoginResponse
      });
    },
    /**
     * Unary call: /chat.services.v1.Users/UserInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<chatCoreV1001.User>>
     */
    userInfo: (
      requestData: thisProto.UserInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<chatCoreV1001.User>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Users/UserInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInfoRequest,
        responseClass: chatCoreV1001.User
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USERS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'chat.services.v1.Users',
      settings
    );
  }

  /**
   * Unary call @/chat.services.v1.Users/SignUp
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<chatCoreV1001.User>
   */
  signUp(
    requestData: thisProto.SignUpRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<chatCoreV1001.User> {
    return this.$raw
      .signUp(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/chat.services.v1.Users/Login
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LoginResponse>
   */
  login(
    requestData: thisProto.LoginRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LoginResponse> {
    return this.$raw
      .login(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/chat.services.v1.Users/UserInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<chatCoreV1001.User>
   */
  userInfo(
    requestData: thisProto.UserInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<chatCoreV1001.User> {
    return this.$raw
      .userInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
