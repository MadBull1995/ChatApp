# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: chat/core/v1/group.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from chat.core.v1 import user_pb2 as chat_dot_core_dot_v1_dot_user__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18\x63hat/core/v1/group.proto\x12\x0c\x63hat.core.v1\x1a\x17\x63hat/core/v1/user.proto\"i\n\x05Group\x12\x10\n\x08group_id\x18\x01 \x01(\t\x12\x12\n\ngroup_name\x18\x02 \x01(\t\x12\x15\n\radmin_user_id\x18\x03 \x01(\t\x12#\n\x07members\x18\x04 \x03(\x0b\x32\x12.chat.core.v1.UserB\n\xaa\x02\x07\x43hatAppb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'chat.core.v1.group_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\252\002\007ChatApp'
  _globals['_GROUP']._serialized_start=67
  _globals['_GROUP']._serialized_end=172
# @@protoc_insertion_point(module_scope)
