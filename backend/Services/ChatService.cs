using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;

using Grpc.Core;
using ChatApp;
using ChatApp.Data;

namespace ChatApp.Services;

public class ChatService : Chatter.ChatterBase
{
    private static ConcurrentDictionary<string, IServerStreamWriter<SendMessageRequest>> userStreams = new ConcurrentDictionary<string, IServerStreamWriter<SendMessageRequest>>();
    private readonly ILogger _logger;
    private readonly UserRepository _userRepository;

    public ChatService(UserRepository userRepository, ILoggerFactory loggerFactory)
    {
        _logger = loggerFactory.CreateLogger<ChatService>();
        _userRepository = userRepository;
    }


    public override async Task<SendMessageResponse> SendMessage(SendMessageRequest request, ServerCallContext context)
    {
        _logger.LogInformation($"SendMessage: [{request.Message.MessageId}]");
        
        var userId = request.Message.SenderId;
        var sender = _userRepository.GetUser(userId);
        
        // Get the chat room
        var chatId = request.RoomId;
        // var chatRoom = _chatService.GetChatRoomById(chatId);

        if (sender != null)
        {
            if (request.RoomId != null) {
                _logger.LogInformation($"SendMessage: RoomId[{request.RoomId}]");
            } else {
                _logger.LogInformation($"SendMessage: Private[{request.RoomId}]");
            }

            var message = new Models.Message(sender, request.Message.Content);
            // TODO: Insert to DB

            // TODO: Validation and persistence logic here

            // Broadcast message to all connected clients
            foreach (var stream in userStreams.Values)
            {
                await stream.WriteAsync(request);
            }

            return new SendMessageResponse { Status = "Success" };
        }
        else
        {
            // You can use different status codes to indicate different types of errors.
            var status = new Status(StatusCode.InvalidArgument, $"An error occurred fetching User {userId}");

            // Optionally, you can also include additional error details.
            var metadata = new Metadata
            {
                {"error-details", "More details about the error"}
            };

            throw new RpcException(status, metadata);
        }
    }

}