import grpc
from chat.services.v1 import chatter_pb2_grpc, \
    chatter_pb2, \
    users_pb2_grpc, \
    users_pb2
from chat.core.v1 import message_pb2, user_pb2

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiQ2lRNU4yUmpORFJoTlMwMFpUTXpMVFEyTVdRdE9XRmtOQzFsTm1JMU4yWmxNamt5TmpVU0NGTnZiV1ZVWlhOMEdnNTBaWE4wUUhSbGMzUXVkR1Z6ZEE9PSIsImV4cCI6MTY5ODE4NjkxMSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNoYXQuc2h1bWxpay5kZXYiLCJhdWQiOiJjaGF0LnNlcnZpY2VzLnYxIn0.pJTkAknEoUJVCk2RwB2TYdQBVTtPvKHePHIaqpFd8tg"

options = (
    # you can add as many headers as you want, each one needs to be formatted as valid
    # key: value pairs.

    # additional headers can be added with a newline
    ("grpc.http_connect_headers", f"Authorization: Bearer {token}"),
)

channel = grpc.insecure_channel("localhost:9000", options)
users = users_pb2_grpc.UsersStub(channel)
chatter = chatter_pb2_grpc.ChatterStub(channel)
password = "test"
"""Create user"""
user = user_pb2.User(
    email="test@test.test",
    display_name="Test User",
    username="SomeTest",
)
# new_user = users.SignUp(users_pb2.SignUpRequest(
#     email=user.email,
#     password=password,
#     username=user.username
# ))

# print(new_user)

# """Login a user"""
# logged_in = users.Login(users_pb2.LoginRequest(
#     email=user.email,
#     password=password,
# ))

# print(logged_in)

"""Send message"""

# msg = message_pb2.Message(
#     sender_id='3d3fbd61-863e-44e2-9fbe-d6a62e51a70d',
#     attachments=[],
#     content='hello world'
# )
# req = chatter_pb2.SendMessageRequest(
#     message=msg,
#     room_id='2'
# )
# chatter.SendMessage(req)

"""Listen to messages"""

listen_req = chatter_pb2.GetMessagesRequest(
    user_id="97dc44a5-4e33-461d-9ad4-e6b57fe29265"
)

for msg in chatter.GetMessages(
    listen_req,
    metadata=(('authorization',f'Bearer {token}'),)
):
    print(msg)