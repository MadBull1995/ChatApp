// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: chat/core/v1/group.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021, 8981
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace ChatApp {

  /// <summary>Holder for reflection information generated from chat/core/v1/group.proto</summary>
  public static partial class GroupReflection {

    #region Descriptor
    /// <summary>File descriptor for chat/core/v1/group.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static GroupReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChhjaGF0L2NvcmUvdjEvZ3JvdXAucHJvdG8SDGNoYXQuY29yZS52MRoXY2hh",
            "dC9jb3JlL3YxL3VzZXIucHJvdG8iaQoFR3JvdXASEAoIZ3JvdXBfaWQYASAB",
            "KAkSEgoKZ3JvdXBfbmFtZRgCIAEoCRIVCg1hZG1pbl91c2VyX2lkGAMgASgJ",
            "EiMKB21lbWJlcnMYBCADKAsyEi5jaGF0LmNvcmUudjEuVXNlckIKqgIHQ2hh",
            "dEFwcGIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::ChatApp.UserReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::ChatApp.Group), global::ChatApp.Group.Parser, new[]{ "GroupId", "GroupName", "AdminUserId", "Members" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// Group entity represents a group of users.
  /// </summary>
  public sealed partial class Group : pb::IMessage<Group>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Group> _parser = new pb::MessageParser<Group>(() => new Group());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Group> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::ChatApp.GroupReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Group() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Group(Group other) : this() {
      groupId_ = other.groupId_;
      groupName_ = other.groupName_;
      adminUserId_ = other.adminUserId_;
      members_ = other.members_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Group Clone() {
      return new Group(this);
    }

    /// <summary>Field number for the "group_id" field.</summary>
    public const int GroupIdFieldNumber = 1;
    private string groupId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string GroupId {
      get { return groupId_; }
      set {
        groupId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "group_name" field.</summary>
    public const int GroupNameFieldNumber = 2;
    private string groupName_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string GroupName {
      get { return groupName_; }
      set {
        groupName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "admin_user_id" field.</summary>
    public const int AdminUserIdFieldNumber = 3;
    private string adminUserId_ = "";
    /// <summary>
    /// User ID of the group administrator
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public string AdminUserId {
      get { return adminUserId_; }
      set {
        adminUserId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "members" field.</summary>
    public const int MembersFieldNumber = 4;
    private static readonly pb::FieldCodec<global::ChatApp.User> _repeated_members_codec
        = pb::FieldCodec.ForMessage(34, global::ChatApp.User.Parser);
    private readonly pbc::RepeatedField<global::ChatApp.User> members_ = new pbc::RepeatedField<global::ChatApp.User>();
    /// <summary>
    /// Additional group properties can be added here.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::ChatApp.User> Members {
      get { return members_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Group);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Group other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (GroupId != other.GroupId) return false;
      if (GroupName != other.GroupName) return false;
      if (AdminUserId != other.AdminUserId) return false;
      if(!members_.Equals(other.members_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      if (GroupId.Length != 0) hash ^= GroupId.GetHashCode();
      if (GroupName.Length != 0) hash ^= GroupName.GetHashCode();
      if (AdminUserId.Length != 0) hash ^= AdminUserId.GetHashCode();
      hash ^= members_.GetHashCode();
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
      if (GroupId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(GroupId);
      }
      if (GroupName.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(GroupName);
      }
      if (AdminUserId.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(AdminUserId);
      }
      members_.WriteTo(output, _repeated_members_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (GroupId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(GroupId);
      }
      if (GroupName.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(GroupName);
      }
      if (AdminUserId.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(AdminUserId);
      }
      members_.WriteTo(ref output, _repeated_members_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      if (GroupId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(GroupId);
      }
      if (GroupName.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(GroupName);
      }
      if (AdminUserId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(AdminUserId);
      }
      size += members_.CalculateSize(_repeated_members_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Group other) {
      if (other == null) {
        return;
      }
      if (other.GroupId.Length != 0) {
        GroupId = other.GroupId;
      }
      if (other.GroupName.Length != 0) {
        GroupName = other.GroupName;
      }
      if (other.AdminUserId.Length != 0) {
        AdminUserId = other.AdminUserId;
      }
      members_.Add(other.members_);
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
            GroupId = input.ReadString();
            break;
          }
          case 18: {
            GroupName = input.ReadString();
            break;
          }
          case 26: {
            AdminUserId = input.ReadString();
            break;
          }
          case 34: {
            members_.AddEntriesFrom(input, _repeated_members_codec);
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
            GroupId = input.ReadString();
            break;
          }
          case 18: {
            GroupName = input.ReadString();
            break;
          }
          case 26: {
            AdminUserId = input.ReadString();
            break;
          }
          case 34: {
            members_.AddEntriesFrom(ref input, _repeated_members_codec);
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
