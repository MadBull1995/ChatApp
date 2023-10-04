// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: chat/core/v1/message.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace ChatApp {

  /// <summary>Holder for reflection information generated from chat/core/v1/message.proto</summary>
  public static partial class MessageReflection {

    #region Descriptor
    /// <summary>File descriptor for chat/core/v1/message.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static MessageReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChpjaGF0L2NvcmUvdjEvbWVzc2FnZS5wcm90bxIMY2hhdC5jb3JlLnYxGh9n",
            "b29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvIoUCCgdNZXNzYWdlEhIK",
            "Cm1lc3NhZ2VfaWQYASABKAkSEQoJc2VuZGVyX2lkGAIgASgJEg8KB2NvbnRl",
            "bnQYAyABKAkSLQoJdGltZXN0YW1wGAQgASgLMhouZ29vZ2xlLnByb3RvYnVm",
            "LlRpbWVzdGFtcBI1CgthdHRhY2htZW50cxgFIAMoCzIgLmNoYXQuY29yZS52",
            "MS5NZXNzYWdlLkF0dGFjaG1lbnQaXAoKQXR0YWNobWVudBIVCg1hdHRhY2ht",
            "ZW50X2lkGAEgASgJEhEKCWZpbGVfbmFtZRgCIAEoCRIRCglmaWxlX3R5cGUY",
            "AyABKAkSEQoJZmlsZV9kYXRhGAQgASgMQgqqAgdDaGF0QXBwYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::ChatApp.Message), global::ChatApp.Message.Parser, new[]{ "MessageId", "SenderId", "Content", "Timestamp", "Attachments" }, null, null, null, new pbr::GeneratedClrTypeInfo[] { new pbr::GeneratedClrTypeInfo(typeof(global::ChatApp.Message.Types.Attachment), global::ChatApp.Message.Types.Attachment.Parser, new[]{ "AttachmentId", "FileName", "FileType", "FileData" }, null, null, null, null)})
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Message entity represents individual chat messages.
  /// </summary>
  public sealed partial class Message : pb::IMessage<Message>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Message> _parser = new pb::MessageParser<Message>(() => new Message());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Message> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::ChatApp.MessageReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Message() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Message(Message other) : this() {
      messageId_ = other.messageId_;
      senderId_ = other.senderId_;
      content_ = other.content_;
      timestamp_ = other.timestamp_ != null ? other.timestamp_.Clone() : null;
      attachments_ = other.attachments_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Message Clone() {
      return new Message(this);
    }

    /// <summary>Field number for the "message_id" field.</summary>
    public const int MessageIdFieldNumber = 1;
    private string messageId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string MessageId {
      get { return messageId_; }
      set {
        messageId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "sender_id" field.</summary>
    public const int SenderIdFieldNumber = 2;
    private string senderId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string SenderId {
      get { return senderId_; }
      set {
        senderId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "content" field.</summary>
    public const int ContentFieldNumber = 3;
    private string content_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string Content {
      get { return content_; }
      set {
        content_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "timestamp" field.</summary>
    public const int TimestampFieldNumber = 4;
    private global::Google.Protobuf.WellKnownTypes.Timestamp timestamp_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public global::Google.Protobuf.WellKnownTypes.Timestamp Timestamp {
      get { return timestamp_; }
      set {
        timestamp_ = value;
      }
    }

    /// <summary>Field number for the "attachments" field.</summary>
    public const int AttachmentsFieldNumber = 5;
    private static readonly pb::FieldCodec<global::ChatApp.Message.Types.Attachment> _repeated_attachments_codec
        = pb::FieldCodec.ForMessage(42, global::ChatApp.Message.Types.Attachment.Parser);
    private readonly pbc::RepeatedField<global::ChatApp.Message.Types.Attachment> attachments_ = new pbc::RepeatedField<global::ChatApp.Message.Types.Attachment>();
    /// <summary>
    /// URLs or references to message attachments
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::ChatApp.Message.Types.Attachment> Attachments {
      get { return attachments_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Message);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Message other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (MessageId != other.MessageId) return false;
      if (SenderId != other.SenderId) return false;
      if (Content != other.Content) return false;
      if (!object.Equals(Timestamp, other.Timestamp)) return false;
      if(!attachments_.Equals(other.attachments_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (MessageId.Length != 0) hash ^= MessageId.GetHashCode();
      if (SenderId.Length != 0) hash ^= SenderId.GetHashCode();
      if (Content.Length != 0) hash ^= Content.GetHashCode();
      if (timestamp_ != null) hash ^= Timestamp.GetHashCode();
      hash ^= attachments_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (MessageId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(MessageId);
      }
      if (SenderId.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(SenderId);
      }
      if (Content.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Content);
      }
      if (timestamp_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(Timestamp);
      }
      attachments_.WriteTo(output, _repeated_attachments_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (MessageId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(MessageId);
      }
      if (SenderId.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(SenderId);
      }
      if (Content.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(Content);
      }
      if (timestamp_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(Timestamp);
      }
      attachments_.WriteTo(ref output, _repeated_attachments_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (MessageId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(MessageId);
      }
      if (SenderId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(SenderId);
      }
      if (Content.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Content);
      }
      if (timestamp_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Timestamp);
      }
      size += attachments_.CalculateSize(_repeated_attachments_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Message other) {
      if (other == null) {
        return;
      }
      if (other.MessageId.Length != 0) {
        MessageId = other.MessageId;
      }
      if (other.SenderId.Length != 0) {
        SenderId = other.SenderId;
      }
      if (other.Content.Length != 0) {
        Content = other.Content;
      }
      if (other.timestamp_ != null) {
        if (timestamp_ == null) {
          Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        Timestamp.MergeFrom(other.Timestamp);
      }
      attachments_.Add(other.attachments_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            MessageId = input.ReadString();
            break;
          }
          case 18: {
            SenderId = input.ReadString();
            break;
          }
          case 26: {
            Content = input.ReadString();
            break;
          }
          case 34: {
            if (timestamp_ == null) {
              Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(Timestamp);
            break;
          }
          case 42: {
            attachments_.AddEntriesFrom(input, _repeated_attachments_codec);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            MessageId = input.ReadString();
            break;
          }
          case 18: {
            SenderId = input.ReadString();
            break;
          }
          case 26: {
            Content = input.ReadString();
            break;
          }
          case 34: {
            if (timestamp_ == null) {
              Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(Timestamp);
            break;
          }
          case 42: {
            attachments_.AddEntriesFrom(ref input, _repeated_attachments_codec);
            break;
          }
        }
      }
    }
    #endif

    #region Nested types
    /// <summary>Container for nested types declared in the Message message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static partial class Types {
      /// <summary>
      /// Attachment entity represents file attachments in messages.
      /// </summary>
      public sealed partial class Attachment : pb::IMessage<Attachment>
      #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
          , pb::IBufferMessage
      #endif
      {
        private static readonly pb::MessageParser<Attachment> _parser = new pb::MessageParser<Attachment>(() => new Attachment());
        private pb::UnknownFieldSet _unknownFields;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public static pb::MessageParser<Attachment> Parser { get { return _parser; } }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public static pbr::MessageDescriptor Descriptor {
          get { return global::ChatApp.Message.Descriptor.NestedTypes[0]; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        pbr::MessageDescriptor pb::IMessage.Descriptor {
          get { return Descriptor; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public Attachment() {
          OnConstruction();
        }

        partial void OnConstruction();

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public Attachment(Attachment other) : this() {
          attachmentId_ = other.attachmentId_;
          fileName_ = other.fileName_;
          fileType_ = other.fileType_;
          fileData_ = other.fileData_;
          _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public Attachment Clone() {
          return new Attachment(this);
        }

        /// <summary>Field number for the "attachment_id" field.</summary>
        public const int AttachmentIdFieldNumber = 1;
        private string attachmentId_ = "";
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public string AttachmentId {
          get { return attachmentId_; }
          set {
            attachmentId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "file_name" field.</summary>
        public const int FileNameFieldNumber = 2;
        private string fileName_ = "";
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public string FileName {
          get { return fileName_; }
          set {
            fileName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "file_type" field.</summary>
        public const int FileTypeFieldNumber = 3;
        private string fileType_ = "";
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public string FileType {
          get { return fileType_; }
          set {
            fileType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "file_data" field.</summary>
        public const int FileDataFieldNumber = 4;
        private pb::ByteString fileData_ = pb::ByteString.Empty;
        /// <summary>
        /// Binary data of the attachment
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public pb::ByteString FileData {
          get { return fileData_; }
          set {
            fileData_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public override bool Equals(object other) {
          return Equals(other as Attachment);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public bool Equals(Attachment other) {
          if (ReferenceEquals(other, null)) {
            return false;
          }
          if (ReferenceEquals(other, this)) {
            return true;
          }
          if (AttachmentId != other.AttachmentId) return false;
          if (FileName != other.FileName) return false;
          if (FileType != other.FileType) return false;
          if (FileData != other.FileData) return false;
          return Equals(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public override int GetHashCode() {
          int hash = 1;
          if (AttachmentId.Length != 0) hash ^= AttachmentId.GetHashCode();
          if (FileName.Length != 0) hash ^= FileName.GetHashCode();
          if (FileType.Length != 0) hash ^= FileType.GetHashCode();
          if (FileData.Length != 0) hash ^= FileData.GetHashCode();
          if (_unknownFields != null) {
            hash ^= _unknownFields.GetHashCode();
          }
          return hash;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public override string ToString() {
          return pb::JsonFormatter.ToDiagnosticString(this);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public void WriteTo(pb::CodedOutputStream output) {
        #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
          output.WriteRawMessage(this);
        #else
          if (AttachmentId.Length != 0) {
            output.WriteRawTag(10);
            output.WriteString(AttachmentId);
          }
          if (FileName.Length != 0) {
            output.WriteRawTag(18);
            output.WriteString(FileName);
          }
          if (FileType.Length != 0) {
            output.WriteRawTag(26);
            output.WriteString(FileType);
          }
          if (FileData.Length != 0) {
            output.WriteRawTag(34);
            output.WriteBytes(FileData);
          }
          if (_unknownFields != null) {
            _unknownFields.WriteTo(output);
          }
        #endif
        }

        #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
          if (AttachmentId.Length != 0) {
            output.WriteRawTag(10);
            output.WriteString(AttachmentId);
          }
          if (FileName.Length != 0) {
            output.WriteRawTag(18);
            output.WriteString(FileName);
          }
          if (FileType.Length != 0) {
            output.WriteRawTag(26);
            output.WriteString(FileType);
          }
          if (FileData.Length != 0) {
            output.WriteRawTag(34);
            output.WriteBytes(FileData);
          }
          if (_unknownFields != null) {
            _unknownFields.WriteTo(ref output);
          }
        }
        #endif

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public int CalculateSize() {
          int size = 0;
          if (AttachmentId.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(AttachmentId);
          }
          if (FileName.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(FileName);
          }
          if (FileType.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(FileType);
          }
          if (FileData.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeBytesSize(FileData);
          }
          if (_unknownFields != null) {
            size += _unknownFields.CalculateSize();
          }
          return size;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public void MergeFrom(Attachment other) {
          if (other == null) {
            return;
          }
          if (other.AttachmentId.Length != 0) {
            AttachmentId = other.AttachmentId;
          }
          if (other.FileName.Length != 0) {
            FileName = other.FileName;
          }
          if (other.FileType.Length != 0) {
            FileType = other.FileType;
          }
          if (other.FileData.Length != 0) {
            FileData = other.FileData;
          }
          _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public void MergeFrom(pb::CodedInputStream input) {
        #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
          input.ReadRawMessage(this);
        #else
          uint tag;
          while ((tag = input.ReadTag()) != 0) {
            switch(tag) {
              default:
                _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
                break;
              case 10: {
                AttachmentId = input.ReadString();
                break;
              }
              case 18: {
                FileName = input.ReadString();
                break;
              }
              case 26: {
                FileType = input.ReadString();
                break;
              }
              case 34: {
                FileData = input.ReadBytes();
                break;
              }
            }
          }
        #endif
        }

        #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
          uint tag;
          while ((tag = input.ReadTag()) != 0) {
            switch(tag) {
              default:
                _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
                break;
              case 10: {
                AttachmentId = input.ReadString();
                break;
              }
              case 18: {
                FileName = input.ReadString();
                break;
              }
              case 26: {
                FileType = input.ReadString();
                break;
              }
              case 34: {
                FileData = input.ReadBytes();
                break;
              }
            }
          }
        }
        #endif

      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code