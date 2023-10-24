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
/**
 * Message implementation for chat.core.v1.Chat
 */
export class Chat implements GrpcMessage {
  static id = 'chat.core.v1.Chat';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Chat();
    Chat.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Chat) {
    _instance.chatId = _instance.chatId || '';
    _instance.chatName = _instance.chatName || '';
    _instance.isGroupChat = _instance.isGroupChat || false;
    _instance.participants = _instance.participants || [];
    _instance.messages = _instance.messages || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Chat, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.chatId = _reader.readString();
          break;
        case 2:
          _instance.chatName = _reader.readString();
          break;
        case 3:
          _instance.isGroupChat = _reader.readBool();
          break;
        case 4:
          (_instance.participants = _instance.participants || []).push(
            _reader.readString()
          );
          break;
        case 5:
          const messageInitializer5 = new chatCoreV1001.Message();
          _reader.readMessage(
            messageInitializer5,
            chatCoreV1001.Message.deserializeBinaryFromReader
          );
          (_instance.messages = _instance.messages || []).push(
            messageInitializer5
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Chat.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Chat, _writer: BinaryWriter) {
    if (_instance.chatId) {
      _writer.writeString(1, _instance.chatId);
    }
    if (_instance.chatName) {
      _writer.writeString(2, _instance.chatName);
    }
    if (_instance.isGroupChat) {
      _writer.writeBool(3, _instance.isGroupChat);
    }
    if (_instance.participants && _instance.participants.length) {
      _writer.writeRepeatedString(4, _instance.participants);
    }
    if (_instance.messages && _instance.messages.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.messages as any,
        chatCoreV1001.Message.serializeBinaryToWriter
      );
    }
  }

  private _chatId: string;
  private _chatName: string;
  private _isGroupChat: boolean;
  private _participants: string[];
  private _messages?: chatCoreV1001.Message[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Chat to deeply clone from
   */
  constructor(_value?: RecursivePartial<Chat.AsObject>) {
    _value = _value || {};
    this.chatId = _value.chatId;
    this.chatName = _value.chatName;
    this.isGroupChat = _value.isGroupChat;
    this.participants = (_value.participants || []).slice();
    this.messages = (_value.messages || []).map(
      m => new chatCoreV1001.Message(m)
    );
    Chat.refineValues(this);
  }
  get chatId(): string {
    return this._chatId;
  }
  set chatId(value: string) {
    this._chatId = value;
  }
  get chatName(): string {
    return this._chatName;
  }
  set chatName(value: string) {
    this._chatName = value;
  }
  get isGroupChat(): boolean {
    return this._isGroupChat;
  }
  set isGroupChat(value: boolean) {
    this._isGroupChat = value;
  }
  get participants(): string[] {
    return this._participants;
  }
  set participants(value: string[]) {
    this._participants = value;
  }
  get messages(): chatCoreV1001.Message[] | undefined {
    return this._messages;
  }
  set messages(value: chatCoreV1001.Message[] | undefined) {
    this._messages = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Chat.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Chat.AsObject {
    return {
      chatId: this.chatId,
      chatName: this.chatName,
      isGroupChat: this.isGroupChat,
      participants: (this.participants || []).slice(),
      messages: (this.messages || []).map(m => m.toObject())
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
  ): Chat.AsProtobufJSON {
    return {
      chatId: this.chatId,
      chatName: this.chatName,
      isGroupChat: this.isGroupChat,
      participants: (this.participants || []).slice(),
      messages: (this.messages || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module Chat {
  /**
   * Standard JavaScript object representation for Chat
   */
  export interface AsObject {
    chatId: string;
    chatName: string;
    isGroupChat: boolean;
    participants: string[];
    messages?: chatCoreV1001.Message.AsObject[];
  }

  /**
   * Protobuf JSON representation for Chat
   */
  export interface AsProtobufJSON {
    chatId: string;
    chatName: string;
    isGroupChat: boolean;
    participants: string[];
    messages: chatCoreV1001.Message.AsProtobufJSON[] | null;
  }
}
