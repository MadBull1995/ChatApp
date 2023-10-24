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
import * as thisProto from './contacts.pb';
import * as chatCoreV1000 from '../../../chat/core/v1/user.pb';
import * as chatCoreV1001 from '../../../chat/core/v1/contact.pb';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_CONTACTS_CLIENT_SETTINGS } from './contacts.pbconf';
/**
 * Service client implementation for chat.services.v1.Contacts
 */
@Injectable({ providedIn: 'any' })
export class ContactsClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /chat.services.v1.Contacts/GetContacts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetContactsResponse>>
     */
    getContacts: (
      requestData: thisProto.GetContactsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetContactsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Contacts/GetContacts',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetContactsRequest,
        responseClass: thisProto.GetContactsResponse
      });
    },
    /**
     * Unary call: /chat.services.v1.Contacts/AddContact
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    addContact: (
      requestData: thisProto.AddContactRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Contacts/AddContact',
        requestData,
        requestMetadata,
        requestClass: thisProto.AddContactRequest,
        responseClass: googleProtobuf002.Empty
      });
    },
    /**
     * Unary call: /chat.services.v1.Contacts/DeleteContact
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf002.Empty>>
     */
    deleteContact: (
      requestData: thisProto.DeleteContactRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf002.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/chat.services.v1.Contacts/DeleteContact',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteContactRequest,
        responseClass: googleProtobuf002.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CONTACTS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'chat.services.v1.Contacts',
      settings
    );
  }

  /**
   * Unary call @/chat.services.v1.Contacts/GetContacts
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetContactsResponse>
   */
  getContacts(
    requestData: thisProto.GetContactsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetContactsResponse> {
    return this.$raw
      .getContacts(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/chat.services.v1.Contacts/AddContact
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  addContact(
    requestData: thisProto.AddContactRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .addContact(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/chat.services.v1.Contacts/DeleteContact
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf002.Empty>
   */
  deleteContact(
    requestData: thisProto.DeleteContactRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf002.Empty> {
    return this.$raw
      .deleteContact(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
