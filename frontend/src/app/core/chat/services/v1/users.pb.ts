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
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as chatCoreV1001 from '../../../chat/core/v1/user.pb';
import * as chatCoreV1002 from '../../../chat/core/v1/message.pb';
/**
 * Message implementation for chat.services.v1.UserInfoRequest
 */
export class UserInfoRequest implements GrpcMessage {
  static id = 'chat.services.v1.UserInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInfoRequest();
    UserInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInfoRequest) {
    _instance.userId = _instance.userId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInfoRequest,
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

    UserInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
  }

  private _userId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfoRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    UserInfoRequest.refineValues(this);
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
    UserInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInfoRequest.AsObject {
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
  ): UserInfoRequest.AsProtobufJSON {
    return {
      userId: this.userId
    };
  }
}
export module UserInfoRequest {
  /**
   * Standard JavaScript object representation for UserInfoRequest
   */
  export interface AsObject {
    userId: string;
  }

  /**
   * Protobuf JSON representation for UserInfoRequest
   */
  export interface AsProtobufJSON {
    userId: string;
  }
}

/**
 * Message implementation for chat.services.v1.SignUpRequest
 */
export class SignUpRequest implements GrpcMessage {
  static id = 'chat.services.v1.SignUpRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SignUpRequest();
    SignUpRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SignUpRequest) {
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
    _instance.email = _instance.email || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SignUpRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.username = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        case 3:
          _instance.email = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SignUpRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SignUpRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.username) {
      _writer.writeString(1, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
    if (_instance.email) {
      _writer.writeString(3, _instance.email);
    }
  }

  private _username: string;
  private _password: string;
  private _email: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SignUpRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SignUpRequest.AsObject>) {
    _value = _value || {};
    this.username = _value.username;
    this.password = _value.password;
    this.email = _value.email;
    SignUpRequest.refineValues(this);
  }
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SignUpRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SignUpRequest.AsObject {
    return {
      username: this.username,
      password: this.password,
      email: this.email
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
  ): SignUpRequest.AsProtobufJSON {
    return {
      username: this.username,
      password: this.password,
      email: this.email
    };
  }
}
export module SignUpRequest {
  /**
   * Standard JavaScript object representation for SignUpRequest
   */
  export interface AsObject {
    username: string;
    password: string;
    email: string;
  }

  /**
   * Protobuf JSON representation for SignUpRequest
   */
  export interface AsProtobufJSON {
    username: string;
    password: string;
    email: string;
  }
}

/**
 * Message implementation for chat.services.v1.LoginResponse
 */
export class LoginResponse implements GrpcMessage {
  static id = 'chat.services.v1.LoginResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginResponse();
    LoginResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginResponse) {
    _instance.user = _instance.user || undefined;
    _instance.jwt = _instance.jwt || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = new chatCoreV1001.User();
          _reader.readMessage(
            _instance.user,
            chatCoreV1001.User.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.jwt = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LoginResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeMessage(
        1,
        _instance.user as any,
        chatCoreV1001.User.serializeBinaryToWriter
      );
    }
    if (_instance.jwt) {
      _writer.writeString(2, _instance.jwt);
    }
  }

  private _user?: chatCoreV1001.User;
  private _jwt: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginResponse.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new chatCoreV1001.User(_value.user) : undefined;
    this.jwt = _value.jwt;
    LoginResponse.refineValues(this);
  }
  get user(): chatCoreV1001.User | undefined {
    return this._user;
  }
  set user(value: chatCoreV1001.User | undefined) {
    this._user = value;
  }
  get jwt(): string {
    return this._jwt;
  }
  set jwt(value: string) {
    this._jwt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginResponse.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined,
      jwt: this.jwt
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
  ): LoginResponse.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null,
      jwt: this.jwt
    };
  }
}
export module LoginResponse {
  /**
   * Standard JavaScript object representation for LoginResponse
   */
  export interface AsObject {
    user?: chatCoreV1001.User.AsObject;
    jwt: string;
  }

  /**
   * Protobuf JSON representation for LoginResponse
   */
  export interface AsProtobufJSON {
    user: chatCoreV1001.User.AsProtobufJSON | null;
    jwt: string;
  }
}

/**
 * Message implementation for chat.services.v1.LoginRequest
 */
export class LoginRequest implements GrpcMessage {
  static id = 'chat.services.v1.LoginRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginRequest();
    LoginRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginRequest) {
    _instance.email = _instance.email || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.email = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LoginRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.email) {
      _writer.writeString(1, _instance.email);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
  }

  private _email: string;
  private _password: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginRequest.AsObject>) {
    _value = _value || {};
    this.email = _value.email;
    this.password = _value.password;
    LoginRequest.refineValues(this);
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }
  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginRequest.AsObject {
    return {
      email: this.email,
      password: this.password
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
  ): LoginRequest.AsProtobufJSON {
    return {
      email: this.email,
      password: this.password
    };
  }
}
export module LoginRequest {
  /**
   * Standard JavaScript object representation for LoginRequest
   */
  export interface AsObject {
    email: string;
    password: string;
  }

  /**
   * Protobuf JSON representation for LoginRequest
   */
  export interface AsProtobufJSON {
    email: string;
    password: string;
  }
}
