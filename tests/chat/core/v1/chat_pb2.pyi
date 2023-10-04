from chat.core.v1 import message_pb2 as _message_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Chat(_message.Message):
    __slots__ = ["chat_id", "chat_name", "is_group_chat", "participants", "messages"]
    CHAT_ID_FIELD_NUMBER: _ClassVar[int]
    CHAT_NAME_FIELD_NUMBER: _ClassVar[int]
    IS_GROUP_CHAT_FIELD_NUMBER: _ClassVar[int]
    PARTICIPANTS_FIELD_NUMBER: _ClassVar[int]
    MESSAGES_FIELD_NUMBER: _ClassVar[int]
    chat_id: str
    chat_name: str
    is_group_chat: bool
    participants: _containers.RepeatedScalarFieldContainer[str]
    messages: _containers.RepeatedCompositeFieldContainer[_message_pb2.Message]
    def __init__(self, chat_id: _Optional[str] = ..., chat_name: _Optional[str] = ..., is_group_chat: bool = ..., participants: _Optional[_Iterable[str]] = ..., messages: _Optional[_Iterable[_Union[_message_pb2.Message, _Mapping]]] = ...) -> None: ...
