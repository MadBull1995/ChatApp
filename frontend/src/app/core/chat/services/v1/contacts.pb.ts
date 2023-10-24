/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as chatCoreV1000 from '../../../chat/core/v1/user.pb';
import * as chatCoreV1001 from '../../../chat/core/v1/contact.pb';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for chat.services.v1.GetContactsRequest
 */
export class GetContactsRequest implements GrpcMessage {
  static id = 'chat.services.v1.GetContactsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetContactsRequest();
    GetContactsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetContactsRequest) {
    _instance.userId = _instance.userId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetContactsRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetContactsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetContactsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
  }

  private _userId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetContactsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetContactsRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    GetContactsRequest.refineValues(this);
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetContactsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetContactsRequest.AsObject {
    return {
      userId: this.userId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetContactsRequest.AsProtobufJSON {
    return {
      userId: this.userId
    };
  }
}
export module GetContactsRequest {
  /**
   * Standard JavaScript object representation for GetContactsRequest
   */
  export interface AsObject {
    userId: string;
  }

  /**
   * Protobuf JSON representation for GetContactsRequest
   */
  export interface AsProtobufJSON {
    userId: string;
  }
}

/**
 * Message implementation for chat.services.v1.GetContactsResponse
 */
export class GetContactsResponse implements GrpcMessage {
  static id = 'chat.services.v1.GetContactsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetContactsResponse();
    GetContactsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetContactsResponse) {
    _instance.contacts = _instance.contacts || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetContactsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new chatCoreV1001.Contact();
          _reader.readMessage(
            messageInitializer1,
            chatCoreV1001.Contact.deserializeBinaryFromReader
          );
          (_instance.contacts = _instance.contacts || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetContactsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetContactsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.contacts && _instance.contacts.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.contacts as any,
        chatCoreV1001.Contact.serializeBinaryToWriter
      );
    }
  }

  private _contacts?: chatCoreV1001.Contact[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetContactsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetContactsResponse.AsObject>) {
    _value = _value || {};
    this.contacts = (_value.contacts || []).map(
      m => new chatCoreV1001.Contact(m)
    );
    GetContactsResponse.refineValues(this);
  }
  get contacts(): chatCoreV1001.Contact[] | undefined {
    return this._contacts;
  }
  set contacts(value: chatCoreV1001.Contact[] | undefined) {
    this._contacts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetContactsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetContactsResponse.AsObject {
    return {
      contacts: (this.contacts || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetContactsResponse.AsProtobufJSON {
    return {
      contacts: (this.contacts || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module GetContactsResponse {
  /**
   * Standard JavaScript object representation for GetContactsResponse
   */
  export interface AsObject {
    contacts?: chatCoreV1001.Contact.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetContactsResponse
   */
  export interface AsProtobufJSON {
    contacts: chatCoreV1001.Contact.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for chat.services.v1.AddContactRequest
 */
export class AddContactRequest implements GrpcMessage {
  static id = 'chat.services.v1.AddContactRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new AddContactRequest();
    AddContactRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: AddContactRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: AddContactRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.email = _reader.readString();
          break;
        case 2:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    AddContactRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: AddContactRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.email || _instance.email === '') {
      _writer.writeString(1, _instance.email);
    }
    if (_instance.id || _instance.id === '') {
      _writer.writeString(2, _instance.id);
    }
  }

  private _email: string;
  private _id: string;

  private _emailOrId: AddContactRequest.EmailOrIdCase =
    AddContactRequest.EmailOrIdCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of AddContactRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<AddContactRequest.AsObject>) {
    _value = _value || {};
    this.email = _value.email;
    this.id = _value.id;
    AddContactRequest.refineValues(this);
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    if (value !== undefined && value !== null) {
      this._id = undefined;
      this._emailOrId = AddContactRequest.EmailOrIdCase.email;
    }
    this._email = value;
  }
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    if (value !== undefined && value !== null) {
      this._email = undefined;
      this._emailOrId = AddContactRequest.EmailOrIdCase.id;
    }
    this._id = value;
  }
  get emailOrId() {
    return this._emailOrId;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    AddContactRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): AddContactRequest.AsObject {
    return {
      email: this.email,
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): AddContactRequest.AsProtobufJSON {
    return {
      email:
        this.email === null || this.email === undefined ? null : this.email,
      id: this.id === null || this.id === undefined ? null : this.id
    };
  }
}
export module AddContactRequest {
  /**
   * Standard JavaScript object representation for AddContactRequest
   */
  export interface AsObject {
    email: string;
    id: string;
  }

  /**
   * Protobuf JSON representation for AddContactRequest
   */
  export interface AsProtobufJSON {
    email: string | null;
    id: string | null;
  }
  export enum EmailOrIdCase {
    none = 0,
    email = 1,
    id = 2
  }
}

/**
 * Message implementation for chat.services.v1.DeleteContactRequest
 */
export class DeleteContactRequest implements GrpcMessage {
  static id = 'chat.services.v1.DeleteContactRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteContactRequest();
    DeleteContactRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteContactRequest) {
    _instance.contactId = _instance.contactId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteContactRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.contactId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteContactRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteContactRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.contactId) {
      _writer.writeString(1, _instance.contactId);
    }
  }

  private _contactId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteContactRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteContactRequest.AsObject>) {
    _value = _value || {};
    this.contactId = _value.contactId;
    DeleteContactRequest.refineValues(this);
  }
  get contactId(): string {
    return this._contactId;
  }
  set contactId(value: string) {
    this._contactId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteContactRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteContactRequest.AsObject {
    return {
      contactId: this.contactId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteContactRequest.AsProtobufJSON {
    return {
      contactId: this.contactId
    };
  }
}
export module DeleteContactRequest {
  /**
   * Standard JavaScript object representation for DeleteContactRequest
   */
  export interface AsObject {
    contactId: string;
  }

  /**
   * Protobuf JSON representation for DeleteContactRequest
   */
  export interface AsProtobufJSON {
    contactId: string;
  }
}
