// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: chat/core/v1/chat.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace ChatApp {

  /// <summary>Holder for reflection information generated from chat/core/v1/chat.proto</summary>
  public static partial class ChatReflection {

    #region Descriptor
    /// <summary>File descriptor for chat/core/v1/chat.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ChatReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChdjaGF0L2NvcmUvdjEvY2hhdC5wcm90bxIMY2hhdC5jb3JlLnYxGhpjaGF0",
            "L2NvcmUvdjEvbWVzc2FnZS5wcm90byKAAQoEQ2hhdBIPCgdjaGF0X2lkGAEg",
            "ASgJEhEKCWNoYXRfbmFtZRgCIAEoCRIVCg1pc19ncm91cF9jaGF0GAMgASgI",
            "EhQKDHBhcnRpY2lwYW50cxgEIAMoCRInCghtZXNzYWdlcxgFIAMoCzIVLmNo",
            "YXQuY29yZS52MS5NZXNzYWdlQgqqAgdDaGF0QXBwYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::ChatApp.MessageReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::ChatApp.Chat), global::ChatApp.Chat.Parser, new[]{ "ChatId", "ChatName", "IsGroupChat", "Participants", "Messages" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Chat entity represents both one-on-one and group chats.
  /// </summary>
  public sealed partial class Chat : pb::IMessage<Chat>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Chat> _parser = new pb::MessageParser<Chat>(() => new Chat());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Chat> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::ChatApp.ChatReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Chat() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Chat(Chat other) : this() {
      chatId_ = other.chatId_;
      chatName_ = other.chatName_;
      isGroupChat_ = other.isGroupChat_;
      participants_ = other.participants_.Clone();
      messages_ = other.messages_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Chat Clone() {
      return new Chat(this);
    }

    /// <summary>Field number for the "chat_id" field.</summary>
    public const int ChatIdFieldNumber = 1;
    private string chatId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string ChatId {
      get { return chatId_; }
      set {
        chatId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "chat_name" field.</summary>
    public const int ChatNameFieldNumber = 2;
    private string chatName_ = "";
    /// <summary>
    /// Display name for group chats
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string ChatName {
      get { return chatName_; }
      set {
        chatName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "is_group_chat" field.</summary>
    public const int IsGroupChatFieldNumber = 3;
    private bool isGroupChat_;
    /// <summary>
    /// Indicates whether it's a group chat
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool IsGroupChat {
      get { return isGroupChat_; }
      set {
        isGroupChat_ = value;
      }
    }

    /// <summary>Field number for the "participants" field.</summary>
    public const int ParticipantsFieldNumber = 4;
    private static readonly pb::FieldCodec<string> _repeated_participants_codec
        = pb::FieldCodec.ForString(34);
    private readonly pbc::RepeatedField<string> participants_ = new pbc::RepeatedField<string>();
    /// <summary>
    /// User IDs of participants
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<string> Participants {
      get { return participants_; }
    }

    /// <summary>Field number for the "messages" field.</summary>
    public const int MessagesFieldNumber = 5;
    private static readonly pb::FieldCodec<global::ChatApp.Message> _repeated_messages_codec
        = pb::FieldCodec.ForMessage(42, global::ChatApp.Message.Parser);
    private readonly pbc::RepeatedField<global::ChatApp.Message> messages_ = new pbc::RepeatedField<global::ChatApp.Message>();
    /// <summary>
    /// List of messages in the chat
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::ChatApp.Message> Messages {
      get { return messages_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Chat);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Chat other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ChatId != other.ChatId) return false;
      if (ChatName != other.ChatName) return false;
      if (IsGroupChat != other.IsGroupChat) return false;
      if(!participants_.Equals(other.participants_)) return false;
      if(!messages_.Equals(other.messages_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (ChatId.Length != 0) hash ^= ChatId.GetHashCode();
      if (ChatName.Length != 0) hash ^= ChatName.GetHashCode();
      if (IsGroupChat != false) hash ^= IsGroupChat.GetHashCode();
      hash ^= participants_.GetHashCode();
      hash ^= messages_.GetHashCode();
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
      if (ChatId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ChatId);
      }
      if (ChatName.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(ChatName);
      }
      if (IsGroupChat != false) {
        output.WriteRawTag(24);
        output.WriteBool(IsGroupChat);
      }
      participants_.WriteTo(output, _repeated_participants_codec);
      messages_.WriteTo(output, _repeated_messages_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (ChatId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ChatId);
      }
      if (ChatName.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(ChatName);
      }
      if (IsGroupChat != false) {
        output.WriteRawTag(24);
        output.WriteBool(IsGroupChat);
      }
      participants_.WriteTo(ref output, _repeated_participants_codec);
      messages_.WriteTo(ref output, _repeated_messages_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (ChatId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ChatId);
      }
      if (ChatName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ChatName);
      }
      if (IsGroupChat != false) {
        size += 1 + 1;
      }
      size += participants_.CalculateSize(_repeated_participants_codec);
      size += messages_.CalculateSize(_repeated_messages_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Chat other) {
      if (other == null) {
        return;
      }
      if (other.ChatId.Length != 0) {
        ChatId = other.ChatId;
      }
      if (other.ChatName.Length != 0) {
        ChatName = other.ChatName;
      }
      if (other.IsGroupChat != false) {
        IsGroupChat = other.IsGroupChat;
      }
      participants_.Add(other.participants_);
      messages_.Add(other.messages_);
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
            ChatId = input.ReadString();
            break;
          }
          case 18: {
            ChatName = input.ReadString();
            break;
          }
          case 24: {
            IsGroupChat = input.ReadBool();
            break;
          }
          case 34: {
            participants_.AddEntriesFrom(input, _repeated_participants_codec);
            break;
          }
          case 42: {
            messages_.AddEntriesFrom(input, _repeated_messages_codec);
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
            ChatId = input.ReadString();
            break;
          }
          case 18: {
            ChatName = input.ReadString();
            break;
          }
          case 24: {
            IsGroupChat = input.ReadBool();
            break;
          }
          case 34: {
            participants_.AddEntriesFrom(ref input, _repeated_participants_codec);
            break;
          }
          case 42: {
            messages_.AddEntriesFrom(ref input, _repeated_messages_codec);
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code