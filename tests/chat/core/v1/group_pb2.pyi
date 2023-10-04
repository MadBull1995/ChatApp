from chat.core.v1 import user_pb2 as _user_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Group(_message.Message):
    __slots__ = ["group_id", "group_name", "admin_user_id", "members"]
    GROUP_ID_FIELD_NUMBER: _ClassVar[int]
    GROUP_NAME_FIELD_NUMBER: _ClassVar[int]
    ADMIN_USER_ID_FIELD_NUMBER: _ClassVar[int]
    MEMBERS_FIELD_NUMBER: _ClassVar[int]
    group_id: str
    group_name: str
    admin_user_id: str
    members: _containers.RepeatedCompositeFieldContainer[_user_pb2.User]
    def __init__(self, group_id: _Optional[str] = ..., group_name: _Optional[str] = ..., admin_user_id: _Optional[str] = ..., members: _Optional[_Iterable[_Union[_user_pb2.User, _Mapping]]] = ...) -> None: ...
