using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;

using Grpc.Core;
using ChatApp;
using ChatApp.Data;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ChatApp.Services;

public class ChatService : Chatter.ChatterBase
{
    private static ConcurrentDictionary<string, (IServerStreamWriter<SendMessageRequest>, CancellationTokenSource)> userStreams = new ConcurrentDictionary<string, (IServerStreamWriter<SendMessageRequest>, CancellationTokenSource)>();
    private readonly ILogger _logger;
    private readonly UserRepository _userRepository;
    private readonly MessageRepository _messageRepository;
    private readonly ChatRepository _chatRepository;
    public ChatService(UserRepository userRepository, MessageRepository messageRepository, ChatRepository chatRepository, ILoggerFactory loggerFactory)
    {
        _logger = loggerFactory.CreateLogger<ChatService>();
        _userRepository = userRepository;
        _messageRepository = messageRepository;
        _chatRepository = chatRepository;
    }

    [Authorize]
    public override Task<Chat> CreateRoom(CreateRoomRequest request, ServerCallContext context)
    {
       
        string token = null;
        var authHeader = context.RequestHeaders.FirstOrDefault(h => h.Key == "authorization");
        if (authHeader != null)
        {
            var bearerToken = authHeader.Value;
            if (!string.IsNullOrEmpty(bearerToken) && bearerToken.StartsWith("Bearer ", StringComparison.OrdinalIgnoreCase))
            {
                token = bearerToken.Substring("Bearer ".Length);
            }
        }
        var handler = new JwtSecurityTokenHandler();
        JwtSecurityToken jwtToken = handler.ReadJwtToken(token);
        var currentUser = jwtToken.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.UserData)?.Value;
        _logger.LogInformation($"current user: {currentUser}");
        // Decode Base64 to bytes
        byte[] decodedByteArray = Convert.FromBase64String(currentUser);
    
        // Deserialize bytes to Protobuf message
        var chatMessage = User.Parser.ParseFrom(decodedByteArray);
        var c = new Chat{
            Participants = { request.UserId, chatMessage.UserId }
        };
        if (request.GroupOrChatCase == CreateRoomRequest.GroupOrChatOneofCase.Group)
        {
            // Handle creation for a group chat
            var group = request.Group;
            throw new RpcException(new Status(StatusCode.Unimplemented, $"Group Chat not available yet"));

        }
        else if (request.GroupOrChatCase == CreateRoomRequest.GroupOrChatOneofCase.UserId)
        {
            
            // Handle creation for a direct chat
            var userId = request.UserId;
            var user = _userRepository.GetUserById(userId);
            c.ChatName = user.UserName;
            c.ChatId = $"{chatMessage.UserId}:{request.UserId}";
            var msgs = _messageRepository.GetMessagesByChatId(c.ChatId);
            _logger.LogCritical($"Messages #: {msgs.Count}");
            c.Messages.AddRange(msgs);
        }
        
        c.IsGroupChat = request.GroupOrChatCase == CreateRoomRequest.GroupOrChatOneofCase.Group ? true : false ;
        _chatRepository.SaveChat(c);
        
        return Task.FromResult(c);
    }

    [Authorize]
    public override async Task ListChats(ListChatsRequest request, IServerStreamWriter<Chat> responseStream, ServerCallContext context)
    {
        _logger.LogInformation($"ListChats: [{request.UserId}]");

        CancellationTokenSource cts = new CancellationTokenSource();
        try
        {
            var user = _userRepository.GetUserById(request.UserId);
            if (user == null)
            {
                throw new RpcException(new Status(StatusCode.NotFound, $"User {request.UserId} not found"));
            }
            else
            {
                // Fetch the chats the user is part of.
                var chats = _chatRepository.GetChatsByUserId(request.UserId);
                foreach (var chat in chats)
                {
                    if (cts.Token.IsCancellationRequested)
                    {
                        break;
                    }

                    // Write each chat to the response stream.
                    await responseStream.WriteAsync(chat);
                }
            }
        }
        catch (RpcException ex)
        {
            throw ex;
        }
        catch (DataLayerException dataLayerEx)
        {
            var grpcStatus = dataLayerEx.ToGrpcStatusCode();
            var status = new Status(grpcStatus, $"An error occurred: {dataLayerEx.Message}");

            var metadata = new Metadata
            {
                {"error-details", "More details about the error"}
            };

            throw new RpcException(status, metadata);
        }
        catch (Exception ex)
        {
            // Handle other types of exceptions
            var status = new Status(StatusCode.Internal, $"An unexpected error occurred: {ex.Message}");

            var metadata = new Metadata
            {
                {"error-details", "More details about the error"}
            };

            throw new RpcException(status, metadata);
        }
    }

    [Authorize]
    public override async Task GetMessages(GetMessagesRequest request, IServerStreamWriter<SendMessageRequest> responseStream, ServerCallContext context)
    {
        CancellationTokenSource cts = new CancellationTokenSource();
        try
        {

            var user = _userRepository.GetUserById(request.UserId);
            if (user == null)
            {
                throw new RpcException(new Status(StatusCode.NotFound, $"User {request.UserId} not found"));
            }
            else
            {
                while (!context.CancellationToken.IsCancellationRequested && !cts.IsCancellationRequested)
                {
                    userStreams.TryAdd(request.UserId, (responseStream, cts));

                    // Keep the stream open
                    var tcs = new TaskCompletionSource<object>();
                    context.CancellationToken.Register(() => tcs.TrySetCanceled());
                    await tcs.Task;

                    userStreams.TryRemove(request.UserId, out _);
                }
            }
        }
        catch (RpcException ex)
        {
            throw ex;
        }
        catch (DataLayerException dataLayerEx)
        {
            var grpcStatus = dataLayerEx.ToGrpcStatusCode();
            var status = new Status(grpcStatus, $"An error occurred: {dataLayerEx.Message}");

            var metadata = new Metadata
            {
                {"error-details", "More details about the error"}
            };

            throw new RpcException(status, metadata);
        }
        catch (Exception ex)
        {
            // Handle other types of exceptions
            var status = new Status(StatusCode.Internal, $"An unexpected error occurred: {ex.Message}");

            var metadata = new Metadata
            {
                {"error-details", "More details about the error"}
            };

            throw new RpcException(status, metadata);
        }
        finally
        {
            // Remove from dictionary
            userStreams.TryRemove(request.UserId, out _);
        }
    }

    [Authorize]
    public override async Task<SendMessageResponse> SendMessage(SendMessageRequest request, ServerCallContext context)
    {
        _logger.LogInformation($"SendMessage: [{request.Message.MessageId}]");

        var userId = request.Message.SenderId;
        var sender = _userRepository.GetUserById(userId);
        _logger.LogInformation($"User: {sender}");
        // Get the chat room
        var chatId = request.RoomId;
        // var chatRoom = _chatService.GetChatRoomById(chatId);
        
        if (sender != null)
        {
            if (request.RoomId != null)
            {
                _logger.LogInformation($"SendMessage: RoomId[{request.RoomId}]");
            }
            else
            {
                _logger.LogInformation($"SendMessage: Private[{request.RoomId}]");
            }

            var message = new Models.Message(sender, request.Message.Content, chatId);
            // TODO: Insert to DB
            if (!_messageRepository.SaveMessage(message))
            {
                // You can use different status codes to indicate different types of errors.
                var status = new Status(StatusCode.NotFound, $"An error occurred while saving Message");

                // Optionally, you can also include additional error details.
                var metadata = new Metadata
                {
                    {"error-details", "More details about the error"}
                };

                throw new RpcException(status, metadata);
            };

            // TODO: Validation and persistence logic here

            // Broadcast message to all connected clients
            foreach (var stream in userStreams.Values)
            {
                await stream.Item1.WriteAsync(request);
            }

            return new SendMessageResponse { Status = "Success" };
        }
        else
        {
            // You can use different status codes to indicate different types of errors.
            var status = new Status(StatusCode.NotFound, $"An error occurred fetching User {userId}");

            // Optionally, you can also include additional error details.
            var metadata = new Metadata
            {
                {"error-details", "More details about the error"}
            };

            throw new RpcException(status, metadata);
        }
    }

    public static void CloseAllStreams()
    {
        foreach (var entry in userStreams.Values)
        {
            // Trigger the CancellationToken to cancel the call.
            entry.Item2.Cancel();
        }
    }

}