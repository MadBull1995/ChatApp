from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Message(_message.Message):
    __slots__ = ["message_id", "sender_id", "content", "timestamp", "attachments"]
    class Attachment(_message.Message):
        __slots__ = ["attachment_id", "file_name", "file_type", "file_data"]
        ATTACHMENT_ID_FIELD_NUMBER: _ClassVar[int]
        FILE_NAME_FIELD_NUMBER: _ClassVar[int]
        FILE_TYPE_FIELD_NUMBER: _ClassVar[int]
        FILE_DATA_FIELD_NUMBER: _ClassVar[int]
        attachment_id: str
        file_name: str
        file_type: str
        file_data: bytes
        def __init__(self, attachment_id: _Optional[str] = ..., file_name: _Optional[str] = ..., file_type: _Optional[str] = ..., file_data: _Optional[bytes] = ...) -> None: ...
    MESSAGE_ID_FIELD_NUMBER: _ClassVar[int]
    SENDER_ID_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
    message_id: str
    sender_id: str
    content: str
    timestamp: _timestamp_pb2.Timestamp
    attachments: _containers.RepeatedCompositeFieldContainer[Message.Attachment]
    def __init__(self, message_id: _Optional[str] = ..., sender_id: _Optional[str] = ..., content: _Optional[str] = ..., timestamp: _Optional[_Union[_timestamp_pb2.Timestamp, _Mapping]] = ..., attachments: _Optional[_Iterable[_Union[Message.Attachment, _Mapping]]] = ...) -> None: ...
