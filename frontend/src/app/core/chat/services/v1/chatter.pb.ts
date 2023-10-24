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
import * as chatCoreV1001 from '../../../chat/core/v1/message.pb';
import * as chatCoreV1002 from '../../../chat/core/v1/user.pb';
import * as chatCoreV1003 from '../../../chat/core/v1/chat.pb';
import * as chatCoreV1004 from '../../../chat/core/v1/group.pb';
/**
 * Message implementation for chat.services.v1.ListChatsRequest
 */
export class ListChatsRequest implements GrpcMessage {
  static id = 'chat.services.v1.ListChatsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListChatsRequest();
    ListChatsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListChatsRequest) {
    _instance.userId = _instance.userId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListChatsRequest,
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

    ListChatsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListChatsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
  }

  private _userId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListChatsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListChatsRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    ListChatsRequest.refineValues(this);
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
    ListChatsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListChatsRequest.AsObject {
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
  ): ListChatsRequest.AsProtobufJSON {
    return {
      userId: this.userId
    };
  }
}
export module ListChatsRequest {
  /**
   * Standard JavaScript object representation for ListChatsRequest
   */
  export interface AsObject {
    userId: string;
  }

  /**
   * Protobuf JSON representation for ListChatsRequest
   */
  export interface AsProtobufJSON {
    userId: string;
  }
}

/**
 * Message implementation for chat.services.v1.CreateRoomRequest
 */
export class CreateRoomRequest implements GrpcMessage {
  static id = 'chat.services.v1.CreateRoomRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateRoomRequest();
    CreateRoomRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateRoomRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateRoomRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.group = new chatCoreV1004.Group();
          _reader.readMessage(
            _instance.group,
            chatCoreV1004.Group.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.userId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateRoomRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateRoomRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.group) {
      _writer.writeMessage(
        1,
        _instance.group as any,
        chatCoreV1004.Group.serializeBinaryToWriter
      );
    }
    if (_instance.userId || _instance.userId === '') {
      _writer.writeString(2, _instance.userId);
    }
  }

  private _group?: chatCoreV1004.Group;
  private _userId: string;

  private _groupOrChat: CreateRoomRequest.GroupOrChatCase =
    CreateRoomRequest.GroupOrChatCase.none;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateRoomRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateRoomRequest.AsObject>) {
    _value = _value || {};
    this.group = _value.group
      ? new chatCoreV1004.Group(_value.group)
      : undefined;
    this.userId = _value.userId;
    CreateRoomRequest.refineValues(this);
  }
  get group(): chatCoreV1004.Group | undefined {
    return this._group;
  }
  set group(value: chatCoreV1004.Group | undefined) {
    if (value !== undefined && value !== null) {
      this._userId = undefined;
      this._groupOrChat = CreateRoomRequest.GroupOrChatCase.group;
    }
    this._group = value;
  }
  get userId(): string {
    return this._userId;
  }
  set userId(value: string) {
    if (value !== undefined && value !== null) {
      this._group = undefined;
      this._groupOrChat = CreateRoomRequest.GroupOrChatCase.userId;
    }
    this._userId = value;
  }
  get groupOrChat() {
    return this._groupOrChat;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateRoomRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateRoomRequest.AsObject {
    return {
      group: this.group ? this.group.toObject() : undefined,
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
  ): CreateRoomRequest.AsProtobufJSON {
    return {
      group: this.group ? this.group.toProtobufJSON(options) : null,
      userId:
        this.userId === null || this.userId === undefined ? null : this.userId
    };
  }
}
export module CreateRoomRequest {
  /**
   * Standard JavaScript object representation for CreateRoomRequest
   */
  export interface AsObject {
    group?: chatCoreV1004.Group.AsObject;
    userId: string;
  }

  /**
   * Protobuf JSON representation for CreateRoomRequest
   */
  export interface AsProtobufJSON {
    group: chatCoreV1004.Group.AsProtobufJSON | null;
    userId: string | null;
  }
  export enum GroupOrChatCase {
    none = 0,
    group = 1,
    userId = 2
  }
}

/**
 * Message implementation for chat.services.v1.JoinRoomRequest
 */
export class JoinRoomRequest implements GrpcMessage {
  static id = 'chat.services.v1.JoinRoomRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new JoinRoomRequest();
    JoinRoomRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: JoinRoomRequest) {
    _instance.user = _instance.user || undefined;
    _instance.roomId = _instance.roomId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: JoinRoomRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.user = new chatCoreV1002.User();
          _reader.readMessage(
            _instance.user,
            chatCoreV1002.User.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.roomId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    JoinRoomRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: JoinRoomRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeMessage(
        1,
        _instance.user as any,
        chatCoreV1002.User.serializeBinaryToWriter
      );
    }
    if (_instance.roomId) {
      _writer.writeString(2, _instance.roomId);
    }
  }

  private _user?: chatCoreV1002.User;
  private _roomId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of JoinRoomRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<JoinRoomRequest.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new chatCoreV1002.User(_value.user) : undefined;
    this.roomId = _value.roomId;
    JoinRoomRequest.refineValues(this);
  }
  get user(): chatCoreV1002.User | undefined {
    return this._user;
  }
  set user(value: chatCoreV1002.User | undefined) {
    this._user = value;
  }
  get roomId(): string {
    return this._roomId;
  }
  set roomId(value: string) {
    this._roomId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    JoinRoomRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): JoinRoomRequest.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined,
      roomId: this.roomId
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
  ): JoinRoomRequest.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null,
      roomId: this.roomId
    };
  }
}
export module JoinRoomRequest {
  /**
   * Standard JavaScript object representation for JoinRoomRequest
   */
  export interface AsObject {
    user?: chatCoreV1002.User.AsObject;
    roomId: string;
  }

  /**
   * Protobuf JSON representation for JoinRoomRequest
   */
  export interface AsProtobufJSON {
    user: chatCoreV1002.User.AsProtobufJSON | null;
    roomId: string;
  }
}

/**
 * Message implementation for chat.services.v1.JoinRoomResponse
 */
export class JoinRoomResponse implements GrpcMessage {
  static id = 'chat.services.v1.JoinRoomResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new JoinRoomResponse();
    JoinRoomResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: JoinRoomResponse) {
    _instance.status = _instance.status || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: JoinRoomResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    JoinRoomResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: JoinRoomResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeString(1, _instance.status);
    }
  }

  private _status: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of JoinRoomResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<JoinRoomResponse.AsObject>) {
    _value = _value || {};
    this.status = _value.status;
    JoinRoomResponse.refineValues(this);
  }
  get status(): string {
    return this._status;
  }
  set status(value: string) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    JoinRoomResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): JoinRoomResponse.AsObject {
    return {
      status: this.status
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
  ): JoinRoomResponse.AsProtobufJSON {
    return {
      status: this.status
    };
  }
}
export module JoinRoomResponse {
  /**
   * Standard JavaScript object representation for JoinRoomResponse
   */
  export interface AsObject {
    status: string;
  }

  /**
   * Protobuf JSON representation for JoinRoomResponse
   */
  export interface AsProtobufJSON {
    status: string;
  }
}

/**
 * Message implementation for chat.services.v1.SendMessageRequest
 */
export class SendMessageRequest implements GrpcMessage {
  static id = 'chat.services.v1.SendMessageRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SendMessageRequest();
    SendMessageRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SendMessageRequest) {
    _instance.roomId = _instance.roomId || '';
    _instance.message = _instance.message || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SendMessageRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.roomId = _reader.readString();
          break;
        case 2:
          _instance.message = new chatCoreV1001.Message();
          _reader.readMessage(
            _instance.message,
            chatCoreV1001.Message.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    SendMessageRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SendMessageRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.roomId) {
      _writer.writeString(1, _instance.roomId);
    }
    if (_instance.message) {
      _writer.writeMessage(
        2,
        _instance.message as any,
        chatCoreV1001.Message.serializeBinaryToWriter
      );
    }
  }

  private _roomId: string;
  private _message?: chatCoreV1001.Message;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SendMessageRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<SendMessageRequest.AsObject>) {
    _value = _value || {};
    this.roomId = _value.roomId;
    this.message = _value.message
      ? new chatCoreV1001.Message(_value.message)
      : undefined;
    SendMessageRequest.refineValues(this);
  }
  get roomId(): string {
    return this._roomId;
  }
  set roomId(value: string) {
    this._roomId = value;
  }
  get message(): chatCoreV1001.Message | undefined {
    return this._message;
  }
  set message(value: chatCoreV1001.Message | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SendMessageRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SendMessageRequest.AsObject {
    return {
      roomId: this.roomId,
      message: this.message ? this.message.toObject() : undefined
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
  ): SendMessageRequest.AsProtobufJSON {
    return {
      roomId: this.roomId,
      message: this.message ? this.message.toProtobufJSON(options) : null
    };
  }
}
export module SendMessageRequest {
  /**
   * Standard JavaScript object representation for SendMessageRequest
   */
  export interface AsObject {
    roomId: string;
    message?: chatCoreV1001.Message.AsObject;
  }

  /**
   * Protobuf JSON representation for SendMessageRequest
   */
  export interface AsProtobufJSON {
    roomId: string;
    message: chatCoreV1001.Message.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for chat.services.v1.SendMessageResponse
 */
export class SendMessageResponse implements GrpcMessage {
  static id = 'chat.services.v1.SendMessageResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SendMessageResponse();
    SendMessageResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SendMessageResponse) {
    _instance.status = _instance.status || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SendMessageResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SendMessageResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SendMessageResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeString(1, _instance.status);
    }
  }

  private _status: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SendMessageResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<SendMessageResponse.AsObject>) {
    _value = _value || {};
    this.status = _value.status;
    SendMessageResponse.refineValues(this);
  }
  get status(): string {
    return this._status;
  }
  set status(value: string) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SendMessageResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SendMessageResponse.AsObject {
    return {
      status: this.status
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
  ): SendMessageResponse.AsProtobufJSON {
    return {
      status: this.status
    };
  }
}
export module SendMessageResponse {
  /**
   * Standard JavaScript object representation for SendMessageResponse
   */
  export interface AsObject {
    status: string;
  }

  /**
   * Protobuf JSON representation for SendMessageResponse
   */
  export interface AsProtobufJSON {
    status: string;
  }
}

/**
 * Message implementation for chat.services.v1.GetMessagesRequest
 */
export class GetMessagesRequest implements GrpcMessage {
  static id = 'chat.services.v1.GetMessagesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetMessagesRequest();
    GetMessagesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetMessagesRequest) {
    _instance.userId = _instance.userId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetMessagesRequest,
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

    GetMessagesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetMessagesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
  }

  private _userId: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetMessagesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetMessagesRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    GetMessagesRequest.refineValues(this);
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
    GetMessagesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetMessagesRequest.AsObject {
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
  ): GetMessagesRequest.AsProtobufJSON {
    return {
      userId: this.userId
    };
  }
}
export module GetMessagesRequest {
  /**
   * Standard JavaScript object representation for GetMessagesRequest
   */
  export interface AsObject {
    userId: string;
  }

  /**
   * Protobuf JSON representation for GetMessagesRequest
   */
  export interface AsProtobufJSON {
    userId: string;
  }
}
