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
import * as thisProto from './chatter.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as chatCoreV1001 from '../../../chat/core/v1/message.pb';
import * as chatCoreV1002 from '../../../chat/core/v1/user.pb';
import * as chatCoreV1003 from '../../../chat/core/v1/chat.pb';
import * as chatCoreV1004 from '../../../chat/core/v1/group.pb';
import { GRPC_CHATTER_CLIENT_SETTINGS } from './chatter.pbconf';
/**
 * Service client implementation for chat.services.v1.Chatter
 */
@Injectable({ providedIn: 'any' })
export class ChatterClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /chat.services.v1.Chatter/JoinRoom
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.JoinRoomResponse>>
     */
    joinRoom: (
      requestData: thisProto.JoinRoomRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.JoinRoomResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Chatter/JoinRoom',
        requestData,
        requestMetadata,
        requestClass: thisProto.JoinRoomRequest,
        responseClass: thisProto.JoinRoomResponse
      });
    },
    /**
     * Unary call: /chat.services.v1.Chatter/SendMessage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SendMessageResponse>>
     */
    sendMessage: (
      requestData: thisProto.SendMessageRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SendMessageResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Chatter/SendMessage',
        requestData,
        requestMetadata,
        requestClass: thisProto.SendMessageRequest,
        responseClass: thisProto.SendMessageResponse
      });
    },
    /**
     * Server streaming: /chat.services.v1.Chatter/GetMessages
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.SendMessageRequest>>
     */
    getMessages: (
      requestData: thisProto.GetMessagesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.SendMessageRequest>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/chat.services.v1.Chatter/GetMessages',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetMessagesRequest,
        responseClass: thisProto.SendMessageRequest
      });
    },
    /**
     * Server streaming: /chat.services.v1.Chatter/ListChats
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<chatCoreV1003.Chat>>
     */
    listChats: (
      requestData: thisProto.ListChatsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<chatCoreV1003.Chat>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/chat.services.v1.Chatter/ListChats',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListChatsRequest,
        responseClass: chatCoreV1003.Chat
      });
    },
    /**
     * Unary call: /chat.services.v1.Chatter/CreateRoom
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<chatCoreV1003.Chat>>
     */
    createRoom: (
      requestData: thisProto.CreateRoomRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<chatCoreV1003.Chat>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Chatter/CreateRoom',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateRoomRequest,
        responseClass: chatCoreV1003.Chat
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CHATTER_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'chat.services.v1.Chatter',
      settings
    );
  }

  /**
   * Unary call @/chat.services.v1.Chatter/JoinRoom
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.JoinRoomResponse>
   */
  joinRoom(
    requestData: thisProto.JoinRoomRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.JoinRoomResponse> {
    return this.$raw
      .joinRoom(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/chat.services.v1.Chatter/SendMessage
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SendMessageResponse>
   */
  sendMessage(
    requestData: thisProto.SendMessageRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SendMessageResponse> {
    return this.$raw
      .sendMessage(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/chat.services.v1.Chatter/GetMessages
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.SendMessageRequest>
   */
  getMessages(
    requestData: thisProto.GetMessagesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.SendMessageRequest> {
    return this.$raw
      .getMessages(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/chat.services.v1.Chatter/ListChats
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<chatCoreV1003.Chat>
   */
  listChats(
    requestData: thisProto.ListChatsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<chatCoreV1003.Chat> {
    return this.$raw
      .listChats(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/chat.services.v1.Chatter/CreateRoom
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<chatCoreV1003.Chat>
   */
  createRoom(
    requestData: thisProto.CreateRoomRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<chatCoreV1003.Chat> {
    return this.$raw
      .createRoom(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
