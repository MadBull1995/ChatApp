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
 * Message implementation for chat.core.v1.Group
 */
export class Group implements GrpcMessage {
  static id = 'chat.core.v1.Group';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Group();
    Group.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Group) {
    _instance.groupId = _instance.groupId || '';
    _instance.groupName = _instance.groupName || '';
    _instance.adminUserId = _instance.adminUserId || '';
    _instance.members = _instance.members || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Group, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.groupId = _reader.readString();
          break;
        case 2:
          _instance.groupName = _reader.readString();
          break;
        case 3:
          _instance.adminUserId = _reader.readString();
          break;
        case 4:
          const messageInitializer4 = new chatCoreV1000.User();
          _reader.readMessage(
            messageInitializer4,
            chatCoreV1000.User.deserializeBinaryFromReader
          );
          (_instance.members = _instance.members || []).push(
            messageInitializer4
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Group.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Group, _writer: BinaryWriter) {
    if (_instance.groupId) {
      _writer.writeString(1, _instance.groupId);
    }
    if (_instance.groupName) {
      _writer.writeString(2, _instance.groupName);
    }
    if (_instance.adminUserId) {
      _writer.writeString(3, _instance.adminUserId);
    }
    if (_instance.members && _instance.members.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.members as any,
        chatCoreV1000.User.serializeBinaryToWriter
      );
    }
  }

  private _groupId: string;
  private _groupName: string;
  private _adminUserId: string;
  private _members?: chatCoreV1000.User[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Group to deeply clone from
   */
  constructor(_value?: RecursivePartial<Group.AsObject>) {
    _value = _value || {};
    this.groupId = _value.groupId;
    this.groupName = _value.groupName;
    this.adminUserId = _value.adminUserId;
    this.members = (_value.members || []).map(m => new chatCoreV1000.User(m));
    Group.refineValues(this);
  }
  get groupId(): string {
    return this._groupId;
  }
  set groupId(value: string) {
    this._groupId = value;
  }
  get groupName(): string {
    return this._groupName;
  }
  set groupName(value: string) {
    this._groupName = value;
  }
  get adminUserId(): string {
    return this._adminUserId;
  }
  set adminUserId(value: string) {
    this._adminUserId = value;
  }
  get members(): chatCoreV1000.User[] | undefined {
    return this._members;
  }
  set members(value: chatCoreV1000.User[] | undefined) {
    this._members = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Group.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Group.AsObject {
    return {
      groupId: this.groupId,
      groupName: this.groupName,
      adminUserId: this.adminUserId,
      members: (this.members || []).map(m => m.toObject())
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
  ): Group.AsProtobufJSON {
    return {
      groupId: this.groupId,
      groupName: this.groupName,
      adminUserId: this.adminUserId,
      members: (this.members || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module Group {
  /**
   * Standard JavaScript object representation for Group
   */
  export interface AsObject {
    groupId: string;
    groupName: string;
    adminUserId: string;
    members?: chatCoreV1000.User.AsObject[];
  }

  /**
   * Protobuf JSON representation for Group
   */
  export interface AsProtobufJSON {
    groupId: string;
    groupName: string;
    adminUserId: string;
    members: chatCoreV1000.User.AsProtobufJSON[] | null;
  }
}
