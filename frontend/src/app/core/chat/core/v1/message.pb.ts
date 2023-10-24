/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for chat.core.v1.Message
 */
export class Message implements GrpcMessage {
  static id = 'chat.core.v1.Message';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Message();
    Message.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Message) {
    _instance.messageId = _instance.messageId || '';
    _instance.senderId = _instance.senderId || '';
    _instance.content = _instance.content || '';
    _instance.timestamp = _instance.timestamp || undefined;
    _instance.attachments = _instance.attachments || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Message,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.messageId = _reader.readString();
          break;
        case 2:
          _instance.senderId = _reader.readString();
          break;
        case 3:
          _instance.content = _reader.readString();
          break;
        case 4:
          _instance.timestamp = new googleProtobuf000.Timestamp();
          _reader.readMessage(
            _instance.timestamp,
            googleProtobuf000.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          const messageInitializer5 = new Message.Attachment();
          _reader.readMessage(
            messageInitializer5,
            Message.Attachment.deserializeBinaryFromReader
          );
          (_instance.attachments = _instance.attachments || []).push(
            messageInitializer5
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Message.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Message, _writer: BinaryWriter) {
    if (_instance.messageId) {
      _writer.writeString(1, _instance.messageId);
    }
    if (_instance.senderId) {
      _writer.writeString(2, _instance.senderId);
    }
    if (_instance.content) {
      _writer.writeString(3, _instance.content);
    }
    if (_instance.timestamp) {
      _writer.writeMessage(
        4,
        _instance.timestamp as any,
        googleProtobuf000.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.attachments && _instance.attachments.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.attachments as any,
        Message.Attachment.serializeBinaryToWriter
      );
    }
  }

  private _messageId: string;
  private _senderId: string;
  private _content: string;
  private _timestamp?: googleProtobuf000.Timestamp;
  private _attachments?: Message.Attachment[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Message to deeply clone from
   */
  constructor(_value?: RecursivePartial<Message.AsObject>) {
    _value = _value || {};
    this.messageId = _value.messageId;
    this.senderId = _value.senderId;
    this.content = _value.content;
    this.timestamp = _value.timestamp
      ? new googleProtobuf000.Timestamp(_value.timestamp)
      : undefined;
    this.attachments = (_value.attachments || []).map(
      m => new Message.Attachment(m)
    );
    Message.refineValues(this);
  }
  get messageId(): string {
    return this._messageId;
  }
  set messageId(value: string) {
    this._messageId = value;
  }
  get senderId(): string {
    return this._senderId;
  }
  set senderId(value: string) {
    this._senderId = value;
  }
  get content(): string {
    return this._content;
  }
  set content(value: string) {
    this._content = value;
  }
  get timestamp(): googleProtobuf000.Timestamp | undefined {
    return this._timestamp;
  }
  set timestamp(value: googleProtobuf000.Timestamp | undefined) {
    this._timestamp = value;
  }
  get attachments(): Message.Attachment[] | undefined {
    return this._attachments;
  }
  set attachments(value: Message.Attachment[] | undefined) {
    this._attachments = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Message.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Message.AsObject {
    return {
      messageId: this.messageId,
      senderId: this.senderId,
      content: this.content,
      timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
      attachments: (this.attachments || []).map(m => m.toObject())
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
  ): Message.AsProtobufJSON {
    return {
      messageId: this.messageId,
      senderId: this.senderId,
      content: this.content,
      timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
      attachments: (this.attachments || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module Message {
  /**
   * Standard JavaScript object representation for Message
   */
  export interface AsObject {
    messageId: string;
    senderId: string;
    content: string;
    timestamp?: googleProtobuf000.Timestamp.AsObject;
    attachments?: Message.Attachment.AsObject[];
  }

  /**
   * Protobuf JSON representation for Message
   */
  export interface AsProtobufJSON {
    messageId: string;
    senderId: string;
    content: string;
    timestamp: googleProtobuf000.Timestamp.AsProtobufJSON | null;
    attachments: Message.Attachment.AsProtobufJSON[] | null;
  }

  /**
   * Message implementation for chat.core.v1.Message.Attachment
   */
  export class Attachment implements GrpcMessage {
    static id = 'chat.core.v1.Message.Attachment';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Attachment();
      Attachment.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Attachment) {
      _instance.attachmentId = _instance.attachmentId || '';
      _instance.fileName = _instance.fileName || '';
      _instance.fileType = _instance.fileType || '';
      _instance.fileData = _instance.fileData || new Uint8Array();
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: Attachment,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.attachmentId = _reader.readString();
            break;
          case 2:
            _instance.fileName = _reader.readString();
            break;
          case 3:
            _instance.fileType = _reader.readString();
            break;
          case 4:
            _instance.fileData = _reader.readBytes();
            break;
          default:
            _reader.skipField();
        }
      }

      Attachment.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: Attachment,
      _writer: BinaryWriter
    ) {
      if (_instance.attachmentId) {
        _writer.writeString(1, _instance.attachmentId);
      }
      if (_instance.fileName) {
        _writer.writeString(2, _instance.fileName);
      }
      if (_instance.fileType) {
        _writer.writeString(3, _instance.fileType);
      }
      if (_instance.fileData && _instance.fileData.length) {
        _writer.writeBytes(4, _instance.fileData);
      }
    }

    private _attachmentId: string;
    private _fileName: string;
    private _fileType: string;
    private _fileData: Uint8Array;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Attachment to deeply clone from
     */
    constructor(_value?: RecursivePartial<Attachment.AsObject>) {
      _value = _value || {};
      this.attachmentId = _value.attachmentId;
      this.fileName = _value.fileName;
      this.fileType = _value.fileType;
      this.fileData = _value.fileData;
      Attachment.refineValues(this);
    }
    get attachmentId(): string {
      return this._attachmentId;
    }
    set attachmentId(value: string) {
      this._attachmentId = value;
    }
    get fileName(): string {
      return this._fileName;
    }
    set fileName(value: string) {
      this._fileName = value;
    }
    get fileType(): string {
      return this._fileType;
    }
    set fileType(value: string) {
      this._fileType = value;
    }
    get fileData(): Uint8Array {
      return this._fileData;
    }
    set fileData(value: Uint8Array) {
      this._fileData = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Attachment.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Attachment.AsObject {
      return {
        attachmentId: this.attachmentId,
        fileName: this.fileName,
        fileType: this.fileType,
        fileData: this.fileData ? this.fileData.subarray(0) : new Uint8Array()
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
    ): Attachment.AsProtobufJSON {
      return {
        attachmentId: this.attachmentId,
        fileName: this.fileName,
        fileType: this.fileType,
        fileData: this.fileData ? uint8ArrayToBase64(this.fileData) : ''
      };
    }
  }
  export module Attachment {
    /**
     * Standard JavaScript object representation for Attachment
     */
    export interface AsObject {
      attachmentId: string;
      fileName: string;
      fileType: string;
      fileData: Uint8Array;
    }

    /**
     * Protobuf JSON representation for Attachment
     */
    export interface AsProtobufJSON {
      attachmentId: string;
      fileName: string;
      fileType: string;
      fileData: string;
    }
  }
}
