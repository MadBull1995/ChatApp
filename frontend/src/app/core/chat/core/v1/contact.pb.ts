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
/**
 * Message implementation for chat.core.v1.Contact
 */
export class Contact implements GrpcMessage {
  static id = 'chat.core.v1.Contact';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Contact();
    Contact.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Contact) {
    _instance.userId = _instance.userId || '';
    _instance.displayName = _instance.displayName || '';
    _instance.email = _instance.email || '';
    _instance.profilePictureUrl = _instance.profilePictureUrl || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Contact,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readString();
          break;
        case 2:
          _instance.displayName = _reader.readString();
          break;
        case 3:
          _instance.email = _reader.readString();
          break;
        case 4:
          _instance.profilePictureUrl = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Contact.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Contact, _writer: BinaryWriter) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
    if (_instance.displayName) {
      _writer.writeString(2, _instance.displayName);
    }
    if (_instance.email) {
      _writer.writeString(3, _instance.email);
    }
    if (_instance.profilePictureUrl) {
      _writer.writeString(4, _instance.profilePictureUrl);
    }
  }

  private _userId: string;
  private _displayName: string;
  private _email: string;
  private _profilePictureUrl: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Contact to deeply clone from
   */
  constructor(_value?: RecursivePartial<Contact.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    this.displayName = _value.displayName;
    this.email = _value.email;
    this.profilePictureUrl = _value.profilePictureUrl;
    Contact.refineValues(this);
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    this._userId = value;
  }
  get displayName(): string {
    return this._displayName;
  }
  set displayName(value: string) {
    this._displayName = value;
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }
  get profilePictureUrl(): string {
    return this._profilePictureUrl;
  }
  set profilePictureUrl(value: string) {
    this._profilePictureUrl = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Contact.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Contact.AsObject {
    return {
      userId: this.userId,
      displayName: this.displayName,
      email: this.email,
      profilePictureUrl: this.profilePictureUrl
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
  ): Contact.AsProtobufJSON {
    return {
      userId: this.userId,
      displayName: this.displayName,
      email: this.email,
      profilePictureUrl: this.profilePictureUrl
    };
  }
}
export module Contact {
  /**
   * Standard JavaScript object representation for Contact
   */
  export interface AsObject {
    userId: string;
    displayName: string;
    email: string;
    profilePictureUrl: string;
  }

  /**
   * Protobuf JSON representation for Contact
   */
  export interface AsProtobufJSON {
    userId: string;
    displayName: string;
    email: string;
    profilePictureUrl: string;
  }
}
