import grpc
from chat.services.v1 import chatter_pb2_grpc, \
    chatter_pb2, \
    users_pb2_grpc, \
    users_pb2
from chat.core.v1 import message_pb2, user_pb2
channel = grpc.insecure_channel("localhost:5248")
users = users_pb2_grpc.UsersStub(channel)
chatter = chatter_pb2_grpc.ChatterStub(channel)

# Create user
user = user_pb2.User(
    email="amit@sylk.build",
    display_name="Amit Shmulevitch",
    username="madbull1995",
)
new_user = users.SignUp(users_pb2.SignUpRequest(
    email=user.email,
    password="some-password",
    username=user.username
))

print(new_user)
# Send message

# msg = message_pb2.Message(
#     message_id='1',
#     sender_id='d946e832-756f-4d37-947b-06194a70217c',
#     attachments=[],
#     content='hello world'
# )
# req = chatter_pb2.SendMessageRequest(
#     message=msg,
#     room_id='2'
# )
# chatter.SendMessage(req)