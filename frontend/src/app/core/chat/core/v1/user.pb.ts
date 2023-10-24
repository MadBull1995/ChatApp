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

/**
 * Message implementation for chat.core.v1.User
 */
export class User implements GrpcMessage {
  static id = 'chat.core.v1.User';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new User();
    User.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: User) {
    _instance.userId = _instance.userId || '';
    _instance.username = _instance.username || '';
    _instance.email = _instance.email || '';
    _instance.passwordHash = _instance.passwordHash || '';
    _instance.displayName = _instance.displayName || '';
    _instance.profilePictureUrl = _instance.profilePictureUrl || '';
    _instance.contacts = _instance.contacts || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: User, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readString();
          break;
        case 2:
          _instance.username = _reader.readString();
          break;
        case 3:
          _instance.email = _reader.readString();
          break;
        case 4:
          _instance.passwordHash = _reader.readString();
          break;
        case 5:
          _instance.displayName = _reader.readString();
          break;
        case 6:
          _instance.profilePictureUrl = _reader.readString();
          break;
        case 7:
          (_instance.contacts = _instance.contacts || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    User.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: User, _writer: BinaryWriter) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
    if (_instance.username) {
      _writer.writeString(2, _instance.username);
    }
    if (_instance.email) {
      _writer.writeString(3, _instance.email);
    }
    if (_instance.passwordHash) {
      _writer.writeString(4, _instance.passwordHash);
    }
    if (_instance.displayName) {
      _writer.writeString(5, _instance.displayName);
    }
    if (_instance.profilePictureUrl) {
      _writer.writeString(6, _instance.profilePictureUrl);
    }
    if (_instance.contacts && _instance.contacts.length) {
      _writer.writeRepeatedString(7, _instance.contacts);
    }
  }

  private _userId: string;
  private _username: string;
  private _email: string;
  private _passwordHash: string;
  private _displayName: string;
  private _profilePictureUrl: string;
  private _contacts: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of User to deeply clone from
   */
  constructor(_value?: RecursivePartial<User.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    this.username = _value.username;
    this.email = _value.email;
    this.passwordHash = _value.passwordHash;
    this.displayName = _value.displayName;
    this.profilePictureUrl = _value.profilePictureUrl;
    this.contacts = (_value.contacts || []).slice();
    User.refineValues(this);
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }
  get passwordHash(): string {
    return this._passwordHash;
  }
  set passwordHash(value: string) {
    this._passwordHash = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get profilePictureUrl(): string {
    return this._profilePictureUrl;
  }
  set profilePictureUrl(value: string) {
    this._profilePictureUrl = value;
  }
  get contacts(): string[] {
    return this._contacts;
  }
  set contacts(value: string[]) {
    this._contacts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    User.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): User.AsObject {
    return {
      userId: this.userId,
      username: this.username,
      email: this.email,
      passwordHash: this.passwordHash,
      displayName: this.displayName,
      profilePictureUrl: this.profilePictureUrl,
      contacts: (this.contacts || []).slice()
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
  ): User.AsProtobufJSON {
    return {
      userId: this.userId,
      username: this.username,
      email: this.email,
      passwordHash: this.passwordHash,
      displayName: this.displayName,
      profilePictureUrl: this.profilePictureUrl,
      contacts: (this.contacts || []).slice()
    };
  }
}
export module User {
  /**
   * Standard JavaScript object representation for User
   */
  export interface AsObject {
    userId: string;
    username: string;
    email: string;
    passwordHash: string;
    displayName: string;
    profilePictureUrl: string;
    contacts: string[];
  }

  /**
   * Protobuf JSON representation for User
   */
  export interface AsProtobufJSON {
    userId: string;
    username: string;
    email: string;
    passwordHash: string;
    displayName: string;
    profilePictureUrl: string;
    contacts: string[];
  }
}
